import { Building2, Quote } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Our partners — About us — AbilityAction CIC",
  description:
    "Meet the organisations AbilityAction collaborates with to deliver better outcomes for disabled people across the UK.",
};

const OTHER_PARTNERS = [
  {
    name: "NHS West London",
    desc: "Referral partnerships to ensure our clients can access NHS mental health, occupational therapy, and GP support alongside our services.",
  },
  {
    name: "GP Centres — Hillingdon",
    desc: "We work with local GP practices to identify patients who could benefit from disability support, benefits advice, or social prescribing.",
  },
  {
    name: "Hillingdon Council",
    desc: "Joint delivery of community outreach events, housing advice surgeries, and borough-wide disability awareness initiatives.",
  },
  {
    name: "Royal National Institute of Blind People (RNIB)",
    desc: "Collaborative support for people with sight loss, combining AbilityAction's advice services with RNIB's specialist visual impairment expertise.",
  },
  {
    name: "Disability Rights UK",
    desc: "Policy collaboration and shared resources, keeping our advice up to date with the latest changes to disability law and welfare rights.",
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ───────────────────────────────────── */}
      <section className="bg-[#F7F3FC] py-12" aria-labelledby="partners-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About us", href: "/about-us/our-story" },
              { label: "Our partners", href: "/about-us/partners" },
            ]}
          />
          <h1
            id="partners-heading"
            className="mt-6 text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our partners
          </h1>
          <p className="mt-3 text-lg text-[#524D63] leading-relaxed max-w-2xl">
            Collaboration is central to our mission. By working alongside NHS
            services, local authorities, and specialist organisations, we can
            offer our clients more than any of us could deliver alone.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: Featured — Moorfields Eye Hospital ─────── */}
      <section className="bg-white py-14 lg:py-20" aria-labelledby="moorfields-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#8B8699] uppercase tracking-wider mb-6">
            Featured partnership
          </p>
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
            {/* Logo placeholder */}
            <div>
              <div
                role="img"
                aria-label="Moorfields Eye Hospital NHS Foundation Trust logo placeholder"
                className="w-full aspect-[3/2] bg-[#F4F2F7] rounded-2xl border border-[#E8E4F0] flex flex-col items-center justify-center"
              >
                <Building2
                  size={40}
                  className="text-[#8B8699] opacity-40"
                  aria-hidden="true"
                />
                <p className="mt-2 text-sm text-[#8B8699]">Moorfields Eye Hospital</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <h2
                id="moorfields-heading"
                className="text-[1.5rem] lg:text-[2rem] font-semibold text-[#1F1B2E] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Moorfields Eye Hospital NHS Foundation Trust
              </h2>
              <div className="space-y-4 text-[#524D63] leading-[1.7] mb-6">
                <p>
                  Our partnership with Moorfields Eye Hospital — the UK&apos;s
                  leading specialist eye care hospital — began in 2020 and
                  represents one of our most impactful collaborations. Many
                  patients at Moorfields experience significant sight loss that
                  affects every aspect of their lives: work, housing,
                  independence, and mental health.
                </p>
                <p>
                  Through the partnership, AbilityAction advisors offer on-site
                  benefits advice and welfare rights clinics, helping patients
                  understand what financial support they are entitled to at what
                  is often a difficult time. We also provide employment support
                  for patients whose sight loss has affected their ability to
                  continue in their current role, and signpost to accessible
                  housing services.
                </p>
                <p>
                  To date, the partnership has supported over 80 patients and
                  families, with combined unclaimed benefits of more than
                  £120,000 identified and claimed. For many people, it has also
                  been the first time they have had their wider needs — not just
                  their clinical needs — fully acknowledged.
                </p>
              </div>

              {/* Placeholder quote */}
              <figure className="border-l-4 border-[#6B4E9E] pl-5 bg-[#F7F3FC] rounded-r-xl py-4 pr-5">
                <blockquote>
                  <Quote
                    size={18}
                    className="text-[#6B4E9E] mb-2"
                    aria-hidden="true"
                  />
                  <p className="text-[#1F1B2E] italic leading-relaxed">
                    &ldquo;AbilityAction came to see me when I was still
                    processing my diagnosis. They helped me claim PIP, spoke to
                    my employer about adjustments, and made sure I knew I had
                    options. I don&apos;t know how I would have managed without
                    them.&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-3 text-sm text-[#8B8699]">
                  — Moorfields patient (name withheld with permission){" "}
                  <em>(Placeholder example quote)</em>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Other partners grid ───────────────────── */}
      <section className="bg-[#F4F2F7] py-14" aria-labelledby="other-partners-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="other-partners-heading"
            className="text-[1.5rem] font-semibold text-[#1F1B2E] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            More partners
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {OTHER_PARTNERS.map(({ name, desc }) => (
              <div
                key={name}
                className="bg-white border border-[#E8E4F0] rounded-2xl p-5"
              >
                {/* Logo placeholder */}
                <div
                  role="img"
                  aria-label={`${name} logo placeholder`}
                  className="w-full h-16 bg-[#F4F2F7] rounded-xl border border-[#E8E4F0] flex items-center justify-center mb-4"
                >
                  <span className="text-xs font-medium text-[#8B8699]">
                    {name}
                  </span>
                </div>
                <h3
                  className="font-semibold text-[#1F1B2E] mb-1.5"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {name}
                </h3>
                <p className="text-sm text-[#524D63] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Become a partner CTA ──────────────────── */}
      <section className="bg-[#6B4E9E] py-14" aria-labelledby="partner-cta-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2
            id="partner-cta-heading"
            className="text-2xl font-semibold text-white mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Interested in partnering with us?
          </h2>
          <p className="text-[#EDE6F7] mb-8">
            We are always open to new collaborations that help us reach more
            disabled people with the support they need.
          </p>
          <Button variant="cta" href="/get-involved">
            Get in touch about a partnership
          </Button>
        </div>
      </section>
    </>
  );
}
