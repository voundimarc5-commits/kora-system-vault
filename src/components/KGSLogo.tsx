import { motion } from "framer-motion";
import kgsLogo from "@/assets/kgs-logo.png";

const KGSLogo = ({ className = "", size = "md", animate = false }: { className?: string; size?: "sm" | "md" | "lg"; animate?: boolean }) => {
  const heights = { sm: "h-12", md: "h-16", lg: "h-64" };

  if (animate) {
    return (
      <motion.img
        src={kgsLogo}
        alt="KORA Global Systems"
        className={`${heights[size]} w-auto object-contain ${className}`}
        animate={{
          scale: [1, 1.04, 1],
          filter: [
            "drop-shadow(0 0 0px hsla(32, 65%, 48%, 0))",
            "drop-shadow(0 0 18px hsla(32, 65%, 48%, 0.35))",
            "drop-shadow(0 0 0px hsla(32, 65%, 48%, 0))",
          ],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    );
  }

  return (
    <img
      src={kgsLogo}
      alt="KORA Global Systems"
      className={`${heights[size]} w-auto object-contain ${className}`}
    />
  );
};

export default KGSLogo;
