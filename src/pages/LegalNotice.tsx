import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";

const LegalNotice = () => {
  const { t } = useLanguage();

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(30 20% 95%) 15%, hsl(32 18% 93%) 50%, hsl(30 20% 95%) 85%, hsl(var(--background)) 100%)",
      }}
    >
      <Navigation />
      <div className="h-[100px]" />

      <div className="pt-8 pb-20 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4">
            {t.legalNotice.label}
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
            {t.legalNotice.title}
          </h1>
          <div className="w-12 h-px bg-primary/30 mt-6 mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-6 text-muted-foreground text-sm leading-relaxed"
        >
          <div className="space-y-2">
            <p><strong className="text-foreground">{t.legalNotice.editorLabel}</strong><br />{t.legalNotice.editorValue}</p>
          </div>

          <div className="space-y-2">
            <p><strong className="text-foreground">{t.legalNotice.registeredOfficeLabel}</strong><br />{t.legalNotice.registeredOfficeValue}</p>
          </div>

          <div className="space-y-2">
            <p><strong className="text-foreground">{t.legalNotice.operationalPresenceLabel}</strong><br />{t.legalNotice.operationalPresenceValue}</p>
          </div>

          <div className="space-y-2">
            <p><strong className="text-foreground">{t.legalNotice.natureLabel}</strong><br />{t.legalNotice.natureValue}</p>
          </div>

          <div className="space-y-2">
            <p><strong className="text-foreground">{t.legalNotice.hostingLabel}</strong><br />{t.legalNotice.hostingValue}</p>
          </div>

          <div className="space-y-2">
            <p><strong className="text-foreground">{t.legalNotice.contactLabel}</strong><br />
              <a href="mailto:contact@koraglobalsystems.com" className="text-primary hover:underline">contact@koraglobalsystems.com</a>
            </p>
          </div>

          <div className="space-y-2">
            <p><strong className="text-foreground">{t.legalNotice.ipLabel}</strong><br />{t.legalNotice.ipValue}</p>
          </div>
        </motion.div>

        <motion.p
          className="mt-16 text-muted-foreground/50 text-[11px] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {t.legalNotice.copyright}
        </motion.p>
      </div>
    </div>
  );
};

export default LegalNotice;
