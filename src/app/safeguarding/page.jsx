import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Safeguarding policy — AbilityAction CIC",
  description:
    "AbilityAction CIC's safeguarding policy — our commitment to protecting children and vulnerable adults, and how to report a concern.",
};

export default function SafeguardingPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ───────────────────────────────────── */}
      <section className="bg-[#F7F3FC] py-12" aria-labelledby="safe-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Safeguarding policy", href: "/safeguarding" },
            ]}
          />
          <h1
            id="safe-heading"
            className="mt-6 text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Safeguarding policy
          </h1>
          <p className="mt-3 text-lg text-[#524D63] leading-relaxed max-w-2xl">
            AbilityAction CIC is committed to the safety and wellbeing of
            everyone who uses our services, volunteers with us, or comes into
            contact with our organisation.
          </p>
        </div>
      </section>

      {/* ── Policy prose ──────────────────────────────────────── */}
      <div className="bg-white py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* ── SECTION 2: Commitment ─────────────────────────── */}
          <section aria-labelledby="safe-commitment-heading">
            <h2
              id="safe-commitment-heading"
              className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our commitment
            </h2>
            <div className="space-y-4 text-[#524D63] leading-[1.7]">
              <p>
                AbilityAction CIC operates a zero-tolerance approach to abuse,
                neglect, exploitation, and harm. This policy applies to the
                protection of{" "}
                <strong className="text-[#1F1B2E]">children</strong> (anyone
                under the age of 18) and{" "}
                <strong className="text-[#1F1B2E]">adults at risk</strong>{" "}
                (adults who have care and support needs and may be unable to
                protect themselves from abuse or neglect).
              </p>
              <p>
                All staff, volunteers, trustees, and contractors working with
                AbilityAction are required to uphold this policy. Safeguarding
                responsibilities are taken seriously at every level of our
                organisation, including by our board of trustees.
              </p>
              <p>
                Where required by the nature of a role, we carry out enhanced
                Disclosure and Barring Service (DBS) checks and provide regular
                safeguarding training. We review our safeguarding practices
                annually or whenever there is a relevant change in legislation
                or guidance.
              </p>
            </div>
          </section>

          {/* ── SECTION 3: How to report ──────────────────────── */}
          <section aria-labelledby="safe-report-heading">
            <h2
              id="safe-report-heading"
              className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              How to report a safeguarding concern
            </h2>
            <p className="text-[#524D63] leading-[1.7] mb-5">
              If you have a concern about the safety or wellbeing of a child or
              adult at risk — whether or not the concern involves AbilityAction
              — please act on it promptly. It is always better to raise a
              concern that turns out to be unfounded than to stay silent about
              something that could cause harm.
            </p>
            <ol className="space-y-5">
              {[
                "If someone is in immediate danger, call 999 first.",
                "Contact our Safeguarding Lead as soon as possible, using the details below. Do not investigate the concern yourself or speak to the alleged abuser.",
                "Record what you saw, heard, or were told — using the person's own words where possible. Note the date, time, and who was present.",
                "Our Safeguarding Lead will assess the concern and decide the appropriate next steps, which may include a referral to the local authority safeguarding team or the police.",
                "You will be kept informed of what action has been taken, within the limits of confidentiality.",
              ].map((step, i) => (
                <li key={i} className="flex gap-4 text-[#524D63] leading-[1.7]">
                  <span
                    className="w-7 h-7 rounded-full bg-[#6B4E9E] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            {/* Safeguarding lead contact */}
            <div className="mt-8 bg-[#F7F3FC] border border-[#E8E4F0] rounded-xl p-5">
              <p className="text-sm font-semibold text-[#1F1B2E] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                Designated Safeguarding Lead
              </p>
              <p className="text-sm text-[#524D63] leading-relaxed mb-1">
                <strong>[Name placeholder]</strong> — Safeguarding Lead,
                AbilityAction CIC
              </p>
              <p className="text-sm text-[#524D63] mb-1">
                Email:{" "}
                <a
                  href="mailto:safeguarding@abilityaction.org.uk"
                  className="text-[#6B4E9E] underline"
                >
                  safeguarding@abilityaction.org.uk
                </a>
              </p>
              <p className="text-sm text-[#524D63] mb-3">
                Phone:{" "}
                <a href="tel:07933212547" className="text-[#6B4E9E] underline">
                  07933 212547
                </a>{" "}
                (Mon–Fri 9am–5pm)
              </p>
              <p className="text-xs text-[#8B8699]">
                Outside office hours, or if you cannot reach the Safeguarding
                Lead, contact the{" "}
                <strong>Hillingdon Adults Safeguarding team</strong> on 01895
                556633, or the NSPCC helpline on 0808 800 5000 (children).
              </p>
            </div>

            <div className="mt-6">
              <Button variant="tertiary" href="/contact">
                Contact us about a safeguarding concern
              </Button>
            </div>
          </section>

          {/* ── SECTION 4: Legislation ────────────────────────── */}
          <section aria-labelledby="safe-law-heading">
            <h2
              id="safe-law-heading"
              className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Relevant legislation
            </h2>
            <div className="space-y-4 text-[#524D63] leading-[1.7]">
              <p>
                This policy is informed by and complies with the following
                legislation:
              </p>
              <ul className="space-y-3">
                {[
                  {
                    name: "Care Act 2014",
                    desc: "Sets out local authorities' duties to safeguard adults at risk. Defines the six principles of safeguarding: empowerment, prevention, proportionality, protection, partnership, and accountability. Our safeguarding approach is grounded in these principles.",
                  },
                  {
                    name: "Children Act 1989 and 2004",
                    desc: "Establishes the framework for child protection in England and Wales, including the principle that the welfare of the child is paramount.",
                  },
                  {
                    name: "Equality Act 2010",
                    desc: "Protects people from discrimination based on protected characteristics including disability, age, and gender. AbilityAction applies the Equality Act both in how we treat the people we serve and in our own employment and governance practices.",
                  },
                  {
                    name: "UK GDPR and Data Protection Act 2018",
                    desc: "Governs how personal and sensitive information is handled. Safeguarding disclosures are treated as sensitive personal data. Information is shared with statutory agencies only where there is a legal basis to do so — generally where sharing is necessary to protect someone from serious harm.",
                  },
                ].map(({ name, desc }) => (
                  <li key={name} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#6B4E9E] shrink-0 mt-2" aria-hidden="true" />
                    <span>
                      <strong className="text-[#1F1B2E]">{name}:</strong> {desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── SECTION 5: Review date ────────────────────────── */}
          <section aria-labelledby="safe-review-heading">
            <h2
              id="safe-review-heading"
              className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Review date
            </h2>
            <div className="bg-[#F4F2F7] rounded-xl px-5 py-4 text-sm text-[#524D63] leading-relaxed">
              <p>
                This policy was last reviewed in{" "}
                <strong className="text-[#1F1B2E]">[Month Year — placeholder]</strong>{" "}
                and is reviewed annually, or sooner if there is a relevant
                change in legislation, guidance, or organisational
                circumstances. The next scheduled review is{" "}
                <strong className="text-[#1F1B2E]">[Month Year — placeholder]</strong>.
              </p>
              <p className="mt-2">
                Approved by the Board of Trustees of AbilityAction CIC.
              </p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
