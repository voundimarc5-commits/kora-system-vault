import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Landmark, ClipboardList, ShieldCheck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import LetterReveal from "@/components/LetterReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const FinancialSector = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="h-[100px]" />

      <main>
        <section className="border-b border-border py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <ScrollReveal direction="left">
              <p className="text-primary font-display text-[11px] tracking-[0.3em] uppercase mb-5">
                {t.financialSector.label}
              </p>
            </ScrollReveal>
            <LetterReveal
              as="h1"
              text={t.financialSector.title}
              immediate
              delay={0.2}
              stagger={0.018}
              className="font-display text-4xl md:text-6xl font-semibold text-foreground leading-[1.05] tracking-tight mb-8"
            />
            <div className="w-16 h-px bg-primary/50 mb-8" />
            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t.financialSector.lead}
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-20 border-b border-border">
          <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-10">
            <ScrollReveal direction="right">
              <div className="h-full border border-border rounded-lg p-7 bg-card/40">
                <div className="flex items-center gap-3 mb-4">
                  <ClipboardList className="h-5 w-5 text-primary/70" />
                  <h2 className="font-display text-base font-semibold text-foreground">
                    {t.financialSector.findingsTitle}
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.financialSector.findings}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.12}>
              <div className="h-full border border-border rounded-lg p-7 bg-card/40">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="h-5 w-5 text-primary/70" />
                  <h2 className="font-display text-base font-semibold text-foreground">
                    {t.financialSector.scopeTitle}
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.financialSector.scopeP1}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.financialSector.scopeP2}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-20 border-b border-border">
          <div className="max-w-4xl mx-auto px-6">
            <ScrollReveal direction="up">
              <div className="border-t border-border pt-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <Landmark className="h-4 w-4 text-primary/60" />
                  <p className="font-display text-[11px] tracking-[0.24em] uppercase text-muted-foreground">
                    {t.financialSector.distinctionTitle}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  {t.financialSector.distinction}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-start gap-4">
            <a
              href="mailto:contact@koraglobalsystems.com"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wide rounded-md hover:opacity-90 transition-opacity"
            >
              <Mail className="h-4 w-4" />
              {t.financialSector.cta}
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground font-display font-semibold text-sm rounded-md hover:border-primary/60 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.financialSector.back}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FinancialSector;
