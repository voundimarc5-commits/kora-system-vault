import ScrollReveal from "./ScrollReveal";

const EthosSection = () => {
  return (
    <section className="py-16 bg-card/50 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -top-20 right-0 w-[450px] h-[450px] rounded-full" style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.07) 0%, transparent 70%)" }} />
      <div className="absolute -bottom-10 -left-20 w-[350px] h-[350px] rounded-full" style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, transparent 70%)" }} />
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80%" cy="30%" r="100" stroke="hsl(var(--primary) / 0.05)" strokeWidth="1" fill="none" />
        <path d="M-20,100 C250,50 500,150 800,80 S1200,120 1500,90" stroke="hsl(var(--accent) / 0.05)" strokeWidth="1" fill="none" />
      </svg>
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
