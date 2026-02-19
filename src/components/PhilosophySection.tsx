import ScrollReveal from "./ScrollReveal";
import africaBusinessDistrict from "@/assets/africa-business-district.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PhilosophySection = () => {
  const imgRef = useRef(null);
  const isInView = useInView(imgRef, { once: true, margin: "-80px" });

  return (
    <section className="py-24 border-t border-border bg-card/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative rounded-xl overflow-hidden shadow-xl order-2 md:order-1"
          >
            <img
              src={africaBusinessDistrict}
              alt="African business district"
              className="w-full h-[350px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </motion.div>
          <div className="order-1 md:order-2">
            <ScrollReveal>
              <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4">
                Our Philosophy
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">
                Technology should adapt to environments — not the other way around.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  In many regions of the world, especially across Africa and emerging
                  markets, technology must operate under different constraints:
                  climate, connectivity, logistics, regulation, and human usage
                  patterns.
                </p>
                <p>
                  Kora Global Systems was founded on a simple principle: design
                  systems that remain reliable, secure, and intelligible in real
                  conditions — not just ideal ones.
                </p>
                <p>
                  Our name, <em>Kora</em>, echoes transmission, continuity, and
                  connection — values deeply rooted in cultures where technology must
                  serve people before it serves abstractions.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
