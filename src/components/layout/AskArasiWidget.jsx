"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Minus, Send } from "lucide-react";

const QUICK_TOPICS = [
  { label: "Benefits",      question: "What benefits can I claim?" },
  { label: "Employment",    question: "How can you help me find work?" },
  { label: "Housing",       question: "What housing support do you offer?" },
  { label: "Your rights",   question: "What are my rights as a disabled person?" },
  { label: "Sign language", question: "What sign language services do you offer?" },
];

const WELCOME_TEXT =
  "Hi, I'm Arasi. I can help with questions about benefits, employment, housing, your rights, and our services. What would you like to know?";

const ERROR_TEXT =
  "Sorry, I'm having trouble right now. Please try again in a moment, or contact our team on 07933 212547 or info@abilityact.com.";

// ── Lightweight markdown renderer ──────────────────────────────────────────
// Handles **bold**, [text](url), and - bullet lists. No extra dependencies.

function parseInline(text, keyPrefix) {
  const result = [];
  const rx = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0, i = 0, m;
  while ((m = rx.exec(text)) !== null) {
    if (m.index > last) result.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      result.push(
        <strong key={`${keyPrefix}b${i}`} className="font-semibold">
          {m[1]}
        </strong>
      );
    } else {
      const href = m[3];
      const isExternal = href.startsWith("http");
      result.push(
        <a
          key={`${keyPrefix}l${i}`}
          href={href}
          className="text-[#6B4E9E] underline hover:no-underline"
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {m[2]}
        </a>
      );
    }
    last = rx.lastIndex;
    i++;
  }
  if (last < text.length) result.push(text.slice(last));
  return result;
}

function RenderMarkdown({ text }) {
  const blocks = text.split(/\n\n+/);
  return (
    <div className="space-y-1.5 text-sm text-[#1F1B2E] leading-relaxed">
      {blocks.map((block, bi) => {
        const lines = block.split("\n").filter((l) => l.trim());
        if (lines.length > 0 && lines.every((l) => l.trimStart().startsWith("- "))) {
          return (
            <ul key={bi} className="list-disc pl-4 space-y-0.5">
              {lines.map((l, li) => (
                <li key={li}>{parseInline(l.replace(/^\s*-\s+/, ""), `${bi}-${li}-`)}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={bi}>{parseInline(block.replace(/\n/g, " "), `${bi}-`)}</p>
        );
      })}
    </div>
  );
}

// ── Small sub-components ───────────────────────────────────────────────────

function ArasiAvatar() {
  return (
    <div
      aria-hidden="true"
      className="w-7 h-7 rounded-full bg-[#EDE6F7] flex items-center justify-center shrink-0 mt-0.5"
    >
      <MessageCircle size={13} className="text-[#6B4E9E]" />
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-start gap-2" role="status" aria-label="Arasi is typing">
      <ArasiAvatar />
      <div className="bg-[#F7F3FC] rounded-2xl rounded-tl-none px-4 py-3">
        <div className="flex gap-1.5 items-center h-4">
          {[0, 150, 300].map((delay) => (
            <span
              key={delay}
              className="w-1.5 h-1.5 rounded-full bg-[#6B4E9E] animate-bounce"
              style={{ animationDelay: `${delay}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main widget ────────────────────────────────────────────────────────────

export default function AskArasiWidget() {
  const [isOpen, setIsOpen]           = useState(false);
  const [isMinimised, setIsMinimised] = useState(false);
  const [inputValue, setInputValue]   = useState("");
  const [messages, setMessages]       = useState([]);
  const [isLoading, setIsLoading]     = useState(false);
  const [showChips, setShowChips]     = useState(true);

  const panelRef      = useRef(null);
  const inputRef      = useRef(null);
  const triggerRef    = useRef(null);
  const messagesEndRef = useRef(null);

  // Open via custom DOM event (used by OpenArasiButton and other components)
  useEffect(() => {
    const handler = () => { setIsOpen(true); setIsMinimised(false); };
    document.addEventListener("open-arasi-widget", handler);
    return () => document.removeEventListener("open-arasi-widget", handler);
  }, []);

  // Focus input when panel opens or unminimises
  useEffect(() => {
    if (isOpen && !isMinimised) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimised]);

  // Escape to close
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") { setIsOpen(false); triggerRef.current?.focus(); }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen]);

  // Scroll to bottom whenever messages change or typing indicator appears
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    setInputValue("");
    setShowChips(false);

    // Snapshot history BEFORE adding the new user message (this is what the
    // API receives as prior context — the current message is sent separately)
    const history = messages.slice(-10).map((m) => ({
      role: m.role === "user" ? "user" : "assistant",
      content: m.text,
    }));

    setMessages((prev) => [
      ...prev,
      { id: `u-${Date.now()}`, role: "user", text: trimmed },
    ]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/arasi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed");

      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          role: "arasi",
          text: data.reply ?? ERROR_TEXT,
          sources: Array.isArray(data.sources) ? data.sources : [],
        },
      ]);
    } catch (err) {
      console.error("[AskArasi]", err?.message ?? err);
      setMessages((prev) => [
        ...prev,
        { id: `e-${Date.now()}`, role: "arasi", text: ERROR_TEXT, sources: [] },
      ]);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  return (
    <>
      {/* ── Floating trigger bubble ──────────────────────────────────────── */}
      {!isOpen && (
        <button
          ref={triggerRef}
          onClick={() => { setIsOpen(true); setIsMinimised(false); }}
          aria-label="Open Ask Arasi chat"
          className="fixed bottom-6 right-6 sm:right-6 left-auto sm:left-auto z-40 flex items-center gap-2 px-4 py-3 bg-[#6B4E9E] text-white rounded-full shadow-lg hover:bg-[#8B6BC4] transition-all hover:-translate-y-0.5"
        >
          <MessageCircle size={20} />
          <span className="text-sm font-medium">Ask Arasi</span>
        </button>
      )}

      {/* ── Chat panel ───────────────────────────────────────────────────── */}
      {isOpen && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label="Ask Arasi chat"
          className={`fixed bottom-6 right-4 sm:right-6 left-4 sm:left-auto z-40 sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-[#E8E4F0] flex flex-col transition-all duration-200 ${
            isMinimised ? "h-14" : "h-[520px]"
          }`}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-[#6B4E9E] rounded-t-2xl shrink-0">
            <div
              aria-hidden="true"
              className="w-8 h-8 rounded-full bg-[#8B6BC4] flex items-center justify-center shrink-0"
            >
              <MessageCircle size={16} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm">Ask Arasi</p>
              {!isMinimised && (
                <p className="text-[#EDE6F7] text-xs">General information assistant</p>
              )}
            </div>
            <button
              onClick={() => setIsMinimised(!isMinimised)}
              aria-label={isMinimised ? "Expand chat" : "Minimise chat"}
              className="p-1 text-[#EDE6F7] hover:text-white transition-colors"
            >
              <Minus size={16} />
            </button>
            <button
              onClick={() => { setIsOpen(false); triggerRef.current?.focus(); }}
              aria-label="Close chat"
              className="p-1 text-[#EDE6F7] hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {!isMinimised && (
            <>
              {/* Message thread */}
              <div
                className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
                aria-live="polite"
                aria-label="Conversation with Arasi"
              >
                {/* Welcome message — always present */}
                <div className="flex items-start gap-2">
                  <ArasiAvatar />
                  <div className="bg-[#F7F3FC] rounded-2xl rounded-tl-none px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-[#1F1B2E] leading-relaxed">{WELCOME_TEXT}</p>
                  </div>
                </div>

                {/* Quick-start topic chips — hidden after first message sent */}
                {showChips && (
                  <div className="pl-9 flex flex-wrap gap-2">
                    {QUICK_TOPICS.map(({ label, question }) => (
                      <button
                        key={label}
                        onClick={() => sendMessage(question)}
                        className="px-3 py-1.5 text-xs font-medium text-[#6B4E9E] bg-[#EDE6F7] rounded-full hover:bg-[#6B4E9E] hover:text-white transition-colors"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}

                {/* Dynamic message thread */}
                {messages.map((msg) =>
                  msg.role === "user" ? (
                    /* User bubble — right-aligned */
                    <div key={msg.id} className="flex justify-end">
                      <div className="bg-[#6B4E9E] text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-[85%]">
                        <p className="text-sm leading-relaxed">{msg.text}</p>
                      </div>
                    </div>
                  ) : (
                    /* Arasi bubble — left-aligned with avatar and optional sources */
                    <div key={msg.id}>
                      <div className="flex items-start gap-2">
                        <ArasiAvatar />
                        <div className="bg-[#F7F3FC] rounded-2xl rounded-tl-none px-4 py-3 max-w-[85%]">
                          <RenderMarkdown text={msg.text} />
                        </div>
                      </div>

                      {msg.sources && msg.sources.length > 0 && (
                        <div className="pl-9 mt-1.5">
                          <p className="text-xs text-[#8B8699] mb-1">Related guides:</p>
                          <div className="flex flex-col gap-0.5">
                            {msg.sources.map((s) => (
                              <a
                                key={s.url}
                                href={s.url}
                                className="text-xs text-[#6B4E9E] hover:underline"
                              >
                                → {s.articleTitle}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                )}

                {/* Animated typing indicator while waiting */}
                {isLoading && <TypingIndicator />}

                {/* Scroll anchor */}
                <div ref={messagesEndRef} aria-hidden="true" />
              </div>

              {/* Footer disclaimer — unchanged */}
              <div className="px-4 py-2 bg-[#F7F3FC] text-center shrink-0">
                <p className="text-xs text-[#8B8699]">
                  Arasi gives general information. For personal advice,{" "}
                  <a href="/contact" className="text-[#6B4E9E] underline">
                    contact our team
                  </a>
                  .
                </p>
              </div>

              {/* Input form */}
              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2 px-3 py-3 border-t border-[#E8E4F0] shrink-0"
              >
                <label htmlFor="arasi-input" className="sr-only">
                  Message Arasi
                </label>
                <input
                  ref={inputRef}
                  id="arasi-input"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your question…"
                  disabled={isLoading}
                  className="flex-1 px-4 py-2.5 text-sm bg-[#F4F2F7] rounded-full border-none outline-none focus:ring-2 focus:ring-[#6B4E9E] text-[#1F1B2E] placeholder-[#8B8699] disabled:opacity-60"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  disabled={!inputValue.trim() || isLoading}
                  className="w-9 h-9 flex items-center justify-center bg-[#6B4E9E] text-white rounded-full hover:bg-[#8B6BC4] disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0"
                >
                  <Send size={15} />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
