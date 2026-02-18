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
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="text-center p-8 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-[0_0_30px_-12px_hsl(var(--primary)_/_0.15)] transition-shadow"
            >
              <b.icon className="h-8 w-8 text-primary mx-auto mb-4" />
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
