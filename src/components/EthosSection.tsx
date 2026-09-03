import ScrollReveal from "./ScrollReveal";
import LetterReveal from "./LetterReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const EthosSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p className="text-primary font-display text-[11px] tracking-[0.3em] uppercase mb-4">{t.ethos.label}</p>
        </ScrollReveal>
        <LetterReveal
            text={t.ethos.title}
            className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8 leading-tight"
          />
        <ScrollReveal delay={0.2}>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>{t.ethos.p1}</p>
            <p>{t.ethos.p2}</p>
            <p className="font-display text-foreground font-semibold text-lg mt-4 border-l-2 border-primary pl-5">
              {t.ethos.quote}
              <br />
              {t.ethos.quoteLine2}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EthosSection;
