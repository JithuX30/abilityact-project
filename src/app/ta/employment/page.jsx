import Link from "next/link";
import { Phone, Mail, ArrowRight, Briefcase } from "lucide-react";

export const metadata = {
  title: "வேலைவாய்ப்பு ஆதரவு — AbilityAction CIC",
  description:
    "UK-இல் இயலாமை உள்ளவர்களுக்கான வேலை உரிமைகள்: Reasonable adjustments, Access to Work, மற்றும் Disability Confident பற்றிய தமிழ் வழிகாட்டி.",
};

export default function TamilEmploymentPage() {
  return (
    <div lang="ta" style={{ fontFamily: "var(--font-noto-tamil, var(--font-body))" }}>
      {/* ── Language notice strip ─────────────────────────────── */}
      <div className="bg-[#EDE6F7] border-b border-[#D4CEED] py-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="text-[#6B4E9E] font-medium">
            இந்த பக்கம் தமிழில் உள்ளது
          </span>
          <Link
            href="/advice-and-support/employment-support"
            className="text-[#524D63] hover:text-[#6B4E9E] underline underline-offset-2 transition-colors"
          >
            Read full guide in English →
          </Link>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-[#F7F3FC] py-12 lg:py-16" aria-labelledby="ta-emp-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#8B8699] mb-5" style={{ fontFamily: "var(--font-body)" }}>
              <li><Link href="/ta" className="hover:text-[#6B4E9E] transition-colors">முகப்பு</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-[#1F1B2E]">வேலைவாய்ப்பு ஆதரவு</li>
            </ol>
          </nav>

          <div className="flex items-start gap-4 mb-5">
            <div className="w-13 h-13 rounded-2xl bg-[#EDE6F7] flex items-center justify-center shrink-0">
              <Briefcase size={26} className="text-[#6B4E9E]" aria-hidden="true" />
            </div>
            <div>
              <h1
                id="ta-emp-heading"
                className="text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
                style={{ fontFamily: "var(--font-noto-tamil, var(--font-heading))" }}
              >
                வேலைவாய்ப்பு ஆதரவு
              </h1>
              <p className="mt-1 text-[#8B8699] text-sm" style={{ fontFamily: "var(--font-body)" }}>
                Employment Support
              </p>
            </div>
          </div>

          <p className="text-lg text-[#524D63] leading-[1.85] max-w-2xl">
            UK-இல் இயலாமை உள்ளவர்களுக்கு வேலை சம்பந்தமான வலுவான சட்ட உரிமைகள் உண்டு. நாங்கள் வேலை தேட, வேலையில் நிலைக்க, உங்கள் உரிமைகளை பயன்படுத்திக்கொள்ள <strong className="text-[#1F1B2E]">இலவசமாக</strong> உதவுவோம்.
          </p>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────────────── */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Reasonable adjustments */}
          <div className="border border-[#E8E4F0] rounded-2xl p-6">
            <h2
              className="font-semibold text-[#1F1B2E] text-xl mb-1"
              style={{ fontFamily: "var(--font-noto-tamil, var(--font-heading))" }}
            >
              நியாயமான மாற்றங்கள்
            </h2>
            <p className="text-sm text-[#6B4E9E] font-medium mb-4" style={{ fontFamily: "var(--font-body)" }}>
              Reasonable Adjustments
            </p>
            <p className="text-[#524D63] leading-[1.85] mb-4">
              Equality Act 2010 (சமத்துவ சட்டம்) கீழ், இயலாமை உள்ளவர்களுக்கு வேலையில் வசதிக்கேற்ற மாற்றங்கள் செய்வது உங்கள் முதலாளியின் சட்டப்பூர்வ கடமை. இந்த மாற்றங்கள் பின்வருமாறு இருக்கலாம்:
            </p>
            <ul className="space-y-2 text-[#524D63] leading-[1.85]">
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span> வேலை நேரத்தில் மாற்றம் (flexible working hours)</li>
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span> சிறப்பு கருவிகள் அல்லது மென்பொருள் வழங்குதல்</li>
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span> வேலை செய்யும் இடத்தில் அணுகல் (physical access) மேம்பாடு</li>
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span> வேலை பொறுப்புகளை சரிசெய்தல் அல்லது வேறு துறைக்கு மாற்றுதல்</li>
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span> கூடுதல் இடைவேளை அல்லது பயிற்சி வழங்குதல்</li>
            </ul>
          </div>

          {/* Access to Work */}
          <div className="border border-[#E8E4F0] rounded-2xl p-6">
            <h2
              className="font-semibold text-[#1F1B2E] text-xl mb-1"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Access to Work
            </h2>
            <p className="text-sm text-[#6B4E9E] font-medium mb-4" style={{ fontFamily: "var(--font-body)" }}>
              DWP நிதி ஆதரவு திட்டம்
            </p>
            <p className="text-[#524D63] leading-[1.85] mb-4">
              Access to Work என்பது Department for Work and Pensions (DWP) அளிக்கும் திட்டம். இது வேலை செய்வதற்கு தேவையான செலவுகளை ஈடுசெய்யும்:
            </p>
            <ul className="space-y-2 text-[#524D63] leading-[1.85]">
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span> வேலைக்கு பயண செலவுகள் (travel to work costs)</li>
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span> உதவியாளர் அல்லது சைகை மொழி மொழிபெயர்ப்பாளர் செலவுகள்</li>
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span> சிறப்பு கருவிகள் (specialist equipment)</li>
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span> மனநல ஆதரவு (mental health support in the workplace)</li>
            </ul>
          </div>

          {/* Job searching */}
          <div className="border border-[#E8E4F0] rounded-2xl p-6">
            <h2
              className="font-semibold text-[#1F1B2E] text-xl mb-1"
              style={{ fontFamily: "var(--font-noto-tamil, var(--font-heading))" }}
            >
              வேலை தேடுதல் ஆதரவு
            </h2>
            <p className="text-sm text-[#6B4E9E] font-medium mb-4" style={{ fontFamily: "var(--font-body)" }}>
              Job Search Support
            </p>
            <p className="text-[#524D63] leading-[1.85]">
              நாங்கள் பின்வரும் விஷயங்களில் நேரடியாக உதவுவோம்:
            </p>
            <ul className="mt-3 space-y-2 text-[#524D63] leading-[1.85]">
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span> CV எழுதுதல் மற்றும் தொழில்முறை விண்ணப்பங்கள் தயாரித்தல்</li>
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span> நேர்காணல் (interview) பயிற்சி</li>
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span> வேலை விண்ணப்பிக்கும் முறை பற்றிய வழிகாட்டுதல்</li>
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span> Disability Confident நிறுவனங்களில் வேலை தேடுதல்</li>
            </ul>
          </div>

          {/* Disability Confident */}
          <div className="border border-[#E8E4F0] rounded-2xl p-6">
            <h2
              className="font-semibold text-[#1F1B2E] text-xl mb-1"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Disability Confident
            </h2>
            <p className="text-sm text-[#6B4E9E] font-medium mb-4" style={{ fontFamily: "var(--font-body)" }}>
              சிறப்பு நியோஜகர் திட்டம்
            </p>
            <p className="text-[#524D63] leading-[1.85]">
              Disability Confident என்பது UK அரசு திட்டம். இந்த சான்றிதழ் பெற்ற நிறுவனங்கள் இயலாமை உள்ளவர்களை முன்னுரிமை அடிப்படையில் நேர்காணலுக்கு அழைக்க உறுதியளித்துள்ளன. இத்தகைய நிறுவனங்களில் விண்ணப்பிக்கும் போது உங்களுக்கு கூடுதல் வாய்ப்பு உண்டு.
            </p>
          </div>
        </div>
      </section>

      {/* ── English link ──────────────────────────────────────── */}
      <section className="bg-[#F4F2F7] py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-[#E8E4F0] rounded-2xl p-6">
            <div>
              <p className="font-semibold text-[#1F1B2E] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                More information in English
              </p>
              <p className="text-sm text-[#524D63]">
                Read detailed guides on reasonable adjustments, Access to Work, and more.
              </p>
            </div>
            <Link
              href="/advice-and-support/employment-support"
              className="inline-flex items-center gap-2 h-10 px-5 bg-[#6B4E9E] text-white text-sm font-medium rounded-lg hover:bg-[#8B6BC4] transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] focus-visible:ring-offset-2"
            >
              Full guide in English <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────── */}
      <section className="bg-[#6B4E9E] py-12" aria-labelledby="ta-emp-contact-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            id="ta-emp-contact-heading"
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
