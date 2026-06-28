import { Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import EnquiryForm from "@/components/employers/EnquiryForm";
import ArticleAccordion from "@/components/advice/ArticleAccordion";

export const metadata = {
  title: "Work with us — For employers — AbilityAction CIC",
  description:
    "Get in touch with AbilityAction to discuss disability inclusion training, accessibility audits, supported placements, or sign language services for your organisation.",
};

const WHAT_HAPPENS = [
  "We will respond within 2 working days — usually the same day.",
  "We arrange a free 30-minute consultation call to understand your needs.",
  "We send a tailored proposal within a week of the consultation.",
  "Once agreed, we schedule delivery around your team&apos;s calendar.",
];

const FAQS = [
  {
    id: "cost",
    question: "How much do your services cost?",
    answer:
      "Every engagement is priced to fit the organisation. Small businesses and charities typically pay less than large corporates. We offer fixed-fee packages for standard programmes (e.g. a half-day BSL awareness session) and day-rate consultancy for bespoke work. We will always give you a clear, transparent quote before you commit to anything. Get in touch and we will talk through what is affordable for you.",
  },
  {
    id: "online",
    question: "Can programmes be delivered online?",
    answer:
      "Yes. All our training programmes are available in-person, online (via video conferencing), or as a hybrid blend. Accessibility audits include an on-site visit but much of the report preparation and follow-up is done remotely. We are experienced at facilitating inclusive online sessions that work for participants who use BSL, screen readers, or other assistive technology.",
  },
  {
    id: "size",
    question: "We are a small business — are your services right for us?",
    answer:
      "Absolutely. Smaller organisations often find it easier to make real, lasting change because they can move quickly and leadership is close to the team. We have worked with teams of 5 and teams of 5,000. Our smallest packages — like a half-day BSL awareness session or a one-hour 'Disability Confident introduction' workshop — are specifically designed to be accessible and affordable for small businesses.",
  },
  {
    id: "dc",
    question: "Can you help us achieve Disability Confident status?",
    answer:
      "Yes — this is one of the most common reasons employers come to us. We can help you at any level: getting started with Disability Confident Committed, working towards Employer status, or building towards Leader. We provide the training, documentation support, and practical guidance to meet the scheme's requirements — and more importantly, to make sure the actions you take represent genuine change rather than compliance-box-ticking.",
  },
];

export default function WorkWithUsPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ───────────────────────────────────── */}
      <section
        className="bg-[#FDF5F2] py-12"
        aria-labelledby="work-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "For employers", href: "/for-employers" },
              { label: "Work with us", href: "/for-employers/work-with-us" },
            ]}
          />
          <h1
            id="work-heading"
            className="mt-6 text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Work with us
          </h1>
          <p className="mt-3 text-lg text-[#524D63] leading-relaxed max-w-2xl">
            Tell us about your organisation and what you are hoping to achieve.
            We will respond quickly, without any jargon, and without any
            obligation.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: Form + Sidebar ─────────────────────────── */}
      <section
        className="bg-white py-14 lg:py-20"
        aria-labelledby="form-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-start">

            {/* Form column */}
            <div>
              <h2
                id="form-heading"
                className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Send an enquiry
              </h2>
              <EnquiryForm />
            </div>

            {/* Info sidebar */}
            <aside aria-label="Contact information and next steps">
              <div className="bg-[#FDF5F2] border border-[#F5C9B8] rounded-2xl p-6 sticky top-24">
                <h2
                  className="font-semibold text-[#1F1B2E] mb-5"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  What happens next
                </h2>
                <ul className="space-y-4 mb-7">
                  {WHAT_HAPPENS.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-[#E07856] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-[#524D63] leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-[#F5C9B8] pt-5 space-y-4">
                  <p
                    className="text-sm font-semibold text-[#1F1B2E]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Prefer to call or email?
                  </p>

                  <a
                    href="tel:+442071234567"
                    className="flex items-center gap-3 text-sm text-[#524D63] hover:text-[#E07856] transition-colors group"
                  >
                    <Phone
                      size={16}
                      className="text-[#E07856] shrink-0"
                      aria-hidden="true"
                    />
                    <span className="group-hover:underline">
                      020 7123 4567
                    </span>
                  </a>

                  <a
                    href="mailto:employers@abilityaction.org.uk"
                    className="flex items-center gap-3 text-sm text-[#524D63] hover:text-[#E07856] transition-colors group"
                  >
                    <Mail
                      size={16}
                      className="text-[#E07856] shrink-0"
                      aria-hidden="true"
                    />
                    <span className="group-hover:underline">
                      employers@abilityaction.org.uk
                    </span>
                  </a>

                  <p className="flex items-start gap-3 text-sm text-[#8B8699]">
                    <Clock
                      size={16}
                      className="text-[#8B8699] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    Mon–Fri, 9am–5pm. We aim to respond to all enquiries within
                    2 working days.
                  </p>
                </div>

                <div className="border-t border-[#F5C9B8] pt-5 mt-5">
                  <p className="text-sm text-[#524D63] leading-relaxed">
                    <strong className="font-semibold text-[#1F1B2E]">
                      No commitment required.
                    </strong>{" "}
                    Our initial consultation is free. We will never pressure you
                    into a programme that is not right for you.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: FAQ accordion ──────────────────────────── */}
      <section
        className="bg-[#F4F2F7] py-14"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="faq-heading"
            className="text-[1.5rem] font-semibold text-[#1F1B2E] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Common questions
          </h2>
          <div className="space-y-3">
            {FAQS.map(({ id, question, answer }) => (
              <ArticleAccordion key={id} id={`employer-faq-${id}`} question={question}>
                {answer}
              </ArticleAccordion>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
