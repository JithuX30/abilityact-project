import {
  Briefcase,
  Languages,
  Home,
  Heart,
  PiggyBank,
  Scale,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SearchBar from "@/components/advice/SearchBar";
import BenefitsCheckerCard from "@/components/advice/BenefitsCheckerCard";
import OpenArasiButton from "@/components/advice/OpenArasiButton";
import NeedToTalkBand from "@/components/advice/NeedToTalkBand";
import { TOPIC_DATA, ALL_ARTICLES } from "@/lib/advice-data";

export const metadata = {
  title: "Advice and support — AbilityAction CIC",
  description:
    "Find clear, practical information on benefits, employment, housing, sign language, mental health, and your rights as a disabled person.",
};

const TOPIC_ICONS = {
  "employment-support": Briefcase,
  "sign-language-services": Languages,
  "housing-support": Home,
  "mental-health-and-wellbeing": Heart,
  "benefits-and-entitlements": PiggyBank,
  "your-rights": Scale,
};

const MOST_READ = [
  {
    title: "Personal Independence Payment (PIP): a complete guide",
    topic: "benefits-and-entitlements",
    topicName: "Benefits",
    slug: "pip-guide",
    colour: "purple",
  },
  {
    title: "Reasonable adjustments at work",
    topic: "employment-support",
    topicName: "Employment",
    slug: "workplace-adjustments",
    colour: "blue",
  },
  {
    title: "The Equality Act 2010: what it means for you",
    topic: "your-rights",
    topicName: "Your rights",
    slug: "equality-act-explained",
    colour: "green",
  },
  {
    title: "Finding accessible and adapted housing",
    topic: "housing-support",
    topicName: "Housing",
    slug: "finding-accessible-housing",
    colour: "purple",
  },
  {
    title: "Universal Credit and disability: what you need to know",
    topic: "benefits-and-entitlements",
    topicName: "Benefits",
    slug: "universal-credit-and-disability",
    colour: "coral",
  },
];

export default function AdviceHubPage() {
  const topics = Object.values(TOPIC_DATA);

  return (
    <>
      {/* ── SECTION 1: Hero with search ───────────────────────── */}
      <section className="bg-[#F7F3FC] py-12 lg:py-16" aria-labelledby="hub-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Advice and support", href: "/advice-and-support" },
            ]}
          />
          <h1
            id="hub-heading"
            className="mt-6 text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-semibold text-[#1F1B2E] leading-[1.1]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Advice and support
          </h1>
          <p className="mt-4 text-lg text-[#524D63] leading-relaxed">
            Find clear, practical information on the things that matter most.
          </p>
          <div className="mt-8">
            <SearchBar articles={ALL_ARTICLES} />
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Topic grid ─────────────────────────────── */}
      <section className="bg-white py-14 lg:py-20" aria-labelledby="topics-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="topics-heading"
            className="text-[1.5rem] font-semibold text-[#1F1B2E] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Browse by topic
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((topic) => {
              const Icon = TOPIC_ICONS[topic.slug] ?? Scale;
              return (
                <Link
                  key={topic.slug}
                  href={`/advice-and-support/${topic.slug}`}
                  aria-label={`${topic.name} — ${topic.description}`}
                  className="group block bg-white border border-[#E8E4F0] rounded-2xl p-6 hover:border-[#6B4E9E] hover:shadow-[0_6px_20px_rgba(31,27,46,0.10)] hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] focus-visible:ring-offset-2"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#EDE6F7] flex items-center justify-center shrink-0">
                      <Icon
                        size={22}
                        className="text-[#6B4E9E]"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="font-semibold text-[#1F1B2E] mb-1"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {topic.name}
                      </h3>
                      <p className="text-sm text-[#524D63] leading-relaxed mb-3">
                        {topic.description}
                      </p>
                      <span
                        aria-hidden="true"
                        className="inline-flex items-center gap-1 text-xs text-[#8B8699]"
                      >
                        {topic.guideCount} guide{topic.guideCount !== 1 ? "s" : ""}
                        <ArrowRight
                          size={12}
                          className="text-[#6B4E9E] group-hover:translate-x-0.5 transition-transform"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Benefits checker ───────────────────────── */}
      <section className="bg-[#F4F2F7] py-12" aria-labelledby="checker-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="checker-heading"
            className="sr-only"
          >
            Benefits checker
          </h2>
          <BenefitsCheckerCard />
          <div className="mt-4 text-center">
            <OpenArasiButton label="Not sure? Ask Arasi" />
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Most read ──────────────────────────────── */}
      <section className="bg-white py-14" aria-labelledby="popular-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="popular-heading"
            className="text-[1.5rem] font-semibold text-[#1F1B2E] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Popular right now
          </h2>

          <ol className="space-y-3" aria-label="Most read articles">
            {MOST_READ.map(({ title, topic, topicName, slug, colour }, i) => (
              <li key={slug}>
                <Link
                  href={`/advice-and-support/${topic}/${slug}`}
                  className="flex items-center gap-4 p-4 rounded-xl border border-[#E8E4F0] hover:border-[#6B4E9E] hover:bg-[#F7F3FC] transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E]"
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-7 h-7 rounded-full bg-[#EDE6F7] flex items-center justify-center text-xs font-semibold text-[#6B4E9E]"
                  >
                    {i + 1}
                  </span>
                  <span className="flex-1 text-sm font-medium text-[#1F1B2E] group-hover:text-[#6B4E9E] transition-colors leading-snug">
                    {title}
                  </span>
                  <Badge colour={colour}>{topicName}</Badge>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── SECTION 5: Need to talk ───────────────────────────── */}
      <NeedToTalkBand />
    </>
  );
}
