import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import KGSLogo from "@/components/KGSLogo";

const LegalNotice = () => {
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
            Mentions légales
          </h1>
          <div className="w-12 h-px bg-primary/30 mt-6 mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-6 text-muted-foreground text-sm leading-relaxed"
        >
          <div className="space-y-2">
            <p><strong className="text-foreground">Éditeur :</strong><br />Kora Global Systems LLC, société à responsabilité limitée de droit américain, Wyoming.</p>
          </div>

          <div className="space-y-2">
            <p><strong className="text-foreground">Siège social / agent enregistré :</strong><br />30 N Gould Street, #57810, Sheridan, WY 82801, États-Unis.</p>
          </div>

          <div className="space-y-2">
            <p><strong className="text-foreground">Présence opérationnelle :</strong><br />Yaoundé, Cameroun.</p>
          </div>

          <div className="space-y-2">
            <p><strong className="text-foreground">Directeur de la publication :</strong><br />Marc Voundi Zeh, Membre unique et gérant.</p>
          </div>

          <div className="space-y-2">
            <p><strong className="text-foreground">Nature des activités :</strong><br />Conseil en gouvernance, risque et conformité appliqué à la cybersécurité pour organisations en croissance, et formation publique sur le référentiel NIST CSF 2.0.</p>
          </div>

          <div className="space-y-2">
            <p><strong className="text-foreground">Hébergement du site :</strong><br />Hostinger International Limited, société de droit chypriote, 61 Lordou Vironos str., 6023 Larnaca, Chypre (hébergement des données effectué en Allemagne).</p>
          </div>

          <div className="space-y-2">
            <p><strong className="text-foreground">Contact :</strong><br />
              <a href="mailto:contact@koraglobalsystems.com" className="text-primary hover:underline">contact@koraglobalsystems.com</a>
            </p>
          </div>

          <div className="space-y-2">
            <p><strong className="text-foreground">Propriété intellectuelle :</strong><br />L'ensemble des éléments du site (textes, graphismes, logo, éléments visuels) est la propriété de Kora Global Systems LLC, sauf mention contraire. Toute reproduction est interdite sans autorisation écrite préalable.</p>
          </div>
        </motion.div>

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

export default LegalNotice;
