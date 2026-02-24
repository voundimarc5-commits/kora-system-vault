import { Check, Briefcase, TrendingUp } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyKGSSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLanguage();

  return (
    <section id="why" className="py-20 border-t border-border" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-12">
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-3">{t.whyKGS.label}</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{t.whyKGS.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* CEO Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, type: "spring", stiffness: 80 }}
            className="p-8 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)_/_0.15)] transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-7 w-7 text-primary" />
              <h3 className="font-display text-lg font-bold text-foreground">{t.whyKGS.forCEO}</h3>
            </div>
            <ul className="space-y-3">
              {t.whyKGS.forCEOPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Investor Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 80 }}
            className="p-8 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)_/_0.15)] transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-7 w-7 text-primary" />
              <h3 className="font-display text-lg font-bold text-foreground">{t.whyKGS.forInvestor}</h3>
            </div>
            <ul className="space-y-3">
              {t.whyKGS.forInvestorPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} className="mt-12 text-center">
          <p className="text-muted-foreground/60 text-xs tracking-wider uppercase">{t.whyKGS.trustSignals}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyKGSSection;