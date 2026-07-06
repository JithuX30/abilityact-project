import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "தொடர்பு கொள்ளுங்கள் — AbilityAction CIC",
  description:
    "AbilityAction CIC-ஐ தொலைபேசி, மின்னஞ்சல் அல்லது படிவம் மூலம் தொடர்பு கொள்ளுங்கள். 2 வேலை நாட்களுக்குள் பதில் அளிப்போம்.",
};

export default function TamilContactPage() {
  return (
    <div lang="ta" style={{ fontFamily: "var(--font-noto-tamil, var(--font-body))" }}>
      {/* ── Language notice strip ─────────────────────────────── */}
      <div className="bg-[#EDE6F7] border-b border-[#D4CEED] py-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="text-[#6B4E9E] font-medium">
            இந்த பக்கம் தமிழில் உள்ளது
          </span>
          <Link
            href="/contact"
            className="text-[#524D63] hover:text-[#6B4E9E] underline underline-offset-2 transition-colors"
          >
            Contact us in English →
          </Link>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-[#F7F3FC] py-12 lg:py-16" aria-labelledby="ta-contact-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#8B8699] mb-5" style={{ fontFamily: "var(--font-body)" }}>
              <li><Link href="/ta" className="hover:text-[#6B4E9E] transition-colors">முகப்பு</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-[#1F1B2E]">தொடர்பு கொள்ளுங்கள்</li>
            </ol>
          </nav>

          <h1
            id="ta-contact-heading"
            className="text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15] mb-4"
            style={{ fontFamily: "var(--font-noto-tamil, var(--font-heading))" }}
          >
            தொடர்பு கொள்ளுங்கள்
          </h1>
          <p className="text-lg text-[#524D63] leading-[1.85] max-w-2xl">
            நாங்கள் ஒரு சிறிய குழு மற்றும் ஒவ்வொரு செய்தியையும் படிக்கிறோம். உங்களுக்கு எவ்வாறு தொடர்பு கொள்வது வசதியாக இருக்கிறதோ அவ்வாறு தொடர்பு கொள்ளுங்கள் — <strong className="text-[#1F1B2E]">2 வேலை நாட்களுக்குள்</strong> பதில் அளிப்போம்.
          </p>
        </div>
      </section>

      {/* ── Contact details ───────────────────────────────────── */}
      <section className="bg-white py-12 lg:py-16" aria-labelledby="ta-contact-details-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="ta-contact-details-heading"
            className="text-[1.375rem] font-semibold text-[#1F1B2E] mb-8"
            style={{ fontFamily: "var(--font-noto-tamil, var(--font-heading))" }}
          >
            எங்களை எவ்வாறு தொடர்பு கொள்வது
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {/* Phone */}
            <div className="bg-[#F7F3FC] border border-[#E8E4F0] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Phone size={20} className="text-[#6B4E9E]" aria-hidden="true" />
                <p className="font-semibold text-[#1F1B2E]" style={{ fontFamily: "var(--font-noto-tamil, var(--font-heading))" }}>
                  தொலைபேசி
                </p>
              </div>
              <a
                href="tel:07933212547"
                className="text-xl font-semibold text-[#1F1B2E] hover:text-[#6B4E9E] hover:underline transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                07933 212547
              </a>
              <p className="mt-2 text-sm text-[#524D63]" style={{ fontFamily: "var(--font-noto-tamil, var(--font-body))" }}>
                திங்கள் – வெள்ளி · காலை 9 – மாலை 5
              </p>
            </div>

            {/* Email */}
            <div className="bg-[#F7F3FC] border border-[#E8E4F0] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Mail size={20} className="text-[#6B4E9E]" aria-hidden="true" />
                <p className="font-semibold text-[#1F1B2E]" style={{ fontFamily: "var(--font-noto-tamil, var(--font-heading))" }}>
                  மின்னஞ்சல்
                </p>
              </div>
              <a
                href="mailto:info@abilityact.com"
                className="text-[#6B4E9E] hover:underline transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                info@abilityact.com
              </a>
              <p className="mt-2 text-sm text-[#524D63]" style={{ fontFamily: "var(--font-noto-tamil, var(--font-body))" }}>
                2 வேலை நாட்களுக்குள் பதில் அளிப்போம்
              </p>
            </div>

            {/* Address */}
            <div className="bg-[#F7F3FC] border border-[#E8E4F0] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={20} className="text-[#6B4E9E]" aria-hidden="true" />
                <p className="font-semibold text-[#1F1B2E]" style={{ fontFamily: "var(--font-noto-tamil, var(--font-heading))" }}>
                  முகவரி
                </p>
              </div>
              <address className="not-italic text-sm text-[#524D63] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                AbilityAction CIC<br />
                Hayes Community Hub<br />
                123 Station Road<br />
                Hayes, UB3 4AA<br />
                United Kingdom
              </address>
              <p className="mt-2 text-xs text-[#8B8699]" style={{ fontFamily: "var(--font-body)" }}>
                Hayes &amp; Harlington station (Elizabeth line) — 5 min walk
              </p>
            </div>

            {/* Hours */}
            <div className="bg-[#F7F3FC] border border-[#E8E4F0] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock size={20} className="text-[#6B4E9E]" aria-hidden="true" />
                <p className="font-semibold text-[#1F1B2E]" style={{ fontFamily: "var(--font-noto-tamil, var(--font-heading))" }}>
                  திறந்திருக்கும் நேரம்
                </p>
              </div>
              <div className="text-sm text-[#524D63] space-y-1">
                <p>
                  <span className="font-medium text-[#1F1B2E]" style={{ fontFamily: "var(--font-noto-tamil, var(--font-body))" }}>திங்கள் – வெள்ளி:</span>{" "}
                  <span style={{ fontFamily: "var(--font-body)" }}>காலை 9:00 – மாலை 5:00</span>
                </p>
                <p>
                  <span className="font-medium text-[#1F1B2E]" style={{ fontFamily: "var(--font-noto-tamil, var(--font-body))" }}>சனி – ஞாயிறு:</span>{" "}
                  <span style={{ fontFamily: "var(--font-noto-tamil, var(--font-body))" }}>மூடப்பட்டிருக்கும்</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Online contact form ───────────────────────────────── */}
      <section className="bg-[#F4F2F7] py-12" aria-labelledby="ta-contact-form-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E8E4F0] rounded-2xl p-6 lg:p-8">
            <h2
              id="ta-contact-form-heading"
              className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-2"
              style={{ fontFamily: "var(--font-noto-tamil, var(--font-heading))" }}
            >
              ஆங்கிலத்தில் செய்தி அனுப்பு
            </h2>
            <p className="text-[#524D63] leading-[1.85] mb-6">
              Online படிவம் தற்போது ஆங்கிலத்தில் உள்ளது. நீங்கள் தமிழில் எழுத விரும்பினால், நேரடியாக மின்னஞ்சலில் எழுதலாம் — நாங்கள் பதில் அளிப்போம்.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-11 px-6 bg-[#6B4E9E] text-white font-medium rounded-lg hover:bg-[#8B6BC4] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] focus-visible:ring-offset-2"
              >
                Online form (English) <ArrowRight size={15} />
              </Link>
              <a
                href="mailto:info@abilityact.com"
                className="inline-flex items-center gap-2 h-11 px-6 border border-[#6B4E9E] text-[#6B4E9E] font-medium rounded-lg hover:bg-[#EDE6F7] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] focus-visible:ring-offset-2"
              >
                <Mail size={15} aria-hidden="true" />
                மின்னஞ்சல் / Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
