import { Compass, ListOrdered, FileText } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const PhilosophySection = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: Compass, number: "01", title: t.method.step1Title, desc: t.method.step1Desc },
    { icon: ListOrdered, number: "02", title: t.method.step2Title, desc: t.method.step2Desc },
    { icon: FileText, number: "03", title: t.method.step3Title, desc: t.method.step3Desc },
  ];

  return (
    <section id="method" className="py-20 border-b border-border bg-card/40">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-primary font-display text-[11px] tracking-[0.3em] uppercase mb-4">{t.method.label}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-14 leading-tight tracking-tight">
            {t.method.title}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((s, i) => (
            <ScrollReveal key={s.number} delay={0.15 + i * 0.1}>
              <div className="border-t border-border pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <s.icon className="h-5 w-5 text-primary/70" />
                  <span className="font-display text-xs tracking-[0.2em] text-muted-foreground/70">{s.number}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
