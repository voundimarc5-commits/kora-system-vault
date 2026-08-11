import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const ProblemSection = () => {
  const { t } = useLanguage();

  const problems = [
    { title: t.problem.problem1Title, description: t.problem.problem1Desc },
    { title: t.problem.problem2Title, description: t.problem.problem2Desc },
    { title: t.problem.problem3Title, description: t.problem.problem3Desc },
  ];

  return (
    <section className="py-24 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal direction="down">
          <p className="text-primary font-display text-[11px] tracking-[0.3em] uppercase mb-4">{t.problem.label}</p>
        </ScrollReveal>
        <ScrollReveal direction="down" delay={0.1}>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-16 leading-[1.1] max-w-3xl tracking-tight">
            {t.problem.title}
          </h2>
        </ScrollReveal>

        <div className="border-t border-border">
          {problems.map((p, i) => (
            <ScrollReveal key={i} direction="down" delay={0.15 + i * 0.1}>
              <div className="grid md:grid-cols-[1fr_1.5fr] gap-2 md:gap-10 py-7 border-b border-border">
                <h3 className="font-display text-lg md:text-xl font-semibold text-primary leading-snug tracking-tight">
                  {p.title}
                </h3>
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed">{p.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
