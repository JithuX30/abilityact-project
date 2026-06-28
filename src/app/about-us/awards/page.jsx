import { Award, Calendar } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import AwardsGallery from "@/components/about/AwardsGallery";

export const metadata = {
  title: "Awards and recognition — About us — AbilityAction CIC",
  description:
    "The awards and recognition AbilityAction CIC has received for its work supporting disabled people across the UK.",
};

const AWARDS = [
  {
    name: "Heart of the Community Award",
    date: "November 2023",
    giver: "Hillingdon Council Community Awards",
    desc: "Recognising exceptional and sustained contribution to improving the lives of disabled residents across the London Borough of Hillingdon. The award highlighted AbilityAction's outreach work in underserved communities and its culturally sensitive approach to service delivery.",
  },
  {
    name: "Volunteer Programme of the Year",
    date: "September 2023",
    giver: "NCVO — National Council for Voluntary Organisations",
    desc: "Awarded to AbilityAction's volunteer programme for its innovative approach to recruiting and supporting volunteers with lived experience of disability. The programme has trained over 30 volunteers who now deliver advice sessions, facilitate peer support groups, and run BSL social evenings.",
  },
  {
    name: "BSL Accessibility Champion",
    date: "June 2022",
    giver: "National Deaf Children's Society",
    desc: "For exceptional work expanding British Sign Language and Sri Lankan Sign Language services for deaf children, young people, and adults in West London. AbilityAction was noted for its rare SLSL provision — one of the only community organisations in the UK to offer it.",
  },
  {
    name: "Best New CIC — London",
    date: "October 2021",
    giver: "Social Enterprise UK Awards",
    desc: "Awarded to community interest companies making the strongest demonstrable impact in their first three years. The judges noted AbilityAction's rapid growth, financial transparency, and the measurable outcomes achieved for clients in its benefits, employment, and housing work.",
  },
  {
    name: "Inclusive Employer of the Year — Voluntary Sector",
    date: "March 2023",
    giver: "West London Business Awards",
    desc: "Recognising AbilityAction's outstanding commitment to disability-inclusive employment practices within its own organisation. More than 60% of AbilityAction staff and volunteers identify as disabled, and the organisation's flexible, person-centred working culture was specifically commended.",
  },
];

export default function AwardsPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ───────────────────────────────────── */}
      <section className="bg-[#F7F3FC] py-12" aria-labelledby="awards-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About us", href: "/about-us/our-story" },
              { label: "Awards and recognition", href: "/about-us/awards" },
            ]}
          />
          <h1
            id="awards-heading"
            className="mt-6 text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Awards and recognition
          </h1>
          <p className="mt-3 text-lg text-[#524D63] leading-relaxed max-w-2xl">
            We are proud to have been recognised by some of the UK&apos;s
            leading organisations for our work — but the greatest recognition
            comes from the people we support.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: Awards grid ────────────────────────────── */}
      <section className="bg-white py-14 lg:py-20" aria-labelledby="awards-list-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="awards-list-heading" className="sr-only">
            Our awards
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AWARDS.map(({ name, date, giver, desc }) => (
              <article
                key={name}
                className="bg-white border border-[#E8E4F0] rounded-2xl p-6 shadow-[0_2px_8px_rgba(31,27,46,0.05)] flex flex-col"
              >
                {/* Award icon placeholder */}
                <div
                  role="img"
                  aria-label={`Award trophy icon representing the ${name}`}
                  className="w-14 h-14 rounded-2xl bg-[#EDE6F7] flex items-center justify-center mb-4"
                >
                  <Award
                    size={28}
                    className="text-[#6B4E9E]"
                    aria-hidden="true"
                  />
                </div>

                {/* Award name — always present, never image-only */}
                <h3
                  className="font-semibold text-[#1F1B2E] mb-1 leading-snug"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {name}
                </h3>

                {/* Date and giver */}
                <p className="flex items-center gap-1.5 text-xs text-[#8B8699] mb-3">
                  <Calendar size={12} aria-hidden="true" />
                  {date} &middot; {giver}
                </p>

                {/* Description — always provided, never award-image-only */}
                <p className="text-sm text-[#524D63] leading-relaxed flex-1">
                  {desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Photo gallery ──────────────────────────── */}
      <section className="bg-[#F4F2F7] py-14" aria-labelledby="gallery-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="gallery-heading"
            className="text-[1.5rem] font-semibold text-[#1F1B2E] mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Photo gallery
          </h2>
          <p className="text-sm text-[#524D63] mb-8">
            Select a photo to view it larger. Press{" "}
            <kbd className="px-1.5 py-0.5 text-xs border border-[#E8E4F0] rounded bg-white">
              Escape
            </kbd>{" "}
            or the close button to return.
          </p>
          <AwardsGallery />
        </div>
      </section>

      {/* ── SECTION 4: Impact CTA ─────────────────────────────── */}
      <section className="bg-white py-12 border-t border-[#F4F2F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2
              className="text-lg font-semibold text-[#1F1B2E]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              See our impact in numbers
            </h2>
            <p className="text-sm text-[#524D63] mt-1">
              Behind every award is a story of real people helped.
            </p>
          </div>
          <Button variant="primary" href="/about-us/impact">
            See our impact
          </Button>
        </div>
      </section>
    </>
  );
}
