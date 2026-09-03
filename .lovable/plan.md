# Repositionnement réglementaire Cameroun / CEMAC

État vérifié avant plan : `src/i18n/fr.ts` et `src/i18n/en.ts` contiennent aujourd'hui le contenu GRC générique (hero « Le risque maîtrisé devient un avantage de confiance », `whoWeAre` s'arrête à `p3`, `domains.card1*` sans paliers). Aucune page secteur financier n'existe (`src/App.tsx` : `/`, `/advisory`, pages légales). Aucune zone de logos clients n'existe sur le site — il n'y a donc rien à remplacer, mais un bloc de citations réglementaires sera ajouté.

## 1. Hero (`FounderHero.tsx` + i18n)

- `hero.title` et `hero.subtitle` remplacés par les textes fournis (FR), avec équivalent EN fidèle.
- Inversion des boutons : `ctaContact` (lien `#contact`) devient le bouton plein `bg-primary`, `ctaWorkshop` (lien access.koraglobalsystems.com) passe en contour `border-border`. Ordre visuel : contact d'abord.
- Aucun changement de mise en page, d'image ni d'animation.

## 2. À propos (`WhoWeAreSection.tsx` + i18n)

- Ajout de `whoWeAre.p4` (texte fourni), rendu juste après `p2`/`p3` dans le même bloc de paragraphes. `p1`, `p2`, `p3` inchangés.

## 3. Offre / services (`WhatWeDoSection.tsx` + i18n)

Structure actuelle : grille 2 colonnes, carte 1 = accompagnement (fond doré), carte 2 = atelier NIST. La carte 1 est trop dense pour absorber les paliers ; nouvelle organisation de la section :

```text
[label / titre / sous-titre]
[grille 2 colonnes : carte 1 accompagnement | carte 2 atelier NIST]   (inchangée)
[NOUVEAU  Trois paliers d'intervention — 3 sous-cartes en grille 3 col.]
   Palier 1 Diagnostic de conformité (2-4 semaines)
   Palier 2 Programme de mise en conformité (3-6 mois)
   Palier 3 Conformité continue (suivi annuel)
[NOUVEAU  Bloc méthode — paragraphe « nous vous montrons pourquoi »]
[NOUVEAU  Deux blocs séparés, côte à côte, jamais fusionnés :
   « KGS — gouvernance & conformité »  |  « Partenaire technique — exécution »
   + mention : audit ANTIC final réalisé par un auditeur accrédité tiers]
[NOUVEAU  Bloc « Cadres de référence » — 3 citations réglementaires réelles :
   loi n°2024/017, COBAC R-2024/01, audits de sécurité ANTIC]
```

Traitement visuel : sous-cartes à bordures fines sur fond clair, numéro de palier + durée en petites capitales, liste de contenu, ligne « Livrable » pour le palier 1. Le palier 1 porte une mention explicite de point d'entrée accessible (petit établissement de paiement / EMF). ScrollReveal alterné, cohérent avec la section.

## 4. Nouvelle page secteur financier

- Route `/secteur-financier` ajoutée dans `src/App.tsx` (avant le catch-all), nouveau fichier `src/pages/FinancialSector.tsx`, avec `Navigation` + `Footer` existants.
- Contenu : le paragraphe COBAC R-2024/01 fourni (adoption 13 décembre 2024, applicable depuis le 1er janvier 2026 pour établissements de crédit et de paiement, depuis le 1er juillet 2026 pour la microfinance), plus le paragraphe optionnel sur les constats de contrôle 2024 (banques : PCA inexistant, sécurité SI faible ; EMF : incohérences de données, équipements obsolètes).
- Discours gouvernance pur : **aucune** mention de partenaire technique sur cette page.
- Aucune confusion avec le règlement COBAC EMF R-2024/01 / R-2024/02 sur les astreintes — non mentionné.
- Lien vers cette page ajouté depuis la navigation (`nav`) et depuis le bloc secteur financier de la section offre.

## 5. Garde-fous

- Les deux formulations écartées (« Helping regulated organisations become cyber-compliant… » et « We don't just identify compliance gaps… ») n'apparaîtront nulle part dans le code.
- Aucun logo client, aucun chiffre, client ou certification inventés.
- Vocabulaire : pas de jargon « GRC » dans le hero ; « KGS » en texte courant, « Kora Global Systems » pour le nom institutionnel (hero subtitle tel que fourni).

## Détails techniques

- Toutes les chaînes passent par `src/i18n/fr.ts` (référence) et `src/i18n/en.ts` (mêmes clés, traduction fidèle) — le typage `Translations` dérive de `en`, donc les clés doivent être ajoutées des deux côtés.
- Nouvelles clés : `hero.*` (remplacées), `whoWeAre.p4`, `domains.tiersLabel/tiersTitle`, `domains.tier1*`…`tier3*`, `domains.methodTitle/methodBody`, `domains.splitKgs*`/`splitPartner*`/`anticNote`, `domains.frameworksLabel` + 3 entrées, et un bloc `financialSector.*` pour la nouvelle page.
- Aucune modification du design system (`index.css`), des tokens ou de la logique du diagnostic.
