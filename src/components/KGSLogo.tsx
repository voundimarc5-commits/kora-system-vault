const KGSLogo = ({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) => {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-24 w-24",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Placeholder coin logo — replace with uploaded asset */}
      <div className={`${sizes[size]} rounded-full border-2 border-primary flex items-center justify-center`}>
        <span className="font-display font-bold text-primary" style={{ fontSize: size === "lg" ? "1.5rem" : size === "md" ? "0.75rem" : "0.5rem" }}>
          KGS
        </span>
      </div>
      {size !== "sm" && (
        <div className="flex flex-col leading-tight">
          <span className="font-display font-bold text-foreground tracking-wide" style={{ fontSize: size === "lg" ? "1.5rem" : "1rem" }}>
            KORA
          </span>
          <span className="text-muted-foreground tracking-[0.2em] uppercase" style={{ fontSize: size === "lg" ? "0.65rem" : "0.5rem" }}>
            Global Systems
          </span>
        </div>
      )}
    </div>
  );
};

export default KGSLogo;
