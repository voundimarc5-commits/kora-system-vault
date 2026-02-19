import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import AdvisoryEntry from "@/components/advisory/AdvisoryEntry";
import DiagnosticFlow from "@/components/advisory/DiagnosticFlow";
import ExposureResults from "@/components/advisory/ExposureResults";
import LockedReport from "@/components/advisory/LockedReport";
import AdvisoryPathways from "@/components/advisory/AdvisoryPathways";

type FunnelStep = "entry" | "diagnostic" | "results" | "report" | "pathways";

const Advisory = () => {
  const [step, setStep] = useState<FunnelStep>("entry");
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleDiagnosticComplete = (a: Record<number, string>) => {
    setAnswers(a);
    setStep("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goTo = (s: FunnelStep) => {
    setStep(s);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="advisory-dark min-h-screen relative overflow-hidden"
      style={{ background: "hsl(var(--adv-bg))" }}
    >
      {/* Ambient background — subtle radial gradients that drift slowly */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, hsl(var(--adv-accent)) 0%, transparent 70%)",
            top: "-200px",
            right: "-200px",
          }}
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, hsl(var(--adv-accent-dim)) 0%, transparent 70%)",
            bottom: "-150px",
            left: "-150px",
          }}
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Faint grid texture */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--adv-text-muted)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--adv-text-muted)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Minimal top bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between"
        style={{
          background: "hsl(var(--adv-bg) / 0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid hsl(var(--adv-border) / 0.5)",
        }}
      >
        <Link to="/" className="font-display text-sm tracking-[0.15em] uppercase" style={{ color: "hsl(var(--adv-accent))" }}>
          Kora Global Systems
        </Link>
        <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "hsl(var(--adv-text-muted) / 0.5)" }}>
          Advisory Diagnostics
        </span>
      </nav>

      <div className="pt-20 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {step === "entry" && (
              <AdvisoryEntry onBegin={() => goTo("diagnostic")} />
            )}
            {step === "diagnostic" && (
              <DiagnosticFlow
                onComplete={handleDiagnosticComplete}
                onBack={() => goTo("entry")}
              />
            )}
            {step === "results" && (
              <ExposureResults
                answers={answers}
                onContinue={() => goTo("report")}
              />
            )}
            {step === "report" && (
              <>
                <LockedReport onUnlock={() => goTo("pathways")} />
                <AdvisoryPathways />
              </>
            )}
            {step === "pathways" && (
              <>
                <div className="min-h-[40vh] flex items-center justify-center">
                  <motion.div
                    className="text-center p-8"
                    style={{
                      border: "1px solid hsl(var(--adv-accent-dim) / 0.3)",
                      background: "hsl(var(--adv-accent) / 0.04)",
                    }}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <p className="font-display text-lg font-medium mb-2" style={{ color: "hsl(var(--adv-accent))" }}>
                      Advisory Brief Dispatched
                    </p>
                    <p className="text-sm" style={{ color: "hsl(var(--adv-text-muted))" }}>
                      Your full advisory document will follow shortly.
                    </p>
                  </motion.div>
                </div>
                <AdvisoryPathways />
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Advisory;
