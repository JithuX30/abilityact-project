import {
  Briefcase,
  Users,
  TrendingUp,
  Globe,
  BookOpen,
  Search,
  Handshake,
  Languages,
  Building2,
  Quote,
} from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "For employers — AbilityAction CIC",
  description:
    "AbilityAction helps UK employers build genuinely inclusive workplaces — through training, audits, supported placements, and Disability Confident support.",
};

const STATS = [
  {
    value: "28.4",
    unit: "pp",
    label: "Disability employment gap",
    detail:
      "Disabled people are 28.4 percentage points less likely to be in employment than non-disabled people — the largest it has been in a decade.",
    source: "ONS, 2023",
  },
  {
    value: "7.7m",
    unit: "",
    label: "Working-age disabled people",
    detail:
      "7.7 million working-age disabled people live in the UK. That is a talent pool most employers are failing to reach.",
    source: "DWP, 2023",
  },
  {
    value: "35%",
    unit: "",
    label: "Outperformance advantage",
    detail:
      "Companies in the top quartile for workforce diversity are 35% more likely to outperform their industry peers financially.",
    source: "McKinsey, 2023",
  },
  {
    value: "23k+",
    unit: "",
    label: "Disability Confident employers",
    detail:
      "Over 23,000 UK employers have signed up to the Disability Confident scheme — but many need support to move from commitment to practice.",
    source: "DWP, 2024",
  },
];

const SERVICES = [
  {
    icon: BookOpen,
    name: "Diversity and inclusion training",
    desc: "Tailored workshops for managers and teams covering disability awareness, unconscious bias, and creating inclusive cultures.",
    href: "/for-employers/services",
  },
  {
    icon: Search,
    name: "Workplace accessibility audits",
    desc: "We assess your physical and digital environment and provide a practical, prioritised action plan.",
    href: "/for-employers/services",
  },
  {
    icon: Users,
    name: "Supported placements",
    desc: "We support disabled candidates and your team throughout recruitment and the first months of employment.",
    href: "/for-employers/services",
  },
  {
    icon: Languages,
    name: "Sign language awareness",
    desc: "BSL and SLSL introductory workshops so your team can communicate confidently with deaf colleagues and customers.",
    href: "/for-employers/services",
  },
];

const CASE_PREVIEWS = [
  {
    org: "Moorfields Eye Hospital NHS Trust",
    logo: "Moorfields Eye Hospital",
    sector: "Healthcare",
    outcome:
      "On-site AbilityAction advice clinics helped 80+ patients and staff navigate benefit entitlements, alongside staff disability awareness training.",
  },
  {
    org: "London Borough of Hillingdon",
    logo: "Hillingdon Council",
    sector: "Public sector",
    outcome:
      "Disability Confident Employer status achieved in six months. All HR and management staff completed disability confidence training.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "AbilityAction didn't just deliver training — they helped us understand that inclusion is an ongoing practice, not a box to tick. Our managers now have the confidence to have conversations they used to avoid.",
    name: "Lisa Okafor",
    role: "Head of HR, Moorfields Eye Hospital NHS Trust",
  },
  {
    quote:
      "The accessibility audit was worth every penny. We received a clear, prioritised report with practical steps we could actually implement — not a 40-page document gathering dust.",
    name: "James Whitfield",
    role: "Operations Director, London Borough of Hillingdon",
  },
  {
    quote:
      "We had a BSL-using customer who had never been able to properly communicate with our staff. After the sign language workshop, that changed. Simple intervention, huge impact.",
    name: "Preethi Srinivasan",
    role: "Learning and Development Manager, Boots UK",
  },
];

export default function ForEmployersPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ───────────────────────────────────── */}
      <section
        className="bg-[#FDF5F2] py-12 lg:py-20"
        aria-labelledby="employers-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "For employers", href: "/for-employers" },
            ]}
          />
          <div className="mt-6 grid lg:grid-cols-[55fr_45fr] gap-10 lg:gap-16 items-center">
            <div>
              <h1
                id="employers-heading"
                className="text-[2rem] sm:text-[2.75rem] font-semibold text-[#1F1B2E] leading-[1.1]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Build an inclusive workplace
              </h1>
              <p className="mt-4 text-lg text-[#524D63] leading-relaxed max-w-lg">
                AbilityAction helps UK employers attract, retain, and support
                disabled talent — and build workplaces where everyone can do
                their best work. We offer practical, expert-led programmes
                grounded in lived experience.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="cta" href="/for-employers/work-with-us">
                  Work with us
                </Button>
                <Button variant="secondary" href="/for-employers/services">
                  See our services
                </Button>
              </div>
            </div>

            <div
              role="img"
              aria-label="A facilitator leads a disability inclusion training session; diverse employees are seated around a table engaged in discussion"
              className="w-full aspect-[4/3] bg-[#FBEAE3] rounded-[24px] border border-[#F5C9B8] flex flex-col items-center justify-center"
            >
              <Briefcase
                size={56}
                className="text-[#E07856] opacity-30"
                aria-hidden="true"
              />
              <p className="mt-2 text-sm text-[#c8684a] opacity-60">
                Training session photo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Business case ──────────────────────────── */}
      <section
        className="bg-white py-14 lg:py-20"
        aria-labelledby="business-case-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="business-case-heading"
            className="text-[1.5rem] lg:text-[2rem] font-semibold text-[#1F1B2E] mb-3 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why hire inclusively
          </h2>
          <p className="text-[#524D63] text-center mb-10 max-w-xl mx-auto">
            The case for disability inclusion isn&apos;t just moral — it makes
            strong business sense.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STATS.map(({ value, unit, label, detail, source }) => (
              <div
                key={label}
                className="bg-[#FDF5F2] border border-[#F5C9B8] rounded-2xl p-5"
              >
                <p
                  className="text-[2.25rem] font-bold text-[#E07856] leading-none mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <span className="sr-only">{value}{unit} — </span>
                  <span aria-hidden="true">{value}<span className="text-xl">{unit}</span></span>
                </p>
                <p className="font-semibold text-[#1F1B2E] text-sm mb-2">
                  {label}
                </p>
                <p className="text-xs text-[#524D63] leading-relaxed mb-2">
                  {detail}
                </p>
                <p className="text-xs text-[#8B8699]">{source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Disability Confident explainer ─────────── */}
      <section
        className="bg-[#F4F2F7] py-14"
        aria-labelledby="dc-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start">
            <div>
              <h2
                id="dc-heading"
                className="text-[1.5rem] lg:text-[2rem] font-semibold text-[#1F1B2E] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Disability Confident
              </h2>
              <div className="space-y-4 text-[#524D63] leading-[1.7]">
                <p>
                  Disability Confident is a UK government scheme that helps
                  employers recruit, retain, and develop disabled people. There
                  are three levels — Committed, Employer, and Leader — and
                  over 23,000 organisations across the UK have signed up.
                </p>
                <p>
                  Moving through the levels requires practical action: changing
                  recruitment practices, offering flexible working, making
                  reasonable adjustments, and building a genuinely inclusive
                  culture. That is where many employers get stuck — and where
                  AbilityAction can help.
                </p>
                <p>
                  We provide the training, auditing, and hands-on support to
                  help your organisation achieve and maintain Disability
                  Confident status, at whatever level is right for you — and to
                  make sure the commitment leads to real change rather than a
                  badge on your website.
                </p>
              </div>
              <div className="mt-6">
                <Button variant="cta" href="/for-employers/work-with-us">
                  Get Disability Confident support
                </Button>
              </div>
            </div>

            {/* Three levels */}
            <div className="space-y-4">
              {[
                {
                  level: "Level 1 — Committed",
                  desc: "Your starting point: commit to the scheme, review your hiring practices, and offer at least one active activity to encourage disabled people to apply.",
                },
                {
                  level: "Level 2 — Employer",
                  desc: "Demonstrate tangible progress: guaranteed interview schemes, flexible working, reasonable adjustments, disability awareness for managers.",
                },
                {
                  level: "Level 3 — Leader",
                  desc: "The gold standard: champion disability confidence in your supply chain, industry, and community. Only the most genuinely committed organisations reach this level.",
                },
              ].map(({ level, desc }) => (
                <div
                  key={level}
                  className="bg-white border border-[#E8E4F0] rounded-xl p-5"
                >
                  <h3
                    className="font-semibold text-[#1F1B2E] mb-1.5"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {level}
                  </h3>
                  <p className="text-sm text-[#524D63] leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Services preview ───────────────────────── */}
      <section
        className="bg-white py-14 lg:py-20"
        aria-labelledby="services-preview-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="services-preview-heading"
            className="text-[1.5rem] lg:text-[2rem] font-semibold text-[#1F1B2E] mb-10 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What we offer
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map(({ icon: Icon, name, desc, href }) => (
              <a
                key={name}
                href={href}
                className="group bg-white border border-[#E8E4F0] rounded-2xl p-5 shadow-[0_2px_8px_rgba(31,27,46,0.05)] hover:border-[#E07856] hover:shadow-md transition-all block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E07856] focus-visible:ring-offset-2"
                aria-label={`${name} — learn more about this service`}
              >
                <div className="w-11 h-11 rounded-xl bg-[#FBEAE3] flex items-center justify-center mb-4">
                  <Icon
                    size={22}
                    className="text-[#E07856]"
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className="font-semibold text-[#1F1B2E] mb-1.5 group-hover:text-[#E07856] transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {name}
                </h3>
                <p className="text-sm text-[#524D63] leading-relaxed">{desc}</p>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="secondary" href="/for-employers/services">
              Full service details
            </Button>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Case studies preview ──────────────────── */}
      <section
        className="bg-[#FDF5F2] py-14"
        aria-labelledby="case-preview-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="case-preview-heading"
            className="text-[1.5rem] font-semibold text-[#1F1B2E] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            See how we&apos;ve helped
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {CASE_PREVIEWS.map(({ org, logo, sector, outcome }) => (
              <div
                key={org}
                className="bg-white border border-[#E8E4F0] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(31,27,46,0.05)]"
              >
                <div
                  role="img"
                  aria-label={`${logo} logo placeholder`}
                  className="w-full h-20 bg-[#F4F2F7] border-b border-[#E8E4F0] flex items-center justify-center gap-2"
                >
                  <Building2
                    size={22}
                    className="text-[#8B8699] opacity-40"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-medium text-[#8B8699]">
                    {logo}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-[#E07856] uppercase tracking-wider mb-1">
                    {sector}
                  </p>
                  <h3
                    className="font-semibold text-[#1F1B2E] mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {org}
                  </h3>
                  <p className="text-sm text-[#524D63] leading-relaxed">
                    {outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="secondary" href="/for-employers/case-studies">
            View all case studies
          </Button>
        </div>
      </section>

      {/* ── SECTION 6: Testimonials ───────────────────────────── */}
      <section
        className="bg-white py-14 lg:py-20"
        aria-labelledby="testimonials-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="testimonials-heading"
            className="text-[1.5rem] font-semibold text-[#1F1B2E] mb-8 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What employers say
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ quote, name, role }) => (
              <figure
                key={name}
                className="bg-[#FDF5F2] border border-[#F5C9B8] rounded-2xl p-6"
              >
                <Quote
                  size={20}
                  className="text-[#E07856] opacity-40 mb-3"
                  aria-hidden="true"
                />
                <blockquote>
                  <p className="text-[#1F1B2E] italic leading-[1.7] text-sm">
                    &ldquo;{quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t border-[#F5C9B8]">
                  <p className="font-semibold text-[#1F1B2E] text-sm">{name}</p>
                  <p className="text-xs text-[#8B8699] mt-0.5">{role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CTA band ───────────────────────────────── */}
      <section
        className="bg-[#C0532F] py-14"
        aria-labelledby="employers-cta-heading"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2
            id="employers-cta-heading"
            className="text-2xl font-semibold text-white mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to get started?
          </h2>
          <p className="text-[#FBEAE3] mb-8">
            Tell us about your organisation and we will put together the right
            programme for you.
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
