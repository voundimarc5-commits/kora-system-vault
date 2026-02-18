import { Layers, Lock, Globe, Cog } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const differentiators = [
  {
    icon: Layers,
    title: "Systems Thinking",
    description: "Every component designed as part of a larger operational architecture.",
  },
  {
    icon: Lock,
    title: "Security-First Design",
    description: "Security embedded in every layer — not bolted on.",
  },
  {
    icon: Globe,
    title: "Global Operational Scope",
    description: "Built for cross-border, multi-market environments.",
  },
  {
    icon: Cog,
    title: "Operational Depth",
    description: "Continuous operation, monitoring, and evolution.",
  },
];

const WhyKGSSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="why" className="py-20 border-t border-border" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-3">
            Why KGS
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Why KORA Global Systems
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="p-6 rounded-lg border border-border bg-card text-center hover:border-primary/30 hover:shadow-[0_0_25px_-10px_hsl(var(--primary)_/_0.12)] transition-shadow"
            >
              <d.icon className="h-7 w-7 text-primary mx-auto mb-3" />
              <h3 className="font-display text-sm font-bold text-foreground mb-2">{d.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{d.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground/60 text-xs tracking-wider uppercase">
            Standards-driven · Transparent methodology · Built for enterprise
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyKGSSection;
