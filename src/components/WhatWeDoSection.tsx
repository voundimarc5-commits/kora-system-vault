import { Scale, BookOpen, ArrowRight, Check, FileText, Compass, Shield, ShieldCheck, Wrench, Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import LetterReveal from "./LetterReveal";
import GradientBlob from "./GradientBlob";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card";
import { useLanguage } from "@/contexts/LanguageContext";

const CSF_FUNCTIONS = ["GOVERN", "IDENTIFY", "PROTECT", "DETECT", "RESPOND", "RECOVER"];

const TIER_DETAILS: string[][] = [
  [
    "Méthode : entretiens structurés avec les fonctions clés (direction, IT, opérations), revue documentaire des politiques et contrats existants, cartographie des actifs et processus critiques.",
    "Structuration : grille croisée inspirée des 6 fonctions du NIST CSF 2.0 (gouvernance, identification, protection, détection, réponse, rétablissement), adaptée aux obligations réglementaires locales identifiées selon le secteur du client.",
    "Livrable : rapport de maturité par fonction, registre des écarts avec sévérité et référence réglementaire associée, matrice de risques priorisée, feuille de route à 30/90/180 jours.",
  ],
  [
    "Construction ou refonte des politiques de gouvernance : charte de gouvernance des risques, politique de sécurité de l'information, procédures de gestion des incidents.",
    "Structuration du registre des risques : méthode, propriétaires assignés, plan de traitement, calendrier de revue.",
    "Accompagnement à la collecte de preuves : documentation des contrôles réellement en place, pas seulement déclarés.",
    "Simulation d'audit avant l'échéance réelle, avec restitution des points de non-conformité résiduels.",
    "Jalons mensuels documentés sur 3 à 6 mois.",
  ],
  [
    "Suivi trimestriel du registre des risques et des contrôles, avec revue de pertinence selon l'évolution de l'activité.",
    "Veille réglementaire ciblée sur les textes applicables au client.",
    "Préparation renouvelée avant chaque échéance d'audit externe.",
    "Point de gouvernance annuel avec la direction.",
  ],
];

const WhatWeDoSection = () => {
  const { t } = useLanguage();
  const [openTier, setOpenTier] = useState<number | null>(null);

  const card1Points = [t.domains.card1Point1, t.domains.card1Point2, t.domains.card1Point3];
  const card2Points = [t.domains.card2Point1, t.domains.card2Point2, t.domains.card2Point3];

  const tiers = [
    {
      icon: Compass,
      step: "01",
      name: t.domains.tier1Name,
      duration: t.domains.tier1Duration,
      desc: t.domains.tier1Desc,
      deliverable: t.domains.tier1Deliverable,
      note: t.domains.tier1Note,
    },
    {
      icon: FileText,
      step: "02",
      name: t.domains.tier2Name,
      duration: t.domains.tier2Duration,
      desc: t.domains.tier2Desc,
    },
    {
      icon: Shield,
      step: "03",
      name: t.domains.tier3Name,
      duration: t.domains.tier3Duration,
      desc: t.domains.tier3Desc,
    },
  ];

  const frameworks = [
    { ref: t.domains.framework1Ref, desc: t.domains.framework1Desc },
    { ref: t.domains.framework2Ref, desc: t.domains.framework2Desc },
    { ref: t.domains.framework3Ref, desc: t.domains.framework3Desc },
  ];

  return (
    <section id="solutions" className="py-24 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal direction="left">
          <p className="text-primary font-display text-[11px] tracking-[0.3em] uppercase mb-4">{t.domains.label}</p>
        </ScrollReveal>
        <LetterReveal
          text={t.domains.title}
          className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-5 leading-[1.1] tracking-tight max-w-3xl"
        />
        <ScrollReveal direction="left" delay={0.15}>
          <p className="text-muted-foreground mb-14 max-w-2xl leading-relaxed">{t.domains.subtitle}</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 — risk & compliance advisory */}
          <ScrollReveal direction="left" delay={0.2}>
            <article
              className="relative h-full rounded-lg overflow-hidden flex flex-col"
              style={{ background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(42 92% 60%) 100%)" }}
            >
              <GradientBlob className="absolute -top-24 -left-24 w-[380px] h-[380px] opacity-40 mix-blend-overlay" />
              <div className="relative p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="h-5 w-5 text-white/80" />
                  <h3 className="font-display text-2xl font-bold text-white">{t.domains.card1Title}</h3>
                </div>
                <p className="text-white/85 text-sm leading-relaxed mb-6">{t.domains.card1Desc}</p>
                <ul className="space-y-2.5 mb-6">
                  {card1Points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-white/90">
                      <Check className="h-4 w-4 text-white/70 mt-0.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto border-t border-white/25 pt-5 space-y-3">
                  <p className="text-white/70 text-xs leading-relaxed">{t.domains.card1Note1}</p>
                  <p className="text-white/70 text-xs leading-relaxed">{t.domains.card1Note2}</p>
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* Card 2 — NIST CSF 2.0 workshop */}
          <ScrollReveal direction="right" delay={0.3}>
            <article className="h-full border border-border rounded-lg overflow-hidden bg-card/50 flex flex-col">
              <div className="h-44 border-b border-border flex items-center px-7">
                <div>
                  <p className="font-display text-xs tracking-[0.28em] uppercase text-primary/80 mb-4">NIST CSF 2.0</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-2">
                    {CSF_FUNCTIONS.map((f) => (
                      <span
                        key={f}
                        className="font-display text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-muted-foreground border border-border rounded px-2 py-1"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-5 w-5 text-primary/70" />
                  <h3 className="font-display text-lg font-semibold text-foreground">{t.domains.card2Title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{t.domains.card2Desc}</p>
                <ul className="space-y-2.5 mb-7">
                  {card2Points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-primary/70 mt-0.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://access.koraglobalsystems.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-auto inline-flex items-center gap-2 text-sm font-display font-semibold text-primary hover:text-accent transition-colors"
                >
                  {t.domains.card2Cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <span className="text-muted-foreground/60 font-normal tracking-wide">access.koraglobalsystems.com</span>
                </a>
              </div>
            </article>
          </ScrollReveal>
        </div>

        {/* Three levels of engagement */}
        <div className="mt-24">
          <ScrollReveal direction="up">
            <p className="text-primary font-display text-[11px] tracking-[0.3em] uppercase mb-4">{t.domains.tiersLabel}</p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-12 leading-tight tracking-tight max-w-2xl">
              {t.domains.tiersTitle}
            </h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <ScrollReveal key={tier.name} direction={i % 2 === 0 ? "up" : "down"} delay={0.15 + i * 0.08}>
                <HoverCard
                  open={openTier === i}
                  onOpenChange={(o) => setOpenTier(o ? i : null)}
                  openDelay={100}
                >
                  <HoverCardTrigger asChild>
                    <article
                      onClick={() => setOpenTier(openTier === i ? null : i)}
                      className="h-full border border-border rounded-lg p-7 flex flex-col cursor-pointer"
                      style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.07) 0%, hsl(var(--accent) / 0.06) 100%)" }}
                    >
                      <div className="flex items-center justify-between mb-5">
                        <span className="font-display text-[11px] tracking-[0.24em] text-primary/60">{tier.step}</span>
                        <tier.icon className="h-4 w-4 text-primary/60" />
                      </div>
                      <h4 className="font-display text-lg font-semibold text-foreground mb-2 leading-snug">{tier.name}</h4>
                      <p className="font-display text-[10px] tracking-[0.2em] uppercase text-muted-foreground/70 mb-5">
                        {tier.duration}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{tier.desc}</p>
                      {tier.deliverable && (
                        <p className="mt-5 text-sm text-foreground/80 leading-relaxed border-t border-border pt-5">
                          {tier.deliverable}
                        </p>
                      )}
                      {tier.note && (
                        <p className="mt-4 text-xs text-muted-foreground/80 leading-relaxed">{tier.note}</p>
                      )}
                    </article>
                  </HoverCardTrigger>
                  <HoverCardContent
                    side="top"
                    align="center"
                    className="w-[22rem] md:w-[26rem] max-w-[90vw] p-6 border-border shadow-lg"
                  >
                    <p className="font-display text-[10px] tracking-[0.24em] uppercase text-primary/70 mb-3">
                      {tier.name} — détail
                    </p>
                    <ul className="space-y-2.5">
                      {TIER_DETAILS[i].map((line, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </HoverCardContent>
                </HoverCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* How the diagnostic works */}
        <div className="mt-24 border-t border-border pt-14">
          <ScrollReveal direction="left">
            <p className="text-primary font-display text-[11px] tracking-[0.3em] uppercase mb-4">{t.domains.diagnosticLabel}</p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.1}>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-12 leading-tight tracking-tight max-w-2xl">
              {t.domains.diagnosticTitle}
            </h3>
          </ScrollReveal>

          <div className="border-t border-border">
            {[
              { number: "01", title: t.domains.diagnosticStep1Title, desc: t.domains.diagnosticStep1Desc },
              { number: "02", title: t.domains.diagnosticStep2Title, desc: t.domains.diagnosticStep2Desc },
              { number: "03", title: t.domains.diagnosticStep3Title, desc: t.domains.diagnosticStep3Desc },
            ].map((s, i) => (
              <ScrollReveal key={s.number} direction="left" delay={0.15 + i * 0.1}>
                <div className="grid md:grid-cols-[1fr_1.5fr] gap-2 md:gap-10 py-7 border-b border-border items-baseline">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-xs tracking-[0.2em] text-primary/50">{s.number}</span>
                    <h4 className="font-display text-lg font-semibold text-primary tracking-tight">{s.title}</h4>
                  </div>
                  <p className="text-foreground/80 text-sm md:text-base leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Method */}
        <div className="mt-24 border-t border-border pt-14">
          <ScrollReveal direction="left">
            <p className="text-primary font-display text-[11px] tracking-[0.3em] uppercase mb-4">{t.domains.methodLabel}</p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.1}>
            <h3 className="font-display text-2xl md:text-4xl font-semibold text-foreground mb-6 leading-tight tracking-tight max-w-2xl">
              {t.domains.methodTitle}
            </h3>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.15}>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">{t.domains.methodBody}</p>
          </ScrollReveal>
        </div>

        {/* Division of roles — two strictly separate blocks */}
        <div className="mt-20">
          <ScrollReveal direction="right">
            <p className="text-primary font-display text-[11px] tracking-[0.3em] uppercase mb-6">{t.domains.splitLabel}</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal direction="right" delay={0.1}>
              <div
                className="h-full border border-border rounded-lg p-7"
                style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.15) 0%, hsl(var(--accent) / 0.11) 100%)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="h-5 w-5 text-primary/70" />
                  <h4 className="font-display text-base font-semibold text-foreground">{t.domains.splitKgsTitle}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.domains.splitKgsDesc}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.18}>
              <div
                className="h-full border border-dashed border-border rounded-lg p-7"
                style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.04) 0%, hsl(var(--accent) / 0.03) 100%)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="h-5 w-5 text-muted-foreground/70" />
                  <h4 className="font-display text-base font-semibold text-foreground">{t.domains.splitPartnerTitle}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.domains.splitPartnerDesc}</p>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="up" delay={0.24}>
            <p className="mt-6 text-xs text-muted-foreground/80 leading-relaxed max-w-2xl">{t.domains.anticNote}</p>
          </ScrollReveal>
        </div>

        {/* Reference frameworks */}
        <div className="mt-20 border-t border-border pt-14">
          <ScrollReveal direction="down">
            <p className="text-primary font-display text-[11px] tracking-[0.3em] uppercase mb-8">{t.domains.frameworksLabel}</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {frameworks.map((f, i) => (
              <ScrollReveal key={f.ref} direction="down" delay={0.1 + i * 0.08}>
                <div className="h-full border-t border-border pt-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <Landmark className="h-4 w-4 text-primary/60" />
                    <p className="font-display text-sm font-semibold text-foreground tracking-wide">{f.ref}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal direction="up" delay={0.3}>
            <Link
              to="/secteur-financier"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-display font-semibold text-primary hover:text-accent transition-colors"
            >
              {t.nav.financialSector}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
