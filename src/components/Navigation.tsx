import { useState } from "react";
import { Link } from "react-router-dom";
import KGSLogo from "./KGSLogo";
import { Menu, X, Scale, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.solutions, href: "#solutions" },
    { label: t.nav.vision, href: "#vision" },
    { label: t.nav.advisory, href: "/advisory", isRoute: true },
    { label: t.nav.contact, href: "#contact" },
  ];

  const utilityLinks = [
    { icon: Scale, label: t.marquee.grc, sub: t.marquee.grcSub, href: "#solutions" },
    { icon: BookOpen, label: t.marquee.workshop, sub: t.marquee.workshopSub, href: "https://access.koraglobalsystems.com" },
  ];

  const linkClass = "font-display text-sm font-semibold text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase";
  const routeLinkClass = "font-display text-sm font-bold text-primary hover:text-primary/80 transition-colors tracking-wide uppercase";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="z-10">
          <KGSLogo size="md" copper />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
            l.isRoute ? (
              <Link key={l.href} to={l.href} className={routeLinkClass}>
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href={l.href} className={linkClass}>
                {l.label}
              </a>
            )
          )}

          <a
            href="#contact"
            className="px-4 py-2 bg-primary text-primary-foreground font-display font-semibold text-xs tracking-widest uppercase rounded-md hover:opacity-90 transition-opacity"
          >
            {t.nav.cta}
          </a>

          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === "en" ? "fr" : "en")}
            className="text-xs font-display font-semibold tracking-widest uppercase px-3 py-1.5 rounded border border-border hover:border-primary/40 text-muted-foreground hover:text-primary transition-colors"
          >
            {language === "en" ? "FR" : "EN"}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden z-10">
          <button
            onClick={() => setLanguage(language === "en" ? "fr" : "en")}
            className="text-xs font-display font-semibold tracking-widest uppercase px-2.5 py-1 rounded border border-border text-muted-foreground"
          >
            {language === "en" ? "FR" : "EN"}
          </button>
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Utility line — merged from the former standalone marquee */}
      <div className="border-t border-border/60">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center gap-8 overflow-x-auto whitespace-nowrap">
          {utilityLinks.map((item) => {
            const external = item.href.startsWith("http");
            return (
              <a
                key={item.label}
                href={item.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center gap-2 group shrink-0"
              >
                <item.icon className="h-3.5 w-3.5 text-primary/70 shrink-0" />
                <span className="text-foreground/80 font-display text-[10px] tracking-[0.16em] uppercase group-hover:text-primary transition-colors">
                  {item.label}
                </span>
                <span className="hidden sm:inline text-muted-foreground/70 text-[10px] tracking-wide">
                  {item.sub}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map((l) =>
            l.isRoute ? (
              <Link key={l.href} to={l.href} onClick={() => setMobileOpen(false)} className={routeLinkClass}>
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className={linkClass}>
                {l.label}
              </a>
            )
          )}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="inline-block w-fit px-4 py-2 bg-primary text-primary-foreground font-display font-semibold text-xs tracking-widest uppercase rounded-md"
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
