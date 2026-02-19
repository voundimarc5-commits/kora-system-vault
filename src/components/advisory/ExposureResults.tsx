import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ExposureResultsProps {
  answers: Record<number, string>;
  onContinue: () => void;
}

const dimensions = [
  {
    name: "Digital Dependencies",
    implication:
      "Organisations with significant third-party reliance face amplified exposure during supply-chain disruptions or vendor failures.",
  },
  {
    name: "Governance Maturity",
    implication:
      "Governance gaps create decision-making blind spots and regulatory exposure, particularly across multiple jurisdictions.",
  },
  {
    name: "Operational Fragility",
    implication:
      "Untested continuity frameworks create latent risk — exposure is only visible when systems are under actual stress.",
  },
  {
    name: "Cross-Border Exposure",
    implication:
      "Divergent regulatory environments compound compliance burden and increase the surface area for enforcement action.",
  },
  {
    name: "Access & Identity Control",
    implication:
      "Decentralised or ad hoc access management creates persistent insider risk and weakens audit defensibility.",
  },
  {
    name: "Financial Systems Exposure",
    implication:
      "Extensive external financial integrations introduce transaction risk, reconciliation complexity, and potential regulatory scrutiny.",
  },
];

const getLevelFromAnswer = (answer: string): { level: string; color: string } => {
  const lower = answer.toLowerCase();
  if (
    lower.includes("fully") ||
    lower.includes("minimal") ||
    lower.includes("centralised identity") ||
    lower.includes("yes — with harmonised") ||
    lower.includes("no — single")
  )
    return { level: "Low", color: "var(--adv-low)" };
  if (
    lower.includes("moderate") ||
    lower.includes("reasonably") ||
    lower.includes("partially centralised") ||
    lower.includes("standard banking")
  )
    return { level: "Moderate", color: "var(--adv-moderate)" };
  if (
    lower.includes("significant") ||
    lower.includes("partially prepared") ||
    lower.includes("inconsistent") ||
    lower.includes("decentralised")
  )
    return { level: "Elevated", color: "var(--adv-warning)" };
  return { level: "Critical", color: "var(--adv-danger)" };
};

const ExposureResults = ({ answers, onContinue }: ExposureResultsProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center py-20 px-6">
      <motion.div
        className="max-w-3xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="mb-16 text-center">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "hsl(var(--adv-text-muted))" }}
          >
            CREC™ Diagnostic Output
          </p>
          <h1
            className="font-display text-2xl md:text-3xl font-semibold mb-3"
            style={{ color: "hsl(var(--adv-text))" }}
          >
            Exposure Profile — Preliminary Advisory View
          </h1>
          <div
            className="w-12 h-px mx-auto mt-6"
            style={{ background: "hsl(var(--adv-accent-dim))" }}
          />
        </div>

        {/* Exposure dimensions */}
        <div className="space-y-1">
          {dimensions.map((dim, i) => {
            const answer = answers[i] || "";
            const { level, color } = getLevelFromAnswer(answer);

            return (
              <motion.div
                key={i}
                className="p-6"
                style={{
                  borderBottom: `1px solid hsl(var(--adv-border))`,
                }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              >
                <div className="flex items-start justify-between gap-6 mb-3">
                  <h3
                    className="font-display text-sm font-medium tracking-wide uppercase"
                    style={{ color: "hsl(var(--adv-text))" }}
                  >
                    {dim.name}
                  </h3>
                  <span
                    className="text-xs font-medium tracking-wider uppercase px-3 py-1 shrink-0"
                    style={{
                      color: `hsl(${color})`,
                      border: `1px solid hsl(${color} / 0.3)`,
                      background: `hsl(${color} / 0.06)`,
                    }}
                  >
                    {level}
                  </span>
                </div>

                <p
                  className="text-sm leading-relaxed mb-2"
                  style={{ color: "hsl(var(--adv-text-muted))" }}
                >
                  {dim.implication}
                </p>

                <p
                  className="text-xs italic"
                  style={{ color: "hsl(var(--adv-text-muted) / 0.6)" }}
                >
                  What this implies for decision-makers: Exposure at this level
                  warrants structured advisory review.
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <button
            onClick={onContinue}
            className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300"
            style={{
              border: "1px solid hsl(var(--adv-accent-dim))",
              color: "hsl(var(--adv-accent))",
            }}
          >
            View Advisory Brief
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <p
            className="mt-6 text-[11px]"
            style={{ color: "hsl(var(--adv-text-muted) / 0.5)" }}
          >
            This preliminary view does not constitute a full advisory report.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ExposureResults;
