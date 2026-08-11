const GradientBlob = ({ className = "" }: { className?: string }) => (
  <div
    aria-hidden
    className={`pointer-events-none rounded-[3rem] ${className}`}
    style={{
      background:
        "radial-gradient(circle at 28% 30%, hsl(20 90% 60% / 0.9), transparent 60%), " +
        "radial-gradient(circle at 72% 38%, hsl(335 80% 70% / 0.65), transparent 55%), " +
        "radial-gradient(circle at 50% 78%, hsl(265 65% 65% / 0.55), transparent 60%)",
      filter: "blur(60px)",
    }}
  />
);

export default GradientBlob;
