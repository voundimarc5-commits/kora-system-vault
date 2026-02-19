import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";

interface LockedReportProps {
  onUnlock: (email: string) => void;
}

const reportSections = [
  "Executive Summary",
  "Exposure Mapping by Dimension",
  "Cross-Dependency Analysis",
  "Governance Gap Indicators",
  "Advisory Pathways & Recommendations",
  "Appendix — Methodology & Limitations",
];

const LockedReport = ({ onUnlock }: LockedReportProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      onUnlock(email);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-20 px-6">
      <motion.div
        className="max-w-3xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "hsl(var(--adv-text-muted))" }}
          >
            Advisory Document
          </p>
          <h1
            className="font-display text-2xl md:text-3xl font-semibold mb-2"
            style={{ color: "hsl(var(--adv-text))" }}
          >
            Your Full Advisory Brief Is Ready
          </h1>
          <div
            className="w-12 h-px mx-auto mt-6"
            style={{ background: "hsl(var(--adv-accent-dim))" }}
          />
        </div>

        {/* Report preview */}
        <motion.div
          className="relative overflow-hidden mb-12"
          style={{
            border: "1px solid hsl(var(--adv-border))",
            background: "hsl(var(--adv-surface))",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <span
              className="font-display text-4xl md:text-6xl font-bold tracking-widest uppercase rotate-[-20deg] select-none"
              style={{ color: "hsl(var(--adv-text-muted) / 0.06)" }}
            >
              Draft Advisory Document
            </span>
          </div>

          {/* Report header */}
          <div
            className="p-8 pb-6"
            style={{ borderBottom: "1px solid hsl(var(--adv-border))" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p
                  className="text-xs tracking-[0.2em] uppercase"
                  style={{ color: "hsl(var(--adv-accent))" }}
                >
                  Kora Global Systems
                </p>
                <p
                  className="text-[10px] mt-1"
                  style={{ color: "hsl(var(--adv-text-muted) / 0.5)" }}
                >
                  CREC™ Advisory Report — Confidential
                </p>
              </div>
              <Lock
                className="w-5 h-5"
                style={{ color: "hsl(var(--adv-text-muted) / 0.3)" }}
              />
            </div>
          </div>

          {/* Section list — blurred */}
          <div className="p-8 relative">
            <div className="space-y-4">
              {reportSections.map((section, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span
                    className="text-xs font-mono"
                    style={{ color: "hsl(var(--adv-text-muted) / 0.4)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-sm font-display"
                    style={{
                      color: "hsl(var(--adv-text))",
                      filter: i > 0 ? `blur(${Math.min(i * 1.5, 6)}px)` : "none",
                    }}
                  >
                    {section}
                  </span>
                </div>
              ))}
            </div>

            {/* Fade out overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 h-32"
              style={{
                background: `linear-gradient(transparent, hsl(var(--adv-surface)))`,
              }}
            />
          </div>
        </motion.div>

        {/* Email unlock */}
        {!submitted ? (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p
              className="text-sm mb-6 leading-relaxed"
              style={{ color: "hsl(var(--adv-text-muted))" }}
            >
              Enter your professional email to receive the full advisory brief,
              executive summary, and next-step advisory options.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="flex-1 relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
                  style={{ color: "hsl(var(--adv-text-muted) / 0.4)" }}
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@organisation.com"
                  className="w-full pl-11 pr-4 py-3.5 text-sm bg-transparent outline-none"
                  style={{
                    border: "1px solid hsl(var(--adv-border))",
                    color: "hsl(var(--adv-text))",
                  }}
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3.5 text-sm font-medium tracking-wide uppercase transition-all duration-300"
                style={{
                  background: "hsl(var(--adv-accent))",
                  color: "hsl(var(--adv-bg))",
                }}
              >
                Unlock Report
              </button>
            </form>

            <p
              className="mt-6 text-[11px]"
              style={{ color: "hsl(var(--adv-text-muted) / 0.4)" }}
            >
              Your information is handled in accordance with our privacy policy.
              No unsolicited communications.
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="text-center p-8"
            style={{
              border: "1px solid hsl(var(--adv-accent-dim) / 0.3)",
              background: "hsl(var(--adv-accent) / 0.04)",
            }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <p
              className="font-display text-lg font-medium mb-2"
              style={{ color: "hsl(var(--adv-accent))" }}
            >
              Advisory Brief Dispatched
            </p>
            <p
              className="text-sm"
              style={{ color: "hsl(var(--adv-text-muted))" }}
            >
              A confirmation has been sent to {email}. Your full advisory document
              will follow shortly.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default LockedReport;
