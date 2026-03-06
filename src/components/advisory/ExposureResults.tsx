import { motion } from "framer-motion";
import { ArrowRight, Target, Zap, KeyRound } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ExposureResultsProps {
  answers: Record<number, string>;
  onContinue: () => void;
}

type BranchKey = "marketEntry" | "automation" | "access";

const getBranchRecommendation = (answers: Record<number, string>, t: any): BranchKey => {
  const scores: Record<BranchKey, number> = { marketEntry: 0, automation: 0, access: 0 };

  // Q1: main challenge
  const q1 = answers[0] || "";
  if (q1.includes("structur") || q1.includes("commencer") || q1.includes("start")) scores.marketEntry += 3;
  if (q1.includes("chaoti") || q1.includes("opération")) scores.automation += 3;
  if (q1.includes("accès") || q1.includes("access") || q1.includes("sécuriser") || q1.includes("secure")) scores.access += 3;
  if (q1.includes("Plusieurs") || q1.includes("Several")) { scores.marketEntry += 1; scores.automation += 1; scores.access += 1; }

  // Q4: main frustration
  const q4 = answers[3] || "";
  if (q4.includes("visibilit") || q4.includes("contrôle") || q4.includes("control")) scores.access += 2;
  if (q4.includes("dépendance") || q4.includes("intermédiaire") || q4.includes("Dependency") || q4.includes("intermediar")) scores.marketEntry += 2;
  if (q4.includes("automatisé") || q4.includes("automated")) scores.automation += 2;
  if (q4.includes("confiance") || q4.includes("trust")) scores.marketEntry += 2;

  // Q5: work mode
  const q5 = answers[4] || "";
  if (q5.includes("distance") || q5.includes("remote")) { scores.access += 1; scores.automation += 1; }
  if (q5.includes("débordé") || q5.includes("overwhelmed")) scores.automation += 2;
  if (q5.includes("démarré") || q5.includes("started")) scores.marketEntry += 2;

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return sorted[0][0] as BranchKey;
};

const ExposureResults = ({ answers, onContinue }: ExposureResultsProps) => {
  const { t } = useLanguage();
  const recommended = getBranchRecommendation(answers, t);

  const branches: Record<BranchKey, { name: string; desc: string; icon: typeof Target; href: string }> = {
    marketEntry: { name: t.advisory.marketEntryName, desc: t.advisory.marketEntryDesc, icon: Target, href: "https://marketentry.koraglobalsystems.com" },
    automation: { name: t.advisory.automationName, desc: t.advisory.automationDesc, icon: Zap, href: "https://automations.koraglobalsystems.com" },
    access: { name: t.advisory.accessName, desc: t.advisory.accessDesc, icon: KeyRound, href: "https://access.koraglobalsystems.com" },
  };

  const branch = branches[recommended];
  const Icon = branch.icon;

  return (
    <div className="min-h-screen flex flex-col items-center py-20 px-6">
      <motion.div
        className="max-w-3xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16 text-center">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "hsl(var(--adv-text-muted))" }}
          >
            {t.advisory.resultsLabel}
          </p>
          <h1
            className="font-display text-2xl md:text-3xl font-semibold mb-3"
            style={{ color: "hsl(var(--adv-text))" }}
          >
            {t.advisory.resultsTitle}
          </h1>
          <div
            className="w-12 h-px mx-auto mt-6"
            style={{ background: "hsl(var(--adv-accent-dim))" }}
          />
        </div>

        {/* Recommended branch card */}
        <motion.div
          className="p-8 md:p-10 mb-8"
          style={{
            border: "1px solid hsl(var(--adv-accent-dim))",
            background: "hsl(var(--adv-accent) / 0.04)",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p
            className="text-[11px] tracking-wide uppercase mb-4"
            style={{ color: "hsl(var(--adv-accent-dim))" }}
          >
            {t.advisory.recommendedBranch}
          </p>
          <a href={branch.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 mb-4 group hover:opacity-80 transition-opacity">
            <Icon
              className="w-8 h-8 shrink-0"
              style={{ color: "hsl(var(--adv-accent))" }}
            />
            <div>
              <h2
                className="font-display text-xl md:text-2xl font-semibold mb-2 group-hover:underline"
                style={{ color: "hsl(var(--adv-text))" }}
              >
                {branch.name}
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "hsl(var(--adv-text-muted))" }}
              >
                {branch.desc}
              </p>
            </div>
          </a>
        </motion.div>

        {/* Other branches */}
        <motion.div
          className="grid md:grid-cols-2 gap-px mb-8"
          style={{ background: "hsl(var(--adv-border))" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {Object.entries(branches)
            .filter(([key]) => key !== recommended)
            .map(([key, b]) => {
              const BIcon = b.icon;
              return (
                <a key={key} href={b.href} target="_blank" rel="noopener noreferrer" className="p-6 hover:opacity-80 transition-opacity group" style={{ background: "hsl(var(--adv-surface))" }}>
                  <BIcon className="w-5 h-5 mb-3" style={{ color: "hsl(var(--adv-text-muted) / 0.5)" }} />
                  <h3 className="font-display text-sm font-medium mb-1 group-hover:underline" style={{ color: "hsl(var(--adv-text))" }}>{b.name}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--adv-text-muted))" }}>{b.desc}</p>
                </a>
              );
            })}
        </motion.div>

        {/* Why this recommendation */}
        <motion.div
          className="p-6 mb-10"
          style={{ border: "1px solid hsl(var(--adv-border))", background: "hsl(var(--adv-surface))" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3 className="font-display text-sm font-medium mb-2" style={{ color: "hsl(var(--adv-text))" }}>
            {t.advisory.whyThisBranch}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--adv-text-muted))" }}>
            {t.advisory.whyExplanation}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <button
            onClick={onContinue}
            className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300"
            style={{
              border: "1px solid hsl(var(--adv-accent-dim))",
              color: "hsl(var(--adv-accent))",
            }}
          >
            {t.advisory.unlockBtn}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ExposureResults;
