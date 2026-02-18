import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ChevronRight, ChevronLeft, Send, CheckCircle2, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import DataFibersBackground from "./DataFibersBackground";
import KGSLogo from "./KGSLogo";

const questions = [
  {
    id: "cloud",
    question: "Does your organisation use cloud platforms or online services for daily operations?",
    options: [
      { value: "yes", label: "Yes, extensively" },
      { value: "partial", label: "Partially" },
      { value: "no", label: "Not really" },
    ],
  },
  {
    id: "access",
    question: "Do you have clear policies for who can access your systems and data?",
    options: [
      { value: "yes", label: "Yes, well-defined" },
      { value: "partial", label: "Somewhat" },
      { value: "no", label: "Not yet" },
    ],
  },
  {
    id: "thirdparty",
    question: "Does your organisation rely on third-party tools, APIs, or external providers?",
    options: [
      { value: "yes", label: "Yes, several" },
      { value: "partial", label: "A few" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "visibility",
    question: "Do you have visibility over your systems' activity and potential operational risks?",
    options: [
      { value: "yes", label: "Yes, we monitor actively" },
      { value: "partial", label: "Limited visibility" },
      { value: "no", label: "Very little" },
    ],
  },
  {
    id: "awareness",
    question: "Are your teams generally aware of cybersecurity best practices?",
    options: [
      { value: "yes", label: "Yes, trained regularly" },
      { value: "partial", label: "Some awareness" },
      { value: "no", label: "Not specifically" },
    ],
  },
];

type ResultLevel = "low" | "moderate" | "attention";

const resultData: Record<ResultLevel, { title: string; color: string; badgeColor: string; description: string; gaugePercent: number }> = {
  low: {
    title: "Low Exposure",
    color: "text-emerald-600",
    badgeColor: "bg-emerald-500/10 border-emerald-500/30 text-emerald-700",
    description: "Your organisation appears to have good foundational practices in place. A deeper conversation could help identify areas for continued improvement.",
    gaugePercent: 25,
  },
  moderate: {
    title: "Moderate Exposure",
    color: "text-amber-600",
    badgeColor: "bg-amber-500/10 border-amber-500/30 text-amber-700",
    description: "There are some areas where your digital and operational posture could benefit from closer attention. We'd be happy to discuss strategies to strengthen them.",
    gaugePercent: 55,
  },
  attention: {
    title: "Attention Recommended",
    color: "text-red-500",
    badgeColor: "bg-red-500/10 border-red-500/30 text-red-600",
    description: "Several areas suggest room for improvement in how your organisation manages digital risks. A conversation with our team could help clarify priorities.",
    gaugePercent: 85,
  },
};

const scanMessages = [
  "Collecting signals…",
  "Evaluating exposure…",
  "Mapping weak points…",
  "Generating summary…",
];

const SecuritySnapshot = () => {
  const [step, setStep] = useState<"intro" | "quiz" | "scanning" | "result" | "submitted">("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [orgSize, setOrgSize] = useState("");
  const [scanProgress, setScanProgress] = useState(0);
  const [scanMessageIdx, setScanMessageIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({ ...prev, [questions[currentQ].id]: value }));
  };

  const getResult = useCallback((): ResultLevel => {
    const scores = Object.values(answers).map((a) =>
      a === "yes" ? 2 : a === "partial" ? 1 : 0
    );
    const total = scores.reduce((s, v) => s + v, 0);
    if (total >= 8) return "low";
    if (total >= 4) return "moderate";
    return "attention";
  }, [answers]);

  // Scanner animation
  useEffect(() => {
    if (step !== "scanning") return;
    setScanProgress(0);
    setScanMessageIdx(0);

    const duration = 3500;
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min((elapsed / duration) * 100, 100);
      setScanProgress(progress);
      setScanMessageIdx(Math.min(Math.floor(progress / 25), scanMessages.length - 1));

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => setStep("result"), 400);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [step]);

  const handleSubmitEmail = () => {
    setEmailError("");
    const trimmed = email.trim();
    if (!trimmed) {
      setEmailError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    console.log("Snapshot lead captured:", { email: trimmed, orgSize, result: getResult(), answers });
    setStep("submitted");
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  const goNext = () => {
    if (currentQ < questions.length - 1) {
      setDirection(1);
      setCurrentQ((p) => p + 1);
    } else {
      setStep("scanning");
    }
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrentQ((p) => p - 1);
  };

  const result = step === "result" || step === "submitted" ? getResult() : null;

  return (
    <section id="snapshot" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-background to-background" />
      <DataFibersBackground />

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 relative z-10 w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex justify-center mb-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <KGSLogo size="lg" />
          </motion.div>
          <motion.h1
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            How aware is your{" "}
            <span className="text-primary">organisation</span>?
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            A 2-minute snapshot of your cyber + operational posture.
          </motion.p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border shadow-[0_0_60px_-20px_hsl(var(--primary)_/_0.12)] overflow-hidden"
        >
          <AnimatePresence mode="wait" custom={direction}>
            {/* ── INTRO ── */}
            {step === "intro" && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-8 md:p-12 text-center"
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"
                  animate={{ boxShadow: ["0 0 0 0 hsla(187,70%,50%,0)", "0 0 0 12px hsla(187,70%,50%,0)"] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                >
                  <Shield className="h-7 w-7 text-primary" />
                </motion.div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Quick Security Snapshot
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto mb-8">
                  5 simple questions about your organisation's digital practices.
                  No technical knowledge needed — this is about awareness, not assessment.
                </p>
                <Button
                  onClick={() => setStep("quiz")}
                  size="lg"
                  className="gap-2 px-10 font-display tracking-wide text-sm"
                >
                  <Activity className="h-4 w-4" />
                  Start 2-Minute Snapshot
                </Button>
              </motion.div>
            )}

            {/* ── QUIZ ── */}
            {step === "quiz" && (
              <motion.div
                key={`q-${currentQ}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="p-8 md:p-12"
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-xs text-muted-foreground font-medium tabular-nums">
                    {currentQ + 1}/{questions.length}
                  </span>
                  <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground mb-6 leading-snug">
                  {questions[currentQ].question}
                </h3>

                <RadioGroup
                  value={answers[questions[currentQ].id] || ""}
                  onValueChange={handleAnswer}
                  className="space-y-3"
                >
                  {questions[currentQ].options.map((opt) => (
                    <label
                      key={opt.value}
                      className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                        answers[questions[currentQ].id] === opt.value
                          ? "border-primary bg-primary/5 shadow-sm"
                          : "border-border hover:border-primary/40"
                      }`}
                    >
                      <RadioGroupItem value={opt.value} />
                      <span className="text-sm text-foreground">{opt.label}</span>
                    </label>
                  ))}
                </RadioGroup>

                <div className="flex justify-between mt-8">
                  <Button variant="ghost" onClick={goPrev} disabled={currentQ === 0} className="gap-1 font-display">
                    <ChevronLeft className="h-4 w-4" />
                    Back
                  </Button>
                  <Button onClick={goNext} disabled={!answers[questions[currentQ].id]} className="gap-1 font-display">
                    {currentQ === questions.length - 1 ? "Analyse" : "Next"}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* ── SCANNING ── */}
            {step === "scanning" && (
              <motion.div
                key="scanning"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 md:p-12 text-center"
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                >
                  <Activity className="h-7 w-7 text-primary" />
                </motion.div>

                <h3 className="font-display text-lg font-semibold text-foreground mb-6">
                  Analysing your responses…
                </h3>

                <div className="max-w-sm mx-auto mb-4">
                  <Progress value={scanProgress} className="h-2" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={scanMessageIdx}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm text-muted-foreground font-mono"
                  >
                    {scanMessages[scanMessageIdx]}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
            )}

            {/* ── RESULT ── */}
            {step === "result" && result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 md:p-12"
              >
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className={`inline-flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-display font-semibold mb-4 ${resultData[result].badgeColor}`}
                  >
                    <Shield className="h-4 w-4" />
                    {resultData[result].title}
                  </motion.div>

                  {/* Mini gauge */}
                  <div className="max-w-xs mx-auto mb-4">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          result === "low" ? "bg-emerald-500" : result === "moderate" ? "bg-amber-500" : "bg-red-500"
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${resultData[result].gaugePercent}%` }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                      <span>Low</span>
                      <span>Moderate</span>
                      <span>High</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
                    {resultData[result].description}
                  </p>
                </div>

                <div className="bg-muted/50 rounded-xl p-6 max-w-sm mx-auto">
                  <p className="text-sm font-semibold text-foreground mb-1">
                    Get your snapshot summary (PDF) by email
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    We only use your email to send the summary. No spam.
                  </p>

                  <div className="mb-3">
                    <select
                      value={orgSize}
                      onChange={(e) => setOrgSize(e.target.value)}
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Organisation size (optional)</option>
                      <option value="1-10">1–10 employees</option>
                      <option value="11-50">11–50 employees</option>
                      <option value="51-200">51–200 employees</option>
                      <option value="201-1000">201–1,000 employees</option>
                      <option value="1000+">1,000+ employees</option>
                    </select>
                  </div>

                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                      className="flex-1"
                      maxLength={255}
                    />
                    <Button onClick={handleSubmitEmail} className="gap-1 shrink-0">
                      <Send className="h-4 w-4" />
                      Send
                    </Button>
                  </div>
                  {emailError && <p className="text-xs text-destructive mt-2 text-left">{emailError}</p>}
                </div>

                <div className="text-center mt-6">
                  <a
                    href="#contact"
                    className="text-sm text-primary hover:underline font-display"
                  >
                    Book a discovery call →
                  </a>
                </div>

                <p className="text-[11px] text-muted-foreground/60 text-center mt-6 max-w-sm mx-auto leading-relaxed">
                  This snapshot provides general awareness only and does not constitute a formal security audit.
                </p>
              </motion.div>
            )}

            {/* ── SUBMITTED ── */}
            {step === "submitted" && (
              <motion.div
                key="submitted"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 md:p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </motion.div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Thank You
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto mb-6">
                  We'll send your snapshot summary (PDF) to your inbox shortly.
                  Our team may also reach out to discuss how we can support your organisation.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-display"
                >
                  Talk to us →
                </a>
                <p className="text-[11px] text-muted-foreground/60 mt-6">
                  This snapshot provides general awareness only and does not constitute a formal security audit.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySnapshot;
