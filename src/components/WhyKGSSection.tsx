import { Briefcase, Handshake } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyKGSSection = () => {
  const { t } = useLanguage();

  const columns = [
    {
      icon: Briefcase,
      title: t.whyKGS.forCEO,
      statement: t.whyKGS.forCEOStatement,
      mechanism: t.whyKGS.forCEOMechanism,
      direction: "left" as const,
    },
    {
      icon: Handshake,
      title: t.whyKGS.forInvestor,
      statement: t.whyKGS.forInvestorStatement,
      mechanism: t.whyKGS.forInvestorMechanism,
      direction: "right" as const,
    },
  ];

  return (
    <section id="why" className="py-24 border-b border-border">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal direction="left">
          <p className="text-primary font-display text-[11px] tracking-[0.3em] uppercase mb-4">{t.whyKGS.label}</p>
        </ScrollReveal>
        <ScrollReveal direction="left" delay={0.1}>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-16 leading-[1.1] tracking-tight max-w-3xl">
            {t.whyKGS.title}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {columns.map((col, i) => (
            <ScrollReveal key={col.title} direction={col.direction} delay={0.15 + i * 0.1}>
              <div className="h-full border-t border-border pt-7">
                <div className="flex items-center gap-3 mb-7">
                  <col.icon className="h-5 w-5 text-primary/70" />
                  <h3 className="font-display text-[11px] tracking-[0.24em] uppercase text-muted-foreground">{col.title}</h3>
                </div>
                <p className="font-display text-xl md:text-2xl font-semibold text-foreground leading-snug tracking-tight mb-4">
                  {col.statement}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">{col.mechanism}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKGSSection;
