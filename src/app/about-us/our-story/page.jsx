import {
  Heart,
  Users,
  Star,
  CheckCircle2,
  UserCircle2,
} from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Our story — About us — AbilityAction CIC",
  description:
    "Learn how AbilityAction CIC was founded, what drives us, and the journey that brought us to where we are today.",
};

const VALUES = [
  {
    icon: Heart,
    name: "Dignity",
    desc: "We believe every person deserves to be treated with dignity and respect, whatever their disability, background, or circumstance. We never reduce people to their condition.",
  },
  {
    icon: Star,
    name: "Empowerment",
    desc: "We help people build the confidence, skills, and knowledge to live the life they choose — on their own terms. Our role is to open doors, not to walk through them for you.",
  },
  {
    icon: Users,
    name: "Community",
    desc: "We are stronger together. Belonging and human connection are at the heart of everything we do — from our services to the way our team works with each other.",
  },
];

const PROMISES = [
  "You can be yourself here — no masks, no pressure.",
  "Your story is safe with us and held in confidence.",
  "We will listen before we advise.",
  "We will never make you feel like a burden.",
  "We are here for the long haul — not just one appointment.",
];

const TEAM_TEASERS = [
  { name: "Sarah Johnson", role: "CEO & Founder" },
  { name: "Marcus Thompson", role: "Employment Support Lead" },
  { name: "Priya Nair", role: "Sign Language Services Coordinator" },
];

export default function OurStoryPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ───────────────────────────────────── */}
      <section className="bg-[#F7F3FC] py-12" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About us", href: "/about-us/our-story" },
              { label: "Our story", href: "/about-us/our-story" },
            ]}
          />
          <div className="mt-6 grid lg:grid-cols-[55fr_45fr] gap-10 items-center">
            <div>
              <h1
                id="story-heading"
                className="text-[2rem] sm:text-[2.5rem] font-semibold text-[#1F1B2E] leading-[1.15]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Our story
              </h1>
              <p className="mt-4 text-lg text-[#524D63] leading-relaxed">
                How a kitchen-table idea became a lifeline for hundreds of
                disabled people across the UK.
              </p>
            </div>
            <div
              role="img"
              aria-label="AbilityAction founder Sarah Johnson talking with a client at a community centre table, both smiling warmly"
              className="w-full aspect-[4/3] bg-[#EDE6F7] rounded-[24px] flex flex-col items-center justify-center"
            >
              <UserCircle2 size={56} className="text-[#6B4E9E] opacity-30" aria-hidden="true" />
              <p className="mt-2 text-sm text-[#8B8699]">Founder photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Mission statement ─────────────────────── */}
      <section className="bg-white py-14">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <blockquote className="border-l-4 border-[#E07856] pl-6">
            <p className="text-xl text-[#1F1B2E] leading-[1.7] font-medium">
              &ldquo;AbilityAction CIC exists to ensure that disabled people
              across the UK have access to the information, support, and
              community they need to live independently and thrive. We believe
              disability is not a barrier to a full life — and we work every day
              to remove the barriers that stand in the way.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-[#8B8699]">
              — AbilityAction CIC mission statement
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── SECTION 3: Narrative ──────────────────────────────── */}
      <section className="bg-[#F4F2F7] py-14 lg:py-20" aria-labelledby="narrative-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2
                id="narrative-heading"
                className="text-[1.5rem] lg:text-[2rem] font-semibold text-[#1F1B2E] mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                How it all began
              </h2>
              <div className="space-y-5 text-[#524D63] leading-[1.7]">
                <p>
                  AbilityAction CIC was founded in 2018 by Sarah Johnson, a
                  disability rights advocate who spent years supporting family
                  members as they navigated a complex and often overwhelming
                  system. Frustrated by the gaps in accessible, culturally
                  sensitive support — particularly for South Asian and deaf
                  communities in West London — she began running informal advice
                  sessions from a community centre in Hillingdon.
                </p>
                <p>
                  What began as a small voluntary effort grew quickly. Within a
                  year, Sarah was joined by a team of volunteers including a BSL
                  interpreter, an employment advisor, and a social worker. In
                  2019, AbilityAction formally registered as a Community
                  Interest Company, committing its resources and purpose to the
                  communities it serves.
                </p>
                <p>
                  The organisation&apos;s early work centred on three needs that
                  came up time and again: understanding benefits entitlements,
                  finding and keeping work, and navigating housing. Our
                  partnership with Moorfields Eye Hospital, which began in 2020,
                  connected us with patients and families affected by sight loss
                  and helped us broaden both our reach and our expertise.
                </p>
                <p>
                  Today, AbilityAction supports hundreds of people across the
                  UK every year. Our team — a blend of qualified advisors, sign
                  language professionals, and lived-experience advocates — works
                  to make sure no one faces the system alone.
                </p>
              </div>
            </div>

            <div
              role="img"
              aria-label="A group of AbilityAction volunteers and staff gathered in a community centre, with handmade posters on the wall behind them"
              className="w-full aspect-[4/3] bg-[#EDE6F7] rounded-[24px] flex flex-col items-center justify-center sticky top-24"
            >
              <Users size={56} className="text-[#6B4E9E] opacity-30" aria-hidden="true" />
              <p className="mt-2 text-sm text-[#8B8699]">Community photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Vision and values ─────────────────────── */}
      <section className="bg-white py-14 lg:py-20" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="values-heading"
            className="text-[1.5rem] lg:text-[2rem] font-semibold text-[#1F1B2E] mb-10 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What we believe
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, name, desc }) => (
              <div
                key={name}
                className="bg-white border border-[#E8E4F0] rounded-2xl p-6 shadow-[0_2px_8px_rgba(31,27,46,0.05)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EDE6F7] flex items-center justify-center mb-4">
                  <Icon size={24} className="text-[#6B4E9E]" aria-hidden="true" />
                </div>
                <h3
                  className="font-semibold text-[#1F1B2E] mb-2 text-lg"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {name}
                </h3>
                <p className="text-sm text-[#524D63] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Our promises ───────────────────────────── */}
      <section className="bg-[#F7F3FC] py-14" aria-labelledby="promises-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2
            id="promises-heading"
            className="text-[1.5rem] lg:text-[2rem] font-semibold text-[#1F1B2E] mb-10"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our promises to you
          </h2>
          <ul className="space-y-4 text-left">
            {PROMISES.map((promise) => (
              <li key={promise} className="flex items-start gap-4">
                <CheckCircle2
                  size={22}
                  className="text-[#6B4E9E] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-[#1F1B2E] text-lg leading-relaxed">
                  {promise}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SECTION 6: Team teaser ────────────────────────────── */}
      <section className="bg-white py-14" aria-labelledby="team-teaser-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="team-teaser-heading"
            className="text-[1.5rem] font-semibold text-[#1F1B2E] mb-8 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The people behind AbilityAction
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {TEAM_TEASERS.map(({ name, role }) => (
              <div
                key={name}
                className="bg-white border border-[#E8E4F0] rounded-2xl p-6 text-center"
              >
                <div
                  role="img"
                  aria-label={`Portrait photo of ${name}, ${role} at AbilityAction`}
                  className="w-20 h-20 rounded-full bg-[#EDE6F7] mx-auto mb-4 flex items-center justify-center"
                >
                  <UserCircle2 size={40} className="text-[#6B4E9E] opacity-40" aria-hidden="true" />
                </div>
                <p
                  className="font-semibold text-[#1F1B2E]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {name}
                </p>
                <p className="text-sm text-[#8B8699] mt-0.5">{role}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="secondary" href="/about-us/team">
              Meet the full team
            </Button>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CTA band ───────────────────────────────── */}
      <section className="bg-[#6B4E9E] py-14" aria-labelledby="story-cta-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2
            id="story-cta-heading"
            className="text-2xl font-semibold text-white mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Want to know more?
          </h2>
          <p className="text-[#EDE6F7] mb-8">Get in touch or explore our support.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="cta" href="/contact">
              Get in touch
            </Button>
            <Button
              variant="secondary"
              href="/advice-and-support"
              className="border-white text-white hover:bg-white/10"
            >
              Explore support
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
