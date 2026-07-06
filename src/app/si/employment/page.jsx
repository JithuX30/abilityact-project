import Link from "next/link";
import { Phone, Mail, ArrowRight, Briefcase } from "lucide-react";

export const metadata = {
  title: "Employment Support — AbilityAction CIC (Sinhala / සිංහල)",
  description:
    "Employment rights and support for disabled people in the UK. Sinhala translation coming soon — English content available now.",
};

export default function SinhalaEmploymentPage() {
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
            <Link href="/advice-and-support/employment-support" className="text-[#6B4E9E] underline hover:text-[#8B6BC4] transition-colors">
              Read the full English guide →
            </Link>
          </p>
        </div>
      </div>

      <div className="bg-[#EDE6F7] border-b border-[#D4CEED] py-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2 text-sm">
          <span lang="si" className="text-[#6B4E9E] font-medium">සිංහල / Sinhala</span>
          <Link href="/advice-and-support/employment-support" className="text-[#524D63] hover:text-[#6B4E9E] underline underline-offset-2 transition-colors">
            Read full guide in English →
          </Link>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-[#F7F3FC] py-12 lg:py-16" aria-labelledby="si-emp-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#8B8699] mb-5">
              <li><Link href="/si" className="hover:text-[#6B4E9E] transition-colors">Home / සිංහල</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-[#1F1B2E]">Employment Support</li>
            </ol>
          </nav>

          <div className="flex items-start gap-4 mb-5">
            <div className="w-13 h-13 rounded-2xl bg-[#EDE6F7] flex items-center justify-center shrink-0">
              <Briefcase size={26} className="text-[#6B4E9E]" aria-hidden="true" />
            </div>
            <div>
              <h1
                id="si-emp-heading"
                className="text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Employment Support
              </h1>
              <p lang="si" className="mt-1 text-[#6B4E9E] font-medium">රැකියා ආධාරය</p>
            </div>
          </div>
          <p className="text-lg text-[#524D63] leading-relaxed max-w-2xl">
            Disabled people in the UK have strong legal rights at work. We can help you understand those rights, find employment, and make the most of schemes designed to support you.
          </p>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────────────── */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

          <div className="border border-[#E8E4F0] rounded-2xl p-6">
            <h2 className="font-semibold text-[#1F1B2E] text-xl mb-1" style={{ fontFamily: "var(--font-heading)" }}>
              Reasonable Adjustments
            </h2>
            <p lang="si" className="text-sm text-[#6B4E9E] font-medium mb-3">සාධාරණ සකස් කිරීම්</p>
            <p className="text-[#524D63] leading-relaxed">
              Under the Equality Act 2010, your employer has a legal duty to make reasonable adjustments so that you are not disadvantaged at work. This could include flexible working hours, specialist equipment, or changes to your duties or location.
            </p>
          </div>

          <div className="border border-[#E8E4F0] rounded-2xl p-6">
            <h2 className="font-semibold text-[#1F1B2E] text-xl mb-1" style={{ fontFamily: "var(--font-heading)" }}>
              Access to Work
            </h2>
            <p lang="si" className="text-sm text-[#6B4E9E] font-medium mb-3">රැකියාවට ප්‍රවේශය</p>
            <p className="text-[#524D63] leading-relaxed">
              Access to Work is a government scheme that can pay for practical support to help you start or stay in work — including travel costs, a support worker, specialist equipment, or a BSL interpreter.
            </p>
          </div>

          <div className="border border-[#E8E4F0] rounded-2xl p-6">
            <h2 className="font-semibold text-[#1F1B2E] text-xl mb-1" style={{ fontFamily: "var(--font-heading)" }}>
              Job Search Support
            </h2>
            <p lang="si" className="text-sm text-[#6B4E9E] font-medium mb-3">රැකියා සෙවීමේ ආධාරය</p>
            <p className="text-[#524D63] leading-relaxed">
              We can help you write a CV, prepare for interviews, and find employers who are committed to inclusive recruitment through the Disability Confident scheme.
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
                Read the full employment guide in English
              </p>
              <p className="text-sm text-[#524D63]">
                Detailed guides on reasonable adjustments, Access to Work, and your workplace rights.
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
      <section className="bg-[#6B4E9E] py-12" aria-labelledby="si-emp-contact-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 id="si-emp-contact-heading" className="text-xl font-semibold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
            Need employment advice?
          </h2>
          <p lang="si" className="text-[#EDE6F7] font-medium mb-5">රැකියා උපදේශනය අවශ්‍යද?</p>
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
