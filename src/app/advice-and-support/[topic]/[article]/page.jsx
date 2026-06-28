import {
  Clock,
  Calendar,
  Play,
  BookOpen,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import ArticleAccordion from "@/components/advice/ArticleAccordion";
import FeedbackWidget from "@/components/advice/FeedbackWidget";
import ShareBar from "@/components/advice/ShareBar";
import NeedToTalkBand from "@/components/advice/NeedToTalkBand";
import { TOPIC_DATA } from "@/lib/advice-data";

export const dynamicParams = true;

export async function generateStaticParams() {
  return Object.entries(TOPIC_DATA).flatMap(([topicSlug, topic]) =>
    topic.articles.map((article) => ({
      topic: topicSlug,
      article: article.slug,
    }))
  );
}

export async function generateMetadata({ params }) {
  const { topic: topicSlug, article: articleSlug } = await params;
  const topic = TOPIC_DATA[topicSlug];
  const articleMeta = topic?.articles.find((a) => a.slug === articleSlug);
  if (!articleMeta) return { title: "Article not found — AbilityAction CIC" };
  return {
    title: `${articleMeta.title} — ${topic.name} — AbilityAction CIC`,
    description: articleMeta.summary,
  };
}

// ── Callout box ───────────────────────────────────────────────
function Callout({ icon: Icon = Lightbulb, label = "Tip", children, colour = "purple" }) {
  const colours = {
    purple: "bg-[#F7F3FC] border-[#6B4E9E] text-[#6B4E9E]",
    coral:  "bg-[#FBEAE3] border-[#E07856] text-[#E07856]",
    green:  "bg-[#DFF0E8] border-[#2E7D54] text-[#2E7D54]",
  };
  return (
    <aside
      className={`my-6 border-l-4 rounded-r-xl p-5 ${colours[colour]}`}
      aria-label={label}
    >
      <p className="flex items-center gap-2 text-sm font-semibold mb-2">
        <Icon size={16} aria-hidden="true" />
        {label}
      </p>
      <div className="text-[#524D63] text-base leading-relaxed">{children}</div>
    </aside>
  );
}

// ── The fully fleshed-out article body ────────────────────────
function FindingWorkContent() {
  return (
    <div className="prose-content">
      <p className="text-lg text-[#524D63] leading-[1.7] mb-6">
        Finding a job when you have a disability or health condition is
        achievable — and the law is on your side. This guide walks you through
        practical steps to search confidently, present yourself well, and access
        the support you are entitled to.
      </p>

      <h2
        className="text-[1.375rem] font-semibold text-[#1F1B2E] mt-10 mb-4"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Before you start your job search
      </h2>
      <p className="text-[#524D63] leading-[1.7] mb-4">
        It helps to spend some time preparing before you start sending
        applications. Think about:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-[#524D63] leading-[1.7] mb-4">
        <li>Which industries, roles, or types of work interest you</li>
        <li>
          Whether you want full-time, part-time, or flexible/remote working
        </li>
        <li>What working environment suits you best</li>
        <li>
          What adjustments or support you might need — and which employers are
          likely to offer them
        </li>
      </ul>
      <p className="text-[#524D63] leading-[1.7] mb-4">
        Reflect on your skills, experience, and strengths. A disability does
        not define what you can do — your qualifications, work history, and
        personal qualities do.
      </p>

      <Callout icon={Lightbulb} label="Tip" colour="purple">
        You do not have to disclose your disability on an application form
        unless the employer specifically asks or you choose to. Under the{" "}
        <strong>Equality Act 2010</strong>, employers cannot ask about your
        health before making you a conditional job offer.
      </Callout>

      <h2
        className="text-[1.375rem] font-semibold text-[#1F1B2E] mt-10 mb-4"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Writing your application
      </h2>
      <p className="text-[#524D63] leading-[1.7] mb-4">
        A strong application focuses on what you bring to the role — not on
        your disability.
      </p>

      <h3
        className="text-base font-semibold text-[#1F1B2E] mt-6 mb-3"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        For your CV
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-[#524D63] leading-[1.7] mb-6">
        <li>Lead with a strong personal statement showcasing your skills</li>
        <li>Focus on achievements, not just job duties</li>
        <li>Keep it to two pages with clear headings and plain language</li>
        <li>
          Do not list medical history, conditions, or absence records — these
          are irrelevant and could invite unconscious bias
        </li>
      </ul>

      <h3
        className="text-base font-semibold text-[#1F1B2E] mt-6 mb-3"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        For your covering letter
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-[#524D63] leading-[1.7] mb-6">
        <li>Address the specific job and employer — not a generic letter</li>
        <li>Explain clearly why you are a strong fit for this particular role</li>
        <li>
          If you choose to mention your disability, focus on how you manage it
          and what you have achieved
        </li>
      </ul>

      <Callout icon={Lightbulb} label="Did you know?" colour="green">
        Employers signed up to the{" "}
        <strong>Disability Confident scheme</strong> have committed to
        interviewing all disabled applicants who meet the minimum criteria for a
        role. Look for the Disability Confident logo on job adverts.
      </Callout>

      <h2
        className="text-[1.375rem] font-semibold text-[#1F1B2E] mt-10 mb-4"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Support available to help you into work
      </h2>
      <p className="text-[#524D63] leading-[1.7] mb-4">
        Several government and voluntary schemes can help disabled people find
        and keep work:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-[#524D63] leading-[1.7] mb-6">
        <li>
          <strong>Access to Work</strong> — a grant from the Department for Work
          and Pensions (DWP) to cover extra costs of working, such as specialist
          equipment, travel, or a support worker
        </li>
        <li>
          <strong>Supported employment programmes</strong> — local schemes that
          offer one-to-one support through the job search and beyond
        </li>
        <li>
          <strong>Work and Health Programme</strong> — voluntary support for
          people who have been unemployed for a long time
        </li>
        <li>
          <strong>AbilityAction's employment advisors</strong> — our team
          offers free, personalised job search support. Contact us to find out
          more.
        </li>
      </ul>

      <h2
        className="text-[1.375rem] font-semibold text-[#1F1B2E] mt-10 mb-4"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Frequently asked questions
      </h2>
      <div className="space-y-3">
        <ArticleAccordion
          id="faq-disclose"
          question="Do I have to tell an employer about my disability?"
        >
          <p className="mb-3">
            No. You are not legally required to disclose your disability at any
            stage of the job application process, including on the application
            form or at interview.
          </p>
          <p className="mb-3">
            The <strong>Equality Act 2010</strong> restricts employers from
            asking questions about your health or disability before making a
            conditional job offer. There are narrow exceptions — for example, an
            employer can ask if you need any adjustments for the interview
            itself, or if having a particular physical characteristic is an
            occupational requirement of the role.
          </p>
          <p>
            Once a job offer is made, employers may ask health-related questions
            to determine what reasonable adjustments you might need. They cannot
            withdraw the offer simply because you have a disability.
          </p>
        </ArticleAccordion>

        <ArticleAccordion
          id="faq-adjustments"
          question="What adjustments can I ask for at an interview?"
        >
          <p className="mb-3">
            You can ask for any adjustments that will help you demonstrate your
            ability fairly. Common examples include:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mb-3">
            <li>Extra time to complete tasks or tests</li>
            <li>A BSL interpreter or speech-to-text reporter</li>
            <li>Interview questions provided in writing in advance</li>
            <li>A ground-floor or accessible venue</li>
            <li>Permission to bring a support worker or assistant</li>
          </ul>
          <p>
            Contact the recruiter as soon as you are invited to interview. Most
            employers are happy to accommodate reasonable requests, and it is
            their legal duty to do so.
          </p>
        </ArticleAccordion>

        <ArticleAccordion
          id="faq-gap"
          question="How do I explain a gap in employment on my CV?"
        >
          <p>
            You do not have to explain a gap in detail — or at all if it does
            not come up. If you do address it, focus on what you did during the
            gap that is relevant to the role (volunteering, learning new skills,
            caring responsibilities) rather than on health details. Many
            employers understand that life happens, and a well-prepared answer
            is usually enough to reassure them.
          </p>
        </ArticleAccordion>
      </div>
    </div>
  );
}

// ── Placeholder body for any other article ────────────────────
function PlaceholderContent({ articleMeta }) {
  return (
    <div>
      <p className="text-lg text-[#524D63] leading-[1.7] mb-6">
        {articleMeta.summary}
      </p>
      <p className="text-[#524D63] leading-[1.7] mb-4">
        This guide is being developed by our team of advisors. Full content
        will be published shortly.
      </p>
      <Callout icon={Lightbulb} label="In the meantime" colour="purple">
        Speak to one of our advisors directly — call{" "}
        <strong>07933 212547</strong> or email{" "}
        <strong>info@abilityact.com</strong> and we&apos;ll be happy to help.
      </Callout>
    </div>
  );
}

// ── Related articles (3 from same topic, excluding current) ──
function RelatedArticles({ topic, currentSlug, topicSlug }) {
  const related = topic.articles
    .filter((a) => a.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="bg-[#F4F2F7] py-12" aria-labelledby="related-heading">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6">
        <h2
          id="related-heading"
          className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-5"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Related guides
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {related.map((art) => (
            <Link
              key={art.slug}
              href={`/advice-and-support/${topicSlug}/${art.slug}`}
              className="group block bg-white border border-[#E8E4F0] rounded-2xl p-4 hover:border-[#6B4E9E] hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] focus-visible:ring-offset-2"
              aria-label={`Read related guide: ${art.title}`}
            >
              <p
                className="text-sm font-semibold text-[#1F1B2E] mb-2 leading-snug group-hover:text-[#6B4E9E] transition-colors"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {art.title}
              </p>
              <span className="flex items-center gap-1 text-xs text-[#8B8699]">
                <Clock size={11} aria-hidden="true" />
                {art.readTime} min read
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────
export default async function ArticlePage({ params }) {
  const { topic: topicSlug, article: articleSlug } = await params;
  const topic = TOPIC_DATA[topicSlug];

  if (!topic) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1
          className="text-2xl font-semibold text-[#1F1B2E] mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Topic not found
        </h1>
        <Button variant="secondary" href="/advice-and-support">
          Browse all topics
        </Button>
      </div>
    );
  }

  const articleMeta = topic.articles.find((a) => a.slug === articleSlug);
  if (!articleMeta) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1
          className="text-2xl font-semibold text-[#1F1B2E] mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Article not found
        </h1>
        <Button
          variant="secondary"
          href={`/advice-and-support/${topicSlug}`}
        >
          Back to {topic.name}
        </Button>
      </div>
    );
  }

  const isFleshedOut =
    topicSlug === "employment-support" && articleSlug === "finding-work";

  return (
    <>
      {/* ── SECTION 1: Article header ─────────────────────────── */}
      <section className="bg-[#F7F3FC] py-10" aria-labelledby="article-heading">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Advice and support", href: "/advice-and-support" },
              {
                label: topic.name,
                href: `/advice-and-support/${topicSlug}`,
              },
              {
                label: articleMeta.title,
                href: `/advice-and-support/${topicSlug}/${articleSlug}`,
              },
            ]}
          />

          <h1
            id="article-heading"
            className="mt-6 text-[1.75rem] sm:text-[2.25rem] font-semibold text-[#1F1B2E] leading-[1.15]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {articleMeta.title}
          </h1>

          {/* Meta line */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[#8B8699]">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} aria-hidden="true" />
              Last updated: {articleMeta.updatedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} aria-hidden="true" />
              {articleMeta.readTime} min read
            </span>
          </div>

          {/* Accessibility format buttons */}
          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 h-9 px-4 border border-[#6B4E9E] text-[#6B4E9E] text-sm font-medium rounded-lg hover:bg-[#EDE6F7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E]"
              aria-label="Watch this article explained in British Sign Language (placeholder — not yet available)"
            >
              <Play size={13} aria-hidden="true" />
              Watch in BSL
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 h-9 px-4 border border-[#E8E4F0] text-[#524D63] text-sm font-medium rounded-lg hover:bg-[#F4F2F7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E]"
              aria-label="Download an Easy Read version of this article (placeholder — not yet available)"
            >
              <BookOpen size={13} aria-hidden="true" />
              Easy Read version
            </button>
          </div>

          {/* Share bar */}
          <div className="mt-6 pt-5 border-t border-[#E8E4F0]">
            <ShareBar title={articleMeta.title} />
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Article body ───────────────────────────── */}
      <section className="bg-white py-10">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          {isFleshedOut ? (
            <FindingWorkContent />
          ) : (
            <PlaceholderContent articleMeta={articleMeta} />
          )}
        </div>
      </section>

      {/* ── SECTION 3: Feedback widget ────────────────────────── */}
      <section className="bg-white pb-10">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <FeedbackWidget />
        </div>
      </section>

      {/* ── SECTION 4: Talk to us CTA ─────────────────────────── */}
      <section className="bg-[#F4F2F7] py-10">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <div className="bg-white border border-[#E8E4F0] rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex-1">
              <h2
                className="font-semibold text-[#1F1B2E] mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Need personal advice on this?
              </h2>
              <p className="text-sm text-[#524D63] mb-3 sm:mb-0">
                Call us on{" "}
                <a
                  href="tel:07933212547"
                  className="font-medium text-[#6B4E9E] hover:underline"
                >
                  07933 212547
                </a>
                , email{" "}
                <a
                  href="mailto:info@abilityact.com"
                  className="font-medium text-[#6B4E9E] hover:underline"
                >
                  info@abilityact.com
                </a>
                , or use Ask Arasi for general queries.
              </p>
            </div>
            <Button variant="primary" href="/contact">
              Get in touch
            </Button>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Related articles ───────────────────────── */}
      <RelatedArticles
        topic={topic}
        currentSlug={articleSlug}
        topicSlug={topicSlug}
      />

      {/* ── Need to talk band ─────────────────────────────────── */}
      <NeedToTalkBand />
    </>
  );
}
