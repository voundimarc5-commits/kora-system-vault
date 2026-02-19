import { useState } from "react";
import { Link } from "react-router-dom";
import KGSLogo from "./KGSLogo";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Vision", href: "#vision" },
  { label: "Advisory", href: "/advisory", isRoute: true },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="z-10">
          <KGSLogo size="md" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
            l.isRoute ? (
              <Link
                key={l.href}
                to={l.href}
                className="text-sm text-primary hover:text-primary/80 transition-colors tracking-wide uppercase font-medium"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
              >
                {l.label}
              </a>
            )
          )}
        </div>

        <button
          className="md:hidden text-foreground z-10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map((l) =>
            l.isRoute ? (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-primary hover:text-primary/80 transition-colors tracking-wide uppercase font-medium"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
              >
                {l.label}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
