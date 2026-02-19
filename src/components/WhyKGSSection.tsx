import { Layers, Lock, Globe, Cog } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyKGSSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLanguage();

  const differentiators = [
    { icon: Layers, title: t.whyKGS.systemsThinking, description: t.whyKGS.systemsThinkingDesc },
    { icon: Lock, title: t.whyKGS.securityFirst, description: t.whyKGS.securityFirstDesc },
    { icon: Globe, title: t.whyKGS.globalScope, description: t.whyKGS.globalScopeDesc },
    { icon: Cog, title: t.whyKGS.operationalDepth, description: t.whyKGS.operationalDepthDesc },
  ];

  return (
    <section id="why" className="py-20 border-t border-border" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-12">
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-3">{t.whyKGS.label}</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{t.whyKGS.title}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.85 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12, type: "spring", stiffness: 80 }}
              whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.25 } }}
              className="p-6 rounded-lg border border-border bg-card text-center hover:border-primary/30 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)_/_0.15)] transition-shadow"
            >
              <motion.div animate={isInView ? { rotateY: [0, 360] } : {}} transition={{ duration: 0.8, delay: 0.5 + i * 0.15 }}>
                <d.icon className="h-7 w-7 text-primary mx-auto mb-3" />
              </motion.div>
              <h3 className="font-display text-sm font-bold text-foreground mb-2">{d.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{d.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} className="mt-12 text-center">
          <p className="text-muted-foreground/60 text-xs tracking-wider uppercase">{t.whyKGS.trustSignals}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyKGSSection;
