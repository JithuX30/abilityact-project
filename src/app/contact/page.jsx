import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContactForm from "@/components/contact/ContactForm";
import OpenArasiButton from "@/components/advice/OpenArasiButton";
import NewsletterBand from "@/components/home/NewsletterBand";

export const metadata = {
  title: "Contact us — AbilityAction CIC",
  description:
    "Get in touch with AbilityAction CIC. Call, email, or send us a message and we will get back to you within 2 working days.",
};

const SOCIAL_LINKS = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "X (Twitter)", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function ContactPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ───────────────────────────────────── */}
      <section className="bg-[#F7F3FC] py-12" aria-labelledby="contact-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Contact us", href: "/contact" },
            ]}
          />
          <h1
            id="contact-heading"
            className="mt-6 text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Contact us
          </h1>
          <p className="mt-3 text-lg text-[#524D63] leading-relaxed max-w-2xl">
            We are a small team and we read every message. Get in touch however
            works best for you — we will respond within 2 working days.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: Form + Sidebar ─────────────────────────── */}
      <section className="bg-white py-14 lg:py-20" aria-labelledby="form-section-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-start">

            {/* Form */}
            <div>
              <h2
                id="form-section-heading"
                className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Send us a message
              </h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <aside aria-label="Contact details">
              <div className="bg-[#F7F3FC] border border-[#E8E4F0] rounded-2xl p-6 sticky top-24 space-y-6">

                {/* Phone */}
                <div>
                  <p className="text-xs font-semibold text-[#8B8699] uppercase tracking-wider mb-2">
                    Phone
                  </p>
                  <a
                    href="tel:07933212547"
                    className="flex items-center gap-3 text-[#1F1B2E] hover:text-[#6B4E9E] transition-colors group"
                  >
                    <Phone size={20} className="text-[#6B4E9E] shrink-0" aria-hidden="true" />
                    <span className="text-xl font-semibold group-hover:underline">
                      07933 212547
                    </span>
                  </a>
                </div>

                {/* Email */}
                <div>
                  <p className="text-xs font-semibold text-[#8B8699] uppercase tracking-wider mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:info@abilityact.com"
                    className="flex items-center gap-3 text-sm text-[#524D63] hover:text-[#6B4E9E] transition-colors group"
                  >
                    <Mail size={16} className="text-[#6B4E9E] shrink-0" aria-hidden="true" />
                    <span className="group-hover:underline">info@abilityact.com</span>
                  </a>
                </div>

                {/* Address */}
                <div>
                  <p className="text-xs font-semibold text-[#8B8699] uppercase tracking-wider mb-2">
                    Address
                  </p>
                  <address className="not-italic flex items-start gap-3 text-sm text-[#524D63] leading-relaxed">
                    <MapPin size={16} className="text-[#6B4E9E] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      AbilityAction CIC<br />
                      Hayes Community Hub<br />
                      123 Station Road<br />
                      Hayes, UB3 4AA<br />
                      United Kingdom
                    </span>
                  </address>
                </div>

                {/* Hours */}
                <div>
                  <p className="text-xs font-semibold text-[#8B8699] uppercase tracking-wider mb-2">
                    Opening hours
                  </p>
                  <p className="flex items-start gap-3 text-sm text-[#524D63]">
                    <Clock size={16} className="text-[#6B4E9E] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      Monday – Friday: 9am – 5pm<br />
                      Saturday – Sunday: Closed
                    </span>
                  </p>
                </div>

                {/* Ask Arasi */}
                <div className="border-t border-[#E8E4F0] pt-5">
                  <p className="text-sm text-[#524D63] mb-3 leading-relaxed">
                    Need an instant answer? Try asking Arasi, our AI assistant,
                    who can help with common questions any time of day.
                  </p>
                  <OpenArasiButton
                    label="Chat with Arasi"
                    className="text-base font-semibold"
                  />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Map placeholder ────────────────────────── */}
      <section className="bg-[#F4F2F7] py-14" aria-labelledby="map-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="map-heading"
            className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Find us
          </h2>

          {/* Map placeholder */}
          <div
            role="img"
            aria-label="Map showing AbilityAction office location in Hayes, West London. See address below."
            className="w-full h-64 sm:h-80 bg-[#E8E4F0] rounded-2xl border border-[#D4CEED] flex flex-col items-center justify-center mb-6"
          >
            <MapPin size={40} className="text-[#6B4E9E] opacity-40 mb-2" aria-hidden="true" />
            <p className="text-sm text-[#8B8699]">Map placeholder — Hayes, West London</p>
            <p className="text-xs text-[#8B8699] mt-1">(Google Maps embed coming soon)</p>
          </div>

          {/* Text address alternative */}
          <div className="bg-white rounded-xl border border-[#E8E4F0] p-5 max-w-sm">
            <p className="text-xs font-semibold text-[#8B8699] uppercase tracking-wider mb-3">
              Office address
            </p>
            <address className="not-italic text-sm text-[#524D63] leading-relaxed">
              AbilityAction CIC<br />
              Hayes Community Hub<br />
              123 Station Road<br />
              Hayes, UB3 4AA<br />
              United Kingdom
            </address>
            <p className="mt-3 text-xs text-[#8B8699]">
              Nearest station: Hayes &amp; Harlington (Elizabeth line, 5 min walk)
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Other ways to reach us ────────────────── */}
      <section className="bg-white py-14" aria-labelledby="other-ways-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="other-ways-heading"
            className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Follow us
          </h2>
          <p className="text-sm text-[#524D63] mb-5 leading-relaxed">
            We share news, resources, BSL content, and updates on our social
            channels. All of our social media posts include captions or
            transcripts where possible.
          </p>
          <div className="flex flex-wrap gap-4">
            {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={`AbilityAction on ${label}`}
                className="flex items-center gap-2.5 px-4 py-2.5 border border-[#E8E4F0] rounded-xl text-sm text-[#524D63] hover:text-[#6B4E9E] hover:border-[#6B4E9E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E]"
              >
                <Icon size={16} aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <NewsletterBand />
    </>
  );
}
