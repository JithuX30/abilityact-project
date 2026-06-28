import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ImageIcon } from "lucide-react";

const ARTICLES = [
  {
    badge: { colour: "purple", label: "Our story" },
    title: "AbilityAction reaches 250 individuals supported this year",
    date: "12 March 2025",
    excerpt:
      "A milestone moment for our team as we reflect on the people we've walked alongside and the impact we've made together.",
    href: "/news/250-individuals-supported",
  },
  {
    badge: { colour: "blue", label: "Disability news" },
    title: "New guidance on workplace adjustments published by the EHRC",
    date: "5 March 2025",
    excerpt:
      "The Equality and Human Rights Commission has released updated guidance on what employers must do under the Equality Act 2010.",
    href: "/news/ehrc-workplace-adjustments-guidance",
  },
  {
    badge: { colour: "green", label: "Benefits update" },
    title: "Spring Budget: what the changes mean for disabled people",
    date: "28 February 2025",
    excerpt:
      "Our advisors break down the key announcements and what they mean for PIP, Universal Credit, and employment support.",
    href: "/news/spring-budget-disability-impact",
  },
];

export default function NewsSection() {
  return (
    <section
      className="bg-white py-16 lg:py-24"
      aria-labelledby="news-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex items-center justify-between mb-10">
          <h2
            id="news-heading"
            className="text-[1.625rem] lg:text-[2.25rem] font-semibold text-[#1F1B2E]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Latest news
          </h2>
          <Button variant="tertiary" href="/news">
            View all
          </Button>
        </div>

        {/* Article cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map(({ badge, title, date, excerpt, href }) => (
            <article
              key={href}
              className="bg-white border border-[#E8E4F0] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(31,27,46,0.06)] hover:shadow-[0_6px_20px_rgba(31,27,46,0.12)] transition-shadow"
            >
              {/* Placeholder image */}
              <div
                className="w-full h-44 bg-[#F4F2F7] flex flex-col items-center justify-center"
                role="img"
                aria-label={`Placeholder image for article: ${title}`}
              >
                <ImageIcon
                  size={32}
                  className="text-[#8B8699] opacity-50"
                  aria-hidden="true"
                />
                <span className="mt-2 text-xs text-[#8B8699]">Article image</span>
              </div>

              <div className="p-5">
                <Badge colour={badge.colour}>{badge.label}</Badge>

                <h3
                  className="mt-3 font-semibold text-[#1F1B2E] leading-snug"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {title}
                </h3>

                <time
                  dateTime={date}
                  className="block mt-1.5 text-xs text-[#8B8699]"
                >
                  {date}
                </time>

                <p className="mt-2.5 text-sm text-[#524D63] leading-relaxed">
                  {excerpt}
                </p>

                <div className="mt-4">
                  <Button variant="tertiary" href={href}>
                    Read more
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
