# Repositionnement KORA Global Systems : de l'infrastructure numérique au cabinet GRC

Refonte de contenu uniquement. La direction artistique (palette, typographie, animations, ordre des sections) reste identique. Aucun faux client, fausse métrique ou certification inventée n'est introduit.

## Nouveau positionnement en deux piliers

1. **Accompagnement GRC** — conseil et accompagnement en gouvernance, risque et conformité pour PME et structures en croissance. Formulation modeste : cadrage, priorisation, documentation, préparation aux exigences clients ou partenaires. Pas de promesse d'audit certifié ni d'évaluation de risque « enterprise-scale ».
2. **Atelier NIST CSF 2.0** — outil de formation pratique déjà en ligne à `https://access.koraglobalsystems.com`, présenté comme la vitrine concrète de la compétence GRC : parcours d'apprentissage public sur le référentiel NIST CSF 2.0, cas réels documentés, niveaux de preuve explicites.

## Sections réécrites (contenu)

- **Hero** (`FounderHero` via i18n) : nouveau titre en deux lignes du type « GOUVERNANCE, RISQUE / ET CONFORMITÉ », sous-titre « Pour les structures en croissance », description recentrée : accompagnement GRC et atelier pratique NIST CSF 2.0. Les deux boutons restent (Explorer / Contact), le CTA de diagnostic reste.
- **Marquee** : passe de trois logos de branches à deux entrées : « Accompagnement GRC » et « Atelier NIST CSF 2.0 » (lien vers le sous-domaine access). Les logos de branches Access/Automations/Market Entry sont retirés du bandeau ; on garde le traitement typographique existant, avec le logo KGS si un visuel est nécessaire.
- **Problème** : les trois problèmes deviennent des problèmes GRC réels des PME : gouvernance informelle non documentée, risques identifiés mais non priorisés, exigences de conformité subies (questionnaires clients, appels d'offres, assureurs). La « réponse KGS » devient : cadrer, prioriser, documenter, avec un référentiel reconnu plutôt qu'un outillage maison.
- **Qui nous sommes** : réécrit autour de l'origine du cabinet et du choix du NIST CSF 2.0 comme socle méthodologique, en gardant la note sur le nom « Kora » (transmission, connexion) et le lien avec les réalités locales.
- **Notre méthode** (`PhilosophySection`) : discipline, honnêteté sur le périmètre, progression par étapes ; ce qu'on fait et ce qu'on ne fait pas.
- **Nos piliers** (`WhatWeDoSection`) : grille de 3 → 2 cartes. Voir la maquette texte ci-dessous.
- **Pourquoi Kora** (`WhyKGSSection`) : les deux colonnes deviennent « Pour le dirigeant » (clarté sur les risques, documentation présentable, décisions tracées) et « Pour le partenaire / l'assureur / le client » (référentiel reconnu, preuves explicites, périmètre honnête). Le bandeau de signaux de confiance retire « Built for enterprise ».
- **Vision globale**, **Confiance & positionnement**, **Engagement**, **Studio Lab** : mêmes structures, texte recentré sur GRC (standards internationaux + intelligence locale, partenariats longs, innovation responsable, espace de co-construction des ateliers et référentiels).
- **Périmètre & gouvernance** + **disclaimer du footer** : on garde la séparation stricte vis-à-vis des activités régulées, et on ajoute explicitement que KGS accompagne et forme, sans délivrer de certification ni d'attestation de conformité.
- **Diagnostic d'orientation** (`/advisory`, i18n `advisory`) : les questions et résultats basés sur les trois branches sont réécrits vers deux issues : accompagnement GRC ou atelier NIST CSF 2.0. Questions recentrées sur maturité de gouvernance, exigences externes, taille de structure, besoin (se former vs être accompagné).
- **Métadonnées** (`index.html`) : title, meta description, og:title/description alignés sur le positionnement GRC.

## Maquette texte de la carte « Atelier NIST CSF 2.0 »

Même style de carte que les piliers actuels (bordure, hover, icône animée). Pas de faux visuel du produit : on remplace la photo par un bloc typographique sur fond de carte, avec le sigle du référentiel et les six fonctions.

```text
[ NIST CSF 2.0 · GOVERN IDENTIFY PROTECT DETECT RESPOND RECOVER ]

Atelier NIST CSF 2.0                                   (icône : BookOpen)
Outil de formation pratique, en ligne et accessible publiquement.

Il permet de parcourir le référentiel NIST CSF 2.0 fonction par
fonction, avec des cas réels documentés et des niveaux de preuve
explicites pour chaque affirmation.

· Parcours par les six fonctions du référentiel
· Cas réels documentés, sources indiquées
· Niveaux de preuve explicites, pas d'affirmation non sourcée

Ouvrir l'atelier →   access.koraglobalsystems.com
```

La carte « Accompagnement GRC » garde une photo existante sobre (planification / salle de travail) et une formulation en trois points : cadrage de gouvernance, priorisation des risques, documentation et préparation aux exigences externes.

## Détails techniques

- Réécriture de `src/i18n/en.ts` et `src/i18n/fr.ts` en conservant strictement la même forme de clés, en supprimant les clés propres aux trois anciennes branches et en ajoutant les clés des deux nouveaux piliers.
- `WhatWeDoSection.tsx` : grille `md:grid-cols-3` → `md:grid-cols-2` avec largeur contenue, et variante de carte « sans image » pour l'atelier.
- `Marquee.tsx` : deux items, retrait des imports de logos de branches.
- `advisory/DiagnosticFlow.tsx` et `ExposureResults.tsx` : la logique de scoring passe de trois résultats à deux ; mêmes composants, mêmes visuels.
- Composants morts non montés dans `Index.tsx` (`SystemsSection`, `SystemsApproachSection`, `AboutSection`, `ApproachSection`, `HeroSection`, `BenefitsSection`, `ImageCarousel`) : supprimés s'ils ne sont référencés nulle part, pour éviter que l'ancien positionnement subsiste dans le dépôt.
- Ton conforme aux règles éditoriales : pas de tirets longs, phrasé sobre de cabinet.
