import { useState } from "react";

import imgCateringBanquetteEntree from "../../imports/VTelephone4/Catering__Banquette_a___l_entre__e.jpg";
import imgCateringDetailBanquette from "../../imports/VTelephone4/Catering__De__tail_banquette.jpg";
import imgCateringDetailCuisine from "../../imports/VTelephone4/Catering__Detail_cuisine.jpg";
import imgCateringCuisineVue from "../../imports/VTelephone4/Catering_Cuisine_vue_d_ensemble.jpg";
import img3DZoneRestauration from "../../imports/VTelephone4/3D_Zone-restauration.PNG";
import imgA43 from "../../imports/VTelephone4/A4.3.png";
import imgA4 from "../../imports/VTelephone4/2a2a2de204eab3316c33b7556486073ff120da1f.png";
import imgSalleDeBain from "../../imports/VTelephone4/Image01_Salle-de-bain.jpg";
import imgChambre from "../../imports/VTelephone4/Image02-Chambre.png";
import img3DSequence01 from "../../imports/VTelephone4/3D_Se__quence01.png";
import img3DSequence02 from "../../imports/VTelephone4/3D_Se__quence02.png";
import img3DSequence03 from "../../imports/VTelephone4/3D_Se__quence03.png";

interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  concept?: string;
  references?: string;
  materials?: string;
  tools?: string[];
  images?: ProjectImage[];
}

const PROJECTS: Project[] = [
  {
    number: "01",
    title: "ETTORE SOTTSASS",
    category: "Interior design & scenography",
    description: "ETTORE SOTTSASS x Maison du Peuple est une collaboration entre l'architecte et designer italien Ettore Sottsass, et l'une des institutions les plus connues de Bruxelles : la Maison du Peuple. L'idée est de créer la scénographie d'une exposition sur cet artiste et en son honneur.",
    concept: "Réalisation d'un espace scénique dans l'esprit de l'artiste : structure toute hauteur avec niches intégrées pour les œuvres, circulation chronologique guidée, couleurs Memphis (bleu, rose, jaune, vert vifs).",
    references: "Ettore Sottsass · Memphis Group",
    materials: "Caisson stratifié HPL — ABET LAMINATI réf. 370 Olmo Fine 1.2 cm · Coussin cuir vegan — ABITEX réf. Moka Yémen 02031 col 406",
  },
  {
    number: "02",
    title: "CHAMBRE LOFT",
    category: "Interior design",
    description: "CHAMBRE LOFT est un projet qui consiste à créer un espace de ±40 m² soumis à un grand nombre de contraintes. Une contrainte supplémentaire a été ajoutée : effectuer ce projet selon un axe de biais afin d'optimiser l'apport de lumière grâce aux fenêtres et aux briques de verre.",
    concept: "L'axe en biais permet d'intégrer chaque élément du programme — chambre, dressing, salle de bain, toilettes, salle de yoga — tout en exploitant les grandes baies vitrées de la façade, de la manière la plus harmonieuse possible.",
    tools: ["SketchUp", "Enscape"],
    images: [
      { src: imgSalleDeBain, alt: "Chambre Loft — salle de bain" },
      { src: imgChambre, alt: "Chambre Loft — chambre" },
    ],
  },
  {
    number: "03",
    title: "BOTANIQUE",
    category: "Interior design",
    description: "BOTANIQUE est la salle de concert emblématique de Bruxelles. Le projet consiste à réaménager la totalité de l'espace des loges d'artistes ainsi que de l'espace catering. L'enjeu est de travailler l'espace dans le style Japandi imposé.",
    concept: "Plans et coupes à l'échelle 1/20e avec détails 1/5e. Cuisine entièrement équipée, espace banquette, hall d'accueil et zone restauration repensés dans une esthétique Japandi — matériaux naturels, lignes épurées, sobriété.",
    materials: "Stratifié HPL — ABET LAMINATI Olmo Fine · Granit 2 cm — EASYPLAN Vert San Francisco, finition polie · Évier FRANKE Mythos · Électroménager MIELE · BLUM charnières noir onyx, tiroir Movento",
    tools: ["SketchUp", "Enscape"],
    images: [
      { src: imgCateringBanquetteEntree, alt: "Botanique — catering, banquette à l'entrée" },
      { src: imgCateringDetailBanquette, alt: "Botanique — détail banquette" },
      { src: imgCateringDetailCuisine, alt: "Botanique — détail cuisine" },
      { src: imgCateringCuisineVue, alt: "Botanique — cuisine, vue d'ensemble" },
    ],
  },
  {
    number: "04",
    title: "BRUXELLES URBAIN",
    category: "Interior design",
    description: "BRUXELLES URBAIN est un projet d'aménagement de l'hôtel « La Grande Cloche » place Rouppe, Bruxelles. Plusieurs interventions urbanistiques sont pensées pour transformer la place : espaces verts, optimisation de la mobilité, espaces de détente.",
    concept: "Aménagement hôtelier complet — hall, restauration, catering — associé à une réflexion sur la transformation urbaine de la place Rouppe. Plans AutoCAD, texturages Photoshop, modélisation et rendus photoréalistes.",
    tools: ["AutoCAD", "SketchUp", "Enscape", "Photoshop"],
    images: [
      { src: img3DZoneRestauration, alt: "Bruxelles Urbain — zone de restauration, rendu 3D" },
      { src: imgA43, alt: "Bruxelles Urbain — planche A4.3" },
      { src: imgA4, alt: "Bruxelles Urbain — planche A4" },
    ],
  },
  {
    number: "05",
    title: "MODULAR.IO",
    category: "Product design",
    description: "MODULAR.IO est un jeu de construction modulaire inspiré de l'architecture moderne de Frank Lloyd Wright. À destination des enfants, il permet de réaliser différentes architectures tout en stimulant la créativité. Projet réalisé au moyen de chutes de bois inutilisables.",
    concept: "Démarche d'upcycling : valorisation de chutes de bois en jouet pédagogique. La modularité des pièces s'inspire de l'architecture organique et des principes de composition de Frank Lloyd Wright.",
    references: "Frank Lloyd Wright",
    materials: "Chutes de bois (upcycling)",
  },
  {
    number: "06",
    title: "MODULAR-IN",
    category: "Product design",
    description: "MODULAR-IN est une étagère à fanzines et magazines, modulaire selon l'espace et ses contraintes. Sa modularité lui confère un usage pratique lors de festivals ou expositions. Réalisée en planches de bois 6 mm découpées au laser, assemblées à la colle sans clous.",
    concept: "Structure en Multiplex Peuplier 6 mm, triple couche pour la solidité. Système de rail intégré pour l'accrochage et le stockage des fanzines. Découpe laser sur plans AutoCAD, rendus 3D sur SketchUp + Enscape.",
    materials: "Multiplex Peuplier 6 mm · Triple couche · Découpe laser (Epilog) · Assemblage à la colle, sans clous",
    tools: ["AutoCAD", "SketchUp", "Enscape"],
  },
  {
    number: "07",
    title: "NINA LURNA",
    category: "Product design",
    description: "NINA LURNA est un objet pour les enfants qui les accompagne tout au long de la journée. Un compagnon rassurant, à la fois jouet et luminaire : une voiture design miniaturisée qui se transforme en veilleuse pour la nuit.",
    concept: "Un mécanisme à ressorts rétracte les roues, activant simultanément les phares LED — la voiture devient veilleuse. Aluminium powder coating rouge japonais : léger, sobre, en référence à l'œuvre de Joe Colombo. « Nina » de macchina, « Lurna » de luce notturna.",
    references: "Joe Colombo — lampe « Riscio »",
    materials: "Aluminium · Revêtement powder coating · Couleur : rouge japonais",
  },
  {
    number: "08",
    title: "COMPANI",
    category: "Product & graphic design",
    description: "COMPANI est une solution innovante pour le bien-être des animaux de compagnie. Ces capsules faciles à administrer fournissent des compléments alimentaires essentiels pour soutenir la vitalité et la santé globale des chiens et des chats.",
    concept: "Identité graphique fondée sur le quadrilatère, déclinée en sous-marques : rose pour « Chacha » (chats), vert pour « Toutou » (chiens). Bouteilles en verre ambré, capsules bicolores, notices FR + IT. Comp. (complément alimentaire) + Ani. (animal).",
    materials: "Verre ambré · Capsules plastique noir mat · Étiquettes papier finition légèrement texturée",
    tools: ["InDesign", "Photoshop", "Blender", "After Effects"],
    images: [
      { src: img3DSequence01, alt: "Compani — séquence 3D 01" },
      { src: img3DSequence02, alt: "Compani — séquence 3D 02" },
      { src: img3DSequence03, alt: "Compani — séquence 3D 03" },
    ],
  },
];

interface WorkSectionProps {
  closing: boolean;
}

export function WorkSection({ closing }: WorkSectionProps) {
  const [openProject, setOpenProject] = useState<string | null>(null);

  const toggle = (num: string) => {
    setOpenProject(prev => (prev === num ? null : num));
  };

  return (
    <div className={`${closing ? 'work-slide-out' : 'work-slide-in'} fixed inset-0 z-[100] bg-black overflow-y-auto`}>
      {/* pt: place la barre du haut (border-t du 1er projet) ~10px sous le bas du logo TH (10px + 81.58px) */}
      <div className="pt-[102px] pb-[80px] max-w-[402px] mx-auto px-[20px]">

        {/* Liste des projets */}
        <div className="flex flex-col">
          {PROJECTS.map((project) => {
            const isOpen = openProject === project.number;
            return (
              <div key={project.number} className="border-t border-[#222222]">
                {/* Ligne cliquable */}
                <button
                  className="w-full flex items-start justify-between py-[20px] gap-[12px] text-left group"
                  onClick={() => toggle(project.number)}
                >
                  <div className="flex items-start flex-1 min-w-0">
                    <div className="flex flex-col gap-[3px] min-w-0">
                      <span
                        className="font-['Roboto:ExtraBold',sans-serif] font-extrabold text-[22px] text-white tracking-[-0.22px] leading-none group-hover:text-[#acacac] transition-colors duration-200"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        {project.title}
                      </span>
                      <span
                        className="font-['Roboto:ExtraBold',sans-serif] font-extrabold text-[11px] text-[#555555] tracking-[-0.11px]"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <span
                    className="font-['Roboto:ExtraBold',sans-serif] font-extrabold text-[22px] text-white leading-none mt-[1px] shrink-0 transition-transform duration-300"
                    style={{
                      fontVariationSettings: '"wdth" 100',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Contenu expandable — grid 0fr/1fr : s'adapte à la hauteur réelle du contenu, jamais de clipping */}
                <div
                  className="grid"
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 500ms ease-in-out',
                  }}
                >
                  <div className="overflow-hidden min-h-0">
                  <div className="pb-[36px] flex flex-col gap-[24px]">

                    {/* Photos du projet */}
                    {project.images && project.images.length > 0 && (
                      <div
                        className="no-scrollbar flex gap-[10px] overflow-x-auto -mx-[20px] px-[20px] pb-[2px] snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none' }}
                      >
                        {project.images.map((img, i) => (
                          <div
                            key={i}
                            className="shrink-0 w-[345px] h-[240px] overflow-hidden snap-start"
                          >
                            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Description */}
                    <p
                      className="font-['Roboto:ExtraBold',sans-serif] font-extrabold text-[14px] text-white tracking-[-0.14px] leading-[1.65]"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      {project.description}
                    </p>

                    {/* Concept */}
                    {project.concept && (
                      <div className="flex flex-col gap-[8px]">
                        <p
                          className="font-['Roboto:ExtraBold',sans-serif] font-extrabold text-[10px] text-[#555555] tracking-[0.5px] uppercase"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          Concept
                        </p>
                        <p
                          className="font-['Roboto:ExtraBold',sans-serif] font-extrabold text-[13px] text-[#acacac] tracking-[-0.13px] leading-[1.6]"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          {project.concept}
                        </p>
                      </div>
                    )}

                    {/* Références */}
                    {project.references && (
                      <div className="flex flex-col gap-[8px]">
                        <p
                          className="font-['Roboto:ExtraBold',sans-serif] font-extrabold text-[10px] text-[#555555] tracking-[0.5px] uppercase"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          Références
                        </p>
                        <p
                          className="font-['Roboto:ExtraBold',sans-serif] font-extrabold text-[13px] text-[#acacac] tracking-[-0.13px]"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          {project.references}
                        </p>
                      </div>
                    )}

                    {/* Matériaux */}
                    {project.materials && (
                      <div className="flex flex-col gap-[8px]">
                        <p
                          className="font-['Roboto:ExtraBold',sans-serif] font-extrabold text-[10px] text-[#555555] tracking-[0.5px] uppercase"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          Matériaux
                        </p>
                        <p
                          className="font-['Roboto:ExtraBold',sans-serif] font-extrabold text-[13px] text-[#acacac] tracking-[-0.13px] leading-[1.6]"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          {project.materials}
                        </p>
                      </div>
                    )}

                    {/* Outils */}
                    {project.tools && project.tools.length > 0 && (
                      <div className="flex flex-col gap-[8px]">
                        <p
                          className="font-['Roboto:ExtraBold',sans-serif] font-extrabold text-[10px] text-[#555555] tracking-[0.5px] uppercase"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          Outils
                        </p>
                        <div className="flex flex-wrap gap-[6px]">
                          {project.tools.map((tool) => (
                            <span
                              key={tool}
                              className="font-['Roboto:ExtraBold',sans-serif] font-extrabold text-[11px] text-[#acacac] tracking-[-0.11px] border border-[#2a2a2a] px-[10px] py-[5px]"
                              style={{ fontVariationSettings: '"wdth" 100' }}
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* Bordure basse */}
          <div className="border-t border-[#222222]" />
        </div>
      </div>
    </div>
  );
}
