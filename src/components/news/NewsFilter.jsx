"use client";

import { useState, useId } from "react";
import Link from "next/link";
import { ExternalLink, ImageIcon } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { NEWS_DATA, CATEGORY_COLOURS, formatDate } from "@/lib/news-data";

const FILTERS = [
  { label: "All", value: "All" },
  { label: "Our stories", value: "Our story" },
  { label: "Disability news", value: "Disability news" },
  { label: "Benefits updates", value: "Benefits update" },
  { label: "Events", value: "Events" },
];

// Stable sort by date descending (newest first)
const SORTED = [...NEWS_DATA].sort((a, b) => new Date(b.date) - new Date(a.date));

export default function NewsFilter() {
  const [activeFilter, setActiveFilter] = useState("All");
  const liveRegionId = useId();

  const filtered =
    activeFilter === "All"
      ? SORTED
      : SORTED.filter((a) => a.category === activeFilter);

  const [featured, ...rest] = filtered;

  return (
    <>
      {/* Filter chips */}
      <div
        role="group"
        aria-label="Filter articles by category"
        className="flex flex-wrap gap-2 mb-10"
      >
        {FILTERS.map(({ label, value }) => {
          const active = activeFilter === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => setActiveFilter(value)}
              aria-pressed={active}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] focus-visible:ring-offset-2 ${
                active
                  ? "bg-[#6B4E9E] text-white"
                  : "bg-white border border-[#E8E4F0] text-[#524D63] hover:border-[#6B4E9E] hover:text-[#6B4E9E]"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Live region */}
      <p
        id={liveRegionId}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {filtered.length} {filtered.length === 1 ? "article" : "articles"} shown
        {activeFilter !== "All" ? ` in ${activeFilter}` : ""}
      </p>

      {filtered.length === 0 && (
        <p className="text-[#524D63] text-center py-16">
          No articles in this category yet.
        </p>
      )}

      {/* ── Featured / latest card ──────────────────────────── */}
      {featured && (
        <div className="mb-12">
          <p className="text-xs font-semibold text-[#8B8699] uppercase tracking-wider mb-4">
            Latest
          </p>
          <article className="grid lg:grid-cols-[5fr_4fr] gap-0 bg-white border border-[#E8E4F0] rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(31,27,46,0.08)] hover:shadow-[0_6px_24px_rgba(31,27,46,0.13)] transition-shadow">
            {/* Image placeholder */}
            <div
              role="img"
              aria-label={`Featured image for: ${featured.title}`}
              className="w-full h-52 lg:h-auto bg-[#EDE6F7] flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-[#E8E4F0]"
            >
              <ImageIcon size={40} className="text-[#6B4E9E] opacity-20" aria-hidden="true" />
              <p className="mt-2 text-xs text-[#6B4E9E] opacity-30">Article image</p>
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge colour={CATEGORY_COLOURS[featured.category]}>
                  {featured.category}
                </Badge>
                <SourceLabel article={featured} />
              </div>
              <h2
                className="text-[1.25rem] lg:text-[1.5rem] font-semibold text-[#1F1B2E] leading-snug mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {featured.title}
              </h2>
              <p className="text-sm text-[#524D63] leading-relaxed mb-5 line-clamp-3">
                {featured.excerpt}
              </p>
              <p className="text-xs text-[#8B8699] mb-5">
                {formatDate(featured.date)}
              </p>
              <Link
                href={`/news-and-stories/${featured.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#6B4E9E] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] rounded self-start"
              >
                Read {featured.source === "AbilityAction" ? "article" : "our summary"} →
              </Link>
            </div>
          </article>
        </div>
      )}

      {/* ── Article grid ─────────────────────────────────────── */}
      {rest.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </>
  );
}

function SourceLabel({ article }) {
  if (article.source === "AbilityAction") {
    return (
      <span className="text-xs text-[#524D63] font-medium">
        By AbilityAction
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium bg-[#F4F2F7] text-[#524D63] px-2 py-0.5 rounded-full border border-[#E8E4F0]">
      <ExternalLink size={10} aria-hidden="true" />
      Source: {article.source} · Curated
    </span>
  );
}

function ArticleCard({ article }) {
  const isCurated = article.source !== "AbilityAction";

  return (
    <article className="bg-white border border-[#E8E4F0] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(31,27,46,0.05)] hover:shadow-[0_6px_20px_rgba(31,27,46,0.10)] transition-shadow flex flex-col">
      {/* Image placeholder */}
      <div
        role="img"
        aria-label={`Image for: ${article.title}`}
        className={`w-full h-36 flex flex-col items-center justify-center border-b border-[#E8E4F0] ${
          isCurated ? "bg-[#F4F2F7]" : "bg-[#EDE6F7]"
        }`}
      >
        <ImageIcon
          size={28}
          className={`opacity-20 ${isCurated ? "text-[#8B8699]" : "text-[#6B4E9E]"}`}
          aria-hidden="true"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Category + source — both always visible as text, never colour alone */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge colour={CATEGORY_COLOURS[article.category]}>
            {article.category}
          </Badge>
          <SourceLabel article={article} />
        </div>

        <h3
          className="font-semibold text-[#1F1B2E] mb-2 leading-snug"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {article.title}
        </h3>

        <p className="text-sm text-[#524D63] leading-relaxed line-clamp-3 flex-1 mb-3">
          {article.excerpt}
        </p>

        <p className="text-xs text-[#8B8699] mb-4">{formatDate(article.date)}</p>

        <Link
          href={`/news-and-stories/${article.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#6B4E9E] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] rounded self-start"
          aria-label={`Read ${isCurated ? "our summary of: " : "article: "}${article.title}`}
        >
          {isCurated ? "Read our summary" : "Read article"} →
        </Link>
      </div>
    </article>
  );
}
