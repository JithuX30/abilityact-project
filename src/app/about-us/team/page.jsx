import { Linkedin, UserCircle2, MessageCircle } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import OpenArasiButton from "@/components/advice/OpenArasiButton";

const TEAM = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "Sarah founded AbilityAction in 2018 after years as a disability rights advocate. She brings lived experience, fierce determination, and a deep belief that the system can — and must — work better for disabled people.",
    linkedin: "#",
  },
  {
    name: "Marcus Thompson",
    role: "Employment Support Lead",
    bio: "A qualified careers advisor with 12 years in supported employment, Marcus helps people find and keep meaningful work. He has a particular passion for challenging unconscious bias in recruitment.",
    linkedin: "#",
  },
  {
    name: "Priya Nair",
    role: "Sign Language Services Coordinator",
    bio: "A certified BSL and SLSL interpreter, Priya has grown our deaf community services from the ground up. She is one of only a handful of SLSL practitioners in the UK.",
    linkedin: "#",
  },
  {
    name: "David Chen",
    role: "Benefits and Rights Advisor",
    bio: "Formerly with Citizens Advice, David specialises in complex benefit cases and knows the system inside out. He has helped clients reclaim over £250,000 in underpaid or unclaimed benefits.",
    linkedin: "#",
  },
  {
    name: "Amara Osei",
    role: "Community Outreach Manager",
    bio: "Amara builds our relationships with local communities, faith groups, and partner organisations, ensuring we reach the people who need us most — including those who don't know we exist yet.",
    linkedin: "#",
  },
  {
    name: "Rachel Williams",
    role: "Mental Health and Wellbeing Support Worker",
    bio: "A qualified counsellor with a background in NHS mental health services, Rachel brings warmth, clinical rigour, and a commitment to non-stigmatising support to everything she does.",
    linkedin: "#",
  },
];

export const metadata = {
  title: "Our team — About us — AbilityAction CIC",
  description:
    "Meet the advisors, coordinators, and advocates who make AbilityAction what it is.",
};

export default function TeamPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ───────────────────────────────────── */}
      <section className="bg-[#F7F3FC] py-12" aria-labelledby="team-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About us", href: "/about-us/our-story" },
              { label: "Our team", href: "/about-us/team" },
            ]}
          />
          <h1
            id="team-heading"
            className="mt-6 text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Meet our team
          </h1>
          <p className="mt-3 text-lg text-[#524D63] leading-relaxed">
            We are a team of qualified advisors, sign language professionals,
            and lived-experience advocates. Everyone here chose this work because
            they believe it matters.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: Team grid ──────────────────────────────── */}
      <section className="bg-white py-14 lg:py-20" aria-labelledby="team-grid-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="team-grid-heading" className="sr-only">Team members</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map(({ name, role, bio, linkedin }) => (
              <div
                key={name}
                className="bg-white border border-[#E8E4F0] rounded-2xl p-6 shadow-[0_2px_8px_rgba(31,27,46,0.05)]"
              >
                {/* Photo placeholder */}
                <div
                  role="img"
                  aria-label={`Portrait photo of ${name}, ${role} at AbilityAction CIC`}
                  className="w-20 h-20 rounded-full bg-[#EDE6F7] mb-4 flex items-center justify-center"
                >
                  <UserCircle2
                    size={40}
                    className="text-[#6B4E9E] opacity-40"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3
                    className="font-semibold text-[#1F1B2E]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {name}
                  </h3>
                  {linkedin && (
                    <a
                      href={linkedin}
                      aria-label={`${name} on LinkedIn (placeholder link)`}
                      className="text-[#8B8699] hover:text-[#6B4E9E] transition-colors shrink-0"
                    >
                      <Linkedin size={16} aria-hidden="true" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-[#6B4E9E] font-medium mb-3">{role}</p>
                <p className="text-sm text-[#524D63] leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Meet Arasi ─────────────────────────────── */}
      <section className="bg-[#F7F3FC] py-14" aria-labelledby="arasi-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E8E4F0] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(31,27,46,0.06)]">
            <div className="grid sm:grid-cols-[auto_1fr] items-center gap-0">
              {/* Avatar */}
              <div className="bg-[#EDE6F7] p-10 flex items-center justify-center">
                <div
                  role="img"
                  aria-label="Arasi — AbilityAction's digital support assistant, represented by a friendly chat bubble avatar"
                  className="w-24 h-24 rounded-full bg-[#6B4E9E] flex items-center justify-center"
                >
                  <MessageCircle size={40} className="text-white" aria-hidden="true" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h2
                  id="arasi-heading"
                  className="text-[1.25rem] font-semibold text-[#1F1B2E] mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Meet Arasi, your digital support assistant
                </h2>
                <p className="text-[#524D63] leading-relaxed mb-5 text-sm">
                  Arasi is AbilityAction&apos;s AI-powered assistant, available
                  24 hours a day, 7 days a week. She can answer general
                  questions about benefits, employment, housing, your rights, and
                  our services — no appointment needed. For personal advice, our
                  human team is always here too.
                </p>
                <OpenArasiButton
                  label="Chat with Arasi"
                  className="h-10 px-5 bg-[#6B4E9E] text-white rounded-lg hover:bg-[#8B6BC4] transition-colors text-sm font-medium"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Join the team ──────────────────────────── */}
      <section className="bg-white py-12 border-t border-[#F4F2F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2
              className="text-lg font-semibold text-[#1F1B2E]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Want to work with us?
            </h2>
            <p className="text-sm text-[#524D63] mt-1">
              We are always looking for passionate people to join our team.
            </p>
          </div>
          <Button variant="primary" href="/jobs-and-opportunities">
            See current vacancies
          </Button>
        </div>
      </section>
    </>
  );
}
