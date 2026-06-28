import {
  Briefcase,
  Languages,
  Home,
  Heart,
  PiggyBank,
  Scale,
  Clock,
  ArrowRight,
  Play,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import BenefitsCheckerCard from "@/components/advice/BenefitsCheckerCard";
import NeedToTalkBand from "@/components/advice/NeedToTalkBand";
import { TOPIC_DATA, TOPIC_SLUGS } from "@/lib/advice-data";

export const dynamicParams = true;

export async function generateStaticParams() {
  return TOPIC_SLUGS.map((slug) => ({ topic: slug }));
}

export async function generateMetadata({ params }) {
  const { topic: topicSlug } = await params;
  const topic = TOPIC_DATA[topicSlug];
  if (!topic) return { title: "Topic not found — AbilityAction CIC" };
  return {
    title: `${topic.name} — Advice and support — AbilityAction CIC`,
    description: topic.description,
  };
}

const TOPIC_ICONS = {
  "employment-support": Briefcase,
  "sign-language-services": Languages,
  "housing-support": Home,
  "mental-health-and-wellbeing": Heart,
  "benefits-and-entitlements": PiggyBank,
  "your-rights": Scale,
};

function NotFound({ message }) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <h1
        className="text-2xl font-semibold text-[#1F1B2E] mb-4"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {message}
      </h1>
      <Button variant="secondary" href="/advice-and-support">
        Browse all topics
      </Button>
    </div>
  );
}

export default async function TopicPage({ params }) {
  const { topic: topicSlug } = await params;
  const topic = TOPIC_DATA[topicSlug];

  if (!topic) return <NotFound message="Topic not found" />;

  const Icon = TOPIC_ICONS[topicSlug] ?? Scale;
  const relatedTopics = topic.relatedTopics
    .map((slug) => TOPIC_DATA[slug])
    .filter(Boolean);

  return (
    <>
      {/* ── SECTION 1: Topic hero ─────────────────────────────── */}
      <section
        className="bg-[#F7F3FC] py-12 lg:py-16"
        aria-labelledby="topic-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Advice and support", href: "/advice-and-support" },
              { label: topic.name, href: `/advice-and-support/${topicSlug}` },
            ]}
          />

          <div className="mt-6 flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#EDE6F7] flex items-center justify-center shrink-0">
              <Icon size={28} className="text-[#6B4E9E]" aria-hidden="true" />
            </div>
            <div>
              <h1
                id="topic-heading"
                className="text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {topic.name}
              </h1>
              <p className="mt-2 text-[#524D63] text-lg leading-relaxed max-w-xl">
                {topic.description}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="button"
              className="inline-flex items-center gap-2 h-10 px-4 border border-[#6B4E9E] text-[#6B4E9E] text-sm font-medium rounded-lg hover:bg-[#EDE6F7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E]"
              aria-label={`Watch ${topic.name} explained in British Sign Language (placeholder — video not yet available)`}
            >
              <Play size={14} aria-hidden="true" />
              Watch in BSL
            </button>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Overview ───────────────────────────────── */}
      <section className="bg-white py-10 border-b border-[#F4F2F7]">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <p className="text-[#524D63] text-lg leading-[1.7]">{topic.intro}</p>
        </div>
      </section>

      {/* ── SECTION 3: Sub-article cards ─────────────────────── */}
      <section className="bg-white py-12 lg:py-16" aria-labelledby="guides-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="guides-heading"
            className="text-[1.375rem] font-semibold text-[#1F1B2E] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Guides in this topic
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {topic.articles.map((article) => (
              <Link
                key={article.slug}
                href={`/advice-and-support/${topicSlug}/${article.slug}`}
                className="group block bg-white border border-[#E8E4F0] rounded-2xl p-5 hover:border-[#6B4E9E] hover:shadow-[0_4px_16px_rgba(31,27,46,0.09)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] focus-visible:ring-offset-2"
                aria-label={`Read guide: ${article.title}`}
              >
                <h3
                  className="font-semibold text-[#1F1B2E] mb-1.5 leading-snug"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {article.title}
                </h3>
                <p className="text-sm text-[#524D63] leading-relaxed mb-4">
                  {article.summary}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-[#8B8699]">
                    <Clock size={12} aria-hidden="true" />
                    {article.readTime} min read
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-sm font-medium text-[#6B4E9E] flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Read guide
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Related services callout ───────────────── */}
      <section className="bg-[#F4F2F7] py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E8E4F0] rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex-1">
              <h2
                className="font-semibold text-[#1F1B2E] mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Need personal support on {topic.name.toLowerCase()}?
              </h2>
              <p className="text-sm text-[#524D63]">
                Our advisors offer one-to-one support — confidential, free, and
                non-judgmental.
              </p>
            </div>
            <div className="shrink-0">
              <Button variant="primary" href="/contact">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Benefits checker (conditional) ─────────── */}
      {topic.showBenefitsChecker && (
        <section className="bg-[#F4F2F7] pb-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <BenefitsCheckerCard />
          </div>
        </section>
      )}

      {/* ── SECTION 6: Need to talk ───────────────────────────── */}
      <NeedToTalkBand />

      {/* ── SECTION 7: Related topics ─────────────────────────── */}
      <section className="bg-white py-12" aria-labelledby="related-topics-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="related-topics-heading"
            className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Related topics
          </h2>

          <div className="flex flex-wrap gap-3">
            {relatedTopics.map((rel) => {
              const RelIcon = TOPIC_ICONS[rel.slug] ?? Scale;
              return (
                <Link
                  key={rel.slug}
                  href={`/advice-and-support/${rel.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#E8E4F0] rounded-xl text-sm font-medium text-[#524D63] hover:border-[#6B4E9E] hover:text-[#6B4E9E] hover:bg-[#F7F3FC] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E]"
                >
                  <RelIcon size={15} aria-hidden="true" />
                  {rel.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
