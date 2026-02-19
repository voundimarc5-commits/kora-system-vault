import ScrollReveal from "./ScrollReveal";
import africaCityDusk from "@/assets/africa-city-dusk.jpg";

const PhilosophySection = () => {
  return (
    <section className="relative min-h-[500px] flex items-center overflow-hidden">
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-20" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20" />

      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src={africaCityDusk}
          alt="African city at dusk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/65" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <ScrollReveal>
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4">
            Our Philosophy
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-background mb-8 leading-tight">
            Technology should adapt to environments — not the other way around.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="space-y-5 text-background/80 leading-relaxed">
            <p>
              In many regions of the world, especially across Africa and emerging
              markets, technology must operate under different constraints:
              climate, connectivity, logistics, regulation, and human usage
              patterns.
            </p>
            <p>
              Kora Global Systems was founded on a simple principle: design
              systems that remain reliable, secure, and intelligible in real
              conditions — not just ideal ones.
            </p>
            <p>
              Our name, <em className="text-primary">Kora</em>, echoes transmission, continuity, and
              connection — values deeply rooted in cultures where technology must
              serve people before it serves abstractions.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PhilosophySection;
