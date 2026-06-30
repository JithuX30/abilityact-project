import { ImageIcon } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import EventsFilter from "@/components/get-involved/EventsFilter";
import EventsNewsletter from "@/components/get-involved/EventsNewsletter";

export const metadata = {
  title: "Events — Get involved — AbilityAction CIC",
  description:
    "Find upcoming AbilityAction events — community drop-ins, training workshops, BSL socials, and fundraisers — open to everyone.",
};

const PAST_EVENTS = [
  {
    id: "past-bsl-social-jun",
    title: "BSL Social Evening — June",
    date: "June 2026",
    type: "Community",
    imgAlt: "A group of people signing at a community social evening in a warmly lit hall",
  },
  {
    id: "past-employment-workshop-jun",
    title: "Disability Employment Workshop",
    date: "June 2026",
    type: "Training",
    imgAlt: "Participants at desks during an online disability employment workshop, laptop screens visible",
  },
  {
    id: "past-charity-quiz-may",
    title: "Charity Quiz Night",
    date: "May 2026",
    type: "Fundraising",
    imgAlt: "Teams gathered around tables for a charity quiz night, quiz sheets and drinks on the tables",
  },
  {
    id: "past-awareness-day-may",
    title: "Deaf Awareness Week Stand",
    date: "May 2026",
    type: "Awareness",
    imgAlt: "AbilityAction volunteers at a Deaf Awareness Week information stand in a busy shopping centre",
  },
];

export default function EventsPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ───────────────────────────────────── */}
      <section className="bg-[#EAF7EF] py-12" aria-labelledby="events-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Get involved", href: "/get-involved/volunteer" },
              { label: "Events", href: "/get-involved/events" },
            ]}
          />
          <h1
            id="events-heading"
            className="mt-6 text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Events
          </h1>
          <p className="mt-3 text-lg text-[#524D63] leading-relaxed max-w-2xl">
            From community drop-ins to BSL socials and fundraising walks —
            there is always something happening at AbilityAction. Everyone is
            welcome.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: Filterable upcoming events ─────────────── */}
      <section
        className="bg-white py-14 lg:py-20"
        aria-labelledby="upcoming-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="upcoming-heading"
            className="text-[1.5rem] font-semibold text-[#1F1B2E] mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Upcoming events
          </h2>
          <p className="text-sm text-[#524D63] mb-8">
            Filter by event type or switch to calendar view.
          </p>
          <EventsFilter />
        </div>
      </section>

      {/* ── SECTION 3: Past events archive ───────────────────── */}
      <section
        className="bg-[#F4F2F7] py-14 lg:py-20"
        aria-labelledby="past-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2
              id="past-heading"
              className="text-[1.5rem] font-semibold text-[#1F1B2E]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Past events
            </h2>
            <span className="text-sm text-[#8B8699]">Showing recent events</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAST_EVENTS.map(({ id, title, date, type, imgAlt }) => (
              <article
                key={id}
                className="bg-white border border-[#E8E4F0] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(31,27,46,0.05)] flex flex-col"
              >
                {/* Photo placeholder */}
                <div
                  role="img"
                  aria-label={imgAlt}
                  className="w-full h-36 bg-[#EAF7EF] border-b border-[#E8E4F0] flex flex-col items-center justify-center"
                >
                  <ImageIcon
                    size={28}
                    className="text-[#2A7A4B] opacity-25"
                    aria-hidden="true"
                  />
                  <p className="mt-1 text-xs text-[#2A7A4B] opacity-40">
                    Event photo
                  </p>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#EAF7EF] text-[#2A7A4B] mb-2 self-start">
                    {type}
                  </span>
                  <h3
                    className="text-sm font-semibold text-[#1F1B2E] leading-snug mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-xs text-[#8B8699] mb-4 flex-1">{date}</p>
                  {/* Recap links would go to News and Stories once that section exists — href="#" placeholder */}
                  <a
                    href="#"
                    aria-label={`Read recap of ${title} (coming soon)`}
                    className="text-xs font-medium text-[#2A7A4B] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A7A4B] rounded"
                  >
                    Read recap →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Newsletter CTA ─────────────────────────── */}
      <section className="bg-[#EAF7EF] py-14" aria-labelledby="newsletter-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2
            id="newsletter-heading"
            className="text-[1.625rem] font-semibold text-[#1F1B2E]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Never miss an event
          </h2>
          <p className="mt-3 text-[#524D63]">
            Sign up for our newsletter and we will let you know about upcoming
            events, new services, and community news.
          </p>

          <EventsNewsletter />

          <p className="mt-4 text-xs text-[#8B8699]">
            We will only use your email for updates.{" "}
            <a
              href="/privacy-policy"
              className="underline hover:text-[#524D63] transition-colors"
            >
              Read our privacy policy
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
