import { Shield, RefreshCw, Brain } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    icon: Shield,
    title: "Secure Access & Physical Systems",
    description:
      "Designing and deploying intelligent access solutions adapted to residential, commercial, and large-scale projects.",
  },
  {
    icon: RefreshCw,
    title: "Operational Flow Orchestration",
    description:
      "Simplifying complex operational and transactional journeys through structured, compliant, and intermediary-safe systems.",
  },
  {
    icon: Brain,
    title: "Systems & Risk Architecture",
    description:
      "Advisory and design frameworks that help organizations structure secure, scalable infrastructures across regions.",
  },
];

const WhatWeDoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="solutions" className="py-24 border-t border-border" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4">
            What We Do
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
            Structured solutions across security, access, and operational flows.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-muted-foreground mb-12 max-w-2xl leading-relaxed">
            Kora Global Systems develops and oversees specialized solution lines,
            each addressing a critical layer of modern infrastructure.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="p-8 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-[0_0_40px_-12px_hsl(var(--primary)_/_0.15)] transition-shadow"
            >
              <p.icon className="h-8 w-8 text-primary mb-5" />
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
