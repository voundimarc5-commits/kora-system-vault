import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { Lock, Mail } from "lucide-react";
import kgsLogo from "@/assets/kgs-logo.png";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const PreviewReport = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLanguage();

  const reportLines = [t.previewReport.line1, t.previewReport.line2, t.previewReport.line3, t.previewReport.line4, t.previewReport.line5];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section className="py-16 relative overflow-hidden" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4">{t.previewReport.label}</p>
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">{t.previewReport.title}</h3>
          <p className="text-muted-foreground text-sm">{t.previewReport.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative rounded-xl border border-border bg-card/80 overflow-hidden mb-8"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <span className="font-display text-3xl md:text-5xl font-bold tracking-widest uppercase rotate-[-18deg] select-none text-foreground/[0.04]">
              {t.previewReport.watermark}
            </span>
          </div>

          <div className="p-8 pb-6 border-b border-border/60">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={kgsLogo}
                  alt="KORA Global Systems"
                  className="h-20 w-auto object-contain"
                  style={{ filter: "grayscale(100%) brightness(0.15) contrast(1.2) drop-shadow(1px 1px 0px rgba(255,255,255,0.15)) drop-shadow(-1px -1px 0px rgba(255,255,255,0.08))" }}
                />
              </div>
              <Lock className="w-4 h-4 text-muted-foreground/30" />
            </div>
            <p className="text-[10px] text-muted-foreground/50 mt-3">{t.previewReport.confidential}</p>
          </div>

          <div className="p-6 space-y-4">
            {reportLines.map((line, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-muted-foreground/30">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm font-display text-foreground" style={{ filter: i > 0 ? `blur(${Math.min(i * 2, 8)}px)` : "none" }}>
                  {line}
                </span>
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(transparent, hsl(var(--card)))" }} />
        </motion.div>

        {!submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center"
          >
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.previewReport.placeholder}
                  className="w-full pl-10 pr-4 py-3 text-sm bg-transparent border border-border rounded-lg text-foreground outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <button type="submit" className="px-6 py-3 text-sm font-display font-semibold tracking-wide bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                {t.previewReport.requestBtn}
              </button>
            </form>
            <p className="text-[10px] text-muted-foreground/40">{t.previewReport.disclaimerForm}</p>
            <p className="text-[10px] text-muted-foreground/35 mt-1">{t.previewReport.disclaimerForm2}</p>
          </motion.div>
        ) : (
          <motion.div className="text-center p-6 rounded-xl border border-primary/20 bg-primary/[0.04]" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}>
            <p className="font-display text-lg font-medium text-primary mb-1">{t.previewReport.requestReceived}</p>
            <p className="text-sm text-muted-foreground">
              {t.previewReport.confirmationSent} {email}. {t.previewReport.followUp}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PreviewReport;
