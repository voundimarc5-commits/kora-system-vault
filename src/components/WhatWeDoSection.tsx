import { Scale, BookOpen, ArrowRight, Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import realArchitecturePlanning from "@/assets/real-architecture-planning.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const CSF_FUNCTIONS = ["GOVERN", "IDENTIFY", "PROTECT", "DETECT", "RESPOND", "RECOVER"];

const WhatWeDoSection = () => {
  const { t } = useLanguage();

  const card1Points = [t.domains.card1Point1, t.domains.card1Point2, t.domains.card1Point3];
  const card2Points = [t.domains.card2Point1, t.domains.card2Point2, t.domains.card2Point3];

  return (
    <section id="solutions" className="py-24 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal direction="left">
          <p className="text-primary font-display text-[11px] tracking-[0.3em] uppercase mb-4">{t.domains.label}</p>
        </ScrollReveal>
        <ScrollReveal direction="left" delay={0.1}>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-5 leading-[1.1] tracking-tight max-w-3xl">
            {t.domains.title}
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="left" delay={0.15}>
          <p className="text-muted-foreground mb-14 max-w-2xl leading-relaxed">{t.domains.subtitle}</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 — risk & compliance advisory */}
          <ScrollReveal direction="left" delay={0.2}>
            <article className="h-full border border-border rounded-lg overflow-hidden bg-background flex flex-col">
              <div className="h-44 overflow-hidden border-b border-border">
                <img
                  src={realArchitecturePlanning}
                  alt={t.domains.card1Title}
                  className="w-full h-full object-cover opacity-90"
                  loading="lazy"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="h-5 w-5 text-primary/70" />
                  <h3 className="font-display text-lg font-semibold text-foreground">{t.domains.card1Title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{t.domains.card1Desc}</p>
                <ul className="space-y-2.5 mb-6">
                  {card1Points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-primary/70 mt-0.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto border-t border-border pt-5 space-y-3">
                  <p className="text-muted-foreground text-xs leading-relaxed">{t.domains.card1Note1}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{t.domains.card1Note2}</p>
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* Card 2 — NIST CSF 2.0 workshop */}
          <ScrollReveal direction="right" delay={0.3}>
            <article className="h-full border border-border rounded-lg overflow-hidden bg-card/50 flex flex-col">
              <div className="h-44 border-b border-border flex items-center px-7">
                <div>
                  <p className="font-display text-xs tracking-[0.28em] uppercase text-primary/80 mb-4">NIST CSF 2.0</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-2">
                    {CSF_FUNCTIONS.map((f) => (
                      <span
                        key={f}
                        className="font-display text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-muted-foreground border border-border rounded px-2 py-1"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-5 w-5 text-primary/70" />
                  <h3 className="font-display text-lg font-semibold text-foreground">{t.domains.card2Title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{t.domains.card2Desc}</p>
                <ul className="space-y-2.5 mb-7">
                  {card2Points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-primary/70 mt-0.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://access.koraglobalsystems.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-auto inline-flex items-center gap-2 text-sm font-display font-semibold text-primary hover:text-accent transition-colors"
                >
                  {t.domains.card2Cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <span className="text-muted-foreground/60 font-normal tracking-wide">access.koraglobalsystems.com</span>
                </a>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
