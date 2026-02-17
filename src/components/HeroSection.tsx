import KGSLogo from "./KGSLogo";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43_56%_54%_/_0.06)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 py-24 text-center relative z-10">
        <div className="flex justify-center mb-10">
          <KGSLogo size="lg" />
        </div>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-4xl mx-auto mb-6">
          Intelligent Systems for{" "}
          <span className="text-primary">Modern Infrastructure</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          KORA Global Systems designs, deploys, and operates intelligent systems
          that automate operations, secure financial flows, and optimize digital
          infrastructures.
        </p>

        <a
          href="#systems"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground font-display font-semibold tracking-wide text-sm rounded hover:bg-gold-light transition-colors"
        >
          Discover Our Systems
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
