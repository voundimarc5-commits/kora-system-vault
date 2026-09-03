import ScrollReveal from "./ScrollReveal";
import LetterReveal from "./LetterReveal";
import glassBridge from "@/assets/glass-bridge-corporate.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhoWeAreSection = () => {
  const imgRef = useRef(null);
  const isInView = useInView(imgRef, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Image with overlaid key message */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-3 relative rounded-lg overflow-hidden border border-border group"
          >
            <img
              src={glassBridge}
              alt="Modern glass bridge inside corporate headquarters"
              className="w-full h-[400px] md:h-[480px] object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-contrast/70 via-contrast/15 to-transparent" />

            {/* Badge */}
            <div className="absolute top-5 left-5">
              <span className="bg-primary text-primary-foreground text-[10px] font-display tracking-[0.2em] uppercase px-4 py-1.5 rounded-sm">
                {t.whoWeAre.badge}
              </span>
            </div>

            {/* Overlaid text card at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-background rounded-md border border-border p-4 md:p-5"
              >
                <p className="text-foreground text-xs md:text-sm leading-relaxed">
                  {t.whoWeAre.p3}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text — 2 cols */}
          <div className="md:col-span-2">
            <ScrollReveal direction="right">
              <p className="text-primary font-display text-[11px] tracking-[0.3em] uppercase mb-4">
                {t.whoWeAre.label}
              </p>
            </ScrollReveal>
            <LetterReveal
              text={t.whoWeAre.title}
              className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8 leading-[1.12] tracking-tight"
            />
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>{t.whoWeAre.p1}</p>
                <p>{t.whoWeAre.p2}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-4xl mx-auto mt-14 border-t border-border pt-8">
            <p className="text-muted-foreground leading-relaxed">{t.whoWeAre.p4}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
