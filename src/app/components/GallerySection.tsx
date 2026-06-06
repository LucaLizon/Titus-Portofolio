import imgA431 from "../../imports/VTelephone4/2a2a2de204eab3316c33b7556486073ff120da1f.png";
import imgCateringBanquetteACLentreue1 from "../../imports/VTelephone4/3b88f460ac3bfd802f99a686ca6f56673d4aed64.png";
import imgCateringDeutailBanquette1 from "../../imports/VTelephone4/30ad168737b8827e2124ca386cbb39c6fdf3dc60.png";
import imgImage02Chambre1 from "../../imports/VTelephone4/bd8a42e2e341f2fd960778e7ca17d27fffe3a06e.png";
import imgVuePasserelleExt011 from "../../imports/VTelephone4/da98673997b8e5696a45ac9c71dd7751b87ae711.png";

import imgCateringBanquetteEntree from "../../imports/VTelephone4/Catering__Banquette_a___l_entre__e.jpg";
import imgCateringDetailBanquette from "../../imports/VTelephone4/Catering__De__tail_banquette.jpg";
import imgCateringDetailCuisine from "../../imports/VTelephone4/Catering__Detail_cuisine.jpg";
import imgCateringCuisineVue from "../../imports/VTelephone4/Catering_Cuisine_vue_d_ensemble.jpg";
import img3DZoneRestauration from "../../imports/VTelephone4/3D_Zone-restauration.PNG";
import imgA43 from "../../imports/VTelephone4/A4.3.png";
import imgSalleDeBain from "../../imports/VTelephone4/Image01_Salle-de-bain.jpg";
import imgChambre from "../../imports/VTelephone4/Image02-Chambre.png";
import img3DSequence01 from "../../imports/VTelephone4/3D_Se__quence01.png";
import img3DSequence02 from "../../imports/VTelephone4/3D_Se__quence02.png";
import img3DSequence03 from "../../imports/VTelephone4/3D_Se__quence03.png";
import imgArriveeEtage from "../../imports/VTelephone4/Arrive__e_a___l_e__tage.jpg";
import imgCuisine01 from "../../imports/VTelephone4/Cuisine01_002.jpg";
import imgCuisine02 from "../../imports/VTelephone4/Cuisine02.jpg";
import imgSDBParentale02 from "../../imports/VTelephone4/SDB_parentale_02.jpg";
import imgSDBParentale000 from "../../imports/VTelephone4/SDB_parentale_000.jpg";
import imgSuiteParentale from "../../imports/VTelephone4/Suite_parentale.jpg";
import imgVuePasserelle01 from "../../imports/VTelephone4/Vue_passerelle_ext01.jpg";
import imgVuePasserelle02 from "../../imports/VTelephone4/Vue_passerelle_ext02.jpg";
import imgVuePasserelle03 from "../../imports/VTelephone4/Vue_passerelle_ext03.jpg";
import imgVueCouloir from "../../imports/VTelephone4/Vue_sur_le_couloir.jpg";
import imgVueSallePoly from "../../imports/VTelephone4/Vue_sur_salle_poly_000.jpg";
import imgVueVasque from "../../imports/VTelephone4/Vue_sur_vasque_parentale.jpg";

const sources = [
  { src: imgA431, alt: "Architecture project" },
  { src: imgCateringBanquetteACLentreue1, alt: "Catering Banquette entrée 1" },
  { src: imgCateringBanquetteEntree, alt: "Catering Banquette entrée 2" },
  { src: imgCateringDeutailBanquette1, alt: "Détail banquette 1" },
  { src: imgCateringDetailBanquette, alt: "Détail banquette 2" },
  { src: imgCateringDetailCuisine, alt: "Détail cuisine" },
  { src: imgCateringCuisineVue, alt: "Cuisine vue ensemble" },
  { src: img3DZoneRestauration, alt: "Zone restauration" },
  { src: imgA43, alt: "Projet A4.3" },
  { src: imgSalleDeBain, alt: "Salle de bain" },
  { src: imgImage02Chambre1, alt: "Chambre 1" },
  { src: imgChambre, alt: "Chambre 2" },
  { src: img3DSequence01, alt: "Séquence 01" },
  { src: img3DSequence02, alt: "Séquence 02" },
  { src: img3DSequence03, alt: "Séquence 03" },
  { src: imgArriveeEtage, alt: "Arrivée étage" },
  { src: imgCuisine01, alt: "Cuisine 01" },
  { src: imgCuisine02, alt: "Cuisine 02" },
  { src: imgSDBParentale02, alt: "SDB parentale 02" },
  { src: imgSDBParentale000, alt: "SDB parentale" },
  { src: imgSuiteParentale, alt: "Suite parentale" },
  { src: imgVuePasserelleExt011, alt: "Passerelle ext 1" },
  { src: imgVuePasserelle01, alt: "Passerelle 01" },
  { src: imgVuePasserelle02, alt: "Passerelle 02" },
  { src: imgVuePasserelle03, alt: "Passerelle 03" },
  { src: imgVueCouloir, alt: "Vue couloir" },
  { src: imgVueSallePoly, alt: "Vue salle polyvalente" },
  { src: imgVueVasque, alt: "Vue vasque parentale" },
];

// PRNG déterministe (mulberry32)
function makeRng(seed: number) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const CANVAS_W = 402;
const SEED = 42;

function buildLayout() {
  const rng = makeRng(SEED);
  const rand = (min: number, max: number) => min + rng() * (max - min);

  // Shuffle Fisher-Yates
  const shuffled = [...sources];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // 2 lanes staggerées — la droite commence plus bas pour éviter le cluster du départ
  const laneX = [90, 280] as const;          // centres X des 2 lanes
  const laneY = [30, 140] as number[];       // stagger initial: droite décalée de 110px

  return shuffled.map((img, i) => {
    const w = Math.round(rand(180, 276)); // +20%
    const h = Math.round(w * rand(0.72, 1.15));

    // Gravity: remplit toujours la lane la moins avancée
    const lane = laneY[0] <= laneY[1] ? 0 : 1;

    // X centré sur la lane avec variation ±45px
    const left = Math.round(
      Math.max(-20, Math.min(CANVAS_W - w + 20,
        laneX[lane] - w / 2 + rand(-45, 45)
      ))
    );

    const top = Math.round(laneY[lane] + rand(0, 30));

    laneY[lane] = top + h + Math.round(rand(35, 70));

    return {
      id: `img${i}`,
      ...img,
      width: w,
      height: h,
      position: { top: Math.max(0, top), left },
      z: Math.floor(rng() * 100),
    };
  });
}

const initialImages = buildLayout();
const TOTAL_HEIGHT =
  Math.max(...initialImages.map((im) => im.position.top + im.height)) + 80;

export function GallerySection() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: `${TOTAL_HEIGHT}px` }}
    >
      {initialImages.map((image) => (
        <div
          key={image.id}
          className="absolute"
          style={{
            top: `${image.position.top}px`,
            left: `${image.position.left}px`,
            width: `${image.width}px`,
            height: `${image.height}px`,
            zIndex: image.z,
          }}
        >
          <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
}
