import Link from "next/link";
import { Phone, Mail, ArrowRight, PiggyBank, Briefcase, Scale, Home, Heart, Languages } from "lucide-react";

export const metadata = {
  title: "AbilityAction CIC — Disability Support Services (Sinhala / සිංහල)",
  description:
    "AbilityAction CIC provides free disability support, benefits advice, and employment guidance across the UK. Sinhala translation coming soon.",
};

const SERVICES = [
  {
    icon: PiggyBank,
    href: "/si/benefits",
    titleEn: "Benefits and Entitlements",
    titleSi: "ප්‍රතිලාභ සහ අයිතීන්",
    desc: "Help claiming PIP, Universal Credit, ESA and other disability benefits.",
  },
  {
    icon: Briefcase,
    href: "/si/employment",
    titleEn: "Employment Support",
    titleSi: "රැකියා ආධාරය",
    desc: "Know your rights at work and get help finding employment.",
  },
  {
    icon: Scale,
    href: "/si/your-rights",
    titleEn: "Your Legal Rights",
    titleSi: "ඔබේ නෛතික අයිතීන්",
    desc: "Your rights under the Equality Act 2010 and how to challenge discrimination.",
  },
  {
    icon: Home,
    href: "/advice-and-support/housing-support",
    titleEn: "Housing Support",
    titleSi: "නිවාස ආධාරය",
    desc: "Finding accessible and adapted housing. Guide in English.",
  },
  {
    icon: Heart,
    href: "/advice-and-support/mental-health-and-wellbeing",
    titleEn: "Mental Health",
    titleSi: "මානසික සෞඛ්‍යය",
    desc: "Mental health guidance and support services. Guide in English.",
  },
  {
    icon: Languages,
    href: "/advice-and-support/sign-language-services",
    titleEn: "Sign Language Services",
    titleSi: "සංඥා භාෂා සේවා",
    desc: "BSL interpretation and Deaf community services. Guide in English.",
  },
];

export default function SinhalaHomePage() {
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
            <Link href="/" className="text-[#6B4E9E] underline hover:text-[#8B6BC4] transition-colors">
              Read the full English version →
            </Link>
          </p>
        </div>
      </div>

      {/* ── Language notice ───────────────────────────────────── */}
      <div className="bg-[#EDE6F7] border-b border-[#D4CEED] py-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2 text-sm">
          <span lang="si" className="text-[#6B4E9E] font-medium">
            සිංහල / Sinhala
          </span>
          <Link href="/" className="text-[#524D63] hover:text-[#6B4E9E] underline underline-offset-2 transition-colors">
            Read in English →
          </Link>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-[#F7F3FC] py-14 lg:py-20" aria-labelledby="si-hero-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-[#6B4E9E] mb-3">AbilityAction CIC</p>
          <h1
            id="si-hero-heading"
            className="text-[2rem] sm:text-[2.75rem] font-semibold text-[#1F1B2E] leading-[1.15] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Disability Support, Benefits Advice and Employment Help
          </h1>
          <p lang="si" className="text-xl font-medium text-[#6B4E9E] mb-4">
            ආබාධිත ආධාරය, ප්‍රතිලාභ උපදේශනය සහ රැකියා සහාය
          </p>
          <p className="text-lg text-[#524D63] leading-relaxed max-w-2xl">
            AbilityAction CIC is a community interest company helping disabled people across the UK with free, confidential, non-judgmental advice and support.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/si/contact"
              className="inline-flex items-center gap-2 h-12 px-6 bg-[#C0532F] text-white font-medium rounded-lg hover:bg-[#A8421F] transition-all motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0532F] focus-visible:ring-offset-2"
            >
              <span lang="si">සම්බන්ධ වන්න</span> / Contact us
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

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="bg-white py-14" aria-labelledby="si-services-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="si-services-heading"
            className="text-[1.5rem] font-semibold text-[#1F1B2E] mb-1"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How we can help
          </h2>
          <p lang="si" className="text-[#6B4E9E] font-medium mb-8">
            අපට උදව් කළ හැකි ක්ෂේත්‍ර
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(({ icon: Icon, href, titleEn, titleSi, desc }) => (
              <Link
                key={href}
                href={href}
                className="group block bg-white border border-[#E8E4F0] rounded-2xl p-6 hover:border-[#6B4E9E] hover:shadow-[0_6px_20px_rgba(31,27,46,0.10)] transition-all motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] focus-visible:ring-offset-2"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EDE6F7] flex items-center justify-center mb-4">
                  <Icon size={22} className="text-[#6B4E9E]" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-[#1F1B2E] mb-0.5" style={{ fontFamily: "var(--font-heading)" }}>
                  {titleEn}
                </h3>
                <p lang="si" className="text-sm text-[#6B4E9E] font-medium mb-2">
                  {titleSi}
                </p>
                <p className="text-sm text-[#524D63] leading-relaxed mb-3">{desc}</p>
                <span aria-hidden="true" className="inline-flex items-center gap-1 text-xs text-[#6B4E9E]">
                  Learn more <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────── */}
      <section className="bg-[#6B4E9E] py-14" aria-labelledby="si-contact-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            id="si-contact-heading"
            className="text-2xl font-semibold text-white mb-1"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Need help? We are here for you.
          </h2>
          <p lang="si" className="text-[#EDE6F7] font-medium mb-6">
            ඔබට සහාය අවශ්‍යද? අපි ඔබ සමඟ සිටිමු.
          </p>
          <p className="text-[#EDE6F7] mb-8">
            Our advisors are friendly, free, and non-judgmental.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:07933212547"
              className="inline-flex items-center gap-2 h-12 px-6 bg-white text-[#6B4E9E] font-medium rounded-lg hover:bg-[#F7F3FC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#6B4E9E]"
            >
              <Phone size={16} aria-hidden="true" /> 07933 212547
            </a>
            <a
              href="mailto:info@abilityact.com"
              className="inline-flex items-center gap-2 h-12 px-6 bg-white text-[#6B4E9E] font-medium rounded-lg hover:bg-[#F7F3FC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#6B4E9E]"
            >
              <Mail size={16} aria-hidden="true" /> info@abilityact.com
            </a>
          </div>
          <p className="mt-5 text-sm text-[#EDE6F7]">Monday – Friday · 9am – 5pm</p>
        </div>
      </section>
    </div>
  );
}
