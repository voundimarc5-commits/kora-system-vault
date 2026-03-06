import { Target, Zap, KeyRound } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import realArchitecturePlanning from "@/assets/real-architecture-planning.jpg";
import realOperationsRoom from "@/assets/real-operations-room.jpg";
import realAccessGate from "@/assets/real-access-gate.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const iconSpin = {
  animate: { rotateY: [0, 360] },
  transition: { duration: 2, ease: "easeInOut" as const, repeat: Infinity, repeatDelay: 4 },
};

const WhatWeDoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLanguage();

  const pillars = [
    { icon: Target, title: t.whatWeDo.pillar1Title, description: t.whatWeDo.pillar1Desc, image: realArchitecturePlanning, href: "https://marketentry.koraglobalsystems.com" },
    { icon: Zap, title: t.whatWeDo.pillar2Title, description: t.whatWeDo.pillar2Desc, image: realOperationsRoom, href: undefined },
    { icon: KeyRound, title: t.whatWeDo.pillar3Title, description: t.whatWeDo.pillar3Desc, image: realAccessGate, href: "https://access.koraglobalsystems.com" },
  ];

  return (
    <section id="solutions" className="py-16 relative overflow-hidden" ref={ref}>
      <div className="absolute -top-20 -right-24 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, transparent 65%)" }} />
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M-30,100 C350,40 600,180 950,80 S1350,150 1700,100" stroke="hsl(var(--primary) / 0.1)" strokeWidth="2" fill="none" />
        <circle cx="10%" cy="75%" r="110" stroke="hsl(var(--accent) / 0.08)" strokeWidth="1.5" fill="none" />
      </svg>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4">{t.whatWeDo.label}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">{t.whatWeDo.title}</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-muted-foreground mb-12 max-w-2xl leading-relaxed">{t.whatWeDo.subtitle}</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-[0_0_40px_-12px_hsl(var(--primary)_/_0.15)] transition-shadow overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <motion.div className="absolute bottom-4 left-6" animate={iconSpin.animate} transition={{ ...iconSpin.transition, delay: i * 1.5 }} style={{ perspective: 200 }}>
                  <p.icon className="h-8 w-8 text-primary" />
                </motion.div>
              </div>
              <div className="p-6 pt-3">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;