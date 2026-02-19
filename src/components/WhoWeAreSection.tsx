import ScrollReveal from "./ScrollReveal";
import glassBridge from "@/assets/glass-bridge-corporate.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WhoWeAreSection = () => {
  const imgRef = useRef(null);
  const isInView = useInView(imgRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -left-28 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, transparent 65%)" }} />
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M-80,180 C250,80 500,280 850,140 S1250,220 1650,160" stroke="hsl(var(--primary) / 0.1)" strokeWidth="2" fill="none" />
        <circle cx="90%" cy="25%" r="130" stroke="hsl(var(--accent) / 0.08)" strokeWidth="1.5" fill="none" />
      </svg>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Image — takes 3 cols for visual impact */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-3 relative rounded-2xl overflow-hidden shadow-2xl group"
          >
            <img
              src={glassBridge}
              alt="Modern glass bridge inside corporate headquarters"
              className="w-full h-[400px] md:h-[450px] object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-primary/90 text-primary-foreground text-xs font-display tracking-widest uppercase px-4 py-1.5 rounded-full">
                Innovation & Architecture
              </span>
            </div>
          </motion.div>

          {/* Text — 2 cols */}
          <div className="md:col-span-2">
            <ScrollReveal>
              <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4">
                Who We Are
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">
                A global technology group, grounded in real-world realities.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Kora Global Systems was created to design and structure technology
                  solutions that work where conditions are complex, infrastructure is
                  uneven, and expectations are high.
                </p>
                <p>
                  We operate at the intersection of security, systems architecture,
                  and operational intelligence, with a strong focus on markets that
                  are often underserved by rigid, one-size-fits-all solutions.
                </p>
                <p>
                  Our approach is pragmatic, scalable, and human-centered, combining
                  international standards with deep contextual understanding.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
