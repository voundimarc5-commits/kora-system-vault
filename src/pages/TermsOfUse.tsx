import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import KGSLogo from "@/components/KGSLogo";

const sections = [
  {
    number: "01",
    title: "Objet",
    paragraphs: [
      "Les présentes conditions générales d'utilisation (CGU) régissent l'accès et l'utilisation de ce site. Elles ne constituent pas un contrat de prestation de services : toute mission de conseil fait l'objet d'un contrat distinct, négocié et signé séparément.",
    ],
  },
  {
    number: "02",
    title: "Description des services",
    paragraphs: [
      "Kora Global Systems (KGS) propose un accompagnement en gouvernance, gestion des risques et conformité appliqué à la cybersécurité, ainsi qu'un atelier public de formation au référentiel NIST CSF 2.0. Les informations présentées sur ce site ont une vocation informative et ne constituent en aucun cas une offre contractuelle ferme.",
    ],
  },
  {
    number: "03",
    title: "Absence de garantie de résultat réglementaire",
    paragraphs: [
      "KGS ne garantit aucun résultat de conformité, aucune certification, ni aucune décision d'un tiers (autorité de supervision, auditeur, partenaire, assureur). La responsabilité du respect effectif des obligations réglementaires applicables incombe entièrement à l'organisation cliente.",
      "L'atelier NIST CSF 2.0 est un outil pédagogique public : il ne confère aucune certification officielle délivrée par le NIST, sauf mention contraire explicite au moment de l'inscription.",
    ],
  },
  {
    number: "04",
    title: "Absence de conseil professionnel engageant",
    paragraphs: [
      "Les contenus publiés sur ce site sont des informations générales à caractère pédagogique. Ils ne constituent ni un avis juridique, ni un avis financier, ni un audit opposable à un tiers, et ne sauraient se substituer à une consultation professionnelle adaptée à la situation particulière de chaque organisation.",
    ],
  },
  {
    number: "05",
    title: "Inscription à l'atelier",
    paragraphs: [
      "L'accès complet à l'atelier NIST CSF 2.0 nécessite la création d'un compte. Les conditions d'inscription sont propres à chaque session et précisées au moment de l'inscription.",
    ],
  },
  {
    number: "06",
    title: "Propriété intellectuelle",
    paragraphs: [
      "Voir les mentions légales pour les dispositions relatives à la propriété intellectuelle des éléments du site.",
    ],
  },
  {
    number: "07",
    title: "Utilisation du site",
    paragraphs: [
      "L'utilisateur s'interdit toute extraction ou réutilisation commerciale du contenu du site, toute action visant à perturber son fonctionnement, ainsi que tout détournement des formulaires mis à disposition (contact, inscription) à des fins autres que celles prévues.",
    ],
  },
  {
    number: "08",
    title: "Liens externes",
    paragraphs: [
      "Ce site peut contenir des liens vers des sites tiers. KGS n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leur disponibilité.",
    ],
  },
  {
    number: "09",
    title: "Limitation de responsabilité",
    paragraphs: [
      "Dans la limite permise par la loi applicable, la responsabilité de KGS ne saurait être engagée au titre de l'utilisation de ce site ou des informations qu'il contient, sans que cela n'exclue une responsabilité impérative prévue par le droit local applicable à l'utilisateur.",
    ],
  },
  {
    number: "10",
    title: "Modification des CGU",
    paragraphs: [
      "KGS se réserve le droit de modifier les présentes CGU à tout moment. La version en vigueur est celle publiée sur le site à la date de consultation.",
    ],
  },
  {
    number: "11",
    title: "Droit applicable",
    paragraphs: [
      "Les présentes CGU sont régies par le droit de l'État du Wyoming (États-Unis), sans préjudice des dispositions impératives de protection des consommateurs applicables dans le pays de résidence de l'utilisateur.",
    ],
  },
];

const TermsOfUse = () => {
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
            Conditions générales d'utilisation
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 + sections.length * 0.08 }}
          className="mt-12 pt-8 border-t border-border/40"
        >
          <p className="text-muted-foreground text-sm leading-relaxed">
            Pour toute question relative aux présentes CGU :{" "}
            <a href="mailto:contact@koraglobalsystems.com" className="text-primary hover:underline">contact@koraglobalsystems.com</a>
          </p>
        </motion.div>

        <motion.p
          className="mt-16 text-muted-foreground/50 text-[11px] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          © 2026 Kora Global Systems. Tous droits réservés.
        </motion.p>
      </div>
    </div>
  );
};

export default TermsOfUse;
