import { Mail, ArrowRight, FileText, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FooterCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="py-16 relative overflow-hidden" ref={ref}>
      {/* Decorative shapes */}
      <div className="absolute top-0 right-1/4 w-60 h-60 rounded-full opacity-[0.05]" style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }} />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, hsl(var(--glow)) 0%, transparent 70%)" }} />
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10">
            Let's build systems that endure.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="mailto:contact@koraglobalsystems.com"
            className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground font-display font-semibold tracking-wide text-sm rounded-lg"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail className="h-4 w-4" />
            Contact
          </motion.a>
          <motion.a
            href="mailto:partnerships@koraglobalsystems.com"
            className="inline-flex items-center gap-2 px-7 py-3 border border-border text-foreground font-display font-semibold text-sm rounded-lg hover:border-primary/40 transition-colors"
            whileHover={{ scale: 1.03 }}
          >
            Partnerships
            <ArrowRight className="h-4 w-4" />
          </motion.a>
          <motion.a
            href="#about"
            className="inline-flex items-center gap-2 px-7 py-3 border border-border text-muted-foreground font-display text-sm rounded-lg hover:border-primary/40 transition-colors"
            whileHover={{ scale: 1.03 }}
          >
            <FileText className="h-4 w-4" />
            Group Overview
          </motion.a>
          <motion.div whileHover={{ scale: 1.03 }}>
            <Link
              to="/advisory"
              className="inline-flex items-center gap-2 px-7 py-3 bg-primary/10 border border-primary/30 text-primary font-display font-semibold text-sm rounded-lg hover:bg-primary/15 transition-colors"
            >
              <Shield className="h-4 w-4" />
              Exposure Assessment
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FooterCTA;
