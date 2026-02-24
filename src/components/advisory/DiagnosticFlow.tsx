import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface DiagnosticFlowProps {
  onComplete: (answers: Record<number, string>) => void;
  onBack: () => void;
}

const DiagnosticFlow = ({ onComplete, onBack }: DiagnosticFlowProps) => {
  const { t } = useLanguage();

  const questions = [
    {
      dimension: t.advisory.q1dimension,
      question: t.advisory.q1,
      options: [t.advisory.q1o1, t.advisory.q1o2, t.advisory.q1o3, t.advisory.q1o4],
    },
    {
      dimension: t.advisory.q2dimension,
      question: t.advisory.q2,
      options: [t.advisory.q2o1, t.advisory.q2o2, t.advisory.q2o3, t.advisory.q2o4],
    },
    {
      dimension: t.advisory.q3dimension,
      question: t.advisory.q3,
      options: [t.advisory.q3o1, t.advisory.q3o2, t.advisory.q3o3, t.advisory.q3o4],
    },
    {
      dimension: t.advisory.q4dimension,
      question: t.advisory.q4,
      options: [t.advisory.q4o1, t.advisory.q4o2, t.advisory.q4o3, t.advisory.q4o4],
    },
    {
      dimension: t.advisory.q5dimension,
      question: t.advisory.q5,
      options: [t.advisory.q5o1, t.advisory.q5o2, t.advisory.q5o3, t.advisory.q5o4],
    },
  ];

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
              {currentStep + 1} {t.advisory.stepOf} {questions.length}
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
            <h2
              className="font-display text-xl md:text-2xl font-medium leading-relaxed mb-10"
              style={{ color: "hsl(var(--adv-text))" }}
            >
              {current.question}
            </h2>

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

        <div className="flex items-center justify-between mt-12">
          <button
            onClick={handlePrev}
            className="inline-flex items-center gap-2 text-sm transition-colors"
            style={{ color: "hsl(var(--adv-text-muted))" }}
          >
            <ArrowLeft className="w-4 h-4" />
            {t.advisory.backBtn}
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
            {isLast ? t.advisory.viewResultsBtn : t.advisory.continueBtn}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticFlow;