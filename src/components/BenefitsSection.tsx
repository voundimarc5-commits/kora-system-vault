import { Clock, Target, Cpu } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    icon: Clock,
    title: "Clarity in 2 minutes",
    description: "A quick snapshot of exposure and operational risk.",
  },
  {
    icon: Target,
    title: "Actionable next steps",
    description: "Prioritised recommendations, not generic advice.",
  },
  {
    icon: Cpu,
    title: "Built for modern systems",
    description: "Cyber + operations + digital infrastructure.",
  },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-8 text-center"
        >
          What You Get
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.25 } }}
              className="text-center p-8 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-[0_0_40px_-12px_hsl(var(--primary)_/_0.2)] transition-shadow"
            >
              <motion.div
                initial={{ rotate: -10, scale: 0 }}
                animate={isInView ? { rotate: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15, type: "spring" }}
              >
                <b.icon className="h-8 w-8 text-primary mx-auto mb-4" />
              </motion.div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {b.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
