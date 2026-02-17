import KGSLogo from "./KGSLogo";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <KGSLogo size="sm" />
        <p className="text-muted-foreground text-xs tracking-wide">
          © {new Date().getFullYear()} KORA Global Systems. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
