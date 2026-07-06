import Link from "next/link";
import { Phone, Mail, ArrowRight, PiggyBank } from "lucide-react";

export const metadata = {
  title: "நலன்கள் மற்றும் உரிமைகள் — AbilityAction CIC",
  description:
    "UK-இல் இயலாமை உள்ளவர்களுக்கான நலன்கள்: PIP, Universal Credit, ESA, DLA, Attendance Allowance மற்றும் Carer's Allowance பற்றிய தமிழ் வழிகாட்டி.",
};

const BENEFITS = [
  {
    name: "PIP — Personal Independence Payment",
    tamil: "தனிப்பட்ட சுதந்திர கொடுப்பனவு",
    body: "PIP என்பது 16 முதல் 64 வயது வரையுள்ள, நாளாந்த நடவடிக்கைகளில் அல்லது நடமாடுவதில் சிரமப்படும் நபர்களுக்கான நலன். வேலை செய்தாலும், சேமிப்பு இருந்தாலும் இந்த நலன் கிடைக்கும். மதிப்பீடு (assessment) நடைபெறலாம் — நாங்கள் தயாராக உதவுவோம்.",
  },
  {
    name: "Universal Credit",
    tamil: "உலகளாவிய வரவு",
    body: "Universal Credit என்பது குறைந்த வருமானம் உள்ளவர்களுக்கும் வேலை தேடுபவர்களுக்கும் மாதாந்திர வழங்கப்படும் கொடுப்பனவு. இயலாமை இருந்தால், கூடுதல் தொகை (Limited Capability for Work element) கிடைக்கலாம்.",
  },
  {
    name: "ESA — Employment and Support Allowance",
    tamil: "வேலைவாய்ப்பு மற்றும் ஆதரவு கொடுப்பனவு",
    body: "ESA என்பது நோய் அல்லது இயலாமை காரணமாக வேலை செய்ய இயலாதவர்களுக்கான நலன். புதிய விண்ணப்பங்கள் பெரும்பாலும் Universal Credit மூலமாக செய்யப்படுகின்றன.",
  },
  {
    name: "DLA — Disability Living Allowance",
    tamil: "இயலாமை வாழ்க்கை கொடுப்பனவு",
    body: "DLA என்பது 16 வயதிற்கு கீழ் உள்ள குழந்தைகளுக்கான இயலாமை கொடுப்பனவு. 16 வயதுக்கு மேல் PIP-க்கு மாற வேண்டியிருக்கும்.",
  },
  {
    name: "Attendance Allowance",
    tamil: "கவனிப்பு கொடுப்பனவு",
    body: "65 வயதுக்கு மேற்பட்ட நபர்களுக்கானது. தனிப்பட்ட கவனிப்பு தேவைப்படுபவர்களுக்கு வழங்கப்படுகிறது. வேலை செய்தாலும், சேமிப்பு இருந்தாலும் கிடைக்கும்.",
  },
  {
    name: "Carer's Allowance",
    tamil: "கவலைப்படுவோர் கொடுப்பனவு",
    body: "Carer's Allowance என்பது இயலாமை உள்ளவரை வாரம் குறைந்தது 35 மணி நேரம் கவனிப்பவர்களுக்கான கொடுப்பனவு. மாதாந்திர தொகை வழங்கப்படுகிறது.",
  },
];

export default function TamilBenefitsPage() {
  return (
    <div lang="ta" style={{ fontFamily: "var(--font-noto-tamil, var(--font-body))" }}>
      {/* ── Language notice strip ─────────────────────────────── */}
      <div className="bg-[#EDE6F7] border-b border-[#D4CEED] py-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="text-[#6B4E9E] font-medium">
            இந்த பக்கம் தமிழில் உள்ளது
          </span>
          <Link
            href="/advice-and-support/benefits-and-entitlements"
            className="text-[#524D63] hover:text-[#6B4E9E] underline underline-offset-2 transition-colors"
          >
            Read full guide in English →
          </Link>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-[#F7F3FC] py-12 lg:py-16" aria-labelledby="ta-ben-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#8B8699] mb-5" style={{ fontFamily: "var(--font-body)" }}>
              <li><Link href="/ta" className="hover:text-[#6B4E9E] transition-colors">முகப்பு</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-[#1F1B2E]">நலன்கள் மற்றும் உரிமைகள்</li>
            </ol>
          </nav>

          <div className="flex items-start gap-4 mb-5">
            <div className="w-13 h-13 rounded-2xl bg-[#EDE6F7] flex items-center justify-center shrink-0">
              <PiggyBank size={26} className="text-[#6B4E9E]" aria-hidden="true" />
            </div>
            <div>
              <h1
                id="ta-ben-heading"
                className="text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
                style={{ fontFamily: "var(--font-noto-tamil, var(--font-heading))" }}
              >
                நலன்கள் மற்றும் உரிமைகள்
              </h1>
              <p className="mt-1 text-[#8B8699] text-sm" style={{ fontFamily: "var(--font-body)" }}>
                Benefits and Entitlements
              </p>
            </div>
          </div>

          <p className="text-lg text-[#524D63] leading-[1.85] max-w-2xl">
            UK-இல் இயலாமை உள்ளவர்களுக்கு பல்வேறு அரசு நலன்கள் உண்டு. இந்த நலன்களை புரிந்துகொண்டு விண்ணப்பிக்க நாங்கள் உங்களுக்கு <strong className="text-[#1F1B2E]">இலவசமாக</strong> உதவுவோம்.
          </p>
        </div>
      </section>

      {/* ── Benefits list ─────────────────────────────────────── */}
      <section className="bg-white py-12 lg:py-16" aria-labelledby="ta-ben-list-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="ta-ben-list-heading"
            className="text-[1.375rem] font-semibold text-[#1F1B2E] mb-8"
            style={{ fontFamily: "var(--font-noto-tamil, var(--font-heading))" }}
          >
            முக்கிய நலன்கள்
          </h2>

          <div className="space-y-5">
            {BENEFITS.map(({ name, tamil, body }) => (
              <div key={name} className="bg-white border border-[#E8E4F0] rounded-2xl p-6">
                <h3
                  className="font-semibold text-[#1F1B2E] text-lg mb-0.5 leading-snug"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {name}
                </h3>
                <p className="text-sm text-[#6B4E9E] font-medium mb-3">{tamil}</p>
                <p className="text-[#524D63] leading-[1.85]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to apply ─────────────────────────────────────── */}
      <section className="bg-[#F4F2F7] py-12" aria-labelledby="ta-ben-apply-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="ta-ben-apply-heading"
            className="text-[1.375rem] font-semibold text-[#1F1B2E] mb-6"
            style={{ fontFamily: "var(--font-noto-tamil, var(--font-heading))" }}
          >
            எவ்வாறு விண்ணப்பிக்கலாம்?
          </h2>
          <div className="bg-white border border-[#E8E4F0] rounded-2xl p-6 lg:p-8 space-y-4 text-[#524D63] leading-[1.85]">
            <p>
              பெரும்பாலான நலன்களுக்கு online அல்லது தொலைபேசியில் விண்ணப்பிக்கலாம். விண்ணப்பிக்க பின்வரும் ஆவணங்கள் தேவைப்படலாம்:
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1">•</span> National Insurance number</li>
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1">•</span> Bank account details</li>
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1">•</span> GP அல்லது மருத்துவமனை விவரங்கள்</li>
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1">•</span> இயலாமை குறித்த மருத்துவ ஆவணங்கள்</li>
            </ul>
            <p>
              <strong className="text-[#1F1B2E]">உதவி தேவையா?</strong> விண்ணப்பிப்பதற்கு முன் நாங்கள் உங்களுக்கு வழிகாட்டுவோம். எங்களை தொடர்பு கொள்ளுங்கள்.
            </p>
          </div>
        </div>
      </section>

      {/* ── English link ──────────────────────────────────────── */}
      <section className="bg-white py-10 border-t border-[#F4F2F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#F7F3FC] border border-[#E8E4F0] rounded-2xl p-6">
            <div>
              <p className="font-semibold text-[#1F1B2E] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                More information in English
              </p>
              <p className="text-sm text-[#524D63]">
                Read our full benefits guides with detailed step-by-step advice.
              </p>
            </div>
            <Link
              href="/advice-and-support/benefits-and-entitlements"
              className="inline-flex items-center gap-2 h-10 px-5 bg-[#6B4E9E] text-white text-sm font-medium rounded-lg hover:bg-[#8B6BC4] transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] focus-visible:ring-offset-2"
            >
              Full guide in English <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────── */}
      <section className="bg-[#6B4E9E] py-12" aria-labelledby="ta-ben-contact-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            id="ta-ben-contact-heading"
            className="text-xl font-semibold text-white mb-5"
            style={{ fontFamily: "var(--font-noto-tamil, var(--font-heading))" }}
          >
            உதவி தேவையா? நாங்கள் இங்கே இருக்கிறோம்.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:07933212547"
              className="inline-flex items-center gap-2 h-11 px-5 bg-white text-[#6B4E9E] font-medium rounded-lg hover:bg-[#F7F3FC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#6B4E9E]"
            >
              <Phone size={15} aria-hidden="true" /> 07933 212547
            </a>
            <a
              href="mailto:info@abilityact.com"
              className="inline-flex items-center gap-2 h-11 px-5 bg-white text-[#6B4E9E] font-medium rounded-lg hover:bg-[#F7F3FC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#6B4E9E]"
            >
              <Mail size={15} aria-hidden="true" /> info@abilityact.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
