import { AlertTriangle, Eye, Users, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLanguage();

  const problems = [
    { icon: AlertTriangle, title: t.problem.problem1Title, description: t.problem.problem1Desc },
    { icon: Eye, title: t.problem.problem2Title, description: t.problem.problem2Desc },
    { icon: Users, title: t.problem.problem3Title, description: t.problem.problem3Desc },
  ];

  return (
    <section className="py-16 relative overflow-hidden" ref={ref}>
      <div className="absolute -top-20 -left-24 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.12) 0%, transparent 65%)" }} />
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M-50,80 C300,30 600,140 900,60 S1300,100 1700,70" stroke="hsl(var(--primary) / 0.08)" strokeWidth="1.5" fill="none" />
      </svg>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4">{t.problem.label}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-12 leading-tight max-w-3xl">{t.problem.title}</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15, type: "spring", stiffness: 100 }}
              className="p-6 rounded-xl border border-border bg-card/60"
            >
              <p.icon className="h-7 w-7 text-destructive/70 mb-4" />
              <h3 className="font-display text-base font-bold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="rounded-xl border border-primary/20 bg-primary/[0.04] p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <ArrowRight className="h-6 w-6 text-primary mt-0.5 shrink-0" />
            <div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{t.problem.responseTitle}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.problem.responseDesc}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;