import Link from "next/link";
import { Phone, Mail, ArrowRight, PiggyBank, Briefcase, Scale, Home, Heart, Languages } from "lucide-react";

export const metadata = {
  title: "AbilityAction CIC — இயலாமை ஆதரவு மற்றும் நலன்கள் ஆலோசனை",
  description:
    "AbilityAction CIC, UK-இல் இயலாமை உள்ளவர்களுக்கு நலன்கள் ஆலோசனை, வேலைவாய்ப்பு ஆதரவு, உரிமைகள் வழிகாட்டுதல் மற்றும் சுதந்திரமான வாழ்க்கைக்கான உதவிகளை இலவசமாக வழங்குகிறது.",
};

const SERVICES = [
  {
    icon: PiggyBank,
    href: "/ta/benefits",
    title: "நலன்கள் மற்றும் உரிமைகள்",
    desc: "PIP, Universal Credit, ESA போன்ற UK அரசு நலன்களை புரிந்துகொண்டு விண்ணப்பிக்க உதவுகிறோம்.",
  },
  {
    icon: Briefcase,
    href: "/ta/employment",
    title: "வேலைவாய்ப்பு ஆதரவு",
    desc: "வேலை தேட, CV எழுத, மற்றும் வேலையில் உங்கள் உரிமைகளை பயன்படுத்திக்கொள்ள உதவுகிறோம்.",
  },
  {
    icon: Scale,
    href: "/ta/your-rights",
    title: "உங்கள் சட்ட உரிமைகள்",
    desc: "Equality Act 2010 கீழான உங்கள் உரிமைகளை அறிந்துகொள்ளுங்கள். பாரபட்சத்திற்கு எதிராக போராட உதவுகிறோம்.",
  },
  {
    icon: Home,
    href: "/advice-and-support/housing-support",
    title: "வீட்டுவசதி ஆதரவு",
    desc: "அணுகக்கூடிய வீடுகளை கண்டறிவதற்கும், Housing Benefit பெறுவதற்கும் வழிகாட்டுகிறோம்.",
    englishOnly: true,
  },
  {
    icon: Heart,
    href: "/advice-and-support/mental-health-and-wellbeing",
    title: "மனநல ஆதரவு",
    desc: "மன ஆரோக்கியம் குறித்த வழிகாட்டுதலும், ஆதரவு சேவைகளை கண்டறிவதற்கான உதவியும் வழங்குகிறோம்.",
    englishOnly: true,
  },
  {
    icon: Languages,
    href: "/advice-and-support/sign-language-services",
    title: "சைகை மொழி சேவைகள்",
    desc: "BSL (British Sign Language) மொழிபெயர்ப்பு மற்றும் ஊமை சமூகத்திற்கான சேவைகள்.",
    englishOnly: true,
  },
];

export default function TamilHomePage() {
  return (
    <div lang="ta" style={{ fontFamily: "var(--font-noto-tamil, var(--font-body))" }}>
      {/* ── Language notice strip ─────────────────────────────── */}
      <div className="bg-[#EDE6F7] border-b border-[#D4CEED] py-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="text-[#6B4E9E] font-medium">
            இந்த பக்கம் தமிழில் உள்ளது
          </span>
          <Link
            href="/"
            className="text-[#524D63] hover:text-[#6B4E9E] underline underline-offset-2 transition-colors"
          >
            Read this page in English →
          </Link>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-[#F7F3FC] py-14 lg:py-20" aria-labelledby="ta-hero-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-[#6B4E9E] mb-3">AbilityAction CIC</p>
          <h1
            id="ta-hero-heading"
            className="text-[2rem] sm:text-[2.75rem] font-semibold text-[#1F1B2E] leading-[1.15] mb-5"
            style={{ fontFamily: "var(--font-noto-tamil, var(--font-heading))" }}
          >
            நீங்கள் தனியாக இல்லை. உங்களுக்கு ஆதரவாக நாங்கள் இருக்கிறோம்.
          </h1>
          <p className="text-lg text-[#524D63] leading-[1.8] max-w-2xl">
            AbilityAction CIC என்பது UK-இல் இயலாமை உள்ளவர்களுக்காக செயல்படும் ஒரு சமூக நலன் நிறுவனம். நாங்கள் நலன்கள், வேலைவாய்ப்பு, வீட்டுவசதி, உரிமைகள் மற்றும் மனநல ஆதரவு குறித்த{" "}
            <strong className="text-[#1F1B2E]">இலவச ஆலோசனை</strong> வழங்குகிறோம்.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/ta/contact"
              className="inline-flex items-center gap-2 h-12 px-6 bg-[#C0532F] text-white font-medium rounded-lg hover:bg-[#A8421F] transition-all motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0532F] focus-visible:ring-offset-2"
            >
              தொடர்பு கொள்ளுங்கள்
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 h-12 px-6 border border-[#6B4E9E] text-[#6B4E9E] font-medium rounded-lg hover:bg-[#EDE6F7] transition-all motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] focus-visible:ring-offset-2"
            >
              English version
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services grid ─────────────────────────────────────── */}
      <section className="bg-white py-14 lg:py-20" aria-labelledby="ta-services-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="ta-services-heading"
            className="text-[1.5rem] font-semibold text-[#1F1B2E] mb-2"
            style={{ fontFamily: "var(--font-noto-tamil, var(--font-heading))" }}
          >
            நாங்கள் உதவும் துறைகள்
          </h2>
          <p className="text-[#524D63] mb-8">The areas where we can help you</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(({ icon: Icon, href, title, desc, englishOnly }) => (
              <Link
                key={href}
                href={href}
                className="group block bg-white border border-[#E8E4F0] rounded-2xl p-6 hover:border-[#6B4E9E] hover:shadow-[0_6px_20px_rgba(31,27,46,0.10)] transition-all motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] focus-visible:ring-offset-2"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EDE6F7] flex items-center justify-center mb-4">
                  <Icon size={22} className="text-[#6B4E9E]" aria-hidden="true" />
                </div>
                <h3
                  className="font-semibold text-[#1F1B2E] mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-noto-tamil, var(--font-heading))" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-[#524D63] leading-[1.7] mb-3">{desc}</p>
                {englishOnly && (
                  <span className="text-xs text-[#8B8699]">ஆங்கிலத்தில் / In English</span>
                )}
                <span aria-hidden="true" className="inline-flex items-center gap-1 text-xs text-[#6B4E9E] mt-1">
                  மேலும் அறிய <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who we are ───────────────────────────────────────── */}
      <section className="bg-[#F4F2F7] py-12" aria-labelledby="ta-about-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="ta-about-heading"
            className="text-[1.375rem] font-semibold text-[#1F1B2E] mb-4"
            style={{ fontFamily: "var(--font-noto-tamil, var(--font-heading))" }}
          >
            நாங்கள் யார்?
          </h2>
          <div className="bg-white border border-[#E8E4F0] rounded-2xl p-6 lg:p-8 space-y-4 text-[#524D63] leading-[1.85]">
            <p>
              AbilityAction CIC என்பது Hayes, West London-ல் தலைமையகம் கொண்டுள்ள ஒரு சமூக நலன் நிறுவனம் (Community Interest Company). நாங்கள் UK முழுவதும் இயலாமை உள்ளவர்களுக்கு ஆதரவு வழங்குகிறோம்.
            </p>
            <p>
              எங்கள் அனைத்து சேவைகளும் <strong className="text-[#1F1B2E]">இலவசம்</strong>, நம்பகமான மற்றும் தீர்ப்பற்றவை. நீங்கள் தமிழ் பேசுபவராக இருந்தால், நாங்கள் உங்களுக்கு ஆங்கிலத்திலும் ஆதரவு வழங்க முயற்சிப்போம்.
            </p>
            <p>
              <Link href="/" className="text-[#6B4E9E] underline underline-offset-2 hover:text-[#8B6BC4] transition-colors">
                AbilityAction பற்றி ஆங்கிலத்தில் மேலும் அறிய →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact section ───────────────────────────────────── */}
      <section className="bg-[#6B4E9E] py-14" aria-labelledby="ta-contact-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            id="ta-contact-heading"
            className="text-2xl font-semibold text-white mb-2"
            style={{ fontFamily: "var(--font-noto-tamil, var(--font-heading))" }}
          >
            உதவி தேவையா? நாங்கள் இங்கே இருக்கிறோம்.
          </h2>
          <p className="text-[#EDE6F7] mb-8 leading-[1.7]">
            எங்கள் ஆலோசகர்கள் நட்பான, தீர்ப்பற்ற மற்றும் அனைவருக்கும் இலவசமாக உள்ளனர்.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:07933212547"
              className="inline-flex items-center gap-2 h-12 px-6 bg-white text-[#6B4E9E] font-medium rounded-lg hover:bg-[#F7F3FC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#6B4E9E]"
            >
              <Phone size={16} aria-hidden="true" />
              07933 212547
            </a>
            <a
              href="mailto:info@abilityact.com"
              className="inline-flex items-center gap-2 h-12 px-6 bg-white text-[#6B4E9E] font-medium rounded-lg hover:bg-[#F7F3FC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#6B4E9E]"
            >
              <Mail size={16} aria-hidden="true" />
              info@abilityact.com
            </a>
            <Link
              href="/ta/contact"
              className="inline-flex items-center gap-2 h-12 px-6 bg-[#C0532F] text-white font-medium rounded-lg hover:bg-[#A8421F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#6B4E9E]"
            >
              செய்தி அனுப்பு
            </Link>
          </div>
          <p className="mt-6 text-sm text-[#EDE6F7]">
            திங்கள் – வெள்ளி · காலை 9 மணி – மாலை 5 மணி
          </p>
        </div>
      </section>
    </div>
  );
}
