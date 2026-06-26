// ============================================================================
//  CONTENU DES PROJETS  ·  Section "Work"
// ----------------------------------------------------------------------------
//  C'EST ICI qu'on édite tout le contenu de la section Work. Aucun besoin de
//  toucher au code d'affichage.
//
//  Pour chaque projet :
//    number       : le numéro affiché ("01" à "08")
//    title        : le titre en MAJUSCULES
//    category     : la sous-catégorie affichée sous le titre
//    description  : le paragraphe d'intro (texte blanc)
//    hook         : (optionnel) une accroche courte, sous la description
//    images       : (optionnel) liste de NOMS DE FICHIERS présents dans
//                   src/imports/** (ex : "nina-lurna-1.png"). Voir images.ts.
//    tools        : (optionnel) logiciels affichés sous forme de tags
//    details      : (optionnel) blocs "Titre + texte" affichés à la suite.
//                   body peut être :
//                     - un texte simple        -> "..."
//                     - une liste à puces       -> ["...", "...", "..."]
//
//  Pour ajouter / retirer / réordonner un projet : ajoute ou déplace un bloc
//  dans le tableau PROJECTS ci-dessous. Pense à garder les virgules.
// ============================================================================

export interface ProjectDetail {
  label: string;
  body: string | string[];
}

export interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  hook?: string;
  tools?: string[];
  images?: string[];
  details?: ProjectDetail[];
}

export const PROJECTS: Project[] = [
  // ──────────────────────────────────────────────────────────────────────
  {
    number: "01",
    title: "PROJET VOLTA",
    category: "Interior design",
    description:
      "PROJET VOLTA est un projet basé sur l'échange culturel, l'entraide et le partage. Un projet de cohabitation visant à faire grandir mentalement et physiquement ses habitants, quels que soient leurs origines, leurs âges ou leurs centres d'intérêt.",
    hook:
      "Là où l'âge n'est plus une limite. Quand un étudiant en échange, un jeune retraité et une famille avec deux jeunes enfants se rencontrent.",
    // ⚠️ À CONFIRMER : ces images étaient jusqu'ici dans la galerie sans projet
    // attribué et correspondent aux visuels Volta du brief. À ajuster librement.
    images: ["Suite_parentale.jpg", "Cuisine01_002.jpg", "Vue_sur_salle_poly_000.jpg"],
    details: [
      {
        label: "Thème",
        body:
          "Cohabitation intergénérationnelle et mixité : faire vivre ensemble un étudiant en échange, un jeune retraité et une famille avec deux jeunes enfants.",
      },
      {
        label: "Contenu",
        body:
          "Projet global, détails de banquette et de prise en main (échelle 1:10), mezzanine enfant, coupe BB' et visuels (suite parentale, cuisine, espace ouvert).",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    number: "02",
    title: "CHAMBRE LOFT",
    category: "Interior design",
    description:
      "CHAMBRE LOFT est un projet qui consiste à créer un espace de +/- 40 m² pour lequel un grand nombre de contraintes sont imposées. J'ai décidé d'ajouter une autre contrainte : effectuer ce projet selon un axe de biais pour ainsi avoir un plus grand apport de lumière grâce aux fenêtres et aux briques de verre.",
    tools: ["SketchUp", "Enscape"],
    images: ["Image01_Salle-de-bain.jpg", "Image02-Chambre.png"],
    details: [
      {
        label: "Concept",
        body:
          "L'idée du biais permet d'intégrer chaque élément du cahier des charges tout en profitant de l'apport lumineux de l'espace donné, ici les grandes baies vitrées qui sillonnent la façade. Le tout de la manière la plus harmonieuse possible, afin de perdre le moins d'espace.",
      },
      {
        label: "Cahier des charges",
        body: [
          "Chambre lit double 180×200 + tables de nuit",
          "Dressing double : 2 armoires de 200×60",
          "Salle de bain : douche, baignoire, double vasque, sèche-serviette",
          "Toilettes séparées",
          "Salle de yoga avec espace de rangement du matériel",
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    number: "03",
    title: "BOTANIQUE",
    category: "Interior design",
    description:
      "BOTANIQUE est la salle de concert emblématique de la ville de Bruxelles. Le projet consiste à réaménager la totalité de l'espace des loges d'artistes ainsi que de l'espace catering. L'enjeu est de travailler l'espace dans le style Japandi imposé.",
    tools: ["SketchUp", "Enscape"],
    images: [
      "Catering__Banquette_a___l_entre__e.jpg",
      "Catering__De__tail_banquette.jpg",
      "Catering__Detail_cuisine.jpg",
      "Catering_Cuisine_vue_d_ensemble.jpg",
    ],
    details: [
      { label: "Style", body: "Japandi." },
      {
        label: "Matériaux & équipements",
        body: [
          "Caisson : stratifié HPL, ABET LAMINATI, réf. 370 Olmo Fine (0,7 mm cuisine / 1,2 cm banquette)",
          "Plan de travail / crédence : granit 2 cm, EASYPLAN, réf. Vert San Francisco, finition polie",
          "Coussin banquette : cuir vegan, ABITEX, réf. Moka Yémen 02031 col 406",
          "Évier FRANKE Mythos réf. 122.0606.997, à sous-encastrer",
          "Micro-ondes MIELE réf. M 2230 SC Noir obsidienne, encastrable",
          "Lave-vaisselle MIELE réf. G 7985 SCVi XXL AutoDos K2O, CleanSteel Inox / antitrace Noir obsidienne, encastrable",
          "Réfrigérateur MIELE réf. K7773 D, encastrable",
          "BLUM : charnières noir onyx, tiroir « Movento »",
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    number: "04",
    title: "BRUXELLES URBAIN",
    category: "Interior design",
    description:
      "BRUXELLES URBAIN est un projet d'aménagement de l'hôtel « la Grande Cloche », place Rouppe à Bruxelles. Plusieurs projets urbanistiques sont pensés pour transformer la place Rouppe : davantage d'espaces verts, une mobilité optimisée et de nouveaux espaces de détente.",
    tools: ["AutoCAD", "Photoshop", "SketchUp", "Enscape"],
    images: [
      "3D_Zone-restauration.PNG",
      "A4.3.png",
      "2a2a2de204eab3316c33b7556486073ff120da1f.png",
    ],
    details: [
      {
        label: "Démarche",
        body:
          "Aménagement hôtelier complet (accueil / hall, espace restauration et zone catering) associé à une réflexion urbanistique sur la place Rouppe. Plans réalisés sur AutoCAD et texturés sur Photoshop, espaces modélisés sur SketchUp et rendus sur Enscape.",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    number: "05",
    title: "MODULAR.IO",
    category: "Product design",
    description:
      "MODULAR.IO est un jeu de construction modulaire inspiré de l'architecture moderne, et plus précisément de celle de Frank Lloyd Wright. À destination des enfants, il permet de réaliser différentes architectures tout en stimulant leur créativité. Projet réalisé au moyen de chutes de bois inutilisables.",
    hook:
      "Un jeu de construction modulaire pour imaginer mille architectures, tout en stimulant la créativité.",
    details: [
      { label: "Référence", body: "Frank Lloyd Wright." },
      {
        label: "Démarche",
        body:
          "Upcycling : valorisation de chutes de bois inutilisables en un jouet pédagogique destiné aux enfants.",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    number: "06",
    title: "MODULAR-IN",
    category: "Product design",
    description:
      "MODULAR-IN est une étagère à fanzines et magazines, modulaire en fonction de l'espace et de ses contraintes. Sa modularité lui confère un usage pratique lors de festivals ou d'expositions. Le projet est réalisé à l'aide de planches de bois (6 mm) découpées à l'imprimante laser et assemblées à la colle, sans clous.",
    tools: ["AutoCAD", "SketchUp", "Enscape"],
    details: [
      {
        label: "Fabrication",
        body: [
          "Plans réalisés sur AutoCAD",
          "Découpes à l'imprimante laser (ex. Epilog Laser)",
          "Multiplex Peuplier 6 mm, triple couche : meilleure solidité générale + système de rail intégré à la structure (accrochage et stockage des fanzines)",
          "Assemblage à la colle, sans clous",
          "Rendus 3D sur Enscape d'après un fichier SketchUp",
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    number: "07",
    title: "NINA LURNA",
    category: "Product design",
    description:
      "NINA LURNA est un objet pour les enfants qui les accompagne tout au long de la journée. Un compagnon rassurant, à la fois jouet et luminaire : une voiture design miniaturisée qui se transforme en veilleuse pour la nuit. Conçu en référence à la lampe « Riscio » de Joe Colombo.",
    images: [
      "nina-lurna-1.jpeg",
      "nina-lurna-2.jpeg",
      "nina-lurna-3.jpeg",
      "nina-lurna-4.jpeg",
      "nina-lurna-5.jpeg",
      "nina-lurna-6.jpeg",
      "nina-lurna-7.jpeg",
    ],
    details: [
      {
        label: "Équipe",
        body: "Projet réalisé en équipe : Titus Hellouin, Jeanne Horanger, Alice Roccato.",
      },
      {
        label: "Origine du nom",
        body:
          "« Nina Lurna » : terminaison de « macchinina » (petite voiture) associée à la contraction de « luce » et « notturna » (lumière nocturne).",
      },
      {
        label: "Mécanisme",
        body:
          "Un mécanisme à ressorts, alimenté par pile, rétracte les roues de la voiture et active simultanément les phares à l'arrière : l'objet se transforme alors en veilleuse pour la nuit.",
      },
      {
        label: "Référence",
        body:
          "Lampe « Riscio » de Joe Colombo : une lampe de table articulée sur roulettes, déjà pensée comme un objet modulaire et mobile. « Riscio » (pousse-pousse) rend hommage à l'influence de la culture asiatique sur le designer et à sa philosophie d'objets qui s'adaptent aux besoins.",
      },
      {
        label: "Matériau",
        body:
          "Aluminium avec revêtement poudre (powder coating) : léger et facile à transporter pour un enfant, un clin d'œil au matériau de la lampe Riscio.",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    number: "08",
    title: "COMPANI",
    category: "Product & graphic design",
    description:
      "COMPANI est une solution innovante conçue pour améliorer le bien-être de vos animaux de compagnie. Ces capsules faciles à administrer fournissent des compléments alimentaires essentiels pour soutenir la vitalité et la santé globale des chiens et des chats.",
    tools: ["InDesign", "Photoshop", "Blender", "After Effects"],
    images: ["3D_Se__quence01.png", "3D_Se__quence02.png", "3D_Se__quence03.png"],
    details: [
      {
        label: "Origine du nom",
        body: "Comp. (complément alimentaire) + Ani. (animal).",
      },
      {
        label: "Identité graphique",
        body:
          "Le quadrilatère devient une identité graphique polyvalente, adaptable à diverses situations (ex. pagination d'un manuel d'usage). Logo décliné en version négatif et illustrations dédiées par produit. Deux sous-marques : « Chacha » (chats) et « Toutou » (chiens).",
      },
      {
        label: "Matériaux",
        body: [
          "Bouteilles : verre ambré, protège le contenu de la lumière, apparence haut de gamme / pharmaceutique",
          "Capsules : plastique noir mat, contraste avec le verre translucide",
          "Étiquettes : papier ou plastique, finition légèrement texturée (texte imprimé + illustrations)",
        ],
      },
      {
        label: "Capsules",
        body:
          "À l'intérieur des bouteilles : capsules rouges opaques, uniformes en couleur et texture. Autour des bouteilles : capsules bicolores, moitié rose clair / moitié transparente.",
      },
      {
        label: "Produits graphiques",
        body:
          "Notice en italien (Italie, pays d'exportation), notice en français (Belgique, pays d'origine) et étiquette de couvercle.",
      },
    ],
  },
];
