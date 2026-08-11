import { Mail, ArrowRight, FileText, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import GradientBlob from "./GradientBlob";
import { useLanguage } from "@/contexts/LanguageContext";

const FooterCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLanguage();

  const links: { href?: string; to?: string; icon: typeof Mail; label: string }[] = [
    { href: "mailto:contact@koraglobalsystems.com", icon: Mail, label: t.footerCTA.contact },
    { href: "mailto:contact@koraglobalsystems.com", icon: ArrowRight, label: t.footerCTA.partnerships },
    { to: "/terms", icon: FileText, label: t.footerCTA.groupOverview },
    { to: "/advisory", icon: Shield, label: t.footerCTA.exposureAssessment },
  ];

  return (
    <section id="contact" className="relative overflow-hidden" ref={ref}>
      <div className="grid md:grid-cols-2">
        <div
          className="relative overflow-hidden px-8 py-20 md:py-28 flex flex-col justify-center"
          style={{ background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(42 92% 60%) 100%)" }}
        >
          <GradientBlob className="absolute -top-24 -left-24 w-[420px] h-[420px] opacity-40 mix-blend-overlay" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.02] max-w-md">
              {t.footerCTA.title}
            </h2>
            <p className="text-[11px] text-white/80 mt-8 max-w-sm">{t.footerCTA.disclaimer1}</p>
            <p className="text-[10px] text-white/60 mt-1 max-w-sm">{t.footerCTA.disclaimer2}</p>
          </motion.div>
        </div>

        <div className="bg-primary px-8 py-20 md:py-28 flex flex-col justify-center gap-3">
          {links.map((l, i) => {
            const content = (
              <>
                <l.icon className="h-4 w-4" />
                <span>{l.label}</span>
              </>
            );
            const className =
              "inline-flex items-center gap-3 px-6 py-4 border border-white/30 text-white font-display font-semibold text-sm rounded-md hover:bg-white/10 hover:border-white/60 transition-colors";
            return (
              <motion.div
                key={l.label + i}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.08 }}
                whileHover={{ scale: 1.02 }}
              >
                {l.to ? (
                  <Link to={l.to} className={className}>
                    {content}
                  </Link>
                ) : (
                  <a href={l.href} className={className}>
                    {content}
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
