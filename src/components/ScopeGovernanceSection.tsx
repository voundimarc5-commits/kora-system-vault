import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const ScopeGovernanceSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 relative overflow-hidden">
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
