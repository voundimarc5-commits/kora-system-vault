import { useEffect, useRef, useState } from "react";
import kgsParentLogo from "@/assets/kgs-parent-logo.png";
import kgsAccessLogo from "@/assets/kgs-access-logo.png";
import kgsAutomationsLogo from "@/assets/kgs-automations-logo.png";
import kgsFlowLogo from "@/assets/kgs-flow-logo.png";

const items = [
  { label: "KORA Global Systems", color: "text-foreground", weight: "font-semibold", logo: kgsParentLogo },
  { label: "KGS Access", sub: "Secure Identity & Access Control", color: "text-[hsl(210,60%,65%)]", logo: kgsAccessLogo },
  { label: "KGS Automations", sub: "Workflow & Business Process Automation", color: "text-[hsl(170,50%,55%)]", logo: kgsAutomationsLogo },
  { label: "KGS Flow", sub: "Financial & Payment Flows", color: "text-[hsl(43,55%,60%)]", logo: kgsFlowLogo },
];

const Separator = () => (
  <span className="mx-8 text-border select-none" aria-hidden>│</span>
);

const MarqueeItem = ({ item, containerRef }: { item: typeof items[0]; containerRef: React.RefObject<HTMLDivElement | null> }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    const el = ref.current;
    if (!container || !el) return;

    let raf: number;
    const update = () => {
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      const elCenter = elRect.left + elRect.width / 2;
      const distance = Math.abs(containerCenter - elCenter);
      const maxDist = containerRect.width / 2;
      const proximity = Math.max(0, 1 - distance / maxDist);
      // Scale from 1 to 1.35 based on proximity to center
      setScale(1 + proximity * 0.35);
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [containerRef]);

  return (
    <span
      ref={ref}
      className="inline-flex items-center gap-3 whitespace-nowrap"
    >
      <span className="inline-flex items-center gap-2 transition-transform duration-100 origin-center" style={{ transform: `scale(${scale})` }}>
        <img src={item.logo} alt={item.label} className="h-16 md:h-20 w-auto object-contain" />
        <span className={`${item.color} ${item.weight || "font-medium"} text-sm tracking-widest uppercase`}>
          {item.label}
        </span>
      </span>
      {item.sub && (
        <span className="text-muted-foreground text-xs tracking-wide font-normal">
          — {item.sub}
        </span>
      )}
    </span>
  );
};

const ItemList = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) => (
  <>
    {items.map((item, i) => (
      <span key={i} className="inline-flex items-center">
        {i > 0 && <Separator />}
        <MarqueeItem item={item} containerRef={containerRef} />
      </span>
    ))}
  </>
);

const Marquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="w-full bg-background overflow-hidden border-b border-border">
      <div className="animate-scroll flex items-center py-4 w-max">
        <ItemList containerRef={containerRef} />
        <Separator />
        <ItemList containerRef={containerRef} />
        <Separator />
        <ItemList containerRef={containerRef} />
        <Separator />
        <ItemList containerRef={containerRef} />
        <Separator />
      </div>
    </div>
  );
};

export default Marquee;
