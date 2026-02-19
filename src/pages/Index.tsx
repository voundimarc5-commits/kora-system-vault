import Navigation from "@/components/Navigation";
import Marquee from "@/components/Marquee";
import FounderHero from "@/components/FounderHero";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import PhilosophySection from "@/components/PhilosophySection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ImageCarousel from "@/components/ImageCarousel";
import GlobalVisionSection from "@/components/GlobalVisionSection";
import AfricaQuote from "@/components/AfricaQuote";
import TrustSection from "@/components/TrustSection";
import EthosSection from "@/components/EthosSection";
import FooterCTA from "@/components/FooterCTA";
import PreviewReport from "@/components/PreviewReport";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(30 20% 95%) 15%, hsl(32 18% 93%) 40%, hsl(30 15% 94%) 65%, hsl(30 20% 95%) 85%, hsl(var(--background)) 100%)" }}>
      <Navigation />
      <div className="h-16" />
      <Marquee />
      <FounderHero />
      <WhoWeAreSection />
      <PhilosophySection />
      <WhatWeDoSection />
      <ImageCarousel />
      <GlobalVisionSection />
      <AfricaQuote />
      <TrustSection />
      <EthosSection />
      <FooterCTA />
      <PreviewReport />
      <Footer />
    </div>
  );
};

export default Index;
