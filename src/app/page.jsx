import HeroSection from "@/components/home/HeroSection";
import PathwayCards from "@/components/home/PathwayCards";
import StatsStrip from "@/components/home/StatsStrip";
import AdviceSection from "@/components/home/AdviceSection";
import NewsSection from "@/components/home/NewsSection";
import EventsSection from "@/components/home/EventsSection";
import SignLanguageSection from "@/components/home/SignLanguageSection";
import PartnersStrip from "@/components/home/PartnersStrip";
import NewsletterBand from "@/components/home/NewsletterBand";

export const metadata = {
  title: "AbilityAction CIC — Disability Support, Benefits Advice and Employment Help",
  description:
    "AbilityAction CIC helps disabled people across the UK with benefits advice, employment support, sign language services, housing guidance, and independent living.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PathwayCards />
      <StatsStrip />
      <AdviceSection />
      <NewsSection />
      <EventsSection />
      <SignLanguageSection />
      <PartnersStrip />
      <NewsletterBand />
    </>
  );
}
