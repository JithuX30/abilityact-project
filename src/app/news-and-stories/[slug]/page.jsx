import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import ShareBar from "@/components/advice/ShareBar";
import NewsletterBand from "@/components/home/NewsletterBand";
import {
  getArticleBySlug,
  getRelatedArticles,
  CATEGORY_COLOURS,
  formatDate,
} from "@/lib/news-data";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return { title: "Article not found — AbilityAction CIC" };
  }
  return {
    title: `${article.title} — AbilityAction CIC`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  // ── Not found ──────────────────────────────────────────────
  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1
          className="text-2xl font-semibold text-[#1F1B2E] mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Article not found
        </h1>
        <p className="text-[#524D63] mb-8">
          This article does not exist or may have been moved.
        </p>
        <Link
          href="/news-and-stories"
          className="text-[#6B4E9E] underline hover:no-underline"
        >
          ← Back to news and stories
        </Link>
      </div>
    );
  }

  const isCurated = article.source !== "AbilityAction";
  const related = getRelatedArticles(article.id);

  return (
    <>
      {/* ── SECTION 1: Article header ─────────────────────────── */}
      <section className="bg-[#F7F3FC] py-10" aria-labelledby="article-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "News and stories", href: "/news-and-stories" },
              { label: article.title, href: `/news-and-stories/${article.slug}` },
            ]}
          />

          <div className="mt-6 flex flex-wrap items-center gap-2 mb-4">
            <Badge colour={CATEGORY_COLOURS[article.category]}>
              {article.category}
            </Badge>
            {isCurated ? (
              <span className="inline-flex items-center gap-1 text-xs font-medium bg-[#F4F2F7] text-[#524D63] px-2.5 py-0.5 rounded-full border border-[#E8E4F0]">
                <ExternalLink size={10} aria-hidden="true" />
                Source: {article.source} · Curated
              </span>
            ) : (
              <span className="text-xs text-[#524D63] font-medium">By AbilityAction</span>
            )}
          </div>

          <h1
            id="article-heading"
            className="text-[1.75rem] sm:text-[2.25rem] font-semibold text-[#1F1B2E] leading-[1.2]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {article.title}
          </h1>

          <p className="mt-3 text-sm text-[#8B8699]">
            {formatDate(article.date)}
            {!isCurated && " · AbilityAction CIC"}
          </p>

          {/* Featured image placeholder */}
          <div
            role="img"
            aria-label={`Featured image for: ${article.title}`}
            className="mt-6 w-full aspect-[16/7] bg-[#EDE6F7] rounded-2xl flex items-center justify-center border border-[#E8E4F0]"
          >
            <p className="text-sm text-[#6B4E9E] opacity-30">Article image placeholder</p>
          </div>
          {isCurated && (
            <p className="mt-2 text-xs text-[#8B8699] italic">
              Image: for illustration only. Original article by {article.source}.
            </p>
          )}

          {/* Share bar */}
          <div className="mt-6 pt-5 border-t border-[#E8E4F0]">
            <ShareBar title={article.title} />
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Article body ───────────────────────────── */}
      <section className="bg-white py-12 lg:py-16" aria-label="Article content">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {isCurated ? (
            /* ── CURATED: our summary + outbound link ───────── */
            <>
              <div className="prose prose-lg max-w-none text-[#524D63] leading-[1.75] space-y-5 mb-8">
                <p>{article.excerpt}</p>
              </div>

              {/* Prominent outbound link */}
              <div className="bg-[#F4F2F7] border border-[#E8E4F0] rounded-2xl p-6 mb-8">
                <p className="text-sm font-semibold text-[#1F1B2E] mb-1">
                  This is a curated summary by AbilityAction
                </p>
                <p className="text-sm text-[#524D63] mb-5">
                  The full article was originally published by{" "}
                  <strong>{article.source}</strong>. We do not reproduce
                  third-party content in full — click below to read it on the
                  publisher&apos;s own website.
                </p>
                <a
                  href={article.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-11 px-6 bg-[#6B4E9E] text-white text-sm font-medium rounded-lg hover:bg-[#8B6BC4] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] focus-visible:ring-offset-2"
                >
                  <ExternalLink size={15} aria-hidden="true" />
                  Read the full article on {article.source}
                  <span className="sr-only">(opens in new tab)</span>
                </a>
                <p className="mt-3 text-xs text-[#8B8699]" aria-hidden="true">
                  (opens in new tab)
                </p>
              </div>
            </>
          ) : (
            /* ── ORIGINAL: full body paragraphs ──────────────── */
            <div className="space-y-5 text-[#524D63] leading-[1.75] text-base">
              {article.body?.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}

          {/* ── Source attribution box (curated only) ──────── */}
          {isCurated && (
            <aside
              className="border-l-4 border-[#E8E4F0] pl-5 py-2"
              aria-label="Source attribution"
            >
              <p className="text-xs text-[#8B8699] leading-relaxed">
                Originally published by{" "}
                <strong className="text-[#524D63]">{article.source}</strong> on{" "}
                {formatDate(article.date)}.{" "}
                <a
                  href={article.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B4E9E] underline"
                >
                  View on {article.source}&apos;s website
                  <span className="sr-only">(opens in new tab)</span>
                </a>
                .
              </p>
            </aside>
          )}
        </div>
      </section>

      {/* ── SECTION 4: Related articles ───────────────────────── */}
      {related.length > 0 && (
        <section className="bg-[#F4F2F7] py-14" aria-labelledby="related-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="related-heading"
              className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              More from news and stories
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((rel) => {
                const relCurated = rel.source !== "AbilityAction";
                return (
                  <article
                    key={rel.id}
                    className="bg-white border border-[#E8E4F0] rounded-2xl p-5 shadow-sm flex flex-col"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge colour={CATEGORY_COLOURS[rel.category]}>
                        {rel.category}
                      </Badge>
                      {relCurated ? (
                        <span className="inline-flex items-center gap-1 text-xs font-medium bg-[#F4F2F7] text-[#524D63] px-2 py-0.5 rounded-full border border-[#E8E4F0]">
                          <ExternalLink size={9} aria-hidden="true" />
                          {rel.source} · Curated
                        </span>
                      ) : (
                        <span className="text-xs text-[#524D63]">By AbilityAction</span>
                      )}
                    </div>
                    <h3
                      className="font-semibold text-[#1F1B2E] mb-2 leading-snug flex-1"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {rel.title}
                    </h3>
                    <p className="text-xs text-[#8B8699] mb-4">{formatDate(rel.date)}</p>
                    <Link
                      href={`/news-and-stories/${rel.slug}`}
                      className="text-sm font-medium text-[#6B4E9E] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] rounded self-start"
                    >
                      {relCurated ? "Read our summary" : "Read article"} →
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── SECTION 5: Newsletter CTA ─────────────────────────── */}
      <NewsletterBand />
    </>
  );
}
