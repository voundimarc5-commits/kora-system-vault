import ScrollReveal from "./ScrollReveal";

const EthosSection = () => {
  return (
    <section className="py-16 bg-card/50 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -top-10 right-10 w-64 h-64 rounded-full opacity-[0.05]" style={{ background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-1/4 w-48 h-48 rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }} />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4">
            Ethos & Commitment
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">
            Responsible innovation, by design.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              We do not position ourselves as a financial institution, payment
              provider, or execution platform.
            </p>
            <p>
              Our role is to design, structure, and facilitate, ensuring that
              systems remain transparent, compliant, and ethically aligned with
              the environments they operate in.
            </p>
            <p className="font-display text-foreground font-semibold text-lg mt-4 border-l-2 border-primary pl-5">
              Trust is not claimed.
              <br />
              It is built, system by system.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EthosSection;
