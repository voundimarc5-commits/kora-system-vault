import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Scale } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ExposureResultsProps {
  answers: Record<number, string>;
  onContinue: () => void;
}

type TrackKey = "workshop" | "engagement";

const WORKSHOP_MARKERS = [
  "informelle", "informal", "compétence", "skills", "Former", "Training", "basics", "bases",
  "interne", "internal", "Indépendant", "Independent", "référentiel", "reference model",
];
const ENGAGEMENT_MARKERS = [
  "accompagné", "support", "présentable", "presentable", "questionnaire", "appel d'offres",
  "tender", "assureur", "insurer", "jamais été testée", "never been tested",
  "PME", "SME", "Institution", "plusieurs équipes", "several teams",
];

const countMarkers = (text: string, markers: string[]) =>
  markers.reduce((n, m) => (text.includes(m) ? n + 1 : n), 0);

const getTrack = (answers: Record<number, string>): TrackKey => {
  const text = Object.values(answers).join(" | ");
  const engagement = countMarkers(text, ENGAGEMENT_MARKERS);
  const workshop = countMarkers(text, WORKSHOP_MARKERS);
  return engagement > workshop ? "engagement" : "workshop";
};

const ExposureResults = ({ answers, onContinue }: ExposureResultsProps) => {
  const { t } = useLanguage();
  const recommended = getTrack(answers);

  const tracks: Record<TrackKey, { name: string; desc: string; icon: typeof BookOpen; href?: string }> = {
    workshop: {
      name: t.advisory.workshopName,
      desc: t.advisory.workshopDesc,
      icon: BookOpen,
      href: "https://access.koraglobalsystems.com",
    },
    engagement: {
      name: t.advisory.engagementName,
      desc: t.advisory.engagementDesc,
      icon: Scale,
      href: "mailto:contact@koraglobalsystems.com",
    },
  };

  const other: TrackKey = recommended === "workshop" ? "engagement" : "workshop";
  const track = tracks[recommended];
  const Icon = track.icon;
  const OtherIcon = tracks[other].icon;

  return (
    <div className="min-h-screen flex flex-col items-center py-20 px-6">
      <motion.div
        className="max-w-3xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-14 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(var(--adv-text-muted))" }}>
            {t.advisory.resultsLabel}
          </p>
          <h1 className="font-display text-2xl md:text-3xl font-semibold mb-3" style={{ color: "hsl(var(--adv-text))" }}>
            {t.advisory.resultsTitle}
          </h1>
          <div className="w-12 h-px mx-auto mt-6" style={{ background: "hsl(var(--adv-accent-dim))" }} />
        </div>

        {/* Recommended track */}
        <div
          className="p-8 md:p-10 mb-8"
          style={{ border: "1px solid hsl(var(--adv-accent-dim))", background: "hsl(var(--adv-accent) / 0.04)" }}
        >
          <p className="text-[11px] tracking-[0.25em] uppercase mb-6" style={{ color: "hsl(var(--adv-text-muted))" }}>
            {t.advisory.recommendedBranch}
          </p>
          <a
            href={track.href}
            target={track.href?.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex items-start gap-4 group"
          >
            <Icon className="w-7 h-7 shrink-0" style={{ color: "hsl(var(--adv-accent))" }} />
            <div>
              <h2
                className="font-display text-xl md:text-2xl font-semibold mb-2 group-hover:underline"
                style={{ color: "hsl(var(--adv-text))" }}
              >
                {track.name}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--adv-text-muted))" }}>
                {track.desc}
              </p>
            </div>
          </a>
        </div>

        {/* Other track */}
        <a
          href={tracks[other].href}
          target={tracks[other].href?.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="block p-6 mb-8 group"
          style={{ border: "1px solid hsl(var(--adv-border))", background: "hsl(var(--adv-surface))" }}
        >
          <OtherIcon className="w-5 h-5 mb-3" style={{ color: "hsl(var(--adv-text-muted) / 0.6)" }} />
          <h3 className="font-display text-sm font-medium mb-1 group-hover:underline" style={{ color: "hsl(var(--adv-text))" }}>
            {tracks[other].name}
          </h3>
          <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--adv-text-muted))" }}>
            {tracks[other].desc}
          </p>
        </a>

        {/* Why */}
        <div className="p-6 mb-10" style={{ border: "1px solid hsl(var(--adv-border))", background: "hsl(var(--adv-surface))" }}>
          <h3 className="font-display text-sm font-medium mb-2" style={{ color: "hsl(var(--adv-text))" }}>
            {t.advisory.whyThisBranch}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--adv-text-muted))" }}>
            {t.advisory.whyExplanation}
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={onContinue}
            className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-wide uppercase transition-colors"
            style={{ border: "1px solid hsl(var(--adv-accent-dim))", color: "hsl(var(--adv-accent))" }}
          >
            {t.advisory.unlockBtn}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ExposureResults;
