import { useEffect, useRef, useState } from "react";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const images = el.querySelectorAll("img");
    let loaded = 0;
    const total = images.length;

    const onAllLoaded = () => {
      const halfWidth = el.scrollWidth / 2;
      const speed = 0.75;

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

    const checkLoaded = () => {
      loaded++;
      if (loaded >= total) onAllLoaded();
    };

    images.forEach((img) => {
      if (img.complete) {
        checkLoaded();
      } else {
        img.addEventListener("load", checkLoaded, { once: true });
        img.addEventListener("error", checkLoaded, { once: true });
      }
    });

    if (total === 0) onAllLoaded();

    return () => {
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
      className={`w-full sticky top-0 z-50 border-b border-border overflow-hidden transition-colors duration-300 ${
        scrolled ? "bg-background/75 backdrop-blur-md" : "bg-background/95 backdrop-blur-sm"
      }`}
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
