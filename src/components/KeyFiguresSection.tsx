import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const KeyFiguresSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: t.keyFigures.stat1Value, label: t.keyFigures.stat1Label },
    { value: t.keyFigures.stat2Value, label: t.keyFigures.stat2Label },
    { value: t.keyFigures.stat3Value, label: t.keyFigures.stat3Label },
  ];

  return (
    <section className="border-b border-border bg-card/40">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <ScrollReveal direction="up">
          <p className="text-primary font-display text-[11px] tracking-[0.3em] uppercase mb-8">
            {t.keyFigures.eyebrow}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {stats.map((s, i) => (
            <ScrollReveal key={s.value} direction="up" delay={0.1 + i * 0.08}>
              <div className="py-6 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0">
                <span className="block font-display text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
                  {s.value}
                </span>
                <span className="block text-sm text-muted-foreground leading-relaxed mt-3">{s.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.35}>
          <p className="mt-10 text-xs text-muted-foreground/80 leading-relaxed max-w-2xl">{t.keyFigures.note}</p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default KeyFiguresSection;
