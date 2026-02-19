import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import InstitutionalDisclaimer from "./InstitutionalDisclaimer";

const capabilities = [
  "Modular expansion across sectors",
  "Clear separation between advisory, products, and orchestration layers",
  "Long-term scalability without operational fragility",
];

const TrustSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-32 -right-40 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.18) 0%, transparent 65%)" }} />
      <div className="absolute -bottom-24 -left-32 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.14) 0%, transparent 65%)" }} />
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,60 C300,20 600,100 900,40 S1400,80 1800,50" stroke="hsl(var(--primary) / 0.12)" strokeWidth="2" fill="none" />
        <path d="M-50,180 C200,140 500,220 800,160 S1200,200 1600,170" stroke="hsl(var(--accent) / 0.1)" strokeWidth="1.5" fill="none" />
      </svg>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4">
            Trust & Positioning
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">
            Built for long-term partnerships. Designed to scale.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Kora Global Systems is structured as a multi-vertical technology
              group, enabling:
            </p>
            <ul className="space-y-3 pl-1">
              {capabilities.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <p>
              We work with partners, developers, institutions, and private
              stakeholders seeking reliable systems, not short-term
              experimentation.
            </p>
          </div>
        </ScrollReveal>

        <InstitutionalDisclaimer
          text="Kora Global Systems does not execute payments or transactions. All financial operations remain the responsibility of licensed third-party providers."
          className="mt-10"
        />
      </div>
    </section>
  );
};

export default TrustSection;
