import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface DiagnosticFlowProps {
  onComplete: (answers: Record<number, string>) => void;
  onBack: () => void;
}

const questions = [
  {
    dimension: "Digital Dependencies",
    question:
      "How would you characterise your organisation's reliance on third-party digital infrastructure?",
    options: [
      "Minimal — Most systems are internally managed",
      "Moderate — Key functions rely on external providers",
      "Significant — Core operations depend on third-party platforms",
      "Unclear — We have limited visibility into dependencies",
    ],
  },
  {
    dimension: "Governance Maturity",
    question:
      "Does your organisation have a formalised governance framework for digital risk and operational continuity?",
    options: [
      "Yes — Fully documented and regularly reviewed",
      "Partially — Exists but inconsistently applied",
      "Informally — Handled on a case-by-case basis",
      "No — No formal framework in place",
    ],
  },
  {
    dimension: "Operational Fragility",
    question:
      "If a critical system went offline for 48 hours, how prepared is your organisation to maintain operations?",
    options: [
      "Fully prepared — Redundancy and continuity plans are tested",
      "Reasonably prepared — Plans exist but are untested",
      "Partially prepared — Some workarounds would be improvised",
      "Unprepared — Operations would be severely disrupted",
    ],
  },
  {
    dimension: "Cross-Border Exposure",
    question:
      "Does your organisation operate across multiple jurisdictions with differing regulatory requirements?",
    options: [
      "No — Single jurisdiction operations",
      "Yes — With harmonised compliance across regions",
      "Yes — With inconsistent compliance across regions",
      "Yes — With limited understanding of cross-border obligations",
    ],
  },
  {
    dimension: "Access & Identity Control",
    question:
      "How does your organisation manage access to critical systems and sensitive information?",
    options: [
      "Centralised identity management with role-based access",
      "Partially centralised with some manual oversight",
      "Decentralised — Individual departments manage access",
      "Ad hoc — No standardised approach",
    ],
  },
  {
    dimension: "Financial Systems Exposure",
    question:
      "How integrated are your financial systems with external payment, banking, or treasury platforms?",
    options: [
      "Minimal integration — Mostly internal processes",
      "Moderate — Standard banking integrations",
      "Significant — Multiple external financial dependencies",
      "Extensive — Real-time connections across multiple platforms",
    ],
  },
];

const DiagnosticFlow = ({ onComplete, onBack }: DiagnosticFlowProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const current = questions[currentStep];
  const isLast = currentStep === questions.length - 1;

  const handleNext = () => {
    if (!selectedOption) return;
    const newAnswers = { ...answers, [currentStep]: selectedOption };
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (isLast) {
      onComplete(newAnswers);
    } else {
      setCurrentStep((s) => s + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep === 0) {
      onBack();
    } else {
      setSelectedOption(answers[currentStep - 1] || null);
      setCurrentStep((s) => s - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        {/* Progress indicator — subtle line */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-3">
            <span
              className="text-xs tracking-[0.2em] uppercase"
              style={{ color: "hsl(var(--adv-text-muted))" }}
            >
              {current.dimension}
            </span>
            <span
              className="text-xs"
              style={{ color: "hsl(var(--adv-text-muted) / 0.5)" }}
            >
              {currentStep + 1} of {questions.length}
            </span>
          </div>
          <div
            className="h-px w-full"
            style={{ background: "hsl(var(--adv-border))" }}
          >
            <motion.div
              className="h-full"
              style={{ background: "hsl(var(--adv-accent-dim))" }}
              initial={false}
              animate={{
                width: `${((currentStep + 1) / questions.length) * 100}%`,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {/* Question */}
            <h2
              className="font-display text-xl md:text-2xl font-medium leading-relaxed mb-10"
              style={{ color: "hsl(var(--adv-text))" }}
            >
              {current.question}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {current.options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedOption(option)}
                  className="w-full text-left px-6 py-4 text-sm leading-relaxed transition-all duration-200"
                  style={{
                    border: `1px solid ${
                      selectedOption === option
                        ? "hsl(var(--adv-accent-dim))"
                        : "hsl(var(--adv-border))"
                    }`,
                    color:
                      selectedOption === option
                        ? "hsl(var(--adv-text))"
                        : "hsl(var(--adv-text-muted))",
                    background:
                      selectedOption === option
                        ? "hsl(var(--adv-surface-elevated))"
                        : "transparent",
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12">
          <button
            onClick={handlePrev}
            className="inline-flex items-center gap-2 text-sm transition-colors"
            style={{ color: "hsl(var(--adv-text-muted))" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className="inline-flex items-center gap-3 px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{
              border: "1px solid hsl(var(--adv-accent-dim))",
              color: "hsl(var(--adv-accent))",
            }}
          >
            {isLast ? "View Exposure Profile" : "Continue"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticFlow;
