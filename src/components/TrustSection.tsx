import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import InstitutionalDisclaimer from "./InstitutionalDisclaimer";
import { useLanguage } from "@/contexts/LanguageContext";

const TrustSection = () => {
  const { t } = useLanguage();
  const capabilities = [t.trust.cap1, t.trust.cap2, t.trust.cap3];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute -top-32 -right-40 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.18) 0%, transparent 65%)" }} />
      <div className="absolute -bottom-24 -left-32 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.14) 0%, transparent 65%)" }} />
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,60 C300,20 600,100 900,40 S1400,80 1800,50" stroke="hsl(var(--primary) / 0.12)" strokeWidth="2" fill="none" />
        <path d="M-50,180 C200,140 500,220 800,160 S1200,200 1600,170" stroke="hsl(var(--accent) / 0.1)" strokeWidth="1.5" fill="none" />
      </svg>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4">{t.trust.label}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">{t.trust.title}</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>{t.trust.intro}</p>
            <ul className="space-y-3 pl-1">
              {capabilities.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <p>{t.trust.outro}</p>
          </div>
        </ScrollReveal>

        <InstitutionalDisclaimer text={t.trust.disclaimer} className="mt-10" />
      </div>
    </section>
  );
};

export default TrustSection;
