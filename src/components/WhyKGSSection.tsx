import { Layers, Lock, Globe, Cog } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import digitalNetwork from "@/assets/digital-network.jpg";
import ScrollReveal from "./ScrollReveal";

const differentiators = [
  {
    icon: Layers,
    title: "Systems Thinking",
    description:
      "We approach every engagement as a systems design challenge — not a list of tasks. Every component is designed to work as part of a larger operational architecture.",
  },
  {
    icon: Lock,
    title: "Security-First Design",
    description:
      "From financial transaction flows to access management, security is embedded in every layer of our infrastructure — not bolted on as an afterthought.",
  },
  {
    icon: Globe,
    title: "Global Operational Scope",
    description:
      "Our systems are built for cross-border and multi-market environments, handling the complexity of international operations with precision.",
  },
  {
    icon: Cog,
    title: "Operational Depth",
    description:
      "We don't just deliver and leave. KGS systems are designed for continuous operation, monitoring, and evolution alongside your business.",
  },
];

const WhyKGSSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why" className="py-24 border-t border-border" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
            Why KGS
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Why KORA Global Systems
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mb-12 rounded-lg overflow-hidden border border-border">
            <motion.img
              src={digitalNetwork}
              alt="Global digital network infrastructure"
              className="w-full h-48 md:h-64 object-cover"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              whileHover={{ x: 8, transition: { duration: 0.25 } }}
              className="flex gap-5 p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-shadow hover:shadow-[0_0_20px_-8px_hsl(var(--primary)_/_0.15)]"
            >
              <d.icon className="h-8 w-8 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {d.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {d.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKGSSection;
