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
    <section id="contact" className="py-24 relative overflow-hidden bg-contrast text-contrast-foreground" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-contrast-foreground mb-12 leading-[1.1]">{t.footerCTA.title}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="mailto:contact@koraglobalsystems.com"
            className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground font-display font-semibold tracking-wide text-sm rounded-md"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail className="h-4 w-4" />
            {t.footerCTA.contact}
          </motion.a>
          <motion.a
            href="mailto:contact@koraglobalsystems.com"
            className="inline-flex items-center gap-2 px-7 py-3 border border-contrast-border text-contrast-foreground font-display font-semibold text-sm rounded-md hover:border-contrast-accent/60 transition-colors"
            whileHover={{ scale: 1.03 }}
          >
            {t.footerCTA.partnerships}
            <ArrowRight className="h-4 w-4" />
          </motion.a>
          <motion.div whileHover={{ scale: 1.03 }}>
            <Link
              to="/terms"
              className="inline-flex items-center gap-2 px-7 py-3 border border-contrast-border text-contrast-muted font-display text-sm rounded-md hover:border-contrast-accent/60 transition-colors"
            >
              <FileText className="h-4 w-4" />
              {t.footerCTA.groupOverview}
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }}>
            <Link
              to="/advisory"
              className="inline-flex items-center gap-2 px-7 py-3 border border-contrast-accent/40 text-contrast-accent font-display font-semibold text-sm rounded-md hover:bg-contrast-accent/10 transition-colors"
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
          className="text-[11px] text-contrast-muted/70 mt-8"
        >
          {t.footerCTA.disclaimer1}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-[10px] text-contrast-muted/50 mt-1"
        >
          {t.footerCTA.disclaimer2}
        </motion.p>
      </div>
    </section>
  );
};

export default FooterCTA;
