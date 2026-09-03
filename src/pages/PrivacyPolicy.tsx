import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import KGSLogo from "@/components/KGSLogo";

const sections = [
  {
    number: "01",
    title: "Responsable du traitement",
    paragraphs: [
      "Le responsable du traitement des données à caractère personnel collectées sur ce site est Kora Global Systems LLC, représentée par Marc Voundi Zeh. Contact : contact@koraglobalsystems.com.",
    ],
  },
  {
    number: "02",
    title: "Données collectées",
    paragraphs: [
      "Via les formulaires de contact et d'inscription, KGS collecte : nom, adresse e-mail, organisation, fonction, et le contenu du message transmis.",
    ],
  },
  {
    number: "03",
    title: "Finalités et base légale",
    paragraphs: [
      "Ces données sont utilisées pour répondre à la demande, évaluer un besoin d'accompagnement, gérer l'inscription à l'atelier, et assurer le suivi de la relation. Le traitement repose sur le consentement de la personne concernée et/ou sur l'intérêt légitime de KGS à répondre aux sollicitations reçues.",
    ],
  },
  {
    number: "04",
    title: "Durée de conservation",
    paragraphs: [
      "Les données sont conservées pour la durée nécessaire aux finalités décrites ci-dessus, et au maximum trois ans après le dernier contact, sauf obligation légale de conservation plus longue ou contrat en cours.",
    ],
  },
  {
    number: "05",
    title: "Destinataires des données",
    paragraphs: [
      "Les données sont accessibles à Marc Voundi Zeh et à Hostinger International Limited (Chypre), en tant qu'hébergeur du site — les données étant hébergées en Allemagne. Aucun autre sous-traitant n'est mobilisé à ce jour ; cette section sera mise à jour si cela évolue.",
    ],
  },
  {
    number: "06",
    title: "Transferts de données",
    paragraphs: [
      "L'hébergement principal des données est assuré en Allemagne, au sein de l'Union européenne.",
    ],
  },
  {
    number: "07",
    title: "Cadres légaux applicables",
    paragraphs: [
      "Ce traitement est conduit dans le respect du Règlement général sur la protection des données (RGPD, UE/Royaume-Uni), de la loi camerounaise n°2024/017 du 23 décembre 2024 relative à la protection des données à caractère personnel, de la loi sénégalaise n°2008-12 du 25 janvier 2008 sur la protection des données à caractère personnel (CDP), et de la loi ivoirienne n°2013-450 du 19 juin 2013 relative à la protection des données à caractère personnel (ARTCI).",
    ],
  },
  {
    number: "08",
    title: "Vos droits",
    paragraphs: [
      "Toute personne concernée dispose d'un droit d'accès, de rectification, d'effacement, d'opposition, de limitation et de portabilité de ses données, ainsi que du droit d'introduire une réclamation auprès de l'autorité de contrôle compétente. Ces droits s'exercent en écrivant à contact@koraglobalsystems.com.",
    ],
  },
  {
    number: "09",
    title: "Sécurité",
    paragraphs: [
      "KGS met en œuvre des mesures raisonnables pour protéger les données collectées contre l'accès non autorisé, la perte ou l'altération.",
    ],
  },
  {
    number: "10",
    title: "Modifications",
    paragraphs: [
      "Cette politique de confidentialité peut être mise à jour périodiquement pour refléter l'évolution des pratiques ou des exigences légales.",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(30 20% 95%) 15%, hsl(32 18% 93%) 50%, hsl(30 20% 95%) 85%, hsl(var(--background)) 100%)",
      }}
    >
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-background/90 backdrop-blur-md border-b border-border/30">
        <Link to="/" className="flex items-center gap-3">
          <KGSLogo size="sm" className="h-10" />
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </Link>
      </nav>

      <div className="pt-28 pb-20 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4">
            Légal
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
            Politique de confidentialité
          </h1>
          <p className="text-muted-foreground text-sm mb-2">
            Dernière mise à jour : 3 septembre 2026
          </p>
          <div className="w-12 h-px bg-primary/30 mt-6 mb-12" />
        </motion.div>

        <div className="space-y-12">
          {sections.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="group"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-primary/40 font-mono text-xs">
                  {s.number}
                </span>
                <h2 className="font-display text-lg font-semibold text-foreground">
                  {s.title}
                </h2>
              </div>
              <div className="pl-10 space-y-3">
                {s.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="text-muted-foreground text-sm leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
              {i < sections.length - 1 && (
                <div className="mt-8 border-b border-border/40" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-16 text-muted-foreground/50 text-[11px] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          © 2026 Kora Global Systems. Tous droits réservés.
        </motion.p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
