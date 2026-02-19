import Navigation from "@/components/Navigation";
import Marquee from "@/components/Marquee";
import FounderHero from "@/components/FounderHero";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import PhilosophySection from "@/components/PhilosophySection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ImageCarousel from "@/components/ImageCarousel";
import GlobalVisionSection from "@/components/GlobalVisionSection";
import TrustSection from "@/components/TrustSection";
import EthosSection from "@/components/EthosSection";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="h-16" />
      <Marquee />
      <FounderHero />
      <WhoWeAreSection />
      <PhilosophySection />
      <WhatWeDoSection />
      <ImageCarousel />
      <GlobalVisionSection />
      <TrustSection />
      <EthosSection />
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default Index;
