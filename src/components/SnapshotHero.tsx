import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ChevronRight, AlertTriangle, CheckCircle, Activity } from "lucide-react";
import KGSLogo from "./KGSLogo";
import DataFibersBackground from "./DataFibersBackground";
import citySkyline from "@/assets/city-skyline.jpg";

const questions = [
  {
    id: 1,
    question: "Does your organisation conduct regular cybersecurity awareness training?",
    options: ["Yes, quarterly or more", "Yes, annually", "Informally", "No"],
  },
  {
    id: 2,
    question: "How do you manage access to critical systems and data?",
    options: ["Role-based access with MFA", "Password-only with some controls", "Shared credentials", "No formal policy"],
  },
  {
    id: 3,
    question: "Do you have an incident response plan in place?",
    options: ["Yes, tested regularly", "Yes, but untested", "Partially documented", "No"],
  },
  {
    id: 4,
    question: "How frequently are your systems and software updated?",
    options: ["Automated patching", "Monthly updates", "Occasionally", "Rarely or never"],
  },
  {
    id: 5,
    question: "Do you monitor your network and systems for unusual activity?",
    options: ["24/7 monitoring in place", "Business hours only", "Ad-hoc checks", "No monitoring"],
  },
];

const scanStages = [
  "Collecting signals…",
  "Evaluating exposure…",
  "Mapping weak points…",
  "Generating summary…",
];

type Level = "Low" | "Moderate" | "Attention Recommended";

const getLevel = (score: number): Level => {
  if (score <= 6) return "Low";
  if (score <= 12) return "Moderate";
  return "Attention Recommended";
};

const levelConfig: Record<Level, { color: string; icon: typeof CheckCircle; gauge: number }> = {
  Low: { color: "text-emerald-500", icon: CheckCircle, gauge: 25 },
  Moderate: { color: "text-amber-500", icon: AlertTriangle, gauge: 55 },
  "Attention Recommended": { color: "text-red-500", icon: AlertTriangle, gauge: 85 },
};

const SnapshotHero = () => {
  const [phase, setPhase] = useState<"intro" | "quiz" | "scanning" | "result">("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanStage, setScanStage] = useState(0);
  const [email, setEmail] = useState("");
  const [orgSize, setOrgSize] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const score = answers.reduce((a, b) => a + b, 0);
  const level = getLevel(score);
  const config = levelConfig[level];

  const startQuiz = useCallback(() => setPhase("quiz"), []);

  const answer = useCallback((optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setPhase("scanning");
    }
  }, [answers, currentQ]);

  // Scanning animation
  useEffect(() => {
    if (phase !== "scanning") return;
    const duration = 4000;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setScanProgress(pct);
      setScanStage(Math.min(Math.floor(pct / 25), 3));
      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setPhase("result"), 400);
      }
    };
    requestAnimationFrame(tick);
  }, [phase]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="snapshot" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-4">
      {/* Background image with slow drift */}
      <div className="absolute inset-0">
        <motion.img
          src={citySkyline}
          alt="Futuristic campus"
          className="w-full h-full object-cover origin-bottom"
          loading="eager"
          initial={{ scale: 1.15 }}
          animate={{
            scale: [1.15, 1.08, 1.12, 1.05, 1.15],
            x: [0, -10, 5, -15, 0],
            y: [0, -6, -3, -10, 0],
            skewX: [0, 0.3, -0.2, 0.4, 0],
          }}
          transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <DataFibersBackground />

      <div className="max-w-4xl mx-auto px-6 py-8 relative z-10 w-full">
        {/* Logo with subtle heartbeat */}
        <motion.div
          className="flex justify-center mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: [1, 1.02, 1, 1.01, 1],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 },
            scale: { duration: 3, delay: 1.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <KGSLogo size="lg" />
        </motion.div>

        <AnimatePresence mode="wait">
          {/* INTRO */}
          {phase === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 tracking-tight uppercase">
                How aware is your
                <br />
                <span className="text-primary">organisation?</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-xl mx-auto">
                A 2-minute snapshot of your cyber + operational posture.
              </p>
              <motion.button
                onClick={startQuiz}
                className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-display font-semibold tracking-wide rounded-lg shadow-lg text-base"
                whileHover={{ scale: 1.04, boxShadow: "0 0 40px -10px hsl(187 70% 50% / 0.4)" }}
                whileTap={{ scale: 0.97 }}
              >
                <Shield className="h-5 w-5" />
                Start 2-Minute Snapshot
                <ChevronRight className="h-5 w-5" />
              </motion.button>
              <p className="text-muted-foreground/60 text-xs mt-4">
                Not a formal audit. A quick awareness check.
              </p>
            </motion.div>
          )}

          {/* QUIZ */}
          {phase === "quiz" && (
            <motion.div
              key={`q-${currentQ}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              {/* Progress */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-primary font-display text-sm font-semibold">
                  {currentQ + 1}/{questions.length}
                </span>
                <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: `${(currentQ / questions.length) * 100}%` }}
                    animate={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              <motion.div
                className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-8 shadow-[0_0_60px_-20px_hsl(var(--primary)_/_0.1)]"
                initial={{ boxShadow: "0 0 0px 0px transparent" }}
                animate={{ boxShadow: "0 0 60px -20px hsl(187 70% 50% / 0.1)" }}
              >
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6 leading-snug">
                  {questions[currentQ].question}
                </h2>
                <div className="space-y-3">
                  {questions[currentQ].options.map((opt, i) => (
                    <motion.button
                      key={opt}
                      onClick={() => answer(i)}
                      className="w-full text-left px-5 py-4 rounded-lg border border-border bg-background/60 hover:border-primary/50 hover:bg-primary/5 transition-all text-foreground font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      whileHover={{ x: 6 }}
                    >
                      {opt}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* SCANNING */}
          {phase === "scanning" && (
            <motion.div
              key="scanning"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-lg mx-auto text-center"
            >
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-10 shadow-[0_0_60px_-20px_hsl(var(--primary)_/_0.15)]">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="inline-block mb-6"
                >
                  <Activity className="h-10 w-10 text-primary" />
                </motion.div>

                <h2 className="font-display text-xl font-bold text-foreground mb-6">
                  Analysing your posture…
                </h2>

                {/* Progress bar */}
                <div className="h-2 bg-secondary rounded-full overflow-hidden mb-4">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${scanProgress}%` }}
                  />
                </div>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={scanStage}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="text-muted-foreground text-sm font-mono"
                  >
                    {scanStages[scanStage]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* RESULT */}
          {phase === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-lg mx-auto"
            >
              <div className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-8 md:p-10 shadow-[0_0_80px_-20px_hsl(var(--primary)_/_0.15)]">
                <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-6 text-center">
                  Snapshot Result
                </p>

                {/* Gauge */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-32 h-16 overflow-hidden">
                    <svg viewBox="0 0 120 60" className="w-full h-full">
                      <path d="M10 55 A50 50 0 0 1 110 55" fill="none" stroke="hsl(var(--secondary))" strokeWidth="8" strokeLinecap="round" />
                      <motion.path
                        d="M10 55 A50 50 0 0 1 110 55"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="8"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: config.gauge / 100 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                    </svg>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${config.color} border-current/20 bg-current/5 font-display font-bold text-lg`}>
                    <config.icon className="h-5 w-5" />
                    {level}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm text-center mb-8 leading-relaxed">
                  Based on your responses, your organisation's cyber and operational posture
                  is rated <strong className="text-foreground">{level}</strong>. 
                  {level === "Low" && " Your practices show strong awareness."}
                  {level === "Moderate" && " Some areas could benefit from structured improvement."}
                  {level === "Attention Recommended" && " We recommend addressing key gaps promptly."}
                </p>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <p className="font-display text-sm font-semibold text-foreground text-center">
                      Get your snapshot summary (PDF) by email
                    </p>

                    <select
                      value={orgSize}
                      onChange={(e) => setOrgSize(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    >
                      <option value="">Organisation size</option>
                      <option value="1-10">1–10 employees</option>
                      <option value="11-50">11–50 employees</option>
                      <option value="51-200">51–200 employees</option>
                      <option value="201-1000">201–1,000 employees</option>
                      <option value="1000+">1,000+ employees</option>
                    </select>

                    <input
                      type="email"
                      placeholder="Your professional email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />

                    <motion.button
                      type="submit"
                      className="w-full py-3 bg-primary text-primary-foreground font-display font-semibold rounded-lg tracking-wide"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send My Summary
                    </motion.button>

                    <p className="text-muted-foreground/50 text-xs text-center">
                      We only use your email to send the summary. No spam.
                    </p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-4"
                  >
                    <CheckCircle className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
                    <p className="text-foreground font-display font-semibold">Summary sent!</p>
                    <p className="text-muted-foreground text-sm mt-1">Check your inbox shortly.</p>
                  </motion.div>
                )}
              </div>

              {/* Secondary CTA */}
              <motion.div
                className="text-center mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <a
                  href="#contact"
                  className="text-primary font-display text-sm font-semibold hover:underline underline-offset-4"
                >
                  Talk to us about your results →
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SnapshotHero;
