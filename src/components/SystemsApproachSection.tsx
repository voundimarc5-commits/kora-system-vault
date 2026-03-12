import { Cpu, ArrowLeftRight, ShieldCheck } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import cyberOps from "@/assets/cyber-operations.jpg";

const systems = [
  {
    icon: Cpu,
    name: "KGS Automations",
    tagline: "Orchestrate. Optimize. Scale.",
    points: [
      "Business process automation",
      "Intelligent workflow orchestration",
      "System integration & operational efficiency",
    ],
  },
  {
    icon: ArrowLeftRight,
    name: "KGS Market Entry",
    tagline: "Discover. Explore. Connect.",
    points: [
      "African market intelligence & opportunity tracking",
      "Investment ecosystem discovery",
      "Connecting investors with high-potential projects",
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
  { number: "01", title: "Assess", description: "Analyse existing infrastructure and identify inefficiencies." },
  { number: "02", title: "Architect", description: "Design modular, scalable systems for long-term resilience." },
  { number: "03", title: "Deploy", description: "Implement with precision and minimal disruption." },
  { number: "04", title: "Operate", description: "Ongoing management, monitoring, and optimisation." },
];

const SystemsApproachSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="systems" className="py-20 border-t border-border" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Systems */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-3">
                Our Systems
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 leading-tight">
                Three Pillars of<br />Digital Infrastructure
              </h2>
            </motion.div>

            <div className="space-y-5">
              {systems.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: -50, rotateY: -15 }}
                  animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.15, type: "spring", stiffness: 80 }}
                  whileHover={{ x: 10, scale: 1.02, transition: { duration: 0.2 } }}
                  className="flex gap-4 p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-all hover:shadow-[0_0_30px_-10px_hsl(var(--primary)_/_0.15)]"
                >
                  <motion.div
                    animate={isInView ? { rotate: [0, 5, -5, 0] } : {}}
                    transition={{ duration: 2, delay: 1 + i * 0.3, repeat: Infinity, repeatDelay: 4 }}
                  >
                    <s.icon className="h-7 w-7 text-primary shrink-0 mt-0.5" />
                  </motion.div>
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground mb-0.5">
                      {s.name}
                    </h3>
                    <p className="text-primary/60 text-xs italic mb-2">{s.tagline}</p>
                    <ul className="space-y-1">
                      {s.points.map((p) => (
                        <li key={p} className="text-muted-foreground text-xs flex items-start gap-1.5">
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

          {/* Right: Approach + image */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-3" id="approach">
                Our Approach
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 leading-tight">
                How We Design<br />& Deploy Systems
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {steps.map((s, i) => (
                <motion.div
                  key={s.number}
                  initial={{ opacity: 0, y: 30, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="p-4 rounded-lg border border-border bg-card hover:border-primary/20 hover:shadow-[0_0_20px_-8px_hsl(var(--primary)_/_0.1)] transition-shadow"
                >
                  <motion.div
                    className="font-display text-2xl font-bold text-primary/15 mb-1"
                    animate={isInView ? { opacity: [0, 1], scale: [2, 1] } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
                  >
                    {s.number}
                  </motion.div>
                  <h3 className="font-display text-sm font-bold text-foreground mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{s.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="rounded-lg overflow-hidden border border-border"
            >
              <img
                src={cyberOps}
                alt="Innovation campus"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemsApproachSection;
