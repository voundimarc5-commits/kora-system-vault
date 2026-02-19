import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
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
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, transparent 65%)" }} />
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M-50,120 C300,60 500,200 900,100 S1300,180 1700,120" stroke="hsl(var(--primary) / 0.1)" strokeWidth="2" fill="none" />
        <circle cx="85%" cy="70%" r="140" stroke="hsl(var(--accent) / 0.08)" strokeWidth="1.5" fill="none" />
      </svg>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div>
            <ScrollReveal>
              <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4">{t.globalVision.label}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">{t.globalVision.title}</h2>
            </ScrollReveal>
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
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img src={africaCoastalPort} alt="Tropical African coastal city with harbor and boats" className="w-full h-[450px] md:h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />

            {/* Overlaid bullet points card */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-background/85 backdrop-blur-md rounded-xl border border-primary/15 p-4 md:p-5 shadow-[0_-8px_30px_-8px_hsl(var(--primary)_/_0.2)]"
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
