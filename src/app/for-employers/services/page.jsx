import {
  BookOpen,
  Search,
  Users,
  Languages,
  ArrowRight,
  ImageIcon,
} from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Our services — For employers — AbilityAction CIC",
  description:
    "Diversity training, accessibility audits, supported placements, and sign language awareness — AbilityAction's full range of employer services.",
};

const SERVICES = [
  {
    id: "training",
    icon: BookOpen,
    name: "Diversity and inclusion training",
    desc: [
      "Our diversity and inclusion workshops are designed for the realities of the modern workplace, not a one-size-fits-all classroom session. We begin by understanding your organisation's specific challenges — whether that is unconscious bias in hiring, manager confidence in having disability conversations, or building a culture where adjustments are asked for rather than hidden.",
      "Programmes range from a two-hour introductory session to a full leadership development course, and can be delivered in person or online. Every session is co-developed with and facilitated by people with lived experience of disability.",
      "Participants leave with practical tools they can apply immediately: how to have adjustment conversations, how to write accessible job descriptions, and how to create an environment where people feel safe to be honest about their needs.",
    ],
    outcomes: [
      "Increased manager confidence in disability conversations",
      "Reduction in unconscious bias in recruitment decisions",
      "Practical frameworks for offering and managing reasonable adjustments",
      "Progress towards Disability Confident Employer status",
    ],
    imgAlt:
      "A training facilitator stands at the front of a meeting room; participants at round tables take notes and engage in discussion",
    imgLabel: "Training session photo",
  },
  {
    id: "audit",
    icon: Search,
    name: "Workplace accessibility audits",
    desc: [
      "Our accessibility audits give you a clear, honest picture of how accessible your workplace really is — physically, digitally, and culturally. We assess your premises, digital systems, HR processes, and communication practices against best practice and legal requirements.",
      "The process typically involves a site visit, staff interviews, and a review of key documents including your equality policies, recruitment materials, and job descriptions. We work with your team rather than just observing from outside — this produces more accurate findings and builds internal capability at the same time.",
      "You receive a written report with a prioritised action plan: what to address immediately, what can be planned over the next 12 months, and what represents longer-term strategic investment. We follow up three months later to review progress.",
    ],
    outcomes: [
      "Clear compliance picture against Equality Act 2010 requirements",
      "Prioritised, costed action plan",
      "Immediate wins identified for quick implementation",
      "Staff equipped to maintain accessibility standards ongoing",
    ],
    imgAlt:
      "An AbilityAction assessor uses a tablet to document accessibility features in a modern office building entrance",
    imgLabel: "Accessibility audit photo",
  },
  {
    id: "placements",
    icon: Users,
    name: "Supported placements",
    desc: [
      "Our supported placement programme bridges the gap between disabled jobseekers and employers who want to hire inclusively but are uncertain how to do it well. We work simultaneously with candidates and employers to create placements that succeed for both sides.",
      "For employers, we provide pre-placement consultation to identify roles and reasonable adjustments, training for line managers on how to support a new colleague, and check-ins throughout the first six months. We act as a trusted point of contact if any issues arise — for both the employer and the employee.",
      "Our employment advisors stay connected with the candidate throughout, providing coaching, advocacy, and practical support. The result is a placement that is set up to succeed from day one, rather than left to find its own level.",
    ],
    outcomes: [
      "Access to a pool of skilled disabled candidates",
      "Pre-placement support to set the role up correctly",
      "Manager coaching and disability confidence development",
      "Ongoing follow-up to support retention",
    ],
    imgAlt:
      "A job coach speaks with an employer and a new employee at a desk in a bright, open-plan office",
    imgLabel: "Supported placement photo",
  },
  {
    id: "bsl",
    icon: Languages,
    name: "Sign language awareness workshops",
    desc: [
      "British Sign Language (BSL) is the first or preferred language of around 87,000 Deaf people in the UK. Sri Lankan Sign Language (SLSL) is used by a significant community in West London and across the diaspora. Our workshops help your team communicate more confidently with deaf colleagues and customers in both languages.",
      "The introductory workshop — typically a half-day session — covers the basics of BSL and Deaf culture, common workplace phrases and greetings, and how to arrange professional interpretation for important meetings. It is not about making your team fluent in BSL; it is about removing the awkwardness and ensuring deaf people feel included rather than tolerated.",
      "Advanced modules are available for teams with regular deaf contact, and we can advise on when and how to commission professional interpreter services for interviews, appraisals, and other critical moments.",
    ],
    outcomes: [
      "Team confidence communicating with deaf colleagues and customers",
      "Understanding of Deaf culture and communication preferences",
      "Practical guide to organising interpretation services",
      "Better customer and employee experience for deaf people",
    ],
    imgAlt:
      "A group of office workers practise basic BSL signs with a Deaf instructor in a light-filled training room",
    imgLabel: "BSL workshop photo",
  },
];

const STEPS = [
  {
    title: "Enquiry",
    desc: "Tell us about your organisation and what you are trying to achieve. No forms to fill in — just a conversation.",
  },
  {
    title: "Consultation",
    desc: "We spend time understanding your specific context, challenges, and objectives before recommending any programme.",
  },
  {
    title: "Delivery",
    desc: "We deliver your programme — on-site, online, or blended — with people who have genuine expertise and lived experience.",
  },
  {
    title: "Follow-up",
    desc: "We check in after completion to review outcomes, answer questions, and help you sustain what you have built.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ───────────────────────────────────── */}
      <section
        className="bg-[#FDF5F2] py-12"
        aria-labelledby="services-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "For employers", href: "/for-employers" },
              { label: "Our services", href: "/for-employers/services" },
            ]}
          />
          <h1
            id="services-heading"
            className="mt-6 text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our services for employers
          </h1>
          <p className="mt-3 text-lg text-[#524D63] leading-relaxed max-w-2xl">
            Practical, expert-led programmes that make your organisation
            genuinely more inclusive — not just compliant.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: Service detail blocks (alternating) ─────── */}
      <div className="bg-white">
        {SERVICES.map(
          ({ id, icon: Icon, name, desc, outcomes, imgAlt, imgLabel }, i) => {
            const isEven = i % 2 === 0;
            return (
              <section
                key={id}
                id={id}
                className={`py-14 lg:py-20 ${i > 0 ? "border-t border-[#F4F2F7]" : ""}`}
                aria-labelledby={`service-${id}-heading`}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div
                    className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start ${
                      isEven ? "" : "lg:[&>*:first-child]:order-2"
                    }`}
                  >
                    {/* Text */}
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#FBEAE3] flex items-center justify-center mb-5">
                        <Icon
                          size={24}
                          className="text-[#E07856]"
                          aria-hidden="true"
                        />
                      </div>
                      <h2
                        id={`service-${id}-heading`}
                        className="text-[1.4rem] lg:text-[1.75rem] font-semibold text-[#1F1B2E] mb-4"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {name}
                      </h2>
                      {desc.map((para, pi) => (
                        <p
                          key={pi}
                          className="text-[#524D63] leading-[1.7] mb-4 last:mb-0"
                        >
                          {para}
                        </p>
                      ))}

                      {/* Outcomes */}
                      <div className="mt-6 bg-[#FDF5F2] border border-[#F5C9B8] rounded-xl p-4">
                        <p className="text-xs font-semibold text-[#E07856] uppercase tracking-wider mb-3">
                          What you get
                        </p>
                        <ul className="space-y-2">
                          {outcomes.map((o) => (
                            <li
                              key={o}
                              className="flex items-start gap-2.5 text-sm text-[#524D63]"
                            >
                              <ArrowRight
                                size={14}
                                className="text-[#E07856] shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              {o}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href="/for-employers/work-with-us"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#E07856] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E07856] rounded"
                        aria-label={`Enquire about ${name}`}
                      >
                        Enquire about this service
                        <ArrowRight
                          size={14}
                          aria-hidden="true"
                        />
                      </a>
                    </div>

                    {/* Image placeholder */}
                    <div
                      role="img"
                      aria-label={imgAlt}
                      className="w-full aspect-[4/3] bg-[#FBEAE3] rounded-[24px] border border-[#F5C9B8] flex flex-col items-center justify-center"
                    >
                      <ImageIcon
                        size={48}
                        className="text-[#E07856] opacity-25"
                        aria-hidden="true"
                      />
                      <p className="mt-2 text-sm text-[#c8684a] opacity-50">
                        {imgLabel}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            );
          }
        )}
      </div>

      {/* ── SECTION 3: Process stepper ────────────────────────── */}
      <section
        className="bg-[#FDF5F2] py-14 lg:py-20"
        aria-labelledby="process-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="process-heading"
            className="text-[1.5rem] font-semibold text-[#1F1B2E] mb-12 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How it works
          </h2>

          <ol className="flex flex-col lg:flex-row gap-0" aria-label="Process steps">
            {STEPS.map(({ title, desc }, i) => (
              <li
                key={title}
                className="flex-1 relative flex flex-row lg:flex-col items-start lg:items-center gap-4 lg:gap-0 pb-10 last:pb-0 lg:pb-0"
              >
                {/* Mobile vertical connector */}
                {i < STEPS.length - 1 && (
                  <div
                    className="lg:hidden absolute left-5 top-10 bottom-0 w-0.5 bg-[#F5C9B8]"
                    aria-hidden="true"
                  />
                )}

                {/* Circle + horizontal connector row (desktop) */}
                <div className="flex lg:flex-col lg:items-center w-auto lg:w-full relative">
                  <div className="w-10 h-10 rounded-full bg-[#E07856] text-white font-bold text-base flex items-center justify-center shrink-0 z-10 shadow-sm">
                    <span aria-hidden="true">{i + 1}</span>
                    <span className="sr-only">Step {i + 1}:</span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div
                      className="hidden lg:block h-0.5 bg-[#F5C9B8] flex-1 w-full ml-2"
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Text */}
                <div className="pt-0.5 lg:pt-0 lg:mt-5 lg:text-center lg:px-3">
                  <p
                    className="font-semibold text-[#1F1B2E] mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {title}
                  </p>
                  <p className="text-sm text-[#524D63] leading-relaxed">
                    {desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── SECTION 4: Pricing note ───────────────────────────── */}
      <section className="bg-white py-12 border-b border-[#F4F2F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2
              className="text-lg font-semibold text-[#1F1B2E] mb-1"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Pricing
            </h2>
            <p className="text-sm text-[#524D63] max-w-lg">
              Engagements are tailored to your organisation&apos;s size, sector,
              and objectives. We offer fixed-fee packages and day-rate
              consultancy. Get in touch for a quote.
            </p>
          </div>
          <Button variant="cta" href="/for-employers/work-with-us">
            Get a quote
          </Button>
        </div>
      </section>

      {/* ── SECTION 5: CTA band ───────────────────────────────── */}
      <section
        className="bg-[#E07856] py-14"
        aria-labelledby="services-cta-heading"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2
            id="services-cta-heading"
            className="text-2xl font-semibold text-white mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to build a more inclusive workplace?
          </h2>
          <p className="text-[#FBEAE3] mb-8">
            We would love to hear from you. Tell us what your organisation needs
            and we will put together the right programme.
          </p>
          <Button
            variant="primary"
            href="/for-employers/work-with-us"
            className="bg-white text-[#E07856] hover:bg-[#FDF5F2] border-transparent focus-visible:ring-white"
          >
            Work with us
          </Button>
        </div>
      </section>
    </>
  );
}
