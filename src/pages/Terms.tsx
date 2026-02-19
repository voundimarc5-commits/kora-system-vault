import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import KGSLogo from "@/components/KGSLogo";

const sections = [
  {
    number: "01",
    title: "Scope & Nature of Services",
    paragraphs: [
      "Kora Global Systems provides advisory, systems design, and operational structuring services.",
      "We do not operate as a financial institution, payment service provider, money transmitter, broker, custodian, or execution platform.",
      "Our role is limited to analysis, structuring, coordination, and facilitation of operational frameworks, in collaboration with third-party providers where applicable.",
    ],
  },
  {
    number: "02",
    title: "No Financial Execution",
    paragraphs: [
      "Kora Global Systems does not receive, hold, process, transfer, or execute funds on behalf of clients.",
      "Any financial transaction, payment, or settlement is conducted exclusively through independent third-party platforms, institutions, or service providers, under their own terms and regulatory obligations.",
    ],
  },
  {
    number: "03",
    title: "No Regulatory Representation",
    paragraphs: [
      "Kora Global Systems does not provide regulated financial services, investment advice, or legal representation.",
      "Clients remain fully responsible for ensuring compliance with applicable local laws, regulations, and reporting obligations.",
    ],
  },
  {
    number: "04",
    title: "Advisory & Facilitation Disclaimer",
    paragraphs: [
      "Any information, frameworks, or guidance provided by Kora Global Systems are for structural, operational, and informational purposes only and shall not be construed as financial, legal, or investment advice.",
    ],
  },
  {
    number: "05",
    title: "Liability Limitation",
    paragraphs: [
      "Kora Global Systems shall not be liable for actions, decisions, or outcomes resulting from third-party services, platforms, or providers engaged by the client.",
    ],
  },
  {
    number: "06",
    title: "Jurisdiction",
    paragraphs: [
      "These Terms are governed by the laws applicable to the operating entity of Kora Global Systems, without prejudice to mandatory local consumer protection laws where applicable.",
    ],
  },
];

const Terms = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(30 20% 95%) 15%, hsl(32 18% 93%) 50%, hsl(30 20% 95%) 85%, hsl(var(--background)) 100%)",
      }}
    >
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-background/90 backdrop-blur-md border-b border-border/30">
        <Link to="/" className="flex items-center gap-3">
          <KGSLogo size="sm" className="h-10" />
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </nav>

      <div className="pt-28 pb-20 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4">
            Legal
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground text-sm mb-2">
            Conditions Générales d'Utilisation
          </p>
          <div className="w-12 h-px bg-primary/30 mt-6 mb-12" />
        </motion.div>

        <div className="space-y-12">
          {sections.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="group"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-primary/40 font-mono text-xs">
                  {s.number}
                </span>
                <h2 className="font-display text-lg font-semibold text-foreground">
                  {s.title}
                </h2>
              </div>
              <div className="pl-10 space-y-3">
                {s.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="text-muted-foreground text-sm leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
              {i < sections.length - 1 && (
                <div className="mt-8 border-b border-border/40" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          className="mt-16 text-muted-foreground/50 text-[11px] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          © 2024 KORA Global Systems. All rights reserved. These terms are
          subject to update without prior notice.
        </motion.p>
      </div>
    </div>
  );
};

export default Terms;
