import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import africaCoastalPort from "@/assets/africa-coastal-port.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const points = [
  "Design solutions resilient to climate and infrastructure variability",
  "Bridge gaps between global platforms and local execution",
  "Support projects ranging from private developments to enterprise-scale initiatives",
];

const GlobalVisionSection = () => {
  const imgRef = useRef(null);
  const isInView = useInView(imgRef, { once: true, margin: "-80px" });

  return (
    <section id="vision" className="py-16 bg-card/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full opacity-[0.05]" style={{ background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)" }} />
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
        <path d="M-50,120 C300,60 500,200 900,100 S1300,180 1700,120" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
        <circle cx="85%" cy="70%" r="120" stroke="hsl(var(--accent))" strokeWidth="0.5" fill="none" opacity="0.5" />
      </svg>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4">
                Global Vision, Africa-First Reality
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">
                International standards. Local intelligence.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  While Kora Global Systems operates with a global outlook, our
                  solutions are deeply informed by African and emerging market
                  realities, environments where adaptability, resilience, and trust
                  matter more than buzzwords.
                </p>
                <p>This dual perspective allows us to:</p>
                <ul className="space-y-3 pl-1">
                  {points.map((pt, i) => (
                    <li key={pt} className="flex items-start gap-3">
                      <motion.div
                        animate={{ rotateY: [0, 360] }}
                        transition={{
                          duration: 1.5,
                          ease: "easeInOut" as const,
                          repeat: Infinity,
                          repeatDelay: 3,
                          delay: i * 1,
                        }}
                        style={{ perspective: 150 }}
                      >
                        <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      </motion.div>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={africaCoastalPort}
              alt="Tropical African coastal city with harbor and boats"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalVisionSection;
