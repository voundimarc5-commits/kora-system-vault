import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SystemsSection from "@/components/SystemsSection";
import ApproachSection from "@/components/ApproachSection";
import WhyKGSSection from "@/components/WhyKGSSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SystemsSection />
      <ApproachSection />
      <WhyKGSSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
