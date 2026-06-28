import { Download, Quote } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import ImpactStats from "@/components/about/ImpactStats";

export const metadata = {
  title: "Our impact — About us — AbilityAction CIC",
  description:
    "The measurable difference AbilityAction CIC makes — in numbers, in stories, and in the lives of the people we support.",
};

const IMPACT_STORIES = [
  {
    quote:
      "I had been out of work for three years when I came to AbilityAction. Marcus helped me rewrite my CV, practise interviews, and — for the first time — understand how to disclose my condition in a way that felt safe. I started my new job last month.",
    name: "James, 34",
    context: "Employment support client",
    area: "Employment",
  },
  {
    quote:
      "When I was told I had macular degeneration, I didn't know where to turn. The AbilityAction team came to Moorfields and sat with me for two hours. By the end I knew exactly what PIP I could claim and that I didn't have to give up my flat. That changed everything.",
    name: "Patricia, 67",
    context: "Moorfields Eye Hospital partnership",
    area: "Benefits",
  },
  {
    quote:
      "As a Deaf parent, I always struggled at school events and appointments because there was never an interpreter. AbilityAction sorted BSL support for my daughter's annual review at school. It was the first time I felt truly included.",
    name: "Aroha, 41",
    context: "Sign language services",
    area: "Sign language",
  },
];

const BAR_CHART_DATA = [
  { label: "Benefits & entitlements", value: 38, colour: "#6B4E9E" },
  { label: "Employment support", value: 27, colour: "#8B6BC4" },
  { label: "Sign language services", value: 16, colour: "#E07856" },
  { label: "Housing support", value: 10, colour: "#EDE6F7", textColour: "#1F1B2E" },
  { label: "Mental health & wellbeing", value: 9, colour: "#F4F2F7", textColour: "#1F1B2E" },
];

export default function ImpactPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ───────────────────────────────────── */}
      <section className="bg-[#F7F3FC] py-12" aria-labelledby="impact-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About us", href: "/about-us/our-story" },
              { label: "Our impact", href: "/about-us/impact" },
            ]}
          />
          <h1
            id="impact-heading"
            className="mt-6 text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our impact
          </h1>
          <p className="mt-3 text-lg text-[#524D63] leading-relaxed max-w-2xl">
            We track what we do because the people who come to us deserve to
            know their trust is well placed. Here is what AbilityAction has
            achieved — in numbers and in the words of the people we support.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: Animated stats ─────────────────────────── */}
      <section className="bg-white py-14 lg:py-20" aria-labelledby="stats-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="stats-heading"
            className="text-[1.5rem] font-semibold text-[#1F1B2E] text-center mb-12"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The numbers that matter
          </h2>
          <ImpactStats />
          <p className="text-center text-xs text-[#8B8699] mt-10">
            Figures cover April 2023 – March 2024. Full methodology in the annual report.
          </p>
        </div>
      </section>

      {/* ── SECTION 3: Impact stories ─────────────────────────── */}
      <section className="bg-[#F7F3FC] py-14 lg:py-20" aria-labelledby="stories-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="stories-heading"
            className="text-[1.5rem] lg:text-[2rem] font-semibold text-[#1F1B2E] mb-10"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            In their words
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {IMPACT_STORIES.map(({ quote, name, context, area }) => (
              <figure
                key={name}
                className="bg-white border border-[#E8E4F0] rounded-2xl p-6 shadow-[0_2px_8px_rgba(31,27,46,0.05)] flex flex-col"
              >
                <div className="mb-1">
                  <span className="inline-block text-xs font-semibold text-[#6B4E9E] bg-[#EDE6F7] rounded-full px-2.5 py-0.5">
                    {area}
                  </span>
                </div>
                <Quote
                  size={20}
                  className="text-[#6B4E9E] opacity-40 mt-3 mb-2"
                  aria-hidden="true"
                />
                <blockquote className="flex-1">
                  <p className="text-[#1F1B2E] italic leading-[1.7] text-sm">
                    &ldquo;{quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t border-[#F4F2F7]">
                  <p className="text-sm font-semibold text-[#1F1B2E]">{name}</p>
                  <p className="text-xs text-[#8B8699]">{context}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Service breakdown ──────────────────────── */}
      <section className="bg-white py-14 lg:py-20" aria-labelledby="breakdown-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="breakdown-heading"
            className="text-[1.5rem] font-semibold text-[#1F1B2E] mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Where we focused in 2023–24
          </h2>
          <p className="text-sm text-[#524D63] mb-8">
            Percentage of people supported by service area.
          </p>

          {/* Visual bar chart — aria-hidden, accessible table below */}
          <div
            className="space-y-3 mb-6"
            aria-hidden="true"
            role="presentation"
          >
            {BAR_CHART_DATA.map(({ label, value, colour, textColour }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="w-52 shrink-0 text-sm text-[#524D63] text-right pr-1">
                  {label}
                </span>
                <div className="flex-1 h-9 bg-[#F4F2F7] rounded-lg overflow-hidden">
                  <div
                    style={{
                      width: `${value}%`,
                      backgroundColor: colour,
                      height: "100%",
                    }}
                    className="flex items-center pl-3 rounded-lg"
                  >
                    {value >= 10 && (
                      <span
                        style={{ color: textColour ?? "#fff" }}
                        className="text-sm font-semibold"
                      >
                        {value}%
                      </span>
                    )}
                  </div>
                  {value < 10 && (
                    <span className="sr-only">{value}%</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Accessible table equivalent */}
          <details className="mt-4">
            <summary className="cursor-pointer text-sm text-[#6B4E9E] font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] rounded">
              View as table
            </summary>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <caption className="sr-only">
                  Percentage of people supported by service area, 2023 to 2024
                </caption>
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="text-left py-2 pr-6 border-b border-[#E8E4F0] text-[#1F1B2E] font-semibold"
                    >
                      Service area
                    </th>
                    <th
                      scope="col"
                      className="text-right py-2 border-b border-[#E8E4F0] text-[#1F1B2E] font-semibold"
                    >
                      Percentage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {BAR_CHART_DATA.map(({ label, value }) => (
                    <tr key={label} className="border-b border-[#F4F2F7]">
                      <td className="py-2 pr-6 text-[#524D63]">{label}</td>
                      <td className="py-2 text-right text-[#524D63]">{value}%</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="py-2 pr-6 font-semibold text-[#1F1B2E]">Total</td>
                    <td className="py-2 text-right font-semibold text-[#1F1B2E]">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </details>
        </div>
      </section>

      {/* ── SECTION 5: Annual report download ────────────────── */}
      <section className="bg-[#F4F2F7] py-12" aria-labelledby="report-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E8E4F0] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h2
                id="report-heading"
                className="text-lg font-semibold text-[#1F1B2E] mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Annual Report 2023–24
              </h2>
              <p className="text-sm text-[#524D63]">
                Full impact data, financial summary, and case studies. PDF, 2.4 MB.
              </p>
            </div>
            <a
              href="#"
              aria-label="Download AbilityAction Annual Report 2023 to 2024 (PDF, 2.4 MB) — placeholder link"
              className="inline-flex items-center gap-2 h-11 px-5 bg-[#6B4E9E] text-white text-sm font-medium rounded-xl hover:bg-[#8B6BC4] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] focus-visible:ring-offset-2 shrink-0"
              download
            >
              <Download size={16} aria-hidden="true" />
              Download report
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CTA band ───────────────────────────────── */}
      <section className="bg-[#6B4E9E] py-14" aria-labelledby="impact-cta-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2
            id="impact-cta-heading"
            className="text-2xl font-semibold text-white mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Help us do more
          </h2>
          <p className="text-[#EDE6F7] mb-8">
            Every donation, volunteer hour, and partnership helps us reach more
            disabled people with the support they need.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="cta" href="/get-involved">
              Get involved
            </Button>
            <Button
              variant="secondary"
              href="/get-involved"
              className="border-white text-white hover:bg-white/10"
            >
              Donate
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
