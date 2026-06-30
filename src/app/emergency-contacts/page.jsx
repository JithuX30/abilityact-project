import { Phone, MessageSquare } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata = {
  title: "Emergency contacts — AbilityAction CIC",
  description:
    "Crisis and emergency contacts for people in immediate need — mental health, housing, domestic abuse, and emergency services.",
};

const CONTACTS = [
  {
    id: "samaritans",
    name: "Samaritans",
    what: "Emotional support for anyone in distress or struggling to cope",
    phone: "116 123",
    phoneHref: "tel:116123",
    hours: "24 hours, 7 days a week",
    callType: "phone",
    free: true,
  },
  {
    id: "shout",
    name: "Shout — Crisis text line",
    what: "Free, confidential crisis support by text message",
    phone: "Text SHOUT to 85258",
    phoneHref: "sms:85258?body=SHOUT",
    hours: "24 hours, 7 days a week",
    callType: "text",
    free: true,
  },
  {
    id: "shelter",
    name: "Shelter",
    what: "Emergency housing advice and support for people facing homelessness",
    phone: "0808 800 4444",
    phoneHref: "tel:08088004444",
    hours: "Monday–Friday 8am–8pm, Saturday–Sunday 9am–5pm",
    callType: "phone",
    free: true,
  },
  {
    id: "ndah",
    name: "National Domestic Abuse Helpline",
    what: "Support for anyone experiencing domestic abuse",
    phone: "0808 2000 247",
    phoneHref: "tel:08082000247",
    hours: "24 hours, 7 days a week",
    callType: "phone",
    free: true,
  },
  {
    id: "mind",
    name: "Mind — Infoline",
    what: "Mental health information and signposting",
    phone: "0300 123 3393",
    phoneHref: "tel:03001233393",
    hours: "Monday–Friday 9am–6pm",
    callType: "phone",
    free: false,
  },
  {
    id: "hillingdon",
    name: "Hillingdon Council — Adult social care",
    what: "Local emergency social care and safeguarding support in Hillingdon",
    phone: "01895 556633",
    phoneHref: "tel:01895556633",
    hours: "Monday–Friday 9am–5pm. Out of hours: 01895 556 744",
    callType: "phone",
    free: false,
  },
];

export default function EmergencyContactsPage() {
  return (
    <>
      {/* ── CRITICAL BANNER ───────────────────────────────────── */}
      <div
        className="bg-red-700 text-white py-5"
        role="banner"
        aria-label="Emergency alert"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl font-bold tracking-wide">
            In an emergency, always call{" "}
            <a
              href="tel:999"
              className="underline decoration-2 underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-red-700"
            >
              999
            </a>
          </p>
        </div>
      </div>

      {/* ── SECTION 1: Breadcrumbs + intro ────────────────────── */}
      <section className="bg-[#FFF8F8] py-10" aria-labelledby="emergency-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Emergency contacts", href: "/emergency-contacts" },
            ]}
          />
          <h1
            id="emergency-heading"
            className="mt-6 text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Emergency contacts
          </h1>
          <p className="mt-3 text-lg text-[#524D63] leading-relaxed max-w-2xl">
            If you are in crisis, these services can help right now. You do not
            need to be on the point of taking action — if you are struggling,
            reaching out is the right thing to do.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: Contact cards ──────────────────────────── */}
      <section className="bg-white py-12 lg:py-16" aria-labelledby="services-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="services-heading"
            className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Services that can help
          </h2>
          <div className="space-y-4">
            {CONTACTS.map(({ id, name, what, phone, phoneHref, hours, callType, free }) => (
              <article
                key={id}
                className="border-2 border-[#E8E4F0] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#6B4E9E] transition-colors"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3
                      className="font-semibold text-[#1F1B2E] text-lg"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {name}
                    </h3>
                    {free && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Free
                      </span>
                    )}
                  </div>
                  <p className="text-[#524D63] mb-2">{what}</p>
                  <p className="text-xs text-[#8B8699]">
                    <span className="font-medium">Hours:</span> {hours}
                  </p>
                </div>

                <a
                  href={phoneHref}
                  className="flex items-center gap-3 bg-[#1F1B2E] text-white rounded-xl px-5 py-4 hover:bg-[#6B4E9E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] focus-visible:ring-offset-2 shrink-0 min-w-[180px] justify-center"
                  aria-label={
                    callType === "text"
                      ? `Text SHOUT to 85258 to reach ${name}`
                      : `Call ${name} on ${phone}`
                  }
                >
                  {callType === "text" ? (
                    <MessageSquare size={18} aria-hidden="true" />
                  ) : (
                    <Phone size={18} aria-hidden="true" />
                  )}
                  <span className="font-semibold text-base">{phone}</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: When to call 999 ───────────────────────── */}
      <section className="bg-red-50 border-t-4 border-red-600 py-12" aria-labelledby="nine-nine-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="nine-nine-heading"
            className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            When to call 999
          </h2>
          <p className="text-[#524D63] leading-relaxed mb-5">
            Call 999 immediately if someone is in immediate danger or there is a
            risk to life. This includes:
          </p>
          <ul className="space-y-2 mb-7">
            {[
              "Someone is unconscious, not breathing, or has a serious injury",
              "Someone is having a mental health crisis and is in immediate danger of harming themselves or others",
              "A crime is in progress or someone is in immediate danger",
              "There is a fire or other life-threatening emergency",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0 mt-2.5" aria-hidden="true" />
                <span className="text-[#524D63] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="tel:999"
            className="inline-flex items-center gap-3 bg-red-600 text-white font-bold text-xl rounded-2xl px-8 py-5 hover:bg-red-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
            aria-label="Call 999 in an emergency"
          >
            <Phone size={24} aria-hidden="true" />
            Call 999
          </a>

          <p className="mt-5 text-sm text-[#524D63]">
            If you are deaf or hard of hearing, you can register for the{" "}
            <strong>emergencySMS</strong> service to text 999 in an emergency.
            Visit{" "}
            <a
              href="https://www.emergencysms.net"
              className="text-red-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              emergencysms.net
            </a>{" "}
            to register.
          </p>
        </div>
      </section>
    </>
  );
}
