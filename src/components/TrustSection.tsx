import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import LetterReveal from "./LetterReveal";
import GradientBlob from "./GradientBlob";
import { useLanguage } from "@/contexts/LanguageContext";

const TrustSection = () => {
  const { t } = useLanguage();
  const capabilities = [t.trust.cap1, t.trust.cap2, t.trust.cap3];

  return (
    <section className="py-16 relative overflow-hidden">
      <GradientBlob className="absolute top-1/2 -translate-y-1/2 -right-32 w-[380px] h-[380px] opacity-30" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p className="text-primary font-display text-[11px] tracking-[0.3em] uppercase mb-4">{t.trust.label}</p>
        </ScrollReveal>
        <LetterReveal
            text={t.trust.title}
            className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8 leading-tight"
          />
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
      </div>
    </section>
  );
};

export default TrustSection;
