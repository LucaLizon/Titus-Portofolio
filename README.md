# Portfolio Titus Hellouin

Portfolio personnel avec animations au scroll, développé avec React, TypeScript et Tailwind CSS.

## Installation

1. Placez votre vidéo `Titus_HELLOUIN-Video-DRID_M1.mp4` dans le dossier `public/`

2. Installez les dépendances :
```bash
pnpm install
```

## Développement

Lancez le serveur de développement :
```bash
pnpm dev
```

Le site sera accessible sur `http://localhost:5173`

## Build pour production

Créez une version optimisée :
```bash
pnpm build
```

Les fichiers seront générés dans le dossier `dist/`

## Déploiement

Pour déployer le site, uploadez le contenu du dossier `dist/` sur votre hébergeur web.

N'oubliez pas d'inclure le fichier vidéo dans le dossier `dist/` lors du déploiement.

## Structure du projet

- `/src/app/` - Composants React
- `/src/app/components/` - Composants réutilisables
- `/src/imports/` - Assets importés depuis Figma
- `/src/styles/` - Fichiers CSS (fonts, theme, globals)
- `/public/` - Fichiers statiques (vidéo, etc.)

## Technologies utilisées

- React 18
- TypeScript
- Tailwind CSS v4
- Vite
- pnpm
