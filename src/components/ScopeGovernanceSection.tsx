import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const ScopeGovernanceSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute -top-24 -left-20 w-[450px] h-[450px] rounded-full" style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 65%)" }} />
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M-30,80 C300,30 600,120 950,60 S1350,100 1700,70" stroke="hsl(var(--accent) / 0.08)" strokeWidth="1.5" fill="none" />
      </svg>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4">{t.scopeGovernance.label}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">{t.scopeGovernance.title}</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>{t.scopeGovernance.p1}</p>
            <p>{t.scopeGovernance.p2}</p>
            <p>{t.scopeGovernance.p3}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ScopeGovernanceSection;
