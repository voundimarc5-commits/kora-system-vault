import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const AfricaQuote = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="relative py-14 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-card/40 border-y border-border" />
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-16 h-[2px] bg-primary/60 mx-auto mb-10 origin-center"
        />

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        >
          <p className="font-display text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight leading-snug md:leading-snug">
            <span className="text-muted-foreground/70">{t.africaQuote.part1}</span>
            <span className="text-foreground">
              {t.africaQuote.part2}
            </span>
            <br className="hidden md:block" />
            <span className="text-muted-foreground/70">{t.africaQuote.part3}</span>
            <span className="text-primary">
              {t.africaQuote.part4}
            </span>
          </p>
        </motion.blockquote>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="w-16 h-[2px] bg-primary/60 mx-auto mt-10 origin-center"
        />
      </div>
    </section>
  );
};

export default AfricaQuote;
