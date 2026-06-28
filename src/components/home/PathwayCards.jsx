import Link from "next/link";
import { HeartHandshake, Briefcase, Users, ArrowRight } from "lucide-react";

const CARDS = [
  {
    href: "/advice-and-support",
    icon: HeartHandshake,
    heading: "I need support",
    body: "Find advice on benefits, employment, housing, and your rights.",
    cta: "Find support",
    accent: {
      bg: "bg-[#EDE6F7]",
      icon: "text-[#6B4E9E]",
      cta: "text-[#6B4E9E]",
      border: "hover:border-[#6B4E9E]",
    },
  },
  {
    href: "/for-employers",
    icon: Briefcase,
    heading: "I'm an employer",
    body: "Hire inclusively and access disability confidence training for your team.",
    cta: "For employers",
    accent: {
      bg: "bg-[#FBEAE3]",
      icon: "text-[#E07856]",
      cta: "text-[#E07856]",
      border: "hover:border-[#E07856]",
    },
  },
  {
    href: "/get-involved/volunteer",
    icon: Users,
    heading: "I want to help",
    body: "Volunteer, partner with us, or join our growing community.",
    cta: "Get involved",
    accent: {
      bg: "bg-[#DFF0E8]",
      icon: "text-[#2E7D54]",
      cta: "text-[#2E7D54]",
      border: "hover:border-[#2E7D54]",
    },
  },
];

export default function PathwayCards() {
  return (
    <section aria-label="Who we help" className="bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-6">
          {CARDS.map(({ href, icon: Icon, heading, body, cta, accent }) => (
            <Link
              key={href}
              href={href}
              aria-label={`${heading} — ${body}`}
              className={`
                group block bg-white border border-[#E8E4F0] rounded-2xl p-6
                shadow-[0_2px_8px_rgba(31,27,46,0.06)]
                hover:shadow-[0_8px_24px_rgba(31,27,46,0.12)]
                hover:-translate-y-1
                transition-all duration-200
                ${accent.border}
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-[#6B4E9E] focus-visible:ring-offset-2
              `}
            >
              <div
                className={`w-12 h-12 rounded-xl ${accent.bg} flex items-center justify-center mb-5`}
              >
                <Icon size={24} className={accent.icon} aria-hidden="true" />
              </div>

              <h2
                className="text-lg font-semibold text-[#1F1B2E] mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {heading}
              </h2>

              <p className="text-sm text-[#524D63] leading-relaxed mb-5">
                {body}
              </p>

              <span
                aria-hidden="true"
                className={`inline-flex items-center gap-1.5 text-sm font-medium ${accent.cta} group-hover:gap-3 transition-all duration-200`}
              >
                {cta}
                <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
