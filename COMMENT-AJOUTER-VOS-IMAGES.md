# 📸 Comment ajouter vos images à la galerie

## ⚠️ Pourquoi l'erreur ?

Les images que j'ai essayé d'importer n'existent pas encore dans votre projet. Il faut d'abord les placer dans le bon dossier.

## ✅ Solution simple : Ajouter progressivement

### Étape 1 : Placer UNE image test

1. Prenez une de vos images (exemple : `A4.3.png`)
2. Placez-la dans : `src/imports/VTelephone4/`
3. Renommez-la simplement : `A4-3.png` (sans point dans le nom, sans accents)

### Étape 2 : L'importer dans le code

Ouvrez `src/app/components/GallerySection.tsx`

**Ligne 9** - Ajoutez l'import :
```tsx
import imgA43 from "../../imports/VTelephone4/A4-3.png";
```

**Ligne 80** - Ajoutez l'image au tableau :
```tsx
{ id: "img21", src: imgA43, alt: "Projet A4.3", width: 170, height: 140, position: { top: 1590, left: 85 } },
```

### Étape 3 : Tester

```bash
npm run dev
```

Si ça fonctionne, recommencez pour les autres images !

## 🎯 Conseil : Renommer vos images

Pour éviter les problèmes avec les espaces et accents, renommez vos images :

**❌ Noms compliqués :**
- `Catering Banquette à l'entrée.jpg`
- `3D_Séquence01.png`

**✅ Noms simples :**
- `catering-banquette-entree.jpg`
- `3d-sequence01.png`

## 📝 Template pour ajouter une image

1. **Renommez** votre fichier : `mon-image.jpg`
2. **Placez-le** dans : `src/imports/VTelephone4/mon-image.jpg`
3. **Importez** (ligne ~9) :
   ```tsx
   import monImage from "../../imports/VTelephone4/mon-image.jpg";
   ```
4. **Ajoutez** au tableau (ligne ~80) :
   ```tsx
   { id: "imgX", src: monImage, alt: "Description", width: 170, height: 140, position: { top: 1590, left: 85 } },
   ```

## 🔢 Positions suggérées

Pour espacer vos images :

```tsx
// Ligne 9
{ id: "img21", src: img21, alt: "...", width: 170, height: 140, position: { top: 1590, left: 85 } },
{ id: "img22", src: img22, alt: "...", width: 165, height: 135, position: { top: 1575, left: 240 } },

// Ligne 10
{ id: "img23", src: img23, alt: "...", width: 175, height: 145, position: { top: 1780, left: 25 } },
{ id: "img24", src: img24, alt: "...", width: 180, height: 150, position: { top: 1765, left: 200 } },
```

Augmentez `top` d'environ 180-200px entre chaque ligne.

## 🆘 Besoin d'aide ?

Si une image ne charge pas :
1. Vérifiez que le fichier existe bien dans `src/imports/VTelephone4/`
2. Vérifiez que le nom dans l'import correspond exactement au nom du fichier
3. Vérifiez l'extension (.jpg ou .png)
4. Redémarrez le serveur : Ctrl+C puis `npm run dev`

Une fois que vous maîtrisez cette méthode, vous pourrez ajouter toutes vos 24 images rapidement !
