import { Clock, MapPin, ExternalLink } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import OpportunitiesFilter from "@/components/jobs/OpportunitiesFilter";

export const metadata = {
  title: "Jobs and opportunities — AbilityAction CIC",
  description:
    "Vacancies at AbilityAction CIC and a curated board of disability-friendly employment, volunteering, and training opportunities.",
};

const INTERNAL_JOBS = [
  {
    id: "j1",
    title: "Employment Advisor",
    type: "Part-time",
    location: "Hayes, West London",
    closing: "31 July 2026",
    desc: "Support disabled people and those with long-term health conditions to find, keep, and thrive in paid work. You will carry a caseload of clients, deliver one-to-one employment support sessions, and liaise with employers on reasonable adjustments. Previous experience in careers guidance, social work, or a disability context is desirable but not essential — we value lived experience highly.",
  },
  {
    id: "j2",
    title: "Volunteer Coordinator",
    type: "Full-time",
    location: "Hayes, West London (hybrid)",
    closing: "15 August 2026",
    desc: "Manage the recruitment, onboarding, training, and ongoing support of AbilityAction's growing volunteer team. You will be the first point of contact for new volunteer enquiries, match volunteers to roles, and ensure our volunteer programme is inclusive, well-supported, and delivering impact. Experience managing volunteers or community programmes is essential.",
  },
  {
    id: "j3",
    title: "BSL Community Outreach Worker",
    type: "Part-time",
    location: "West London",
    closing: "Open — rolling applications",
    desc: "Build relationships with the Deaf community across West London, raise awareness of AbilityAction's services, and provide outreach in British Sign Language and Sri Lankan Sign Language. You should be a fluent BSL user with strong community networks and a commitment to Deaf-led approaches. This role is open for rolling applications.",
  },
];

const TYPE_COLOURS = {
  "Full-time": "bg-[#E0EDFA] text-[#2D6CA3]",
  "Part-time": "bg-[#EDE6F7] text-[#6B4E9E]",
  Volunteer: "bg-[#DFF0E8] text-[#2E7D54]",
};

export default function JobsPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ───────────────────────────────────── */}
      <section className="bg-[#F7F3FC] py-12" aria-labelledby="jobs-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Jobs and opportunities", href: "/jobs-and-opportunities" },
            ]}
          />
          <h1
            id="jobs-heading"
            className="mt-6 text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Jobs and opportunities
          </h1>
          <p className="mt-3 text-lg text-[#524D63] leading-relaxed max-w-2xl">
            Roles at AbilityAction, plus a curated board of disability-friendly
            employment, volunteering, and training opportunities from
            organisations we trust.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: Internal vacancies ────────────────────── */}
      <section
        className="bg-white py-14 lg:py-20"
        aria-labelledby="internal-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="internal-heading"
            className="text-[1.5rem] font-semibold text-[#1F1B2E] mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Work with us
          </h2>
          <p className="text-[#524D63] mb-8 max-w-2xl leading-relaxed">
            AbilityAction is a small, ambitious CIC. We are committed to being
            a genuinely inclusive employer — we actively welcome applications
            from disabled people, and all our roles come with reasonable
            adjustments as standard.
          </p>

          <div className="space-y-5">
            {INTERNAL_JOBS.map(({ id, title, type, location, closing, desc }) => (
              <article
                key={id}
                className="bg-white border-2 border-[#E8E4F0] rounded-2xl p-6 hover:border-[#6B4E9E] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          TYPE_COLOURS[type] ?? "bg-[#F4F2F7] text-[#524D63]"
                        }`}
                      >
                        {type}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-semibold text-[#1F1B2E] mb-3"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {title}
                    </h3>
                    <p className="text-sm text-[#524D63] leading-relaxed mb-4">
                      {desc}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs text-[#8B8699]">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-[#6B4E9E]" aria-hidden="true" />
                        {location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} className="text-[#6B4E9E]" aria-hidden="true" />
                        Closes: {closing}
                      </span>
                    </div>
                  </div>

                  {/* Individual application pages not yet built — placeholder href */}
                  <a
                    href="#"
                    aria-label={`Apply for ${title} (application form coming soon)`}
                    className="shrink-0 self-start inline-flex items-center h-10 px-5 bg-[#6B4E9E] text-white text-sm font-medium rounded-lg hover:bg-[#8B6BC4] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] focus-visible:ring-offset-2"
                  >
                    Apply
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 p-5 bg-[#F4F2F7] rounded-xl border border-[#E8E4F0]">
            <p className="text-sm text-[#524D63] leading-relaxed">
              <strong className="text-[#1F1B2E]">Reasonable adjustments:</strong>{" "}
              We are committed to making our recruitment process accessible. If
              you need any adjustments — such as application forms in alternative
              formats, BSL interpretation for interviews, or extra time — please
              mention this when you apply or contact us before applying.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Opportunities board ───────────────────── */}
      <section
        className="bg-[#F4F2F7] py-14 lg:py-20"
        aria-labelledby="opps-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="opps-heading"
            className="text-[1.5rem] font-semibold text-[#1F1B2E] mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Disability-friendly opportunities
          </h2>
          <p className="text-[#524D63] mb-8 max-w-2xl leading-relaxed">
            Roles from organisations we know and trust — employment, volunteering,
            and training opportunities curated for the disability community.
            External links open on the employer&apos;s own website.
          </p>
          <OpportunitiesFilter />
        </div>
      </section>

      {/* ── SECTION 4: Employment support CTA ────────────────── */}
      <section
        className="bg-[#E07856] py-14"
        aria-labelledby="support-cta-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2
            id="support-cta-heading"
            className="text-2xl font-semibold text-white mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Need help with your job search?
          </h2>
          <p className="text-[#FBEAE3] mb-8 leading-relaxed max-w-xl mx-auto">
            We offer free CV help, interview preparation, and advice on
            workplace adjustments and Access to Work — tailored to your
            situation. No referral needed.
          </p>
          <Button
            variant="primary"
            href="/advice-and-support/employment-support"
            className="bg-white text-[#E07856] border-transparent hover:bg-[#FDF5F2] focus-visible:ring-white"
          >
            Get employment support
          </Button>
        </div>
      </section>
    </>
  );
}
