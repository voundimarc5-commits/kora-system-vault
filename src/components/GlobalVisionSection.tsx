import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const points = [
  "Design solutions resilient to climate and infrastructure variability",
  "Bridge gaps between global platforms and local execution",
  "Support projects ranging from private developments to enterprise-scale initiatives",
];

const GlobalVisionSection = () => {
  return (
    <section className="py-24 border-t border-border bg-card/50">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4">
            Global Vision, Africa-First Reality
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">
            International standards. Local intelligence.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              While Kora Global Systems operates with a global outlook, our
              solutions are deeply informed by African and emerging market
              realities — environments where adaptability, resilience, and trust
              matter more than buzzwords.
            </p>
            <p>This dual perspective allows us to:</p>
            <ul className="space-y-3 pl-1">
              {points.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <p className="font-display font-semibold text-foreground mt-6">
              We believe Africa is not a "future market" — it is a current
              innovation ground.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GlobalVisionSection;
