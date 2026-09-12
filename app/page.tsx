import Hero from "@/components/Hero";
import FounderMessage from "@/components/FounderMessage";
import TeamPromise from "@/components/TeamPromise";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import BrandStatement from "@/components/BrandStatement";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FounderMessage />
      <TeamPromise />
      <Stats />
      <Testimonials />
      <BrandStatement />
      <CTASection />
    </>
  );
}
