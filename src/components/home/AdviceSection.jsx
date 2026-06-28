import {
  Briefcase,
  Languages,
  Home,
  Heart,
  PiggyBank,
  Scale,
  ArrowRight,
  Calculator,
} from "lucide-react";
import Button from "@/components/ui/Button";

const TOPICS = [
  {
    icon: Briefcase,
    title: "Employment support",
    desc: "CV help, job searching, supported employment, and workplace adjustment guidance.",
    href: "/advice-and-support/employment",
  },
  {
    icon: Languages,
    title: "Sign language services",
    desc: "BSL and SLSL interpreting, community classes, and deaf awareness training.",
    href: "/advice-and-support/sign-language",
  },
  {
    icon: Home,
    title: "Housing support",
    desc: "Accessible housing options, adaptation grants, and tenant rights advice.",
    href: "/advice-and-support/housing",
  },
  {
    icon: Heart,
    title: "Mental health and wellbeing",
    desc: "Counselling referrals, peer support groups, and wellbeing resources.",
    href: "/advice-and-support/mental-health",
  },
  {
    icon: PiggyBank,
    title: "Benefits and entitlements",
    desc: "Understand PIP, Universal Credit, ESA, and every benefit you may be owed.",
    href: "/advice-and-support/benefits",
  },
  {
    icon: Scale,
    title: "Your rights",
    desc: "Know your rights under the Equality Act 2010 and disability discrimination law.",
    href: "/advice-and-support/rights",
  },
];

export default function AdviceSection() {
  return (
    <section
      className="bg-[#F4F2F7] py-16 lg:py-24"
      aria-labelledby="advice-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            id="advice-heading"
            className="text-[1.625rem] lg:text-[2.25rem] font-semibold text-[#1F1B2E]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How we can help
          </h2>
          <p className="mt-3 text-[#524D63] text-lg leading-relaxed">
            Find clear, practical information on the things that matter most.
          </p>
        </div>

        {/* 6-topic grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOPICS.map(({ icon: Icon, title, desc, href }) => (
            <div
              key={title}
              className="bg-white border border-[#E8E4F0] rounded-2xl p-6 shadow-[0_2px_8px_rgba(31,27,46,0.05)] hover:shadow-[0_6px_20px_rgba(31,27,46,0.10)] transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-[#EDE6F7] flex items-center justify-center mb-4">
                <Icon size={20} className="text-[#6B4E9E]" aria-hidden="true" />
              </div>
              <h3
                className="font-semibold text-[#1F1B2E] mb-1.5"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {title}
              </h3>
              <p className="text-sm text-[#524D63] leading-relaxed mb-4">
                {desc}
              </p>
              <Button variant="tertiary" href={href}>
                Learn more about {title.toLowerCase()}
              </Button>
            </div>
          ))}
        </div>

        {/* Benefits calculator highlight */}
        <div className="mt-8 bg-[#FBEAE3] border border-[#E07856]/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <Calculator size={22} className="text-[#E07856]" aria-hidden="true" />
              <h3
                className="font-semibold text-[#1F1B2E]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Check what benefits you can claim
              </h3>
            </div>
            <p className="text-sm text-[#524D63] leading-relaxed">
              Answer a few anonymous questions to see which benefits and
              entitlements you may be eligible for.
            </p>
          </div>
          <div className="shrink-0">
            <Button variant="primary" href="/tools/benefits-calculator">
              Use the free calculator
            </Button>
          </div>
        </div>

        {/* View all */}
        <div className="mt-10 text-center">
          <Button variant="secondary" href="/advice-and-support">
            View all advice and support
          </Button>
        </div>

      </div>
    </section>
  );
}
