import ScrollReveal from "./ScrollReveal";
import DataFibersBackground from "./DataFibersBackground";
import africaBoardroom from "@/assets/africa-boardroom.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WhoWeAreSection = () => {
  const imgRef = useRef(null);
  const isInView = useInView(imgRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 border-t border-border relative overflow-hidden">
      <DataFibersBackground />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
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
                  Our approach is pragmatic, scalable, and human-centered — combining
                  international standards with deep contextual understanding.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src={africaBoardroom}
              alt="Corporate boardroom meeting"
              className="w-full h-[350px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
