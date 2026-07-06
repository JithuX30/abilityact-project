import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata = {
  title: "Privacy policy — AbilityAction CIC",
  description:
    "AbilityAction CIC's privacy policy — what data we collect, how we use it, your rights under UK GDPR, and how to contact us about privacy.",
};

const SECTIONS = [
  { id: "what-we-collect", label: "What data we collect" },
  { id: "how-we-use", label: "How we use it" },
  { id: "your-rights", label: "Your rights" },
  { id: "cookies", label: "Cookies" },
  { id: "contact-privacy", label: "Contact us about privacy" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ───────────────────────────────────── */}
      <section className="bg-[#F7F3FC] py-12" aria-labelledby="privacy-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Privacy policy", href: "/privacy-policy" },
            ]}
          />
          <h1
            id="privacy-heading"
            className="mt-6 text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Privacy policy
          </h1>
          <p className="mt-3 text-base text-[#8B8699]">
            Last updated: <strong className="text-[#524D63]">[Date — placeholder]</strong>
          </p>

          {/* Draft disclaimer */}
          <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Note for AbilityAction:</strong> This is a draft template
              and should be reviewed and approved by a qualified legal advisor
              before this website is published publicly. It is written in good
              faith to reflect AbilityAction&apos;s current understanding of
              its data practices, but it does not constitute legal advice.
            </p>
          </div>
        </div>
      </section>

      {/* ── Table of contents + body ──────────────────────────── */}
      <div className="bg-white py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Table of contents */}
          <nav aria-label="Privacy policy contents" className="mb-12">
            <p className="text-xs font-semibold text-[#8B8699] uppercase tracking-wider mb-3">
              Contents
            </p>
            <ol className="space-y-1.5">
              {SECTIONS.map(({ id, label }, i) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-sm text-[#6B4E9E] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] rounded"
                  >
                    {i + 1}. {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Introduction */}
          <div className="space-y-4 text-[#524D63] leading-[1.7] mb-14">
            <p>
              AbilityAction CIC (&ldquo;AbilityAction&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a community interest
              company registered in England and Wales (registration number
              [placeholder]). We are the controller of the personal data we
              collect through this website and our services.
            </p>
            <p>
              We are committed to protecting your privacy and handling your
              personal data in a way that is fair, transparent, and compliant
              with the UK General Data Protection Regulation (UK GDPR) and the
              Data Protection Act 2018. This policy explains what data we
              collect, why we collect it, how we use it, and what your rights
              are.
            </p>
          </div>

          <div className="space-y-14">

            {/* ── 1. What we collect ────────────────────────── */}
            <section id="what-we-collect" aria-labelledby="collect-heading">
              <h2
                id="collect-heading"
                className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                1. What data we collect
              </h2>
              <div className="space-y-4 text-[#524D63] leading-[1.7]">
                <p>We may collect and process the following categories of personal data:</p>
                <ul className="space-y-3">
                  {[
                    { cat: "Contact data", eg: "name, email address, phone number, and postal address when you contact us, fill in a form, or sign up for our newsletter." },
                    { cat: "Enquiry and service data", eg: "the content of messages you send us, the type of enquiry or service you are interested in, and any information you share during advice sessions." },
                    { cat: "Volunteer and employment data", eg: "if you apply to volunteer or work with us: your application details, availability, and relevant background information." },
                    { cat: "Usage data", eg: "information about how you use our website, including pages visited, time spent, and browser type. We may collect this via analytics tools (see the Cookies section below)." },
                    { cat: "Accessibility preferences", eg: "settings you apply using the accessibility toolbar (such as text size, high contrast, or font preference) are stored in your browser's local storage to persist across visits. This data does not leave your device." },
                  ].map(({ cat, eg }) => (
                    <li key={cat} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#6B4E9E] shrink-0 mt-2" aria-hidden="true" />
                      <span>
                        <strong className="text-[#1F1B2E]">{cat}:</strong> {eg}
                      </span>
                    </li>
                  ))}
                </ul>
                <p>
                  We do not collect special category data (such as health
                  information or disability status) unless you choose to share it
                  with us in the context of seeking or providing services, and
                  only where we have a lawful basis to process it.
                </p>
              </div>
            </section>

            {/* ── 2. How we use it ──────────────────────────── */}
            <section id="how-we-use" aria-labelledby="use-heading">
              <h2
                id="use-heading"
                className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                2. How we use it
              </h2>
              <div className="space-y-4 text-[#524D63] leading-[1.7]">
                <p>We use the data we collect to:</p>
                <ul className="space-y-2">
                  {[
                    "Respond to your enquiries and provide the services you have requested",
                    "Send you the newsletter or updates you have opted in to receive",
                    "Process volunteer and job applications",
                    "Improve our website and understand how people use it",
                    "Meet our legal obligations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#6B4E9E] shrink-0 mt-2" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Our lawful basis for processing contact and enquiry data is
                  typically <strong className="text-[#1F1B2E]">legitimate interests</strong>{" "}
                  (where processing is necessary to respond to your message) or{" "}
                  <strong className="text-[#1F1B2E]">consent</strong> (where you
                  have opted in to marketing or newsletter communications). We
                  will always tell you at the point of collection which basis
                  applies.
                </p>
                <p>
                  We do not sell your personal data to third parties. We do not
                  use your data for automated decision-making or profiling.
                </p>
                <p>
                  We retain your data for no longer than necessary for the
                  purpose it was collected. Enquiry data is typically retained for
                  2 years; newsletter subscriber data for as long as you remain
                  subscribed. Data we are required to keep for legal reasons may
                  be retained for longer.
                </p>
              </div>
            </section>

            {/* ── 3. Your rights ────────────────────────────── */}
            <section id="your-rights" aria-labelledby="rights-heading">
              <h2
                id="rights-heading"
                className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                3. Your rights
              </h2>
              <div className="space-y-4 text-[#524D63] leading-[1.7]">
                <p>Under UK GDPR, you have the right to:</p>
                <ul className="space-y-3">
                  {[
                    { right: "Access", desc: "request a copy of the personal data we hold about you." },
                    { right: "Rectification", desc: "ask us to correct inaccurate or incomplete data." },
                    { right: "Erasure", desc: 'ask us to delete your data in certain circumstances ("right to be forgotten").' },
                    { right: "Restriction", desc: "ask us to limit how we use your data while a concern is resolved." },
                    { right: "Data portability", desc: "receive your data in a machine-readable format where applicable." },
                    { right: "Object", desc: "object to our processing your data on the basis of legitimate interests." },
                    { right: "Withdraw consent", desc: "where processing is based on consent, withdraw it at any time." },
                  ].map(({ right, desc }) => (
                    <li key={right} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#6B4E9E] shrink-0 mt-2" aria-hidden="true" />
                      <span>
                        <strong className="text-[#1F1B2E]">Right to {right}:</strong> {desc}
                      </span>
                    </li>
                  ))}
                </ul>
                <p>
                  To exercise any of these rights, please{" "}
                  <a href="/contact" className="text-[#6B4E9E] underline">
                    contact us
                  </a>
                  . We will respond within one month. If you are unhappy with how
                  we handle your data, you have the right to lodge a complaint
                  with the{" "}
                  <a
                    href="https://ico.org.uk"
                    className="text-[#6B4E9E] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Information Commissioner's Office (ICO) (opens in a new tab)"
                  >
                    Information Commissioner&apos;s Office (ICO)
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* ── 4. Cookies ────────────────────────────────── */}
            <section id="cookies" aria-labelledby="cookies-heading">
              <h2
                id="cookies-heading"
                className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                4. Cookies
              </h2>
              <div className="space-y-4 text-[#524D63] leading-[1.7]">
                <p>
                  We use cookies and similar technologies on this website. For
                  full details of what cookies we use and how to control them,
                  please read our{" "}
                  <a href="/cookie-policy" className="text-[#6B4E9E] underline">
                    cookie policy
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* ── 5. Contact about privacy ──────────────────── */}
            <section id="contact-privacy" aria-labelledby="privacy-contact-heading">
              <h2
                id="privacy-contact-heading"
                className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                5. Contact us about privacy
              </h2>
              <div className="space-y-4 text-[#524D63] leading-[1.7]">
                <p>
                  If you have any questions about this privacy policy or how we
                  handle your data, please contact us:
                </p>
                <div className="bg-[#F7F3FC] rounded-xl p-5 text-sm space-y-1">
                  <p><strong className="text-[#1F1B2E]">AbilityAction CIC</strong></p>
                  <p>Hayes Community Hub, 123 Station Road, Hayes, UB3 4AA</p>
                  <p>
                    Email:{" "}
                    <a href="mailto:privacy@abilityaction.org.uk" className="text-[#6B4E9E] underline">
                      privacy@abilityaction.org.uk
                    </a>
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}
