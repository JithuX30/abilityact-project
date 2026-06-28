import { Building2, Quote } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import CaseStudyFilter from "@/components/employers/CaseStudyFilter";

export const metadata = {
  title: "Case studies — For employers — AbilityAction CIC",
  description:
    "Real examples of how AbilityAction has helped UK employers build more inclusive workplaces.",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ───────────────────────────────────── */}
      <section
        className="bg-[#FDF5F2] py-12"
        aria-labelledby="case-studies-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "For employers", href: "/for-employers" },
              { label: "Case studies", href: "/for-employers/case-studies" },
            ]}
          />
          <h1
            id="case-studies-heading"
            className="mt-6 text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Case studies
          </h1>
          <p className="mt-3 text-lg text-[#524D63] leading-relaxed max-w-2xl">
            Every employer we work with is different. Here is a selection of
            the organisations we have supported — and what we achieved together.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: Filterable grid ────────────────────────── */}
      <section
        className="bg-white py-14 lg:py-20"
        aria-labelledby="all-cases-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="all-cases-heading"
            className="text-[1.5rem] font-semibold text-[#1F1B2E] mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            All case studies
          </h2>
          <p className="text-sm text-[#524D63] mb-8">
            Filter by sector to find examples most relevant to you.
          </p>
          <CaseStudyFilter />
        </div>
      </section>

      {/* ── SECTION 3: Featured — Moorfields ──────────────────── */}
      <section
        className="bg-[#FDF5F2] py-14 lg:py-20"
        aria-labelledby="featured-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#8B8699] uppercase tracking-wider mb-6">
            Featured partnership
          </p>
          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start">
            {/* Logo placeholder */}
            <div>
              <div
                role="img"
                aria-label="Moorfields Eye Hospital NHS Foundation Trust logo placeholder"
                className="w-full aspect-[3/2] bg-white rounded-2xl border border-[#E8E4F0] flex flex-col items-center justify-center shadow-sm"
              >
                <Building2
                  size={40}
                  className="text-[#8B8699] opacity-30"
                  aria-hidden="true"
                />
                <p className="mt-2 text-sm text-[#8B8699]">
                  Moorfields Eye Hospital
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2
                id="featured-heading"
                className="text-[1.5rem] lg:text-[2rem] font-semibold text-[#1F1B2E] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Moorfields Eye Hospital NHS Foundation Trust
              </h2>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-[#FBEAE3] text-[#E07856]">
                  Healthcare
                </span>
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-[#F4F2F7] text-[#524D63]">
                  Benefits advice
                </span>
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-[#F4F2F7] text-[#524D63]">
                  Staff training
                </span>
              </div>
              <div className="space-y-4 text-[#524D63] leading-[1.7] mb-6">
                <p>
                  Moorfields Eye Hospital NHS Foundation Trust is one of the
                  world&apos;s leading specialist eye hospitals. When they
                  approached AbilityAction, two needs were clear: patients
                  experiencing new sight loss needed benefits and employment
                  advice at point of care, and staff needed training to better
                  support disabled colleagues and patients.
                </p>
                <p>
                  We established a clinic model where an AbilityAction advisor
                  attends Moorfields on two days per week, available to patients
                  and their families during outpatient appointments. Over the
                  first year, the clinics supported 80+ patients and helped
                  identify and claim more than £120,000 in unclaimed entitlements.
                </p>
                <p>
                  Alongside the clinics, we delivered disability awareness
                  training for all clinical team leads and HR staff, covering
                  communication with disabled patients, reasonable adjustments
                  in the workplace, and how to navigate referrals to external
                  support.
                </p>
              </div>

              {/* Testimonial */}
              <figure className="border-l-4 border-[#E07856] pl-5 bg-white rounded-r-xl py-4 pr-5">
                <blockquote>
                  <Quote
                    size={16}
                    className="text-[#E07856] mb-2"
                    aria-hidden="true"
                  />
                  <p className="text-[#1F1B2E] italic leading-relaxed text-sm">
                    &ldquo;Having an AbilityAction advisor on-site meant that
                    patients who had just received life-changing news could get
                    immediate, practical help — not a leaflet and a phone number.
                    The impact on patient experience has been significant.&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-3 text-xs text-[#8B8699]">
                  — Lisa Okafor, Head of HR, Moorfields Eye Hospital NHS Trust
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CTA ───────────────────────────────────── */}
      <section className="bg-[#E07856] py-14" aria-labelledby="cases-cta-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2
            id="cases-cta-heading"
            className="text-2xl font-semibold text-white mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Could your organisation be next?
          </h2>
          <p className="text-[#FBEAE3] mb-8">
            Every engagement is tailored to your organisation&apos;s needs. Get
            in touch to start the conversation.
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
