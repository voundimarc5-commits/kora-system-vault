import { Cpu, ArrowLeftRight, ShieldCheck } from "lucide-react";
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

const steps = [
  { number: "01", title: "Assess", description: "Analyze infrastructure, workflows, and requirements to identify opportunities." },
  { number: "02", title: "Architect", description: "Design modular, scalable system architectures tailored to your context." },
  { number: "03", title: "Deploy", description: "Implement and integrate with precision, ensuring minimal disruption." },
  { number: "04", title: "Operate", description: "Ongoing management and optimization as your business evolves." },
];

const SystemsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="systems" className="py-20 border-t border-border" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Systems */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
                Our Systems
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                Three Pillars of Infrastructure
              </h2>
            </motion.div>

            <div className="space-y-6">
              {systems.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className="flex gap-4 p-5 rounded-lg bg-card border border-border hover:border-primary/40 transition-all group"
                >
                  <s.icon className="h-8 w-8 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground mb-1">
                      {s.name}
                    </h3>
                    <p className="text-primary/60 text-xs mb-2 italic">{s.tagline}</p>
                    <ul className="space-y-1">
                      {s.points.map((p) => (
                        <li key={p} className="text-muted-foreground text-xs flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Approach */}
          <div id="approach">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
                Our Approach
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                How We Deliver
              </h2>
            </motion.div>

            <div className="space-y-6">
              {steps.map((s, i) => (
                <motion.div
                  key={s.number}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="font-display text-3xl font-bold text-primary/15 leading-none pt-1 shrink-0 w-10">
                    {s.number}
                  </div>
                  <div className="border-l border-border pl-5 pb-2">
                    <h3 className="font-display text-base font-bold text-foreground mb-1">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemsSection;
