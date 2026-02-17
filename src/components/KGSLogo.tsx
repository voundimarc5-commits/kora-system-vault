const KGSLogo = ({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) => {
  const dims = { sm: 36, md: 48, lg: 96 };
  const d = dims[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width={d} height={d} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Globe outer circle */}
        <circle cx="50" cy="60" r="38" stroke="url(#globeGrad)" strokeWidth="3" fill="none" />

        {/* Globe horizontal ellipses (latitude lines) */}
        <ellipse cx="50" cy="60" rx="38" ry="12" stroke="url(#globeGrad)" strokeWidth="1.8" fill="none" />
        <ellipse cx="50" cy="60" rx="38" ry="26" stroke="url(#globeGrad)" strokeWidth="1.2" fill="none" opacity="0.6" />

        {/* Globe vertical ellipses (longitude lines) */}
        <ellipse cx="50" cy="60" rx="12" ry="38" stroke="url(#globeGrad)" strokeWidth="1.8" fill="none" />
        <ellipse cx="50" cy="60" rx="26" ry="38" stroke="url(#globeGrad)" strokeWidth="1.2" fill="none" opacity="0.6" />

        {/* Center vertical line */}
        <line x1="50" y1="22" x2="50" y2="98" stroke="url(#globeGrad)" strokeWidth="1.5" opacity="0.5" />
        {/* Center horizontal line */}
        <line x1="12" y1="60" x2="88" y2="60" stroke="url(#globeGrad)" strokeWidth="1.5" opacity="0.5" />

        {/* Circuit stem coming from top-right of globe */}
        <line x1="75" y1="32" x2="85" y2="18" stroke="url(#circuitGrad)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="85" y1="18" x2="85" y2="8" stroke="url(#circuitGrad)" strokeWidth="2.5" strokeLinecap="round" />

        {/* Circuit branch right */}
        <line x1="85" y1="18" x2="105" y2="18" stroke="url(#circuitGrad)" strokeWidth="2.5" strokeLinecap="round" />

        {/* Circuit branch up-right */}
        <line x1="85" y1="8" x2="100" y2="8" stroke="url(#circuitGrad)" strokeWidth="2.5" strokeLinecap="round" />

        {/* Circuit branch down from junction */}
        <line x1="85" y1="18" x2="85" y2="35" stroke="url(#circuitGrad)" strokeWidth="2.5" strokeLinecap="round" />

        {/* Circuit nodes (dots) */}
        <circle cx="105" cy="18" r="4" fill="url(#circuitGrad)" />
        <circle cx="100" cy="8" r="3.5" fill="url(#circuitGrad)" />
        <circle cx="85" cy="35" r="4" fill="url(#circuitGrad)" />
        <circle cx="85" cy="8" r="3" fill="url(#circuitGrad)" />

        {/* Junction dot */}
        <circle cx="85" cy="18" r="3" fill="url(#circuitGrad)" />

        {/* Globe anchor — small arc at bottom */}
        <path d="M 38 92 Q 50 105 62 92" stroke="url(#globeGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        <defs>
          <linearGradient id="globeGrad" x1="12" y1="22" x2="88" y2="98">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--glow))" />
          </linearGradient>
          <linearGradient id="circuitGrad" x1="75" y1="35" x2="105" y2="8">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--glow))" />
          </linearGradient>
        </defs>
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
