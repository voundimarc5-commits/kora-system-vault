import { Shield, RefreshCw, Brain } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import africaSmartAccess from "@/assets/africa-smart-access.jpg";
import africaDataCenter from "@/assets/africa-data-center.jpg";
import africaBusinessDistrict from "@/assets/africa-business-district.jpg";

const pillars = [
  {
    icon: Shield,
    title: "Secure Access & Physical Systems",
    description:
      "Designing and deploying intelligent access solutions adapted to residential, commercial, and large-scale projects.",
    image: africaSmartAccess,
  },
  {
    icon: RefreshCw,
    title: "Operational Flow Orchestration",
    description:
      "Simplifying complex operational and transactional journeys through structured, compliant, and intermediary-safe systems.",
    image: africaDataCenter,
  },
  {
    icon: Brain,
    title: "Systems & Risk Architecture",
    description:
      "Advisory and design frameworks that help organizations structure secure, scalable infrastructures across regions.",
    image: africaBusinessDistrict,
  },
];

const WhatWeDoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="solutions" className="py-24 border-t border-border" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
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
              className="rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-[0_0_40px_-12px_hsl(var(--primary)_/_0.15)] transition-shadow overflow-hidden"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <p.icon className="absolute bottom-4 left-6 h-8 w-8 text-primary" />
              </div>
              <div className="p-6 pt-3">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
