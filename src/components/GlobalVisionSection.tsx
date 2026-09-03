import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import LetterReveal from "./LetterReveal";
import africaCoastalPort from "@/assets/africa-coastal-port.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const GlobalVisionSection = () => {
  const imgRef = useRef(null);
  const isInView = useInView(imgRef, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  const points = [t.globalVision.point1, t.globalVision.point2, t.globalVision.point3];

  return (
    <section id="vision" className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div>
            <ScrollReveal>
              <p className="text-primary font-display text-[11px] tracking-[0.3em] uppercase mb-4">{t.globalVision.label}</p>
            </ScrollReveal>
            <LetterReveal
            text={t.globalVision.title}
            className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8 leading-tight"
          />
            <ScrollReveal delay={0.2}>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>{t.globalVision.p1}</p>
                <p>{t.globalVision.p2}</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Image with overlaid bullet points */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative rounded-2xl overflow-hidden border border-border"
          >
            <img src={africaCoastalPort} alt="Tropical African coastal city with harbor and boats" className="w-full h-[450px] md:h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />

            {/* Overlaid bullet points card */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-background/85 backdrop-blur-md rounded-xl border border-primary/15 p-4 md:p-5"
              >
                <ul className="space-y-2.5">
                  {points.map((pt, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.7 + i * 0.12 }}
                      className="flex items-start gap-2.5"
                    >
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-foreground text-xs md:text-sm leading-relaxed">{pt}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalVisionSection;
