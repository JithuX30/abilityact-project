import { MapPin } from "lucide-react";
import Button from "@/components/ui/Button";

const EVENTS = [
  {
    day: "15",
    month: "JUL",
    title: "Benefits Advice Drop-in Session",
    location: "Hillingdon Civic Centre, Uxbridge",
    desc: "Free one-to-one benefits advice with our qualified advisors. No appointment needed — just turn up.",
    href: "/events/benefits-drop-in-july",
  },
  {
    day: "22",
    month: "JUL",
    title: "Disability Employment Workshop",
    location: "Online via Zoom",
    desc: "A practical workshop covering job searching, supported employment, and your rights as a disabled employee.",
    href: "/events/employment-workshop-july",
  },
  {
    day: "3",
    month: "AUG",
    title: "BSL Social Evening",
    location: "AbilityAction Community Hub, London",
    desc: "A relaxed BSL social evening for deaf and hearing people to connect, practise sign language, and share experiences.",
    href: "/events/bsl-social-august",
  },
];

export default function EventsSection() {
  return (
    <section
      className="bg-[#F4F2F7] py-16 lg:py-24"
      aria-labelledby="events-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex items-center justify-between mb-10">
          <h2
            id="events-heading"
            className="text-[1.625rem] lg:text-[2.25rem] font-semibold text-[#1F1B2E]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What&apos;s on
          </h2>
          <Button variant="tertiary" href="/events">
            All events
          </Button>
        </div>

        {/* Event cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map(({ day, month, title, location, desc, href }) => (
            <div
              key={href}
              className="bg-white border border-[#E8E4F0] rounded-2xl p-6 shadow-[0_2px_8px_rgba(31,27,46,0.06)] hover:shadow-[0_6px_20px_rgba(31,27,46,0.12)] transition-shadow"
            >
              {/* Date block */}
              <div
                className="inline-flex flex-col items-center justify-center w-14 h-14 bg-[#6B4E9E] rounded-xl text-white mb-4"
                aria-label={`${day} ${month}`}
              >
                <span className="text-lg font-semibold leading-none" aria-hidden="true">
                  {day}
                </span>
                <span className="text-[10px] font-medium tracking-wider mt-0.5" aria-hidden="true">
                  {month}
                </span>
              </div>

              <h3
                className="font-semibold text-[#1F1B2E] mb-2 leading-snug"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {title}
              </h3>

              <p className="flex items-start gap-1.5 text-sm text-[#8B8699] mb-3">
                <MapPin
                  size={14}
                  className="mt-0.5 shrink-0 text-[#6B4E9E]"
                  aria-hidden="true"
                />
                {location}
              </p>

              <p className="text-sm text-[#524D63] leading-relaxed mb-5">
                {desc}
              </p>

              <Button variant="secondary" href={href}>
                Register
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
