import Breadcrumbs from "@/components/ui/Breadcrumbs";
import NewsFilter from "@/components/news/NewsFilter";
import NewsletterBand from "@/components/home/NewsletterBand";

export const metadata = {
  title: "News and stories — AbilityAction CIC",
  description:
    "News, stories, and disability sector updates from AbilityAction CIC — original stories from our team alongside curated items from trusted sources.",
};

export default function NewsAndStoriesPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ───────────────────────────────────── */}
      <section className="bg-[#F7F3FC] py-12" aria-labelledby="news-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "News and stories", href: "/news-and-stories" },
            ]}
          />
          <h1
            id="news-heading"
            className="mt-6 text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            News and stories
          </h1>
          <p className="mt-3 text-lg text-[#524D63] leading-relaxed max-w-2xl">
            Stories from our team and people we work with, alongside curated
            updates from trusted disability sector sources. Curated items are
            clearly labelled and link back to the original publisher.
          </p>
        </div>
      </section>

      {/* ── SECTION 2–4: Filter + featured + grid (client) ─────── */}
      <section className="bg-white py-14 lg:py-20" aria-labelledby="articles-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="articles-heading" className="sr-only">
            Articles
          </h2>
          <NewsFilter />
        </div>
      </section>

      {/* ── SECTION 5: Newsletter CTA ─────────────────────────── */}
      <NewsletterBand />
    </>
  );
}
