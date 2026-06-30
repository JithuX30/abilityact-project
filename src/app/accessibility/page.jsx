import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Accessibility statement — AbilityAction CIC",
  description:
    "AbilityAction CIC's commitment to web accessibility, the features currently available, known limitations, and how to request alternative formats.",
};

export default function AccessibilityPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ───────────────────────────────────── */}
      <section className="bg-[#F7F3FC] py-12" aria-labelledby="access-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Accessibility statement", href: "/accessibility" },
            ]}
          />
          <h1
            id="access-heading"
            className="mt-6 text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Accessibility statement
          </h1>
          <p className="mt-3 text-lg text-[#524D63] leading-relaxed max-w-2xl">
            AbilityAction CIC is committed to making this website accessible to
            everyone. This page explains what we have done, what we know still
            needs work, and how to get in touch if you experience a barrier.
          </p>
          <p className="mt-2 text-sm text-[#8B8699]">
            This statement reflects the site&apos;s current development stage
            and will be updated as new features are added.
          </p>
        </div>
      </section>

      {/* ── Policy pages prose wrapper ────────────────────────── */}
      <div className="bg-white py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* ── SECTION 2: Our commitment ─────────────────────── */}
          <section aria-labelledby="commitment-heading">
            <h2
              id="commitment-heading"
              className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our commitment
            </h2>
            <div className="space-y-4 text-[#524D63] leading-[1.7]">
              <p>
                We aim to meet the Web Content Accessibility Guidelines (WCAG)
                2.1 Level AA standard across this website. This means we design
                and build every page to be perceivable, operable, understandable,
                and robust — so that disabled people can use this site
                independently, without needing to ask for help.
              </p>
              <p>
                As an organisation founded by and for disabled people, and one
                with deep roots in the British Sign Language (BSL) and Sri
                Lankan Sign Language (SLSL) communities, accessibility is not a
                compliance task for us — it is a core part of what we do. We
                recognise that the barrier most often encountered by disabled
                people online is not a broken screen reader interaction; it is
                content that assumes everyone reads, hears, and processes
                information in the same way. We try to write and structure
                content in plain, inclusive language throughout.
              </p>
              <p>
                We are working towards offering BSL video summaries of key
                pages and Easy Read versions of core information leaflets.
                These are planned features, not yet available.
              </p>
            </div>
          </section>

          {/* ── SECTION 3: Accessibility features ────────────── */}
          <section aria-labelledby="features-heading">
            <h2
              id="features-heading"
              className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Accessibility features on this site
            </h2>
            <p className="text-[#524D63] leading-[1.7] mb-5">
              The following features are available now:
            </p>
            <ul className="space-y-3">
              {[
                {
                  name: "Accessibility toolbar",
                  desc: "A persistent toolbar (press the Accessibility button in the top navigation) lets you adjust text size, switch to high contrast mode, enable a dyslexia-friendly font, highlight all links on the page, and reduce or remove motion effects. Your preferences are saved for your next visit.",
                },
                {
                  name: "Keyboard navigation",
                  desc: "Every interactive element on this site — links, buttons, form fields, dropdowns, and modal dialogs — is reachable and operable using a keyboard alone. Focus indicators are clearly visible throughout.",
                },
                {
                  name: "Screen reader support",
                  desc: "Pages use semantic HTML with appropriate landmark regions, heading hierarchy, ARIA labels where needed, and live regions to announce dynamic content changes (for example, filter results). Form errors are announced automatically and focus is managed to guide screen reader users to error messages.",
                },
                {
                  name: "Skip to main content",
                  desc: "A skip link appears when you press Tab from the top of any page, allowing keyboard and screen reader users to bypass the navigation menu and jump straight to the main content.",
                },
                {
                  name: "Accessible interactive components",
                  desc: "Modal dialogs (such as the photo lightbox) trap focus correctly and return focus to the triggering element on close. Filter chips and view toggles use aria-pressed to communicate their state. Animated statistics include screen-reader-only text with the final value so the count-up animation does not cause confusion.",
                },
                {
                  name: "Colour and contrast",
                  desc: "Text and interactive elements are designed to meet WCAG AA contrast ratios. Important information is never conveyed by colour alone — required form fields are marked with both an asterisk and screen-reader text, and error states are indicated with both colour and a text error message.",
                },
              ].map(({ name, desc }) => (
                <li key={name} className="flex items-start gap-3">
                  <span
                    className="w-2 h-2 rounded-full bg-[#6B4E9E] shrink-0 mt-2"
                    aria-hidden="true"
                  />
                  <span className="text-[#524D63] leading-[1.7]">
                    <strong className="text-[#1F1B2E]">{name}:</strong> {desc}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── SECTION 4: How to use the toolbar ────────────── */}
          <section aria-labelledby="toolbar-heading">
            <h2
              id="toolbar-heading"
              className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              How to use the accessibility toolbar
            </h2>
            <p className="text-[#524D63] leading-[1.7] mb-5">
              The toolbar opens when you click or tap the{" "}
              <strong className="text-[#1F1B2E]">Accessibility</strong> button
              in the top navigation bar. It contains five settings:
            </p>
            <ol className="space-y-4">
              {[
                {
                  step: "Text size",
                  detail:
                    "Press the A− or A+ buttons to decrease or increase the size of all text on the page. Changes apply instantly and persist across pages.",
                },
                {
                  step: "High contrast",
                  detail:
                    "Toggle this to switch the site to a high-contrast colour scheme with a dark background and brighter text. Useful in bright environments or for people with low vision.",
                },
                {
                  step: "Dyslexia-friendly font",
                  detail:
                    "Switches body text to OpenDyslexic, a typeface designed to increase readability for people with dyslexia by giving each letter a unique shape.",
                },
                {
                  step: "Highlight links",
                  detail:
                    "Underlines and adds a coloured border to every link on the page, making them easier to spot at a glance.",
                },
                {
                  step: "Reduce motion",
                  detail:
                    "Disables animated transitions, count-up effects, and other motion effects across the site. The site also respects your operating system's reduce-motion preference automatically.",
                },
              ].map(({ step, detail }, i) => (
                <li key={step} className="flex gap-4">
                  <span
                    className="w-7 h-7 rounded-full bg-[#6B4E9E] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span className="text-[#524D63] leading-[1.7]">
                    <strong className="text-[#1F1B2E]">{step}:</strong> {detail}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          {/* ── SECTION 5: Alternative formats ───────────────── */}
          <section aria-labelledby="formats-heading">
            <h2
              id="formats-heading"
              className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Requesting alternative formats
            </h2>
            <div className="space-y-4 text-[#524D63] leading-[1.7]">
              <p>
                If you need any content from this site in an alternative format
                — such as large print, plain text, or an audio version — please{" "}
                <a href="/contact" className="text-[#6B4E9E] underline">
                  contact us
                </a>{" "}
                and we will do our best to provide it within 10 working days.
              </p>
              <p>
                If you need to communicate with us in British Sign Language,
                please get in touch to arrange a video relay or BSL-interpreted
                call. We have team members with BSL skills and can arrange
                professional interpretation for formal meetings.
              </p>
            </div>
          </section>

          {/* ── SECTION 6: Known issues + feedback ───────────── */}
          <section aria-labelledby="issues-heading">
            <h2
              id="issues-heading"
              className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Known issues and feedback
            </h2>
            <div className="space-y-4 text-[#524D63] leading-[1.7]">
              <p>
                This website is currently in active development. Several
                sections — including News and Stories, Jobs, and individual
                resource pages — are still being built. Pages that are not yet
                complete may have limited accessibility features or placeholder
                content.
              </p>
              <p>
                We review this accessibility statement at least every six
                months, and update it whenever a significant section of the
                site is added or changed.
              </p>
              <p>
                If you experience any accessibility barrier on this site —
                whether listed here or not — we genuinely want to hear about
                it. Please{" "}
                <a href="/contact" className="text-[#6B4E9E] underline">
                  contact us
                </a>{" "}
                and describe the problem. We will prioritise it and let you know
                what we are doing about it.
              </p>
            </div>

            <div className="mt-6">
              <Button variant="primary" href="/contact">
                Report an accessibility issue
              </Button>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
