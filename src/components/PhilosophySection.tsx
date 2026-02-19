import ScrollReveal from "./ScrollReveal";
import africaCityDusk from "@/assets/africa-city-dusk.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const PhilosophySection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[500px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={africaCityDusk} alt="African city at dusk" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/65" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <ScrollReveal>
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4">
            {t.philosophy.label}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-background mb-8 leading-tight">
            {t.philosophy.title}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="space-y-5 text-background/80 leading-relaxed">
            <p>{t.philosophy.p1}</p>
            <p>{t.philosophy.p2}</p>
            <p>
              {t.philosophy.p3}<em className="text-primary">{t.philosophy.koraName}</em>{t.philosophy.p3end}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PhilosophySection;
