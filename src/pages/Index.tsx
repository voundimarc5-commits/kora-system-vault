import Marquee from "@/components/Marquee";
import Navigation from "@/components/Navigation";
import SnapshotHero from "@/components/SnapshotHero";
import BenefitsSection from "@/components/BenefitsSection";
import SystemsApproachSection from "@/components/SystemsApproachSection";
import WhyKGSSection from "@/components/WhyKGSSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Marquee />
      <Navigation />
      <SnapshotHero />
      <BenefitsSection />
      <SystemsApproachSection />
      <WhyKGSSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
