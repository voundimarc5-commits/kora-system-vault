import kgsLogo from "@/assets/kgs-logo.png";

const KGSLogo = ({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) => {
  const heights = { sm: "h-9", md: "h-12", lg: "h-24" };

  return (
    <img
      src={kgsLogo}
      alt="KORA Global Systems"
      className={`${heights[size]} w-auto object-contain ${className}`}
    />
  );
};

export default KGSLogo;
