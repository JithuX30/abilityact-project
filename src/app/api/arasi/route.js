import { NextResponse } from "next/server";
import { Pinecone } from "@pinecone-database/pinecone";
import Anthropic from "@anthropic-ai/sdk";

// Module-level singletons — instantiated once per serverless instance
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index("abilityact-advice", process.env.PINECONE_INDEX_HOST);
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const FIELDS_TO_RETURN = [
  "text",
  "topic",
  "topicSlug",
  "articleTitle",
  "articleSlug",
  "url",
  "chunkType",
];

export async function POST(request) {
  // ── 1. Parse and validate input ─────────────────────────────────────────
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Request body must be valid JSON." },
      { status: 400 }
    );
  }

  const { message, history } = body ?? {};

  if (!message || typeof message !== "string" || message.trim() === "") {
    return NextResponse.json(
      { error: "A non-empty 'message' field is required." },
      { status: 400 }
    );
  }

  // Accept only well-formed history items; silently drop malformed ones
  const safeHistory = Array.isArray(history)
    ? history
        .filter(
          (m) =>
            m &&
            (m.role === "user" || m.role === "assistant") &&
            typeof m.content === "string" &&
            m.content.trim() !== ""
        )
        .map(({ role, content }) => ({ role, content: content.trim() }))
    : [];

  const question = message.trim();

  try {
    // ── 2. Search Pinecone (integrated embedding — no manual embed needed) ─
    const searchResponse = await index.namespace("").searchRecords({
      query: {
        inputs: { text: question },
        topK: 5,
      },
      fields: FIELDS_TO_RETURN,
    });

    const hits = searchResponse?.result?.hits ?? [];

    // ── 3. Build context string from retrieved chunks ────────────────────
    const contextBlocks = hits.map((hit, i) => {
      const { text, topic, articleTitle, url } = hit.fields ?? {};
      const sourceLabel = articleTitle
        ? `${topic} — ${articleTitle}`
        : topic ?? "AbilityAction advice";
      return `[${i + 1}] Source: ${sourceLabel}\nURL: ${url ?? ""}\n\n${text ?? ""}`;
    });

    const contextString =
      contextBlocks.length > 0
        ? contextBlocks.join("\n\n---\n\n")
        : "No relevant context found for this question.";

    // ── 4. System prompt ─────────────────────────────────────────────────
    const systemPrompt = `You are Arasi, a helpful and friendly assistant for AbilityAction CIC — a UK community interest company that supports disabled people and those with long-term health conditions with benefits advice, employment support, sign language services, housing guidance, and more.

IMPORTANT RULES:
- Answer using ONLY the context provided below. Do not draw on any outside knowledge.
- If the question is not covered by the context, say warmly and clearly that you don't have that specific information, and direct the user to contact AbilityAction directly:
    - Phone: 07933 212547
    - Email: info@abilityact.com
    - Contact page: /contact
- Keep responses warm, clear, and concise. This is general guidance for members of the public, not formal legal advice — note this where relevant.
- Do not fabricate facts, statistics, or specific legal citations not present in the context.
- When you reference a guide or article, mention you can link them to the full page.

--- CONTEXT ---
${contextString}
--- END CONTEXT ---`;

    // ── 5. Call Claude ───────────────────────────────────────────────────
    const claudeResponse = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      system: systemPrompt,
      messages: [
        ...safeHistory,
        { role: "user", content: question },
      ],
    });

    const reply =
      claudeResponse.content?.[0]?.text ??
      "I'm sorry, I wasn't able to generate a response. Please contact AbilityAction directly on 07933 212547 or info@abilityact.com.";

    // ── 6. Build deduplicated sources list ───────────────────────────────
    // Only include article-level chunks (not topic intros), deduplicated by URL
    const seenUrls = new Set();
    const sources = hits
      .filter((hit) => {
        const { articleTitle, url } = hit.fields ?? {};
        if (!articleTitle || !url || seenUrls.has(url)) return false;
        seenUrls.add(url);
        return true;
      })
      .map((hit) => ({
        articleTitle: hit.fields.articleTitle,
        url: hit.fields.url,
      }));

    return NextResponse.json({ reply, sources });

  } catch (err) {
    console.error("[Arasi API] Error:", err?.message ?? err);
    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again or contact AbilityAction directly on 07933 212547 or info@abilityact.com.",
      },
      { status: 500 }
    );
  }
}
