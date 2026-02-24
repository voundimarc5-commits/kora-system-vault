import { motion } from "framer-motion";
import { Phone, Users, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AdvisoryPathways = () => {
  const { t } = useLanguage();

  const pathways = [
    {
      icon: Phone,
      title: t.advisory.pathway1Title,
      scope: t.advisory.pathway1Scope,
      description: t.advisory.pathway1Desc,
    },
    {
      icon: Users,
      title: t.advisory.pathway2Title,
      scope: t.advisory.pathway2Scope,
      description: t.advisory.pathway2Desc,
    },
    {
      icon: Settings,
      title: t.advisory.pathway3Title,
      scope: t.advisory.pathway3Scope,
      description: t.advisory.pathway3Desc,
    },
  ];

  return (
    <div className="py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-14">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "hsl(var(--adv-text-muted))" }}
          >
            {t.advisory.pathwaysLabel}
          </p>
          <h2
            className="font-display text-2xl md:text-3xl font-semibold mb-3"
            style={{ color: "hsl(var(--adv-text))" }}
          >
            {t.advisory.pathwaysTitle}
          </h2>
          <p
            className="text-sm max-w-lg mx-auto"
            style={{ color: "hsl(var(--adv-text-muted))" }}
          >
            {t.advisory.pathwaysSubtitle}
          </p>
          <div
            className="w-12 h-px mx-auto mt-6"
            style={{ background: "hsl(var(--adv-accent-dim))" }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-px" style={{ background: "hsl(var(--adv-border))" }}>
          {pathways.map((path, i) => {
            const Icon = path.icon;
            return (
              <motion.div
                key={i}
                className="p-8 flex flex-col"
                style={{ background: "hsl(var(--adv-surface))" }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              >
                <Icon
                  className="w-6 h-6 mb-6"
                  style={{ color: "hsl(var(--adv-accent-dim))" }}
                  strokeWidth={1.5}
                />

                <h3
                  className="font-display text-base font-medium mb-1"
                  style={{ color: "hsl(var(--adv-text))" }}
                >
                  {path.title}
                </h3>

                <p
                  className="text-[11px] tracking-wide uppercase mb-4"
                  style={{ color: "hsl(var(--adv-accent-dim))" }}
                >
                  {path.scope}
                </p>

                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "hsl(var(--adv-text-muted))" }}
                >
                  {path.description}
                </p>

                <a
                  href="mailto:contact@koraglobalsystems.com"
                  className="mt-8 w-full py-3 text-xs font-medium tracking-wide uppercase transition-all duration-300 text-center block"
                  style={{
                    border: "1px solid hsl(var(--adv-border))",
                    color: "hsl(var(--adv-text-muted))",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "hsl(var(--adv-accent-dim))";
                    e.currentTarget.style.color = "hsl(var(--adv-accent))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "hsl(var(--adv-border))";
                    e.currentTarget.style.color = "hsl(var(--adv-text-muted))";
                  }}
                >
                  {t.advisory.pathwayBtn}
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          className="text-center mt-10 text-[11px] max-w-xl mx-auto leading-relaxed"
          style={{ color: "hsl(var(--adv-text-muted) / 0.4)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {t.advisory.pathwaysDisclaimer}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AdvisoryPathways;