import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Contact Us — AbilityAction CIC (Sinhala / සිංහල)",
  description:
    "Contact AbilityAction CIC for free disability support, benefits advice, and employment guidance. Sinhala translation coming soon.",
};

export default function SinhalaContactPage() {
  return (
    <div style={{ fontFamily: "var(--font-noto-sinhala, var(--font-body))" }}>
      {/* ── Coming soon banner ───────────────────────────────── */}
      <div
        className="bg-[#FFF3CD] border-b-2 border-[#F0C030] py-4"
        role="status"
        aria-label="Translation notice"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p lang="si" className="text-[#6B4A00] font-semibold text-lg mb-1">
            සිංහල පරිවර්තනය ළඟදීම
          </p>
          <p className="text-[#7A5500] text-sm" style={{ fontFamily: "var(--font-body)" }}>
            We are working on a Sinhala translation of this page. The English content is below.{" "}
            <Link href="/contact" className="text-[#6B4E9E] underline hover:text-[#8B6BC4] transition-colors">
              Go to the English contact page →
            </Link>
          </p>
        </div>
      </div>

      <div className="bg-[#EDE6F7] border-b border-[#D4CEED] py-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2 text-sm">
          <span lang="si" className="text-[#6B4E9E] font-medium">සිංහල / Sinhala</span>
          <Link href="/contact" className="text-[#524D63] hover:text-[#6B4E9E] underline underline-offset-2 transition-colors">
            Contact us in English →
          </Link>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-[#F7F3FC] py-12 lg:py-16" aria-labelledby="si-contact-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#8B8699] mb-5">
              <li><Link href="/si" className="hover:text-[#6B4E9E] transition-colors">Home / සිංහල</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-[#1F1B2E]">Contact</li>
            </ol>
          </nav>

          <h1
            id="si-contact-heading"
            className="text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15] mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Contact Us
          </h1>
          <p lang="si" className="text-[#6B4E9E] font-medium text-lg mb-4">
            අප හා සම්බන්ධ වන්න
          </p>
          <p className="text-lg text-[#524D63] leading-relaxed max-w-2xl">
            We are a small team and we read every message. Get in touch however works best for you — we will respond within 2 working days.
          </p>
        </div>
      </section>

      {/* ── Contact details ───────────────────────────────────── */}
      <section className="bg-white py-12 lg:py-16" aria-labelledby="si-contact-details-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="si-contact-details-heading"
            className="text-[1.375rem] font-semibold text-[#1F1B2E] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How to reach us
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-[#F7F3FC] border border-[#E8E4F0] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Phone size={20} className="text-[#6B4E9E]" aria-hidden="true" />
                <p className="font-semibold text-[#1F1B2E]" style={{ fontFamily: "var(--font-heading)" }}>Phone</p>
              </div>
              <a href="tel:07933212547" className="text-xl font-semibold text-[#1F1B2E] hover:text-[#6B4E9E] hover:underline transition-colors">
                07933 212547
              </a>
              <p lang="si" className="mt-2 text-sm text-[#524D63]">
                සඳුදා – සිකුරාදා · ප.ව. 9 – ප.ව. 5
              </p>
              <p className="text-xs text-[#8B8699]">Monday – Friday · 9am – 5pm</p>
            </div>

            <div className="bg-[#F7F3FC] border border-[#E8E4F0] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Mail size={20} className="text-[#6B4E9E]" aria-hidden="true" />
                <p className="font-semibold text-[#1F1B2E]" style={{ fontFamily: "var(--font-heading)" }}>Email</p>
              </div>
              <a href="mailto:info@abilityact.com" className="text-[#6B4E9E] hover:underline transition-colors">
                info@abilityact.com
              </a>
              <p className="mt-2 text-sm text-[#524D63]">We reply within 2 working days.</p>
            </div>

            <div className="bg-[#F7F3FC] border border-[#E8E4F0] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={20} className="text-[#6B4E9E]" aria-hidden="true" />
                <p className="font-semibold text-[#1F1B2E]" style={{ fontFamily: "var(--font-heading)" }}>Address</p>
              </div>
              <address className="not-italic text-sm text-[#524D63] leading-relaxed">
                AbilityAction CIC<br />
                Hayes Community Hub<br />
                123 Station Road<br />
                Hayes, UB3 4AA<br />
                United Kingdom
              </address>
            </div>

            <div className="bg-[#F7F3FC] border border-[#E8E4F0] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock size={20} className="text-[#6B4E9E]" aria-hidden="true" />
                <p className="font-semibold text-[#1F1B2E]" style={{ fontFamily: "var(--font-heading)" }}>Opening hours</p>
              </div>
              <p className="text-sm text-[#524D63]">Monday – Friday: 9am – 5pm</p>
              <p className="text-sm text-[#524D63]">Saturday – Sunday: Closed</p>
              <p lang="si" className="mt-2 text-sm text-[#8B8699]">
                සෙනසුරාදා – ඉරිදා: වසා ඇත
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Online form link ──────────────────────────────────── */}
      <section className="bg-[#F4F2F7] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E8E4F0] rounded-2xl p-6 lg:p-8">
            <h2 className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Send us a message online
            </h2>
            <p lang="si" className="text-[#6B4E9E] font-medium mb-3">
              අන්තර්ජාලය හරහා පණිවිඩය යවන්න
            </p>
            <p className="text-[#524D63] mb-6">
              Our online contact form is currently in English. You are also welcome to email us in Sinhala — we will do our best to assist you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-11 px-6 bg-[#6B4E9E] text-white font-medium rounded-lg hover:bg-[#8B6BC4] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] focus-visible:ring-offset-2"
              >
                Online contact form (English) <ArrowRight size={15} />
              </Link>
              <a
                href="mailto:info@abilityact.com"
                className="inline-flex items-center gap-2 h-11 px-6 border border-[#6B4E9E] text-[#6B4E9E] font-medium rounded-lg hover:bg-[#EDE6F7] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] focus-visible:ring-offset-2"
              >
                <Mail size={15} aria-hidden="true" /> Email us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
