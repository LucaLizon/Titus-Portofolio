import { useState, useEffect } from "react";
import svgPathsLarge from "../../imports/VTelephone1/svg-81nbe11cn7";

interface AnimatedHeaderProps {
  scrollY: number;
  heroHeight: number;
  workOpen: boolean;
  bottomFade: number; // 0 = logo visible, 1 = logo invisible
  onScrollTop: () => void;
  onMenuOpen: () => void;
  onWorkToggle: () => void;
}

function useNow() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export function AnimatedHeader({
  scrollY,
  heroHeight,
  workOpen,
  bottomFade,
  onScrollTop,
  onMenuOpen,
  onWorkToggle,
}: AnimatedHeaderProps) {
  const now = useNow();
  const dateStr = `${pad(now.getDate())} ${pad(now.getMonth() + 1)}`;
  const timeStr = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

  const animationEndPoint = heroHeight * 0.7;

  // Une fois l'animation terminée (logo en place en haut), elle reste figée :
  // remonter ne doit pas la relancer — seul un rechargement de page la réinitialise.
  const [animationDone, setAnimationDone] = useState(false);
  useEffect(() => {
    if (!animationDone && scrollY >= animationEndPoint) {
      setAnimationDone(true);
    }
  }, [scrollY, animationDone, animationEndPoint]);

  // Quand Work est ouvert ou l'animation déjà terminée : logo figé, petit, en haut-gauche
  const progress = (workOpen || animationDone) ? 1 : Math.min(scrollY / animationEndPoint, 1);

  const startLogoHeight = 244.74;
  const endLogoHeight = 81.58;
  const startTop = (heroHeight - startLogoHeight) / 2;
  const endTop = 10;

  const logoHeight = startLogoHeight - (progress * (startLogoHeight - endLogoHeight));
  const logoTop = startTop - (progress * (startTop - endTop));
  const logoLeft = 10;
  const logoWidth = logoHeight * (200.999 / 244.74);

  const dateHeaderLeft = logoLeft + 67 + 10;
  const dateHeaderTop = 10;
  const dateHeaderOpacity = progress > 0.5 ? ((progress - 0.5) / 0.5) : 0;
  const dateBottomOpacity = progress < 0.5 ? (1 - progress * 2) : 0;
  const workOpacity = progress > 0.5 ? ((progress - 0.5) / 0.5) : 0;

  // Logo cliquable uniquement quand il est petit
  const logoClickable = progress > 0.9 || workOpen;

  // Position des boutons Work+/Menu+ : alignés sur le centre du logo TH une fois en place,
  // puis glissent vers l'alignement avec le texte "Titus Hellouin" (bandeau de 52px, texte centré)
  // à mesure que le header s'efface en approchant la section basse (piloté par bottomFade).
  const logoCenterY = endTop + endLogoHeight / 2;
  const nameBannerCenterY = 26;
  const buttonCenterY = logoCenterY + bottomFade * (nameBannerCenterY - logoCenterY);
  const buttonContainerTop = buttonCenterY - endLogoHeight / 2;

  // Fond noir sous le header uniquement dans la section Work
  const showBlackBg = workOpen;

  return (
    // z-[120] : au-dessus du WorkSection (z-100) mais sous le MenuOverlay (z-200)
    <div className="fixed top-0 left-0 right-0 z-[120] w-full max-w-[402px] mx-auto h-screen pointer-events-none">

      {/* Fond noir derrière le header */}
      {showBlackBg && (
        <div
          className="absolute top-0 left-0 right-0 bg-black pointer-events-none transition-opacity duration-300"
          style={{ height: '100px', opacity: workOpen ? 1 : Math.min(progress * 10, 1) }}
        />
      )}

      {/* Logo TH — s'efface quand la section basse entre dans le viewport */}
      <div
        className="absolute transition-opacity duration-300"
        style={{
          left: `${logoLeft}px`,
          top: `${logoTop}px`,
          height: `${logoHeight}px`,
          width: `${logoWidth}px`,
          willChange: 'top, height, width',
          opacity: workOpen ? 1 : 1 - bottomFade,
          pointerEvents: logoClickable && bottomFade < 0.5 ? 'auto' : 'none',
          cursor: logoClickable && bottomFade < 0.5 ? 'pointer' : 'default',
        }}
        onClick={logoClickable && bottomFade < 0.5 ? onScrollTop : undefined}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200.999 244.74">
          <path d={svgPathsLarge.p30dfcb00} fill="white" />
        </svg>
      </div>

      {/* Date/Time en haut à droite du logo */}
      <div
        className="absolute transition-opacity duration-300 pointer-events-none flex h-[76px] items-center justify-center w-[46px]"
        style={{
          left: `${dateHeaderLeft}px`,
          top: `${dateHeaderTop}px`,
          opacity: workOpen ? 1 : dateHeaderOpacity * (1 - bottomFade),
        }}
      >
        <div className="flex-none rotate-90">
          <div className="flex flex-col items-start justify-center">
            <p className="font-['Roboto:ExtraBold',sans-serif] font-extrabold leading-[normal] text-[20px] text-white tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              {dateStr}
            </p>
            <p className="font-['Roboto:ExtraBold',sans-serif] font-extrabold leading-[normal] text-[20px] text-white tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              {timeStr}
            </p>
          </div>
        </div>
      </div>

      {/* Date/Time en bas à gauche */}
      {!workOpen && (
        <div
          className="absolute bottom-[10px] left-[10px] transition-opacity duration-300 pointer-events-none"
          style={{ opacity: dateBottomOpacity * (1 - bottomFade) }}
        >
          <div className="flex flex-col items-start">
            <p className="font-['Roboto:ExtraBold',sans-serif] font-extrabold leading-[normal] text-[20px] text-white tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              {dateStr}
            </p>
            <p className="font-['Roboto:ExtraBold',sans-serif] font-extrabold leading-[normal] text-[20px] text-white tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              {timeStr}
            </p>
          </div>
        </div>
      )}

      {/* Boutons Work+ / Menu+ (ou Fermer) — alignés sur le logo TH, puis sur "Titus Hellouin" en bas de page */}
      <div
        className="absolute right-[10px] flex gap-[20px] items-center pointer-events-auto"
        style={{ top: `${buttonContainerTop}px`, height: `${endLogoHeight}px` }}
      >
        {workOpen ? (
          /* Bouton fermer quand work est ouvert */
          <button className="flex items-center justify-center" onClick={onWorkToggle}>
            <p className="font-['Roboto:ExtraBold',sans-serif] font-extrabold leading-[normal] text-[20px] text-white tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Fermer
            </p>
          </button>
        ) : (
          <>
            <button
              className="flex items-center justify-center transition-opacity duration-300"
              style={{ opacity: workOpacity, pointerEvents: workOpacity > 0.05 ? 'auto' : 'none' }}
              onClick={onWorkToggle}
            >
              <p className="font-['Roboto:ExtraBold',sans-serif] font-extrabold leading-[normal] text-[20px] text-white tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                Work +
              </p>
            </button>
            <button className="flex items-center justify-center" onClick={onMenuOpen}>
              <p className="font-['Roboto:ExtraBold',sans-serif] font-extrabold leading-[normal] text-[20px] text-white tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                Menu +
              </p>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
