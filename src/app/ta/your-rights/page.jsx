import Link from "next/link";
import { Phone, Mail, ArrowRight, Scale } from "lucide-react";

export const metadata = {
  title: "உங்கள் சட்ட உரிமைகள் — AbilityAction CIC",
  description:
    "UK-இல் இயலாமை உள்ளவர்களுக்கான சட்ட உரிமைகள்: Equality Act 2010, Human Rights Act மற்றும் பாரபட்சத்திற்கு எதிரான பாதுகாப்பு பற்றிய தமிழ் வழிகாட்டி.",
};

export default function TamilYourRightsPage() {
  return (
    <div lang="ta" style={{ fontFamily: "var(--font-noto-tamil, var(--font-body))" }}>
      {/* ── Language notice strip ─────────────────────────────── */}
      <div className="bg-[#EDE6F7] border-b border-[#D4CEED] py-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="text-[#6B4E9E] font-medium">
            இந்த பக்கம் தமிழில் உள்ளது
          </span>
          <Link
            href="/advice-and-support/your-rights"
            className="text-[#524D63] hover:text-[#6B4E9E] underline underline-offset-2 transition-colors"
          >
            Read full guide in English →
          </Link>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-[#F7F3FC] py-12 lg:py-16" aria-labelledby="ta-rights-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#8B8699] mb-5" style={{ fontFamily: "var(--font-body)" }}>
              <li><Link href="/ta" className="hover:text-[#6B4E9E] transition-colors">முகப்பு</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-[#1F1B2E]">உங்கள் சட்ட உரிமைகள்</li>
            </ol>
          </nav>

          <div className="flex items-start gap-4 mb-5">
            <div className="w-13 h-13 rounded-2xl bg-[#EDE6F7] flex items-center justify-center shrink-0">
              <Scale size={26} className="text-[#6B4E9E]" aria-hidden="true" />
            </div>
            <div>
              <h1
                id="ta-rights-heading"
                className="text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
                style={{ fontFamily: "var(--font-noto-tamil, var(--font-heading))" }}
              >
                உங்கள் சட்ட உரிமைகள்
              </h1>
              <p className="mt-1 text-[#8B8699] text-sm" style={{ fontFamily: "var(--font-body)" }}>
                Your Legal Rights
              </p>
            </div>
          </div>

          <p className="text-lg text-[#524D63] leading-[1.85] max-w-2xl">
            UK-இல் இயலாமை உள்ளவர்களுக்கு சக்திவாய்ந்த சட்ட பாதுகாப்புகள் உண்டு. இந்த உரிமைகளை அறிவது உங்களுக்கு மிகவும் முக்கியம் — நாங்கள் அவற்றை பயன்படுத்திக்கொள்ள உதவுவோம்.
          </p>
        </div>
      </section>

      {/* ── Equality Act ──────────────────────────────────────── */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="border border-[#E8E4F0] rounded-2xl p-6">
            <h2
              className="font-semibold text-[#1F1B2E] text-xl mb-1"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Equality Act 2010
            </h2>
            <p className="text-sm text-[#6B4E9E] font-medium mb-4" style={{ fontFamily: "var(--font-body)" }}>
              சமத்துவ சட்டம் 2010
            </p>
            <div className="space-y-4 text-[#524D63] leading-[1.85]">
              <p>
                Equality Act 2010 என்பது UK-இன் மிகவும் முக்கியமான சட்டம். இது இயலாமை (disability) உட்பட 9 பாதுகாக்கப்பட்ட சிறப்பியல்புகள் (protected characteristics) அடிப்படையில் பாரபட்சத்தை தடை செய்கிறது.
              </p>
              <p>இந்த சட்டம் பின்வரும் துறைகளில் பொருந்தும்:</p>
              <ul className="space-y-1.5 pl-2">
                <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span> வேலைவாய்ப்பு மற்றும் வேலை நேரத்தில் (employment)</li>
                <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span> கல்வி நிறுவனங்களில் (education)</li>
                <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span> வீட்டுவசதி வழங்கலில் (housing)</li>
                <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span> பொது சேவைகளிலும் வணிக நிறுவனங்களிலும் (public services &amp; businesses)</li>
                <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span> சமூக பங்குபற்றல் மற்றும் சங்கங்களில் (associations)</li>
              </ul>
            </div>
          </div>

          {/* Types of discrimination */}
          <div className="border border-[#E8E4F0] rounded-2xl p-6">
            <h2
              className="font-semibold text-[#1F1B2E] text-xl mb-1"
              style={{ fontFamily: "var(--font-noto-tamil, var(--font-heading))" }}
            >
              பாரபட்சத்தின் வகைகள்
            </h2>
            <p className="text-sm text-[#6B4E9E] font-medium mb-4" style={{ fontFamily: "var(--font-body)" }}>
              Types of Discrimination
            </p>
            <div className="space-y-5 text-[#524D63] leading-[1.85]">
              <div>
                <p className="font-semibold text-[#1F1B2E] mb-1">நேரடி பாரபட்சம் <span className="font-normal text-[#8B8699] text-sm">(Direct discrimination)</span></p>
                <p>இயலாமை காரணமாக உங்களை வேறொருவரை விட கடுமையாக நடத்துவது.</p>
              </div>
              <div>
                <p className="font-semibold text-[#1F1B2E] mb-1">மறைமுக பாரபட்சம் <span className="font-normal text-[#8B8699] text-sm">(Indirect discrimination)</span></p>
                <p>இயலாமை உள்ளவர்களுக்கு சரிசமானமற்ற முறையில் பாதிக்கும் விதிகளை அமல்படுத்துவது.</p>
              </div>
              <div>
                <p className="font-semibold text-[#1F1B2E] mb-1">துன்புறுத்தல் <span className="font-normal text-[#8B8699] text-sm">(Harassment)</span></p>
                <p>இயலாமை தொடர்பான அவமானகரமான நடத்தை — சொல்லிலும் செயலிலும்.</p>
              </div>
              <div>
                <p className="font-semibold text-[#1F1B2E] mb-1">நேரடி நியாயமான மாற்றங்கள் தவிர்த்தல் <span className="font-normal text-[#8B8699] text-sm">(Failure to make reasonable adjustments)</span></p>
                <p>தேவையான வசதி மாற்றங்கள் செய்யாமல் தவிர்ப்பதும் பாரபட்சமாகும்.</p>
              </div>
            </div>
          </div>

          {/* Other Acts */}
          <div className="border border-[#E8E4F0] rounded-2xl p-6">
            <h2
              className="font-semibold text-[#1F1B2E] text-xl mb-4"
              style={{ fontFamily: "var(--font-noto-tamil, var(--font-heading))" }}
            >
              மற்ற முக்கிய சட்டங்கள்
            </h2>
            <div className="space-y-5 text-[#524D63] leading-[1.85]">
              <div>
                <p className="font-semibold text-[#1F1B2E] mb-1">Human Rights Act 1998</p>
                <p>இந்த சட்டம் ஐரோப்பிய மனித உரிமை கடமைகளை UK-இல் நடைமுறைப்படுத்துகிறது. உங்கள் கண்ணியம், தனியுரிமை மற்றும் நியாயமான நடத்தைக்கான உரிமைகளை பாதுகாக்கிறது.</p>
              </div>
              <div>
                <p className="font-semibold text-[#1F1B2E] mb-1">Mental Capacity Act 2005</p>
                <p>தீர்மானம் எடுக்கும் திறன் குறைந்தவர்களை பாதுகாக்கும் சட்டம். உங்கள் சார்பில் எடுக்கப்படும் முடிவுகள் உங்கள் சிறந்த நலனில் மட்டுமே கவனம் செலுத்த வேண்டும் என்று வலியுறுத்துகிறது.</p>
              </div>
            </div>
          </div>

          {/* If your rights are breached */}
          <div className="bg-[#F7F3FC] border border-[#E8E4F0] rounded-2xl p-6">
            <h2
              className="font-semibold text-[#1F1B2E] text-xl mb-4"
              style={{ fontFamily: "var(--font-noto-tamil, var(--font-heading))" }}
            >
              உரிமை மீறல் ஏற்பட்டால் என்ன செய்வது?
            </h2>
            <div className="space-y-3 text-[#524D63] leading-[1.85]">
              <p>முதலில் நாங்கள் உங்களுக்கு இலவச ஆலோசனை வழங்குவோம். கூடுதலாக:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#6B4E9E] mt-1 shrink-0">•</span>
                  <span><strong className="text-[#1F1B2E]">Equality Advisory Support Service (EASS):</strong> <a href="tel:08088000082" className="text-[#6B4E9E] underline" style={{ fontFamily: "var(--font-body)" }}>0808 800 0082</a> — இலவசம்</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B4E9E] mt-1 shrink-0">•</span>
                  <span><strong className="text-[#1F1B2E]">Citizens Advice:</strong> உங்கள் உள்ளூர் Citizens Advice அலுவலகம் (இலவசம்)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B4E9E] mt-1 shrink-0">•</span>
                  <span><strong className="text-[#1F1B2E]">Employment Tribunal:</strong> வேலை சம்பந்தமான பாரபட்சத்திற்கு நீதிமன்றத்தில் புகார் செய்யலாம்</span>
                </li>
              </ul>
            </div>
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
                Read our full guide on your rights, the Equality Act, and how to challenge discrimination.
              </p>
            </div>
            <Link
              href="/advice-and-support/your-rights"
              className="inline-flex items-center gap-2 h-10 px-5 bg-[#6B4E9E] text-white text-sm font-medium rounded-lg hover:bg-[#8B6BC4] transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] focus-visible:ring-offset-2"
            >
              Full guide in English <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────── */}
      <section className="bg-[#6B4E9E] py-12" aria-labelledby="ta-rights-contact-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            id="ta-rights-contact-heading"
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
