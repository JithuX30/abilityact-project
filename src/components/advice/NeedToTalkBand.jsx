"use client";

import { Phone, Mail, MessageCircle } from "lucide-react";

export default function NeedToTalkBand() {
  return (
    <section
      className="bg-[#6B4E9E] py-14"
      aria-labelledby="need-to-talk-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2
          id="need-to-talk-heading"
          className="text-2xl font-semibold text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Can&apos;t find what you need? We&apos;re here to help.
        </h2>
        <p className="mt-2 text-[#EDE6F7]">
          Speak to a real person — our advisors are friendly, non-judgmental,
          and here for you.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
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

          <button
            type="button"
            onClick={() =>
              document.dispatchEvent(new CustomEvent("open-arasi-widget"))
            }
            className="inline-flex items-center gap-2 h-12 px-6 bg-[#E07856] text-white font-medium rounded-lg hover:bg-[#c8684a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#6B4E9E]"
          >
            <MessageCircle size={16} aria-hidden="true" />
            Ask Arasi
          </button>
        </div>
      </div>
    </section>
  );
}
