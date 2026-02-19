import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import KGSLogo from "@/components/KGSLogo";

const sections = [
  {
    number: "01",
    title: "Purpose of the Website",
    paragraphs: [
      "This website is provided for informational and institutional purposes only. It presents the positioning, scope, and general activities of Kora Global Systems and its solution lines.",
      "No information on this website constitutes a binding offer, contractual commitment, or execution instruction.",
    ],
  },
  {
    number: "02",
    title: "Nature of Services",
    paragraphs: [
      "Kora Global Systems provides advisory, systems architecture, and operational coordination services.",
      "Kora Global Systems does not execute transactions, process payments, transfer funds, custody assets, or provide regulated financial services. Any financial, transactional, or execution activities are performed exclusively by licensed third-party providers operating under their own regulatory frameworks.",
    ],
  },
  {
    number: "03",
    title: "No Reliance",
    paragraphs: [
      "The information provided on this website does not constitute legal, financial, regulatory, or investment advice. Users should not rely on this information as a substitute for professional consultation.",
    ],
  },
  {
    number: "04",
    title: "Limitation of Liability",
    paragraphs: [
      "Kora Global Systems shall not be liable for any direct or indirect loss arising from the use of this website or reliance on its content.",
    ],
  },
  {
    number: "05",
    title: "External Providers",
    paragraphs: [
      "Certain services referenced may involve third-party providers. Kora Global Systems does not control, operate, or assume responsibility for third-party platforms, services, or compliance obligations.",
    ],
  },
  {
    number: "06",
    title: "Modifications",
    paragraphs: [
      "Kora Global Systems reserves the right to modify these Terms of Use at any time without prior notice.",
    ],
  },
  {
    number: "07",
    title: "Governing Law",
    paragraphs: [
      "These Terms of Use are governed by the laws of the State of Wyoming, United States of America.",
    ],
  },
];

const TermsOfUse = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(30 20% 95%) 15%, hsl(32 18% 93%) 50%, hsl(30 20% 95%) 85%, hsl(var(--background)) 100%)",
      }}
    >
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
            Terms of Use
          </h1>
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

export default TermsOfUse;
