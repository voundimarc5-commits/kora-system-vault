import { FileText, ListOrdered, Scale } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLanguage();

  const problems = [
    { icon: FileText, title: t.problem.problem1Title, description: t.problem.problem1Desc },
    { icon: ListOrdered, title: t.problem.problem2Title, description: t.problem.problem2Desc },
    { icon: Scale, title: t.problem.problem3Title, description: t.problem.problem3Desc },
  ];

  return (
    <section className="py-20 border-b border-border" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-primary font-display text-[11px] tracking-[0.3em] uppercase mb-4">{t.problem.label}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-14 leading-tight max-w-2xl tracking-tight">
            {t.problem.title}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-background p-7"
            >
              <p.icon className="h-6 w-6 text-primary/70 mb-5" />
              <h3 className="font-display text-base font-semibold text-foreground mb-3 leading-snug">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
