import { Play } from "lucide-react";
import Button from "@/components/ui/Button";

export default function SignLanguageSection() {
  return (
    <section
      className="bg-[#F7F3FC] py-16 lg:py-24"
      aria-labelledby="slsl-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <div>
            <h2
              id="slsl-heading"
              className="text-[1.625rem] lg:text-[2.25rem] font-semibold text-[#1F1B2E] leading-[1.2]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Sign language support — SLSL and BSL
            </h2>
            <p className="mt-5 text-[#524D63] leading-[1.7]">
              AbilityAction offers British Sign Language (BSL) and Sri Lankan
              Sign Language (SLSL) interpreting, community classes, and
              awareness training — one of our most distinctive services. Whether
              you're deaf, hard of hearing, or a hearing person wanting to
              connect, we're here to help.
            </p>
            <div className="mt-8">
              <Button variant="primary" href="/advice-and-support/sign-language">
                Learn more about sign language services
              </Button>
            </div>
          </div>

          {/* Right — placeholder video thumbnail */}
          <div>
            <div
              className="relative w-full aspect-video bg-[#1F1B2E] rounded-2xl overflow-hidden flex items-center justify-center"
              role="img"
              aria-label="Placeholder for a BSL video introduction to AbilityAction's sign language services"
            >
              {/* Faint grid / texture stand-in */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-[#2E2944] to-[#1F1B2E]"
              />

              {/* Play button */}
              <button
                type="button"
                aria-label="Play video — Introduction to AbilityAction in BSL (British Sign Language)"
                className="relative z-10 w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white motion-safe:hover:scale-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F1B2E]"
              >
                <Play
                  size={24}
                  className="text-[#6B4E9E] ml-1"
                  aria-hidden="true"
                />
              </button>

              {/* Label */}
              <p className="absolute bottom-4 left-0 right-0 text-center text-sm text-white/70 z-10">
                Watch in BSL
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
