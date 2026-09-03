# Mise en page, blocs colorés, contenu légal

État vérifié : `WhatWeDoSection.tsx` utilise un dégradé doré (`linear-gradient(135deg, hsl(var(--primary)) → hsl(42 92% 60%))` + `GradientBlob`) uniquement sur la carte 1 de « Nos deux domaines » ; les paliers et la répartition des rôles sont en `bg-card/40` neutre. `WhoWeAreSection.tsx` place tout le texte (p1, p2, p4) dans une colonne de 2/5 à côté de l'image. Les 3 pages légales contiennent un template anglais générique (activités « systems architecture », transactions financières). `App.tsx` route `/terms` vers `Terms.tsx` ; deux liens internes pointent encore vers `/terms` (`Footer.tsx` ligne 94, `FooterCTA.tsx` ligne 16). `Advisory.tsx` et `FinancialSector.tsx` utilisent bien `font-display` (Archivo) et les tokens actuels (`--adv-*`, `--primary`) — aucun résidu Bricolage Grotesque.

## 1. WhoWeAreSection — dernier paragraphe en pleine largeur

- La grille 3/2 (image | texte) conserve label, titre, `p1`, `p2`.
- `p4` sort de la colonne et devient un bloc pleine largeur sous la grille, avec un filet supérieur fin et une largeur de lecture confortable (`max-w-4xl`), ScrollReveal cohérent.
- `p3` reste dans la carte superposée sur l'image. Aucun changement d'image ni d'animation.

## 2. Blocs colorés — paliers et répartition des rôles

- Extraction du traitement existant de la carte 1 en un style partagé : dégradé doré subtil + `GradientBlob` en overlay.
- Les 3 sous-cartes de paliers passent sur une version atténuée de ce dégradé (nuance dorée douce sur fond clair, bordure fine conservée) afin de rester lisibles en texte foncé — même famille visuelle que la carte 1, sans copier son intensité pleine.
- Les 2 blocs « Répartition des rôles » reçoivent le même traitement, en gardant la distinction voulue : bloc KGS légèrement plus affirmé, bloc partenaire technique en bordure pointillée et nuance plus discrète (les deux jamais fusionnés).
- Aucun texte modifié, aucun nouveau token de couleur : réutilisation de `--primary`/`--accent`.

## 3. Contenu légal (FR, textes fournis à la lettre)

- `LegalNotice.tsx` : réécrit en français avec éditeur, siège/agent enregistré Sheridan WY, directeur de la publication Marc Voundi Zeh, nature des activités (conseil GRC cybersécurité + formation publique NIST CSF 2.0), hébergement Hostinger (Chypre, données en Allemagne), contact, propriété intellectuelle.
- `TermsOfUse.tsx` : réécrit en français, structure numérotée existante conservée, sections : dernière mise à jour 3 septembre 2026, objet, description des services, absence de garantie de résultat réglementaire, absence de conseil professionnel engageant, inscription à l'atelier, propriété intellectuelle (renvoi aux mentions légales), utilisation du site, liens externes, limitation de responsabilité, modification des CGU, droit applicable (Wyoming + dispositions impératives locales), contact.
- `PrivacyPolicy.tsx` : réécrit en français, sections : dernière mise à jour, responsable du traitement, données collectées, finalités et base légale, durée de conservation (3 ans max), destinataires (Marc Voundi Zeh + Hostinger uniquement), transferts, cadres légaux (RGPD, loi camerounaise 2024/017, loi sénégalaise 2008-12/CDP, loi ivoirienne 2013-450/ARTCI), droits, sécurité, modifications et contact. **Aucune section cookies**, aucun autre sous-traitant.
- Mentions de bas de page mises à jour (année et nom institutionnel), titres de pages en français.

## 4. Consolidation /terms → /terms-of-use

- `App.tsx` : `/terms` rend `<Navigate to="/terms-of-use" replace />`, import de `Terms` retiré.
- `Footer.tsx` : le lien dupliqué vers `/terms` est retiré (le lien « Conditions d'utilisation » vers `/terms-of-use` subsiste).
- `FooterCTA.tsx` : l'entrée pointant vers `/terms` est redirigée vers `/terms-of-use`.
- `src/pages/Terms.tsx` supprimé une fois plus aucune référence.

## Vérification

- `npx tsgo --noEmit`.
- Captures Playwright : `/legal-notice`, `/terms-of-use`, `/privacy-policy`, section Offre/Services (paliers + rôles) et section À propos.

## Détails techniques

- Les pages légales sont du contenu statique non i18n aujourd'hui ; elles restent statiques en français (pas d'ajout de clés i18n) — cohérent avec le français par défaut.
- Aucune modification de `index.css`, des tokens, ni de la logique du diagnostic.
