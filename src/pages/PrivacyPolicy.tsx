import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import KGSLogo from "@/components/KGSLogo";

const sections = [
  {
    number: "01",
    title: "Data Collection",
    paragraphs: [
      "Kora Global Systems may collect limited personal information such as name, email address, and contact details when users submit forms or initiate contact.",
    ],
  },
  {
    number: "02",
    title: "Purpose of Data Processing",
    paragraphs: [
      "Collected data is used solely for communication, project evaluation, advisory discussions, and relationship management.",
    ],
  },
  {
    number: "03",
    title: "Data Sharing",
    paragraphs: [
      "Kora Global Systems does not sell or commercialize personal data. Data may be shared with trusted service providers strictly for operational purposes.",
    ],
  },
  {
    number: "04",
    title: "Data Storage",
    paragraphs: [
      "Data is stored using third-party tools and platforms compliant with standard security practices.",
    ],
  },
  {
    number: "05",
    title: "User Rights",
    paragraphs: [
      "Users may request access, correction, or deletion of their personal data by contacting contact@koraglobalsystems.com.",
    ],
  },
  {
    number: "06",
    title: "Changes",
    paragraphs: [
      "This Privacy Policy may be updated periodically to reflect operational or legal requirements.",
    ],
  },
];

const PrivacyPolicy = () => {
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
            Privacy Policy
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
          transition={{ delay: 0.8 }}
        >
          © 2024 KORA Global Systems. All rights reserved.
        </motion.p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
