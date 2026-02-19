interface InstitutionalDisclaimerProps {
  text: string;
  className?: string;
}

const InstitutionalDisclaimer = ({ text, className = "" }: InstitutionalDisclaimerProps) => {
  return (
    <p
      className={`text-[11px] leading-relaxed text-muted-foreground/60 max-w-2xl mx-auto ${className}`}
    >
      {text}
    </p>
  );
};

export default InstitutionalDisclaimer;
