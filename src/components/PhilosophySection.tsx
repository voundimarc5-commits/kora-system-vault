import ScrollReveal from "./ScrollReveal";

const PhilosophySection = () => {
  return (
    <section className="py-24 border-t border-border bg-card/50">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4">
            Our Philosophy
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">
            Technology should adapt to environments — not the other way around.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
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
              Our name, <em>Kora</em>, echoes transmission, continuity, and
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
