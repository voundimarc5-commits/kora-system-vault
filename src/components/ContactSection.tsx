import { Mail, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import digitalNetwork from "@/assets/digital-network.jpg";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="py-20 border-t border-border relative overflow-hidden" ref={ref}>
      {/* Subtle background image */}
      <div className="absolute inset-0">
        <img
          src={digitalNetwork}
          alt=""
          className="w-full h-full object-cover opacity-[0.04]"
          loading="lazy"
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-3">
            Get Started
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Let's Build Your Infrastructure
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-sm leading-relaxed">
            Whether you're looking to automate operations, secure financial flows,
            or deploy smart access systems — we're ready to engineer the solution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="mailto:contact@koraglobalsystems.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-display font-semibold tracking-wide text-sm rounded-lg"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail className="h-4 w-4" />
            contact@koraglobalsystems.com
          </motion.a>

          <motion.a
            href="#snapshot"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-display font-semibold text-sm rounded-lg hover:border-primary/40 transition-colors"
            whileHover={{ scale: 1.03 }}
          >
            Run Snapshot
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
