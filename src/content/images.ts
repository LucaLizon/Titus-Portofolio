// ============================================================================
//  RÉSOLVEUR D'IMAGES AUTOMATIQUE
// ----------------------------------------------------------------------------
//  Tu n'as PLUS besoin d'écrire un `import` pour chaque image.
//
//  Pour ajouter une image au site :
//    1. Dépose le fichier dans n'importe quel sous-dossier de  src/imports/
//       (ex : src/imports/NinaLurna/nina-lurna-1.png)
//    2. Dans  src/content/projects.ts , référence-la simplement par son
//       NOM DE FICHIER  (ex : "nina-lurna-1.png")
//
//  Ce fichier scanne automatiquement tout src/imports/ au build et fait le
//  lien entre le nom de fichier et l'image réelle. Aucune autre manipulation.
// ============================================================================

// Scanne toutes les images de src/imports/** (toutes extensions courantes).
const modules = import.meta.glob(
  "../imports/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,svg}",
  { eager: true, import: "default" }
) as Record<string, string>;

// Construit une table { "nom-de-fichier.png" -> url réelle de l'image }.
const imageMap: Record<string, string> = {};
for (const path in modules) {
  const filename = path.split("/").pop();
  if (filename) imageMap[filename] = modules[path];
}

/**
 * Renvoie l'URL d'une image à partir de son nom de fichier.
 * Si le fichier n'existe pas encore, renvoie une chaîne vide (l'image
 * n'apparaît pas, mais le site continue de fonctionner sans planter).
 */
export function img(filename: string): string {
  const url = imageMap[filename];
  if (!url && import.meta.env.DEV) {
    console.warn(
      `[images] Fichier introuvable dans src/imports/ : "${filename}"`
    );
  }
  return url ?? "";
}
