import { Users } from "lucide-react";
import Button from "@/components/ui/Button";

const PARTNER_LOGOS = ["Moorfields Eye Hospital", "NHS", "Hillingdon Council"];

export default function HeroSection() {
  return (
    <section
      className="relative bg-[#F7F3FC] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Organic blob behind the image — purely decorative */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[560px] h-[560px] bg-[#EDE6F7] rounded-full opacity-60 blur-[90px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">

          {/* Left column — text */}
          <div>
            <h1
              id="hero-heading"
              className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-semibold text-[#1F1B2E] leading-[1.1]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Empowering disabled people for a brighter future
            </h1>

            <p className="mt-6 text-lg text-[#524D63] leading-[1.7]">
              AbilityAction CIC helps disabled individuals, their families, and
              carers navigate benefits, employment, housing, and independent
              living — offering expert advice and real community support across
              the UK.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="cta" href="/advice-and-support">
                Get support
              </Button>
              <Button variant="secondary" href="/for-employers">
                For employers
              </Button>
            </div>

            {/* Trust / partnership line */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <span className="text-sm text-[#8B8699]">In partnership with</span>
              <div className="flex flex-wrap gap-3">
                {PARTNER_LOGOS.map((name) => (
                  <div
                    key={name}
                    className="h-8 px-3 bg-white border border-[#E8E4F0] rounded-lg flex items-center justify-center"
                  >
                    <span className="text-xs text-[#8B8699] whitespace-nowrap">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — placeholder image */}
          <div className="order-first lg:order-last">
            <div
              className="relative w-full aspect-[4/3] bg-[#EDE6F7] rounded-[24px] overflow-hidden flex flex-col items-center justify-center"
              role="img"
              aria-label="A diverse group of people from the AbilityAction community smiling together at a community event"
            >
              <Users
                size={64}
                className="text-[#6B4E9E] opacity-30"
                aria-hidden="true"
              />
              <p className="mt-3 text-sm text-[#8B8699]">Community photo</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
