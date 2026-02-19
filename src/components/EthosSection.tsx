import ScrollReveal from "./ScrollReveal";

const EthosSection = () => {
  return (
    <section className="py-24 border-t border-border bg-card/50">
      <div className="max-w-4xl mx-auto px-6">
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
              Our role is to design, structure, and facilitate — ensuring that
              systems remain transparent, compliant, and ethically aligned with
              the environments they operate in.
            </p>
            <p className="font-display text-foreground font-semibold text-lg mt-4 border-l-2 border-primary pl-5">
              Trust is not claimed.
              <br />
              It is built — system by system.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EthosSection;
