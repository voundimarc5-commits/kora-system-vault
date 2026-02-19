import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const capabilities = [
  "Modular expansion across sectors",
  "Clear separation between advisory, products, and orchestration layers",
  "Long-term scalability without operational fragility",
];

const TrustSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-10 -right-20 w-72 h-72 rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }} />
      <div className="absolute bottom-10 -left-16 w-56 h-56 rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)" }} />
      <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full opacity-[0.03]" style={{ background: "radial-gradient(circle, hsl(var(--glow)) 0%, transparent 70%)" }} />
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
      </div>
    </section>
  );
};

export default TrustSection;
