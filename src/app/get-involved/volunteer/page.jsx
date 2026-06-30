import {
  Heart,
  Users,
  TrendingUp,
  Clock,
  MapPin,
  ArrowRight,
  ImageIcon,
} from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import VolunteerForm from "@/components/get-involved/VolunteerForm";

export const metadata = {
  title: "Volunteer with us — Get involved — AbilityAction CIC",
  description:
    "Volunteer with AbilityAction and help disabled people in your community access advice, employment support, and the services they are entitled to.",
};

const BENEFITS = [
  {
    icon: Heart,
    heading: "Make a real difference",
    desc: "Every hour you give goes directly into supporting disabled people in our community — from benefits advice to BSL social evenings. You will see the impact first-hand.",
  },
  {
    icon: TrendingUp,
    heading: "Grow your skills",
    desc: "We provide full training and ongoing support. Past volunteers have gone on to careers in social care, employment advice, and the charity sector.",
  },
  {
    icon: Users,
    heading: "Join a brilliant team",
    desc: "Our volunteers are the heart of AbilityAction. You will be joining a warm, diverse team who share a commitment to inclusion and genuine community care.",
  },
];

const ROLES = [
  {
    id: "befriending",
    title: "Befriending volunteer",
    commitment: "2–3 hours/week",
    locationType: "In-person",
    locationColour: "bg-[#EAF7EF] text-[#2A7A4B]",
    desc: "Spend regular time with a disabled person in the community — chatting, accompanying them to appointments, or simply being a friendly face. No professional background needed, just patience and reliability.",
  },
  {
    id: "employment-advisor",
    title: "Employment advisor volunteer",
    commitment: "4–6 hours/week",
    locationType: "Hybrid",
    locationColour: "bg-[#EDE6F7] text-[#6B4E9E]",
    desc: "Support our employment team in helping disabled jobseekers with CVs, interview prep, and job searching. Ideal for anyone with an HR, careers, or recruitment background.",
  },
  {
    id: "outreach",
    title: "Community outreach volunteer",
    commitment: "3–4 hours/week",
    locationType: "In-person",
    locationColour: "bg-[#EAF7EF] text-[#2A7A4B]",
    desc: "Help us reach people who might not otherwise know about our services — attending community events, distributing information, and having conversations with local residents.",
  },
  {
    id: "bsl-support",
    title: "BSL support volunteer",
    commitment: "2–4 hours/week",
    locationType: "Remote",
    locationColour: "bg-[#FBEAE3] text-[#E07856]",
    desc: "Use your British or Sri Lankan Sign Language skills to support deaf participants at our events and sessions. Particularly valuable for our BSL social evenings and drop-in clinics.",
  },
];

const STORIES = [
  {
    name: "Priya M.",
    role: "Community outreach volunteer, 18 months",
    quote:
      "I was nervous at first — I had never volunteered before. But within a few weeks I felt completely at home. I have met people I will know for life, and I have genuinely helped people navigate a system that can feel overwhelming. It is the most valuable thing I do with my time.",
  },
  {
    name: "David K.",
    role: "Employment advisor volunteer, 2 years",
    quote:
      "I spent 20 years in HR and felt like those skills were just sitting on a shelf after I retired. AbilityAction gave me a way to put them to use where they really matter. Watching someone land their first job after years of feeling excluded from work — that never gets old.",
  },
];

export default function VolunteerPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ───────────────────────────────────── */}
      <section className="bg-[#EAF7EF] py-12" aria-labelledby="volunteer-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Get involved", href: "/get-involved/volunteer" },
              { label: "Volunteer", href: "/get-involved/volunteer" },
            ]}
          />
          <div className="mt-6 grid lg:grid-cols-[3fr_2fr] gap-10 items-center">
            <div>
              <h1
                id="volunteer-heading"
                className="text-[2rem] sm:text-[2.75rem] font-semibold text-[#1F1B2E] leading-[1.15]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Volunteer with us
              </h1>
              <p className="mt-4 text-lg text-[#524D63] leading-relaxed max-w-prose">
                Our volunteers make it possible. Behind every person we support
                is a network of people who give their time, skills, and energy
                because they believe in a more inclusive community. If you do
                too, we would love to hear from you.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="primary" href="#interest-form" className="bg-[#2A7A4B] border-[#2A7A4B] hover:bg-[#226040] hover:border-[#226040] focus-visible:ring-[#2A7A4B]">
                  Apply now
                </Button>
                <Button variant="tertiary" href="#roles">
                  See open roles
                </Button>
              </div>
            </div>

            {/* Hero image placeholder */}
            <div
              role="img"
              aria-label="A group of AbilityAction volunteers laughing together at a community event, wearing green lanyards"
              className="w-full aspect-[4/3] bg-white rounded-[24px] border border-[#B8DFCB] flex flex-col items-center justify-center"
            >
              <ImageIcon size={48} className="text-[#2A7A4B] opacity-20" aria-hidden="true" />
              <p className="mt-2 text-sm text-[#2A7A4B] opacity-40">Volunteer photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Why volunteer ──────────────────────────── */}
      <section className="bg-white py-14 lg:py-20" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="why-heading"
            className="text-[1.5rem] lg:text-[2rem] font-semibold text-[#1F1B2E] mb-10"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why volunteer with us
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {BENEFITS.map(({ icon: Icon, heading, desc }) => (
              <div key={heading} className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EAF7EF] flex items-center justify-center shrink-0">
                  <Icon size={24} className="text-[#2A7A4B]" aria-hidden="true" />
                </div>
                <div>
                  <h3
                    className="font-semibold text-[#1F1B2E] mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {heading}
                  </h3>
                  <p className="text-sm text-[#524D63] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Current roles ──────────────────────────── */}
      <section id="roles" className="bg-[#F4F2F7] py-14 lg:py-20" aria-labelledby="roles-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="roles-heading"
            className="text-[1.5rem] lg:text-[2rem] font-semibold text-[#1F1B2E] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Current volunteer roles
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {ROLES.map(({ id, title, commitment, locationType, locationColour, desc }) => (
              <article
                key={id}
                className="bg-white border border-[#E8E4F0] rounded-2xl p-6 shadow-[0_2px_8px_rgba(31,27,46,0.05)] flex flex-col"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${locationColour}`}>
                    {locationType}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#8B8699]">
                    <Clock size={12} aria-hidden="true" />
                    {commitment}
                  </span>
                </div>
                <h3
                  className="font-semibold text-[#1F1B2E] mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-[#524D63] leading-relaxed flex-1 mb-5">
                  {desc}
                </p>
                {/* Individual application pages not yet built — links to the interest form section below via anchor */}
                <a
                  href="#interest-form"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2A7A4B] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A7A4B] rounded"
                  aria-label={`Apply for ${title}`}
                >
                  Apply for this role
                  <ArrowRight size={14} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Volunteer stories ─────────────────────── */}
      <section className="bg-white py-14 lg:py-20" aria-labelledby="stories-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="stories-heading"
            className="text-[1.5rem] font-semibold text-[#1F1B2E] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What our volunteers say
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {STORIES.map(({ name, role, quote }) => (
              <figure
                key={name}
                className="bg-[#EAF7EF] rounded-2xl p-6 border border-[#B8DFCB]"
              >
                <blockquote>
                  <p className="text-[#1F1B2E] leading-relaxed text-sm italic mb-4">
                    &ldquo;{quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="text-xs text-[#524D63] font-medium">
                  {name}{" "}
                  <span className="font-normal text-[#8B8699]">— {role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Interest / application form ─────────────── */}
      <section
        id="interest-form"
        className="bg-[#F4F2F7] py-14 lg:py-20"
        aria-labelledby="form-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="form-heading"
            className="text-[1.5rem] font-semibold text-[#1F1B2E] mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Express your interest
          </h2>
          <p className="text-[#524D63] mb-8 leading-relaxed">
            Fill in the form below and we will be in touch within 5 working
            days. There is no commitment at this stage — it is just a
            conversation.
          </p>
          <div className="bg-white rounded-2xl border border-[#E8E4F0] p-6 sm:p-8 shadow-sm">
            <VolunteerForm />
          </div>
        </div>
      </section>

      {/* ── SECTION 6: Other ways to help ────────────────────── */}
      <section className="bg-[#2A7A4B] py-14" aria-labelledby="other-ways-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="other-ways-heading"
            className="text-[1.5rem] font-semibold text-white mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Other ways to get involved
          </h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            Volunteering is just one way to support our community. You can also
            attend our events or explore partnering with us as an organisation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="primary"
              href="/get-involved/events"
              className="bg-white text-[#2A7A4B] border-transparent hover:bg-[#EAF7EF] focus-visible:ring-white"
            >
              See upcoming events
            </Button>
            <Button
              variant="secondary"
              href="/get-involved/partner"
              className="border-green-200 text-white hover:bg-green-700 focus-visible:ring-white"
            >
              Partner with us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
