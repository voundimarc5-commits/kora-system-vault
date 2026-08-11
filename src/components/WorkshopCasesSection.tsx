import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const WORKSHOP_URL = "https://access.koraglobalsystems.com";

const WorkshopCasesSection = () => {
  const { t } = useLanguage();

  const cases = [
    { title: t.workshopCases.case1Title, tags: t.workshopCases.case1Tags, desc: t.workshopCases.case1Desc },
    { title: t.workshopCases.case2Title, tags: t.workshopCases.case2Tags, desc: t.workshopCases.case2Desc },
    { title: t.workshopCases.case3Title, tags: t.workshopCases.case3Tags, desc: t.workshopCases.case3Desc },
  ];

  return (
    <section id="workshop" className="py-24 border-b border-border bg-card/40">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal direction="down">
          <p className="text-primary font-display text-[11px] tracking-[0.3em] uppercase mb-4">{t.workshopCases.label}</p>
        </ScrollReveal>
        <ScrollReveal direction="down" delay={0.1}>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-5 leading-[1.1] tracking-tight max-w-3xl">
            {t.workshopCases.title}
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="down" delay={0.15}>
          <p className="text-muted-foreground mb-14 max-w-2xl leading-relaxed">{t.workshopCases.subtitle}</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <ScrollReveal key={c.title} direction="down" delay={0.2 + i * 0.08}>
              <a
                href={WORKSHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full border border-border rounded-lg bg-background p-6 hover:border-primary/40 transition-colors"
              >
                <p className="font-display text-[10px] tracking-[0.2em] uppercase text-muted-foreground/70 mb-4">{c.tags}</p>
                <h3 className="font-display text-base font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {c.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.45}>
          <div className="mt-12">
            <a
              href={WORKSHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-3.5 border border-primary/40 text-primary font-display font-semibold text-sm rounded-md hover:bg-primary/5 transition-colors"
            >
              {t.workshopCases.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              <span className="text-muted-foreground/60 font-normal tracking-wide">access.koraglobalsystems.com</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WorkshopCasesSection;
