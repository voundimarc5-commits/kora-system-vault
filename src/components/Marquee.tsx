import { useEffect, useRef } from "react";

import kgsAccessLogo from "@/assets/kgs-access-logo.png";
import kgsAutomationsLogo from "@/assets/kgs-automations-logo.png";
import kgsFlowLogo from "@/assets/kgs-flow-logo.png";

const items = [
  { label: "KGS Access", sub: "Secure Identity & Access Control", color: "text-[hsl(210,60%,65%)]", logo: kgsAccessLogo, imgClass: "h-20 md:h-24 scale-125" },
  { label: "KGS Automations", sub: "Workflow & Business Process Automation", color: "text-[hsl(170,50%,55%)]", logo: kgsAutomationsLogo, imgClass: "h-20 md:h-24 scale-125" },
  { label: "KGS Flow", sub: "Financial & Payment Flows", color: "text-[hsl(43,55%,60%)]", logo: kgsFlowLogo, imgClass: "h-14 md:h-16 scale-110" },
];

const Marquee = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const posRef = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Wait for images to load to get correct width
    const start = () => {
      const halfWidth = el.scrollWidth / 2;
      const speed = 0.75; // px per frame

      const tick = () => {
        posRef.current -= speed;
        if (posRef.current <= -halfWidth) {
          posRef.current += halfWidth;
        }
        el.style.transform = `translateX(${posRef.current}px)`;
        animationRef.current = requestAnimationFrame(tick);
      };

      animationRef.current = requestAnimationFrame(tick);
    };

    // Small delay to ensure layout is ready
    const timeout = setTimeout(start, 100);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const renderItems = () =>
    items.map((item, i) => (
      <div key={i} className="flex items-center gap-1 px-3 shrink-0">
        <img src={item.logo} alt={item.label} className={`${item.imgClass} w-auto object-contain`} />
        <span className={`${item.color} font-medium text-sm tracking-widest uppercase whitespace-nowrap`}>
          {item.label}
        </span>
        {item.sub && (
          <span className="text-muted-foreground text-xs tracking-wide font-normal whitespace-nowrap">
            — {item.sub}
          </span>
        )}
        <span className="mx-2 text-border select-none" aria-hidden>│</span>
      </div>
    ));

  return (
    <div
      className="sticky top-16 z-40 w-full bg-background/75 backdrop-blur-sm border-b border-border overflow-hidden"
    >
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-background/75 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-background/75 to-transparent pointer-events-none" />

      <div ref={scrollRef} className="flex items-center py-1 will-change-transform">
        {renderItems()}
        {renderItems()}
      </div>
    </div>
  );
};

export default Marquee;
