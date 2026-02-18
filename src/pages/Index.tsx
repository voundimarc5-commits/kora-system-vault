import Navigation from "@/components/Navigation";
import SecuritySnapshot from "@/components/SecuritySnapshot";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import SystemsSection from "@/components/SystemsSection";
import WhyKGSSection from "@/components/WhyKGSSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SecuritySnapshot />
      <BenefitsSection />
      <AboutSection />
      <SystemsSection />
      <WhyKGSSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
