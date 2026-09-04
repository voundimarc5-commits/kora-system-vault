import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import GradientBlob from "./GradientBlob";
import LetterReveal from "./LetterReveal";
import africaGreen from "@/assets/africa-green-innovation.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const FounderHero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-background text-foreground border-b border-border">
      <div className="absolute inset-0">
        <img
          src={africaGreen}
          alt="Modern office campus"
          className="w-full h-full object-cover opacity-[0.14]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <GradientBlob className="absolute -top-32 -right-32 w-[620px] h-[620px] opacity-70" />

      <div className="max-w-4xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 relative z-10">
        <motion.p
          className="text-primary font-display text-[11px] md:text-[11px] tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {t.hero.eyebrow}
        </motion.p>

        <LetterReveal
          as="h1"
          text={t.hero.title}
          immediate
          delay={0.25}
          stagger={0.018}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.02] tracking-tight max-w-3xl mb-8"
        />

        <motion.div
          className="w-16 h-px bg-primary/50 mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          style={{ originX: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        />

        <motion.p
          className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.p
          className="text-sm text-primary/80 font-display font-medium max-w-2xl leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {t.hero.subtitleBaseline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-start gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wide rounded-md transition-colors hover:opacity-90"
          >
            <Mail className="h-4 w-4" />
            {t.hero.ctaContact}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://access.koraglobalsystems.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground font-display font-semibold text-sm rounded-md hover:border-primary/60 transition-colors"
          >
            {t.hero.ctaWorkshop}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderHero;
