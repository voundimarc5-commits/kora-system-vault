import { Cpu, ArrowLeftRight, ShieldCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import InstitutionalDisclaimer from "./InstitutionalDisclaimer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const systems = [
  {
    icon: Cpu,
    name: "KGS Automation",
    tagline: "Orchestrate. Optimize. Scale.",
    points: [
      "Business process automation",
      "Intelligent workflow orchestration",
      "System integration & operational efficiency",
    ],
  },
  {
    icon: ArrowLeftRight,
    name: "KGS Flow",
    tagline: "Move value. Securely. Globally.",
    points: [
      "Payment facilitation & cross-border flows",
      "Financial process automation",
      "Secure transaction infrastructure",
    ],
  },
  {
    icon: ShieldCheck,
    name: "KGS Access",
    tagline: "Connect. Control. Protect.",
    points: [
      "Smart access systems & connected devices",
      "Secure access management",
      "Smart infrastructure deployment",
    ],
  },
];

const SystemsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="systems" className="py-24 border-t border-border" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
            Our Systems
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Three Pillars of Digital Infrastructure
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {systems.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-shadow hover:shadow-[0_0_30px_-10px_hsl(var(--primary)_/_0.2)] group"
            >
              <s.icon className="h-10 w-10 text-primary mb-6 group-hover:text-accent transition-colors" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {s.name}
              </h3>
              <p className="text-primary/70 text-sm mb-5 italic">{s.tagline}</p>
              <ul className="space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <InstitutionalDisclaimer
          text="Kora Global Systems does not execute payments or transactions. All financial operations remain the responsibility of licensed third-party providers."
          className="mt-10 text-center"
        />
      </div>
    </section>
  );
};

export default SystemsSection;
