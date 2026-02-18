import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Assess",
    description:
      "We analyze your existing infrastructure, workflows, and operational requirements to identify inefficiencies and opportunities for automation.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "We design system architectures tailored to your operational context — modular, scalable, and built for long-term resilience.",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "We implement and integrate systems into your environment with precision, ensuring minimal disruption and maximum alignment.",
  },
  {
    number: "04",
    title: "Operate",
    description:
      "We provide ongoing system management and optimization, ensuring your infrastructure evolves with your business demands.",
  },
];

const ApproachSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="approach" className="py-24 border-t border-border" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
            Our Approach
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            How We Design & Deploy Systems
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {i < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/30 to-transparent -translate-x-4"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + 0.15 * i }}
                  style={{ originX: 0 }}
                />
              )}
              <div className="font-display text-4xl font-bold text-primary/20 mb-3">
                {s.number}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
