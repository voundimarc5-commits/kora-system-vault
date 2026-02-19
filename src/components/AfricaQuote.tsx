import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const AfricaQuote = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="relative py-14 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-[hsl(32_60%_90%_/_0.4)] to-background" />
      
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
          <p className="font-display text-2xl md:text-3xl lg:text-[2.5rem] font-bold leading-snug md:leading-snug">
            <span className="text-muted-foreground/70">{t.africaQuote.part1}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[hsl(30_72%_46%)] to-accent">
              {t.africaQuote.part2}
            </span>
            <br className="hidden md:block" />
            <span className="text-muted-foreground/70">{t.africaQuote.part3}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-[hsl(35_65%_55%)]">
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
