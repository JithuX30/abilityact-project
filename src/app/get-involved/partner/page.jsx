import {
  Share2,
  Layers,
  PoundSterling,
  Network,
  ArrowRight,
} from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import PartnerForm from "@/components/get-involved/PartnerForm";

export const metadata = {
  title: "Partner with us — Get involved — AbilityAction CIC",
  description:
    "Partner with AbilityAction CIC. We collaborate with charities, NHS trusts, councils, and community organisations to extend disability support across West London.",
};

const PARTNERSHIP_TYPES = [
  {
    id: "referral",
    icon: Share2,
    name: "Referral partnerships",
    desc: "If your organisation works with disabled people or their families, a referral partnership means you can direct people to our services knowing they will be properly supported. We offer regular liaison meetings, feedback on outcomes, and reciprocal referrals where appropriate.",
  },
  {
    id: "joint",
    icon: Layers,
    name: "Joint programmes",
    desc: "We co-design and co-deliver programmes with partner organisations where our expertise complements yours. This might mean running a benefits advice clinic inside your premises, co-facilitating workshops, or jointly applying for funding to deliver a new service.",
  },
  {
    id: "funding",
    icon: PoundSterling,
    name: "Funding and sponsorship",
    desc: "If your organisation or trust funds disability-related work, we would welcome a conversation about how our programmes align with your grant criteria. We are experienced in partnership funding bids and can provide evidence of impact, case studies, and financial reporting.",
  },
  {
    id: "community",
    icon: Network,
    name: "Community collaboration",
    desc: "Sometimes the best partnerships are informal: sharing venues, cross-promoting services, appearing at each other's events, or working together to reach a specific community. We are always open to exploring what shared goals might look like in practice.",
  },
];

export default function PartnerPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ───────────────────────────────────── */}
      <section className="bg-[#EAF7EF] py-12" aria-labelledby="partner-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Get involved", href: "/get-involved/volunteer" },
              { label: "Partner with us", href: "/get-involved/partner" },
            ]}
          />
          <h1
            id="partner-heading"
            className="mt-6 text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Partner with us
          </h1>
          <p className="mt-4 text-lg text-[#524D63] leading-relaxed max-w-2xl">
            AbilityAction works best when it works with others. We are looking
            to build lasting relationships with charities, NHS trusts, councils,
            GP practices, and community organisations who share our commitment
            to disability inclusion.
          </p>
          <p className="mt-3 text-base text-[#524D63] leading-relaxed max-w-2xl">
            If your organisation supports disabled people — or wants to — we
            would welcome a conversation about what collaboration might look
            like. There is no single model; every partnership we have built has
            started with a straightforward conversation about shared goals.
          </p>

          <div className="mt-3 bg-white border-l-4 border-[#2A7A4B] pl-5 py-4 pr-5 rounded-r-xl max-w-2xl">
            <p className="text-sm text-[#524D63] italic leading-relaxed">
              This page is for <strong className="text-[#1F1B2E]">organisations</strong> — charities, NHS bodies,
              councils, and community groups — looking to collaborate with us.
              If you are a business looking to improve workplace inclusion,
              please visit our{" "}
              <a href="/for-employers" className="text-[#2A7A4B] underline">
                For employers
              </a>{" "}
              section instead.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Ways to partner ───────────────────────── */}
      <section
        className="bg-white py-14 lg:py-20"
        aria-labelledby="ways-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="ways-heading"
            className="text-[1.5rem] lg:text-[2rem] font-semibold text-[#1F1B2E] mb-10"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ways to partner
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {PARTNERSHIP_TYPES.map(({ id, icon: Icon, name, desc }) => (
              <div
                key={id}
                className="flex gap-5 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EAF7EF] flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-[#2A7A4B]" aria-hidden="true" />
                </div>
                <div>
                  <h3
                    className="font-semibold text-[#1F1B2E] mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {name}
                  </h3>
                  <p className="text-sm text-[#524D63] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Existing partners teaser ──────────────── */}
      <section
        className="bg-[#F4F2F7] py-14"
        aria-labelledby="existing-partners-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="existing-partners-heading"
            className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Who we already work with
          </h2>
          <p className="text-[#524D63] leading-relaxed mb-4">
            We have established partnerships with Moorfields Eye Hospital NHS
            Foundation Trust, NHS West London Integrated Care Board, the
            London Borough of Hillingdon, the Royal National Institute of
            Blind People, and Disability Rights UK — among others. These
            partnerships range from formal service-level agreements to informal
            referral arrangements and joint community events.
          </p>
          <p className="text-[#524D63] leading-relaxed mb-6">
            Our partnerships work because we are honest about what we can
            offer, we respect the expertise of the organisations we work with,
            and we stay focused on outcomes for the people we both serve.
          </p>
          <a
            href="/about-us/partners"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2A7A4B] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A7A4B] rounded"
          >
            Read about our current partners
            <ArrowRight size={14} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* ── SECTION 4: Partnership enquiry form ──────────────── */}
      <section
        className="bg-white py-14 lg:py-20"
        aria-labelledby="partner-form-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-start">

            {/* Form column */}
            <div>
              <h2
                id="partner-form-heading"
                className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Send a partnership enquiry
              </h2>
              <p className="text-[#524D63] text-sm mb-6 leading-relaxed">
                Tell us about your organisation and what kind of collaboration
                you have in mind. We will respond within 5 working days — and
                we will not make any commitments before we have had a proper
                conversation.
              </p>
              <PartnerForm />
            </div>

            {/* Info sidebar */}
            <aside aria-label="Partnership information">
              <div className="bg-[#EAF7EF] border border-[#B8DFCB] rounded-2xl p-6 sticky top-24">
                <h2
                  className="font-semibold text-[#1F1B2E] mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  What to expect
                </h2>
                <ul className="space-y-4 text-sm text-[#524D63] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#2A7A4B] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">1</span>
                    <span>We will respond within 5 working days to acknowledge your enquiry and ask any initial questions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#2A7A4B] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">2</span>
                    <span>We arrange a call or meeting to understand your organisation&apos;s work and explore what partnership could look like.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#2A7A4B] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">3</span>
                    <span>If there is a clear shared purpose, we draft a simple partnership framework that works for both organisations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#2A7A4B] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">4</span>
                    <span>We start small, learn together, and build from there — no commitment to a model that is not working.</span>
                  </li>
                </ul>

                <div className="border-t border-[#B8DFCB] pt-5 mt-5">
                  <p className="text-sm text-[#524D63] leading-relaxed">
                    <strong className="font-semibold text-[#1F1B2E]">No commitment required.</strong>{" "}
                    An initial conversation carries no obligations for either party.
                  </p>
                </div>

                <div className="border-t border-[#B8DFCB] pt-5 mt-4">
                  <p className="text-sm font-semibold text-[#1F1B2E] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    Prefer to talk first?
                  </p>
                  <a
                    href="mailto:partnerships@abilityaction.org.uk"
                    className="text-sm text-[#2A7A4B] hover:underline break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A7A4B] rounded"
                  >
                    partnerships@abilityaction.org.uk
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
