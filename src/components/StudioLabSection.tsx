import { Lightbulb, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const StudioLabSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLanguage();

  return (
    <section className="py-16 relative overflow-hidden" ref={ref}>
      <div className="absolute -top-28 -right-20 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 65%)" }} />
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <circle cx="15%" cy="60%" r="120" stroke="hsl(var(--accent) / 0.08)" strokeWidth="1.5" fill="none" />
        <path d="M-30,120 C300,70 600,170 900,90 S1300,140 1700,100" stroke="hsl(var(--primary) / 0.08)" strokeWidth="1.5" fill="none" />
      </svg>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4">{t.studioLab.label}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">{t.studioLab.title}</h2>
        </ScrollReveal>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-xl border border-border bg-card/80 p-8 md:p-10"
        >
          <div className="flex items-start gap-5 mb-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t.studioLab.p1}</p>
              <p>{t.studioLab.p2}</p>
              <p>{t.studioLab.p3}</p>
            </div>
          </div>

          <motion.a
            href="mailto:contact@koraglobalsystems.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-lg shadow-lg"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            {t.studioLab.cta}
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default StudioLabSection;