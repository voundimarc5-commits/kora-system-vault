import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import KGSLogo from "./KGSLogo";
import africaGreen from "@/assets/africa-green-innovation.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const FounderHero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <img
          src={africaGreen}
          alt="Modern office campus"
          className="w-full h-full object-cover opacity-[0.18]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <KGSLogo size="md" />
        </motion.div>

        <motion.p
          className="text-primary font-display text-[11px] md:text-xs tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-[1.15] tracking-tight max-w-3xl mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {t.hero.title}
        </motion.h1>

        <motion.div
          className="w-16 h-px bg-primary/40 mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          style={{ originX: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        />

        <motion.p
          className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-start gap-4"
        >
          <a
            href="https://access.koraglobalsystems.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wide rounded-md transition-colors hover:bg-accent"
          >
            {t.hero.ctaWorkshop}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground font-display font-semibold text-sm rounded-md hover:border-primary/50 transition-colors"
          >
            <Mail className="h-4 w-4" />
            {t.hero.ctaContact}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderHero;
