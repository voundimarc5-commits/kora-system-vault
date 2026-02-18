import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ChevronRight, ChevronLeft, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ScrollReveal from "./ScrollReveal";

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

const resultData: Record<ResultLevel, { title: string; color: string; description: string }> = {
  low: {
    title: "Low Exposure",
    color: "text-green-600",
    description:
      "Your organisation appears to have good foundational practices in place. A deeper conversation could help identify areas for continued improvement.",
  },
  moderate: {
    title: "Moderate Exposure",
    color: "text-yellow-600",
    description:
      "There are some areas where your digital and operational posture could benefit from closer attention. We'd be happy to discuss strategies to strengthen them.",
  },
  attention: {
    title: "Attention Recommended",
    color: "text-red-500",
    description:
      "Several areas suggest room for improvement in how your organisation manages digital risks. A conversation with our team could help clarify priorities.",
  },
};

const SecuritySnapshot = () => {
  const [step, setStep] = useState<"intro" | "quiz" | "result" | "submitted">("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({ ...prev, [questions[currentQ].id]: value }));
  };

  const getResult = (): ResultLevel => {
    const scores = Object.values(answers).map((a) =>
      a === "yes" ? 2 : a === "partial" ? 1 : 0
    );
    const total = scores.reduce((s, v) => s + v, 0);
    if (total >= 8) return "low";
    if (total >= 4) return "moderate";
    return "attention";
  };

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
    // In a real implementation, this would send the email + result to a backend
    console.log("Snapshot lead captured:", { email: trimmed, result: getResult(), answers });
    setStep("submitted");
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  const [direction, setDirection] = useState(1);

  const goNext = () => {
    if (currentQ < questions.length - 1) {
      setDirection(1);
      setCurrentQ((p) => p + 1);
    } else {
      setStep("result");
    }
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrentQ((p) => p - 1);
  };

  const result = step === "result" || step === "submitted" ? getResult() : null;

  return (
    <section id="snapshot" className="py-24 border-t border-border bg-muted/30">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
              <Shield className="h-4 w-4" />
              Quick Security Snapshot
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              How Aware Is Your Organisation?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed text-sm">
              A short, non-technical overview of your digital and operational
              posture. Takes less than 2 minutes.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
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
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  >
                    <Shield className="h-7 w-7 text-primary" />
                  </motion.div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Before We Start
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto mb-8">
                    You'll answer 5 simple questions about your organisation's
                    general digital practices. There are no wrong answers — this
                    is about awareness, not assessment.
                  </p>
                  <Button
                    onClick={() => setStep("quiz")}
                    className="gap-2 px-8 font-display tracking-wide"
                  >
                    Start Snapshot
                    <ChevronRight className="h-4 w-4" />
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
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="p-8 md:p-12"
                >
                  {/* progress bar */}
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-xs text-muted-foreground font-medium">
                      {currentQ + 1}/{questions.length}
                    </span>
                    <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={{
                          width: `${((currentQ + 1) / questions.length) * 100}%`,
                        }}
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
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/40"
                        }`}
                      >
                        <RadioGroupItem value={opt.value} />
                        <span className="text-sm text-foreground">{opt.label}</span>
                      </label>
                    ))}
                  </RadioGroup>

                  <div className="flex justify-between mt-8">
                    <Button
                      variant="ghost"
                      onClick={goPrev}
                      disabled={currentQ === 0}
                      className="gap-1 font-display"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Back
                    </Button>
                    <Button
                      onClick={goNext}
                      disabled={!answers[questions[currentQ].id]}
                      className="gap-1 font-display"
                    >
                      {currentQ === questions.length - 1 ? "See Result" : "Next"}
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* ── RESULT ── */}
              {step === "result" && result && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 md:p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                  >
                    <Shield className={`h-9 w-9 ${resultData[result].color}`} />
                  </motion.div>

                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    Your Snapshot Result
                  </p>
                  <h3
                    className={`font-display text-2xl font-bold mb-4 ${resultData[result].color}`}
                  >
                    {resultData[result].title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto mb-8">
                    {resultData[result].description}
                  </p>

                  <div className="bg-muted/50 rounded-xl p-6 max-w-sm mx-auto mb-6">
                    <p className="text-sm font-medium text-foreground mb-3">
                      Receive a short summary by email
                    </p>
                    <div className="flex gap-2">
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setEmailError("");
                        }}
                        className="flex-1"
                        maxLength={255}
                      />
                      <Button onClick={handleSubmitEmail} className="gap-1 shrink-0">
                        <Send className="h-4 w-4" />
                        Send
                      </Button>
                    </div>
                    {emailError && (
                      <p className="text-xs text-destructive mt-2 text-left">{emailError}</p>
                    )}
                  </div>

                  <p className="text-[11px] text-muted-foreground/70 max-w-sm mx-auto leading-relaxed">
                    This snapshot provides general awareness only and does not
                    constitute a formal security audit.
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
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Thank You
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto mb-4">
                    We'll send a brief summary to your inbox shortly. Our team
                    may also reach out to discuss how we can support your
                    organisation's digital posture.
                  </p>
                  <p className="text-[11px] text-muted-foreground/70">
                    This snapshot provides general awareness only and does not
                    constitute a formal security audit.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SecuritySnapshot;
