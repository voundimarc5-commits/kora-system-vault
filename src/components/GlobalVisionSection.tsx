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
    <section id="vision" className="py-24 bg-card/50 relative overflow-hidden">
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
                  realities — environments where adaptability, resilience, and trust
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
