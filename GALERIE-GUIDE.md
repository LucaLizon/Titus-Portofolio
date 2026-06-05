# Guide pour mettre à jour la Galerie

## Comment ajouter de nouvelles images

### 1. Ajouter vos images au projet

Placez vos nouvelles images dans le dossier :
```
src/imports/VTelephone4/
```

Ou créez un nouveau dossier pour vos images :
```
src/imports/MesImages/
```

### 2. Modifier GallerySection.tsx

Ouvrez le fichier : `src/app/components/GallerySection.tsx`

**Étape A : Importer vos nouvelles images** (lignes 4-8)

Ajoutez vos imports :
```tsx
import monImage1 from "../../imports/MesImages/image1.png";
import monImage2 from "../../imports/MesImages/image2.jpg";
```

**Étape B : Ajouter les images au tableau** (lignes 15-80)

Dans le tableau `initialImages`, ajoutez vos nouvelles images :

```tsx
const initialImages: ImageData[] = [
  // ... images existantes ...
  
  // Vos nouvelles images
  { 
    id: "img24",                    // ID unique
    src: monImage1,                 // L'import de votre image
    alt: "Description",             // Description de l'image
    width: 160,                     // Largeur en pixels
    height: 140,                    // Hauteur en pixels
    position: { 
      top: 1750,                    // Position verticale
      left: 90                      // Position horizontale (0-250px)
    }
  },
];
```

### 3. Conseils pour le placement

**Positions horizontales** (left) :
- Gauche : 5-30px
- Centre : 80-120px  
- Droite : 180-260px

**Espacement vertical** (top) :
- Espacez les images d'environ 180-200px entre chaque ligne
- Variez légèrement pour un effet plus naturel

**Tailles d'images** :
- Petites : 120-140px
- Moyennes : 150-180px
- Grandes : 190-210px

### 4. Agrandir la galerie

Pour agrandir la hauteur de la galerie, modifiez la ligne 89 :

```tsx
<div className="relative w-full h-[1800px]">  // Changez 1800 à la hauteur souhaitée
```

### 5. Supprimer des images

Pour retirer une image, supprimez simplement son entrée du tableau `initialImages`.

## Fonctionnalités

✅ **Images draggables** - Vous pouvez déplacer les images avec la souris  
✅ **Placement aléatoire** - Les positions sont variées pour un effet dynamique  
✅ **Hauteur agrandie** - La galerie fait maintenant 1800px (5x la taille originale)

## Exemple complet

```tsx
import nouvelleImage from "../../imports/MesImages/architecture.jpg";

const initialImages: ImageData[] = [
  // Image existante
  { id: "img1", src: imgA431, alt: "Projet", width: 161, height: 149, position: { top: 15, left: 65 } },
  
  // Votre nouvelle image
  { id: "img-custom", src: nouvelleImage, alt: "Mon projet", width: 175, height: 160, position: { top: 200, left: 100 } },
];
```

Après modification, sauvegardez le fichier et rechargez la page - vos changements apparaîtront immédiatement !
