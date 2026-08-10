import { Check, Briefcase, Handshake } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyKGSSection = () => {
  const { t } = useLanguage();

  const columns = [
    { icon: Briefcase, title: t.whyKGS.forCEO, points: t.whyKGS.forCEOPoints },
    { icon: Handshake, title: t.whyKGS.forInvestor, points: t.whyKGS.forInvestorPoints },
  ];

  return (
    <section id="why" className="py-20 border-b border-border">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-primary font-display text-[11px] tracking-[0.3em] uppercase mb-4">{t.whyKGS.label}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-14 leading-tight tracking-tight">
            {t.whyKGS.title}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {columns.map((col, i) => (
            <ScrollReveal key={col.title} delay={0.15 + i * 0.1}>
              <div className="bg-background p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <col.icon className="h-5 w-5 text-primary/70" />
                  <h3 className="font-display text-base font-semibold text-foreground">{col.title}</h3>
                </div>
                <ul className="space-y-3">
                  {col.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary/70 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKGSSection;
