const KGSLogo = ({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) => {
  const dims = { sm: 36, md: 48, lg: 96 };
  const d = dims[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width={d} height={d} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer circle */}
        <circle cx="50" cy="50" r="46" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.6" />
        <circle cx="50" cy="50" r="42" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.3" />

        {/* Globe horizontal lines */}
        <ellipse cx="50" cy="50" rx="42" ry="14" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.5" />
        <ellipse cx="50" cy="50" rx="42" ry="28" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.4" />

        {/* Globe vertical ellipses */}
        <ellipse cx="50" cy="50" rx="14" ry="42" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.5" />
        <ellipse cx="50" cy="50" rx="28" ry="42" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.4" />

        {/* Center vertical line */}
        <line x1="50" y1="8" x2="50" y2="92" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.3" />
        {/* Center horizontal line */}
        <line x1="8" y1="50" x2="92" y2="50" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.3" />

        {/* Connectivity nodes */}
        <circle cx="50" cy="8" r="3" fill="hsl(var(--primary))" opacity="0.8" />
        <circle cx="50" cy="92" r="3" fill="hsl(var(--primary))" opacity="0.8" />
        <circle cx="8" cy="50" r="3" fill="hsl(var(--primary))" opacity="0.8" />
        <circle cx="92" cy="50" r="3" fill="hsl(var(--primary))" opacity="0.8" />
        <circle cx="22" cy="22" r="2.5" fill="hsl(var(--glow))" opacity="0.7" />
        <circle cx="78" cy="22" r="2.5" fill="hsl(var(--glow))" opacity="0.7" />
        <circle cx="22" cy="78" r="2.5" fill="hsl(var(--glow))" opacity="0.7" />
        <circle cx="78" cy="78" r="2.5" fill="hsl(var(--glow))" opacity="0.7" />

        {/* Connectivity lines from corners to center */}
        <line x1="22" y1="22" x2="50" y2="50" stroke="hsl(var(--glow))" strokeWidth="0.5" opacity="0.4" />
        <line x1="78" y1="22" x2="50" y2="50" stroke="hsl(var(--glow))" strokeWidth="0.5" opacity="0.4" />
        <line x1="22" y1="78" x2="50" y2="50" stroke="hsl(var(--glow))" strokeWidth="0.5" opacity="0.4" />
        <line x1="78" y1="78" x2="50" y2="50" stroke="hsl(var(--glow))" strokeWidth="0.5" opacity="0.4" />

        {/* Center glow dot */}
        <circle cx="50" cy="50" r="4" fill="hsl(var(--primary))" />
        <circle cx="50" cy="50" r="7" fill="hsl(var(--primary))" opacity="0.2" />

        {/* Outer decorative arcs */}
        <path d="M 15 30 Q 5 50 15 70" stroke="hsl(var(--glow))" strokeWidth="0.8" fill="none" opacity="0.3" />
        <path d="M 85 30 Q 95 50 85 70" stroke="hsl(var(--glow))" strokeWidth="0.8" fill="none" opacity="0.3" />
      </svg>

      {size !== "sm" ? (
        <div className="flex flex-col leading-tight">
          <span
            className="font-display font-bold text-foreground tracking-wider"
            style={{ fontSize: size === "lg" ? "1.75rem" : "1.1rem" }}
          >
            KORA
          </span>
          <span
            className="text-primary tracking-[0.25em] uppercase font-medium"
            style={{ fontSize: size === "lg" ? "0.65rem" : "0.5rem" }}
          >
            Global Systems
          </span>
        </div>
      ) : (
        <span className="font-display font-bold text-foreground tracking-wider text-sm">
          KGS
        </span>
      )}
    </div>
  );
};

export default KGSLogo;
