import { Layers, Lock, Globe, Cog } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const differentiators = [
  {
    icon: Layers,
    title: "Systems Thinking",
    description:
      "We approach every engagement as a systems design challenge — not a list of tasks.",
  },
  {
    icon: Lock,
    title: "Security-First Design",
    description:
      "Security is embedded in every layer of our infrastructure — not bolted on as an afterthought.",
  },
  {
    icon: Globe,
    title: "Global Operational Scope",
    description:
      "Built for cross-border and multi-market environments with precision.",
  },
  {
    icon: Cog,
    title: "Operational Depth",
    description:
      "Designed for continuous operation, monitoring, and evolution alongside your business.",
  },
];

const WhyKGSSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why" className="py-20 border-t border-border" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
            Why KGS
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Method. Standards. Transparency.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="p-5 rounded-lg bg-card border border-border hover:border-primary/30 transition-all"
            >
              <d.icon className="h-7 w-7 text-primary mb-3" />
              <h3 className="font-display text-sm font-bold text-foreground mb-2">
                {d.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {d.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKGSSection;
