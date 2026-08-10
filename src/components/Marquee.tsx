import { useEffect, useState } from "react";
import { Scale, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Marquee = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const items = [
    { icon: Scale, label: t.marquee.grc, sub: t.marquee.grcSub, href: "#solutions" },
    { icon: BookOpen, label: t.marquee.workshop, sub: t.marquee.workshopSub, href: "https://access.koraglobalsystems.com" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full sticky top-0 z-40 border-b transition-colors duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md border-border" : "bg-background border-border/60"}`}>
      <div className="max-w-6xl mx-auto px-6 py-2.5 flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
        {items.map((item) => {
          const external = item.href.startsWith("http");
          return (
            <a
              key={item.label}
              href={item.href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex items-center gap-2.5 group"
            >
              <item.icon className="h-4 w-4 text-primary/70" />
              <span className="text-foreground/80 font-display text-[11px] tracking-[0.18em] uppercase group-hover:text-primary transition-colors">
                {item.label}
              </span>
              <span className="hidden sm:inline text-muted-foreground/70 text-[11px] tracking-wide">
                {item.sub}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Marquee;
