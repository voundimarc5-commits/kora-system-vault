import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface AdvisoryEntryProps {
  onBegin: () => void;
}

const AdvisoryEntry = ({ onBegin }: AdvisoryEntryProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(220 8% 88%) 1px, transparent 1px), linear-gradient(90deg, hsl(220 8% 88%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        className="max-w-3xl text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {/* Kora identifier */}
        <motion.p
          className="text-xs tracking-[0.3em] uppercase mb-12"
          style={{ color: "hsl(var(--adv-text-muted))" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Kora Global Systems — Advisory Diagnostics
        </motion.p>

        {/* Main headline */}
        <motion.h1
          className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight mb-8"
          style={{ color: "hsl(var(--adv-text))" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Understand Your Organisation's
          <br />
          <span style={{ color: "hsl(var(--adv-accent))" }}>Real Exposure</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          className="w-16 h-px mx-auto mb-8"
          style={{ background: "hsl(var(--adv-accent-dim))" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        />

        {/* Tool name */}
        <motion.p
          className="font-display text-lg md:text-xl tracking-wide mb-6"
          style={{ color: "hsl(var(--adv-accent))" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Cyber Resilience Exposure Check (CREC™)
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          style={{ color: "hsl(var(--adv-text-muted))" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          A structured advisory diagnostic designed to identify digital, operational
          and financial exposure across interconnected systems.
          <br />
          This is not a compliance audit, certification, or security scan.
        </motion.p>

        {/* CTA */}
        <motion.button
          onClick={onBegin}
          className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300"
          style={{
            border: "1px solid hsl(var(--adv-accent-dim))",
            color: "hsl(var(--adv-accent))",
          }}
          whileHover={{
            backgroundColor: "hsla(38, 62%, 52%, 0.08)",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Begin Assessment
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </motion.button>

        {/* Disclaimer */}
        <motion.p
          className="mt-12 text-[11px] max-w-lg mx-auto leading-relaxed"
          style={{ color: "hsl(var(--adv-text-muted) / 0.6)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          This assessment does not constitute a cybersecurity audit, regulatory
          validation, or certification. It is designed as an advisory reflection
          tool for organisational decision-makers.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AdvisoryEntry;
