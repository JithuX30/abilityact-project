import Link from "next/link";
import { Phone, Mail, ArrowRight, Scale } from "lucide-react";

export const metadata = {
  title: "Your Legal Rights — AbilityAction CIC (Sinhala / සිංහල)",
  description:
    "Disability rights in the UK for the Sinhala community. Sinhala translation coming soon — English content available now.",
};

export default function SinhalaYourRightsPage() {
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
            <Link href="/advice-and-support/your-rights" className="text-[#6B4E9E] underline hover:text-[#8B6BC4] transition-colors">
              Read the full English guide →
            </Link>
          </p>
        </div>
      </div>

      <div className="bg-[#EDE6F7] border-b border-[#D4CEED] py-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2 text-sm">
          <span lang="si" className="text-[#6B4E9E] font-medium">සිංහල / Sinhala</span>
          <Link href="/advice-and-support/your-rights" className="text-[#524D63] hover:text-[#6B4E9E] underline underline-offset-2 transition-colors">
            Read full guide in English →
          </Link>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-[#F7F3FC] py-12 lg:py-16" aria-labelledby="si-rights-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#8B8699] mb-5">
              <li><Link href="/si" className="hover:text-[#6B4E9E] transition-colors">Home / සිංහල</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-[#1F1B2E]">Your Legal Rights</li>
            </ol>
          </nav>

          <div className="flex items-start gap-4 mb-5">
            <div className="w-13 h-13 rounded-2xl bg-[#EDE6F7] flex items-center justify-center shrink-0">
              <Scale size={26} className="text-[#6B4E9E]" aria-hidden="true" />
            </div>
            <div>
              <h1
                id="si-rights-heading"
                className="text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Your Legal Rights
              </h1>
              <p lang="si" className="mt-1 text-[#6B4E9E] font-medium">ඔබේ නෛතික අයිතීන්</p>
            </div>
          </div>
          <p className="text-lg text-[#524D63] leading-relaxed max-w-2xl">
            Disabled people in the UK are protected by powerful laws. Understanding your rights is the first step to challenging discrimination and getting the support you are entitled to.
          </p>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────────────── */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

          <div className="border border-[#E8E4F0] rounded-2xl p-6">
            <h2 className="font-semibold text-[#1F1B2E] text-xl mb-1" style={{ fontFamily: "var(--font-heading)" }}>
              Equality Act 2010
            </h2>
            <p lang="si" className="text-sm text-[#6B4E9E] font-medium mb-3">සමානාත්මතා පනත 2010</p>
            <p className="text-[#524D63] leading-relaxed mb-4">
              The Equality Act 2010 is the main law protecting disabled people in the UK. It bans discrimination in employment, education, housing, and public services. Your employer, school, landlord, and service providers all have legal duties toward you.
            </p>
            <p className="font-semibold text-[#1F1B2E] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Types of discrimination it covers:
            </p>
            <ul className="space-y-1.5 text-[#524D63]">
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span> Direct discrimination — treating you worse because of your disability</li>
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span> Indirect discrimination — applying a policy that disadvantages disabled people</li>
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span> Harassment — unwanted behaviour related to your disability</li>
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span> Failure to make reasonable adjustments</li>
            </ul>
          </div>

          <div className="border border-[#E8E4F0] rounded-2xl p-6">
            <h2 className="font-semibold text-[#1F1B2E] text-xl mb-1" style={{ fontFamily: "var(--font-heading)" }}>
              Human Rights Act 1998
            </h2>
            <p lang="si" className="text-sm text-[#6B4E9E] font-medium mb-3">මානව අයිතිවාසිකම් පනත 1998</p>
            <p className="text-[#524D63] leading-relaxed">
              The Human Rights Act brings European human rights into UK law. It protects your rights to dignity, private life, and fair treatment by public bodies. Public authorities must consider your human rights when making decisions about you.
            </p>
          </div>

          <div className="bg-[#F7F3FC] border border-[#E8E4F0] rounded-2xl p-6">
            <h2 className="font-semibold text-[#1F1B2E] text-xl mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              If your rights are breached
            </h2>
            <p lang="si" className="text-sm text-[#6B4E9E] font-medium mb-3">ඔබේ අයිතිවාසිකම් කඩ කළහොත්</p>
            <ul className="space-y-2 text-[#524D63]">
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span><span>Contact us for free advice — we can help you work out your options</span></li>
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span><span><strong className="text-[#1F1B2E]">EASS:</strong> <a href="tel:08088000082" className="text-[#6B4E9E] underline">0808 800 0082</a> — free helpline</span></li>
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span><span><strong className="text-[#1F1B2E]">Citizens Advice</strong> — free local legal guidance</span></li>
              <li className="flex items-start gap-2"><span className="text-[#6B4E9E] mt-1 shrink-0">•</span><span><strong className="text-[#1F1B2E]">Employment Tribunal</strong> — for work-related discrimination</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── English link ──────────────────────────────────────── */}
      <section className="bg-[#F4F2F7] py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-[#E8E4F0] rounded-2xl p-6">
            <div>
              <p className="font-semibold text-[#1F1B2E] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                Read the full rights guide in English
              </p>
              <p className="text-sm text-[#524D63]">
                Detailed information on the Equality Act, how to challenge discrimination, and where to get help.
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
      <section className="bg-[#6B4E9E] py-12" aria-labelledby="si-rights-contact-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 id="si-rights-contact-heading" className="text-xl font-semibold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
            Need advice on your rights?
          </h2>
          <p lang="si" className="text-[#EDE6F7] font-medium mb-5">ඔබේ අයිතිවාසිකම් පිළිබඳ උපදෙස් අවශ්‍යද?</p>
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
