import KGSLogo from "./KGSLogo";
import DashboardBackground from "./DashboardBackground";
import citySkyline from "@/assets/city-skyline.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* City skyline background image */}
      <div className="absolute inset-0">
        <img
          src={citySkyline}
          alt="Futuristic green campus"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      <DashboardBackground />

      {/* Radial overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(0_0%_100%_/_0.4)_70%)]" />

      <div className="max-w-7xl mx-auto px-6 py-24 text-center relative z-10">
        <div className="flex justify-center mb-6 -mt-8">
          <KGSLogo size="lg" />
        </div>

        <h1 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold text-foreground leading-none max-w-5xl mx-auto mb-8 uppercase tracking-wider">
          INTELLIGENT
          <br />
          <span className="text-primary">SYSTEMS</span>
        </h1>
        <p className="font-display text-lg md:text-xl text-muted-foreground tracking-[0.3em] uppercase mb-8">
          For Modern Infrastructure
        </p>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          KORA Global Systems designs, deploys, and operates intelligent systems
          that automate operations, secure financial flows, and optimize digital
          infrastructures.
        </p>

        <a
          href="#systems"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground font-display font-semibold tracking-wide text-sm rounded hover:brightness-110 transition-all shadow-lg"
        >
          Discover Our Systems
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
