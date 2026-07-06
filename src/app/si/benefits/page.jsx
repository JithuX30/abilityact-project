import Link from "next/link";
import { Phone, Mail, ArrowRight, PiggyBank } from "lucide-react";

export const metadata = {
  title: "Benefits and Entitlements — AbilityAction CIC (Sinhala / සිංහල)",
  description:
    "Disability benefits guide for the UK Sinhala community. Sinhala translation coming soon — English content available now.",
};

const BENEFITS = [
  {
    name: "PIP — Personal Independence Payment",
    nameSi: "පුද්ගලික ස්වාධීන ගෙවීම",
    body: "PIP helps with extra living costs if you have a long-term physical or mental health condition or disability. You can get PIP even if you work, have savings, or are getting most other benefits. Aged 16 to State Pension age.",
  },
  {
    name: "Universal Credit",
    nameSi: "විශ්වීය ණය",
    body: "Universal Credit is a monthly payment for people on low incomes or who need help with living costs. If you have a disability or health condition that limits your ability to work, you may get a higher amount.",
  },
  {
    name: "ESA — Employment and Support Allowance",
    nameSi: "රැකියා සහ ආධාරක දීමනාව",
    body: "ESA gives you money and support if you have a disability or health condition that affects how much you can work. Most new claims are now made through Universal Credit.",
  },
  {
    name: "DLA — Disability Living Allowance",
    nameSi: "ආබාධ ජීවන දීමනාව",
    body: "DLA is for children under 16 who need help with personal care or have walking difficulties. At 16, young people usually claim PIP instead.",
  },
  {
    name: "Attendance Allowance",
    nameSi: "සහභාගිත්ව දීමනාව",
    body: "Attendance Allowance is for people over State Pension age who need help with personal care because of a physical or mental disability.",
  },
  {
    name: "Carer's Allowance",
    nameSi: "සත්කාර දීමනාව",
    body: "You could get Carer's Allowance if you care for someone at least 35 hours a week and they receive certain disability benefits.",
  },
];

export default function SinhalaeBenefitsPage() {
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
            <Link href="/advice-and-support/benefits-and-entitlements" className="text-[#6B4E9E] underline hover:text-[#8B6BC4] transition-colors">
              Read the full English guide →
            </Link>
          </p>
        </div>
      </div>

      {/* ── Language notice ───────────────────────────────────── */}
      <div className="bg-[#EDE6F7] border-b border-[#D4CEED] py-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2 text-sm">
          <span lang="si" className="text-[#6B4E9E] font-medium">සිංහල / Sinhala</span>
          <Link href="/advice-and-support/benefits-and-entitlements" className="text-[#524D63] hover:text-[#6B4E9E] underline underline-offset-2 transition-colors">
            Read full guide in English →
          </Link>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-[#F7F3FC] py-12 lg:py-16" aria-labelledby="si-ben-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#8B8699] mb-5">
              <li><Link href="/si" className="hover:text-[#6B4E9E] transition-colors">Home / සිංහල</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-[#1F1B2E]">Benefits</li>
            </ol>
          </nav>

          <div className="flex items-start gap-4 mb-5">
            <div className="w-13 h-13 rounded-2xl bg-[#EDE6F7] flex items-center justify-center shrink-0">
              <PiggyBank size={26} className="text-[#6B4E9E]" aria-hidden="true" />
            </div>
            <div>
              <h1
                id="si-ben-heading"
                className="text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Benefits and Entitlements
              </h1>
              <p lang="si" className="mt-1 text-[#6B4E9E] font-medium">
                ප්‍රතිලාභ සහ අයිතීන්
              </p>
            </div>
          </div>

          <p className="text-lg text-[#524D63] leading-relaxed max-w-2xl">
            There are many government benefits available to disabled people in the UK. We can help you understand and apply for the benefits you are entitled to — for free.
          </p>
        </div>
      </section>

      {/* ── Benefits list ─────────────────────────────────────── */}
      <section className="bg-white py-12 lg:py-16" aria-labelledby="si-ben-list-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="si-ben-list-heading"
            className="text-[1.375rem] font-semibold text-[#1F1B2E] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Key disability benefits
          </h2>
          <div className="space-y-5">
            {BENEFITS.map(({ name, nameSi, body }) => (
              <div key={name} className="bg-white border border-[#E8E4F0] rounded-2xl p-6">
                <h3 className="font-semibold text-[#1F1B2E] text-lg mb-0.5" style={{ fontFamily: "var(--font-heading)" }}>
                  {name}
                </h3>
                <p lang="si" className="text-sm text-[#6B4E9E] font-medium mb-3">
                  {nameSi}
                </p>
                <p className="text-[#524D63] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── English link ──────────────────────────────────────── */}
      <section className="bg-[#F4F2F7] py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-[#E8E4F0] rounded-2xl p-6">
            <div>
              <p className="font-semibold text-[#1F1B2E] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                Read the full benefits guide in English
              </p>
              <p className="text-sm text-[#524D63]">
                Detailed step-by-step advice on every benefit, eligibility, and how to apply.
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
      <section className="bg-[#6B4E9E] py-12" aria-labelledby="si-ben-contact-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            id="si-ben-contact-heading"
            className="text-xl font-semibold text-white mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Need help with a benefits claim?
          </h2>
          <p lang="si" className="text-[#EDE6F7] font-medium mb-5">
            ප්‍රතිලාභ ඉල්ලීමට ආධාරය අවශ්‍යද?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:07933212547" className="inline-flex items-center gap-2 h-11 px-5 bg-white text-[#6B4E9E] font-medium rounded-lg hover:bg-[#F7F3FC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#6B4E9E]">
              <Phone size={15} aria-hidden="true" /> 07933 212547
            </a>
            <a href="mailto:info@abilityact.com" className="inline-flex items-center gap-2 h-11 px-5 bg-white text-[#6B4E9E] font-medium rounded-lg hover:bg-[#F7F3FC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#6B4E9E]">
              <Mail size={15} aria-hidden="true" /> info@abilityact.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
