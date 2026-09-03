import ScrollReveal from "./ScrollReveal";
import LetterReveal from "./LetterReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const ScopeGovernanceSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <ScrollReveal direction="right">
          <p className="text-primary font-display text-[11px] tracking-[0.3em] uppercase mb-4">{t.scopeGovernance.label}</p>
        </ScrollReveal>
        <LetterReveal
            text={t.scopeGovernance.title}
            className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-8 leading-[1.1] tracking-tight"
          />
        <ScrollReveal direction="right" delay={0.2}>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>{t.scopeGovernance.p1}</p>
            <p>{t.scopeGovernance.p4}</p>
            <p>{t.scopeGovernance.p2}</p>
            <p>{t.scopeGovernance.p3}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ScopeGovernanceSection;
