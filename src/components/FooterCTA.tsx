import { Mail, ArrowRight, FileText, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const FooterCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 relative overflow-hidden" ref={ref}>
      <div className="absolute -top-20 right-1/4 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.16) 0%, transparent 65%)" }} />
      <div className="absolute -bottom-16 -left-16 w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, hsl(var(--glow) / 0.12) 0%, transparent 65%)" }} />
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,40 C400,10 700,80 1100,30 S1500,60 1800,40" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1.5" fill="none" />
      </svg>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10">{t.footerCTA.title}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="mailto:contact@koraglobalsystems.com"
            className="inline-flex items-center gap-2 px-7 py-3 bg-primary/75 text-primary-foreground font-display font-semibold tracking-wide text-sm rounded-lg"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail className="h-4 w-4" />
            {t.footerCTA.contact}
          </motion.a>
          <motion.a
            href="mailto:contact@koraglobalsystems.com"
            className="inline-flex items-center gap-2 px-7 py-3 border border-border/60 text-foreground/75 font-display font-semibold text-sm rounded-lg hover:border-primary/40 transition-colors"
            whileHover={{ scale: 1.03 }}
          >
            {t.footerCTA.partnerships}
            <ArrowRight className="h-4 w-4" />
          </motion.a>
          <motion.a
            href="#about"
            className="inline-flex items-center gap-2 px-7 py-3 border border-border/60 text-muted-foreground/75 font-display text-sm rounded-lg hover:border-primary/40 transition-colors"
            whileHover={{ scale: 1.03 }}
          >
            <FileText className="h-4 w-4" />
            {t.footerCTA.groupOverview}
          </motion.a>
          <motion.div whileHover={{ scale: 1.03 }}>
            <Link
              to="/advisory"
              className="inline-flex items-center gap-2 px-7 py-3 bg-primary/8 border border-primary/20 text-primary/75 font-display font-semibold text-sm rounded-lg hover:bg-primary/12 transition-colors"
            >
              <Shield className="h-4 w-4" />
              {t.footerCTA.exposureAssessment}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-[11px] text-muted-foreground/50 mt-6"
        >
          {t.footerCTA.disclaimer1}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-[10px] text-muted-foreground/35 mt-1"
        >
          {t.footerCTA.disclaimer2}
        </motion.p>
      </div>
    </section>
  );
};

export default FooterCTA;
