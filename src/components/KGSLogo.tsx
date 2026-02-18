import kgsLogo from "@/assets/kgs-logo.png";

const KGSLogo = ({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) => {
  const heights = { sm: "h-12", md: "h-16", lg: "h-64" };

  return (
    <img
      src={kgsLogo}
      alt="KORA Global Systems"
      className={`${heights[size]} w-auto object-contain ${className}`}
    />
  );
};

export default KGSLogo;
