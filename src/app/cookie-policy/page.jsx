import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata = {
  title: "Cookie policy — AbilityAction CIC",
  description:
    "AbilityAction CIC's cookie policy — what cookies we use, why, and how to control them.",
};

const SECTIONS = [
  { id: "what-are-cookies", label: "What are cookies?" },
  { id: "cookies-we-use", label: "Cookies we use" },
  { id: "local-storage", label: "Local storage and accessibility preferences" },
  { id: "controlling-cookies", label: "How to control cookies" },
  { id: "changes", label: "Changes to this policy" },
];

export default function CookiePolicyPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ───────────────────────────────────── */}
      <section className="bg-[#F7F3FC] py-12" aria-labelledby="cookie-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Cookie policy", href: "/cookie-policy" },
            ]}
          />
          <h1
            id="cookie-heading"
            className="mt-6 text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Cookie policy
          </h1>
          <p className="mt-3 text-base text-[#8B8699]">
            Last updated:{" "}
            <strong className="text-[#524D63]">[Date — placeholder]</strong>
          </p>

          {/* Draft disclaimer */}
          <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Note for AbilityAction:</strong> This is a draft template
              and should be reviewed and approved by a qualified legal advisor
              before this website is published publicly. It does not constitute
              legal advice.
            </p>
          </div>
        </div>
      </section>

      {/* ── Table of contents + body ──────────────────────────── */}
      <div className="bg-white py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Table of contents */}
          <nav aria-label="Cookie policy contents" className="mb-12">
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

          <div className="space-y-14">

            {/* ── 1. What are cookies ───────────────────────── */}
            <section id="what-are-cookies" aria-labelledby="cookies-what-heading">
              <h2
                id="cookies-what-heading"
                className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                1. What are cookies?
              </h2>
              <div className="space-y-4 text-[#524D63] leading-[1.7]">
                <p>
                  Cookies are small text files that a website saves to your
                  browser when you visit. They allow the website to remember
                  information about your visit — for example, your preferred
                  language, whether you have seen a particular message before,
                  or items in a shopping basket.
                </p>
                <p>
                  Cookies can be set by the website you are visiting
                  (&ldquo;first-party cookies&rdquo;) or by third-party services
                  embedded in that website, such as analytics tools or social
                  media widgets (&ldquo;third-party cookies&rdquo;).
                </p>
                <p>
                  Under UK law (the Privacy and Electronic Communications
                  Regulations, known as PECR, and UK GDPR), we are required to
                  ask for your consent before placing any non-essential cookies
                  on your device, and to tell you clearly what cookies we use
                  and why.
                </p>
              </div>
            </section>

            {/* ── 2. Cookies we use ─────────────────────────── */}
            <section id="cookies-we-use" aria-labelledby="cookies-use-heading">
              <h2
                id="cookies-use-heading"
                className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                2. Cookies we use
              </h2>
              <div className="space-y-5 text-[#524D63] leading-[1.7]">
                <p>
                  This website currently uses the following types of cookies:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <caption className="sr-only">Types of cookies used on this website</caption>
                    <thead>
                      <tr className="bg-[#F7F3FC]">
                        <th scope="col" className="text-left px-4 py-3 font-semibold text-[#1F1B2E] border border-[#E8E4F0] whitespace-nowrap">
                          Type
                        </th>
                        <th scope="col" className="text-left px-4 py-3 font-semibold text-[#1F1B2E] border border-[#E8E4F0]">
                          Purpose
                        </th>
                        <th scope="col" className="text-left px-4 py-3 font-semibold text-[#1F1B2E] border border-[#E8E4F0] whitespace-nowrap">
                          Consent required?
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          type: "Essential",
                          purpose: "Necessary for the website to function — for example, maintaining your session or remembering your cookie consent choice. Without these the site cannot work properly.",
                          consent: "No",
                        },
                        {
                          type: "Analytics (planned)",
                          purpose: "We plan to add anonymised analytics to understand how people use the site so we can improve it. We will update this policy and add a consent mechanism before enabling analytics cookies.",
                          consent: "Yes — not yet active",
                        },
                        {
                          type: "Preference",
                          purpose: "Some preferences (such as your newsletter sign-up status) may be stored via cookies. See also the section on local storage below.",
                          consent: "Yes",
                        },
                      ].map(({ type, purpose, consent }) => (
                        <tr key={type}>
                          <td className="px-4 py-3 border border-[#E8E4F0] font-medium text-[#1F1B2E] align-top whitespace-nowrap">
                            {type}
                          </td>
                          <td className="px-4 py-3 border border-[#E8E4F0] align-top">
                            {purpose}
                          </td>
                          <td className="px-4 py-3 border border-[#E8E4F0] align-top whitespace-nowrap">
                            {consent}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ── 3. Local storage ──────────────────────────── */}
            <section id="local-storage" aria-labelledby="localstorage-heading">
              <h2
                id="localstorage-heading"
                className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                3. Local storage and accessibility preferences
              </h2>
              <div className="space-y-4 text-[#524D63] leading-[1.7]">
                <p>
                  In addition to cookies, this website uses your browser&apos;s{" "}
                  <strong className="text-[#1F1B2E]">local storage</strong> to
                  remember your accessibility toolbar settings — such as your
                  preferred text size, high contrast mode, or dyslexia-friendly
                  font choice.
                </p>
                <p>
                  Local storage works differently from cookies: the data is
                  stored only in your browser and is never sent to our servers.
                  It persists until you clear your browser data. Because this
                  data stays entirely on your device and is not used for
                  tracking or advertising purposes, it is considered a
                  functional, privacy-preserving preference mechanism.
                </p>
                <p>
                  You can clear your local storage at any time through your
                  browser settings (usually under &ldquo;Clear browsing
                  data&rdquo; or &ldquo;Site settings&rdquo;). This will reset
                  your accessibility preferences to the default state.
                </p>
              </div>
            </section>

            {/* ── 4. Controlling cookies ────────────────────── */}
            <section id="controlling-cookies" aria-labelledby="control-heading">
              <h2
                id="control-heading"
                className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                4. How to control cookies
              </h2>
              <div className="space-y-4 text-[#524D63] leading-[1.7]">
                <p>
                  You can control and delete cookies through your browser
                  settings. Most browsers allow you to:
                </p>
                <ul className="space-y-2">
                  {[
                    "View the cookies that have been set and delete individual cookies",
                    "Block cookies from specific websites",
                    "Block all third-party cookies",
                    "Block all cookies (note: this may prevent some features of this site from working correctly)",
                    "Delete all cookies when you close your browser",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#6B4E9E] shrink-0 mt-2" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  For instructions specific to your browser, search for &ldquo;manage
                  cookies in [browser name]&rdquo; or visit the browser&apos;s
                  help pages. The{" "}
                  <a
                    href="https://ico.org.uk/for-the-public/online/cookies/"
                    className="text-[#6B4E9E] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ICO&apos;s guidance on cookies
                  </a>{" "}
                  also explains your rights and how to manage them.
                </p>
                <p>
                  Please note that disabling essential cookies may affect the
                  functionality of this website.
                </p>
              </div>
            </section>

            {/* ── 5. Changes to policy ──────────────────────── */}
            <section id="changes" aria-labelledby="cookie-changes-heading">
              <h2
                id="cookie-changes-heading"
                className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                5. Changes to this policy
              </h2>
              <div className="space-y-4 text-[#524D63] leading-[1.7]">
                <p>
                  We will update this cookie policy whenever we change the
                  cookies or similar technologies we use, or when legal
                  requirements change. The &ldquo;Last updated&rdquo; date at
                  the top of this page will reflect when the policy was last
                  changed.
                </p>
                <p>
                  If you have any questions about this cookie policy, please{" "}
                  <a href="/contact" className="text-[#6B4E9E] underline">
                    contact us
                  </a>
                  .
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}
