import ScrollReveal from "./ScrollReveal";
import LetterReveal from "./LetterReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const PhilosophySection = () => {
  const { t } = useLanguage();

  const steps = [
    { number: "01", title: t.method.step1Title, desc: t.method.step1Desc },
    { number: "02", title: t.method.step2Title, desc: t.method.step2Desc },
    { number: "03", title: t.method.step3Title, desc: t.method.step3Desc },
  ];

  return (
    <section id="method" className="py-24 border-b border-border bg-card/40">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal direction="right">
          <p className="text-primary font-display text-[11px] tracking-[0.3em] uppercase mb-4">{t.method.label}</p>
        </ScrollReveal>
        <LetterReveal
            text={t.method.title}
            className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-16 leading-[1.1] tracking-tight max-w-3xl"
          />

        <div className="border-t border-border">
          {steps.map((s, i) => (
            <ScrollReveal key={s.number} direction="right" delay={0.15 + i * 0.1}>
              <div className="grid md:grid-cols-[1fr_1.5fr] gap-2 md:gap-10 py-7 border-b border-border items-baseline">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-xs tracking-[0.2em] text-primary/50">{s.number}</span>
                  <h3 className="font-display text-lg md:text-xl font-semibold text-primary tracking-tight">{s.title}</h3>
                </div>
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
