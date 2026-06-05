import svgPathsLarge from "../../imports/VTelephone1/svg-81nbe11cn7";

interface AnimatedHeaderProps {
  scrollY: number;
  heroHeight: number;
}

export function AnimatedHeader({ scrollY, heroHeight }: AnimatedHeaderProps) {
  // Animation plus rapide - se termine à 70% du scroll au lieu de 100%
  const animationEndPoint = heroHeight * 0.7;
  const progress = Math.min(scrollY / animationEndPoint, 1);

  // Logo transformation
  const startLogoHeight = 244.74;
  const endLogoHeight = 81.58;
  const startTop = (heroHeight - startLogoHeight) / 2; // Centré verticalement
  const endTop = 10;

  const logoHeight = startLogoHeight - (progress * (startLogoHeight - endLogoHeight));
  const logoTop = startTop - (progress * (startTop - endTop));
  const logoLeft = 10;
  const logoWidth = logoHeight * (200.999 / 244.74);

  // Date/time en haut à droite du logo (apparaît au scroll)
  const dateHeaderLeft = logoLeft + 67 + 10;
  const dateHeaderTop = 10;
  const dateHeaderOpacity = progress > 0.5 ? ((progress - 0.5) / 0.5) : 0;

  // Date/time en bas à gauche (disparaît au scroll)
  const dateBottomOpacity = progress < 0.5 ? (1 - progress * 2) : 0;

  // Work+ et Menu+ opacités
  const workOpacity = progress > 0.5 ? ((progress - 0.5) / 0.5) : 0;
  const menuTopOpacity = progress < 0.2 ? (1 - progress * 5) : 0;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full max-w-[402px] mx-auto h-screen pointer-events-none">
      {/* Logo TH - se transforme du centre vers le haut gauche */}
      <div
        className="absolute transition-all duration-300 ease-out pointer-events-auto"
        style={{
          left: `${logoLeft}px`,
          top: `${logoTop}px`,
          height: `${logoHeight}px`,
          width: `${logoWidth}px`,
        }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200.999 244.74">
          <path d={svgPathsLarge.p30dfcb00} fill="white" />
        </svg>
      </div>

      {/* Date/Time en haut à droite du logo - apparaît au scroll */}
      <div
        className="absolute transition-opacity duration-300 pointer-events-none flex h-[76px] items-center justify-center w-[46px]"
        style={{
          left: `${dateHeaderLeft}px`,
          top: `${dateHeaderTop}px`,
          opacity: dateHeaderOpacity,
        }}
      >
        <div className="flex-none rotate-90">
          <div className="flex flex-col items-start justify-center">
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[20px] text-white tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              02 06
            </p>
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[20px] text-white tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              16:52:36
            </p>
          </div>
        </div>
      </div>

      {/* Date/Time en bas à gauche - disparaît au scroll */}
      <div
        className="absolute bottom-[10px] left-[10px] transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: dateBottomOpacity,
        }}
      >
        <div className="flex flex-col items-start">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[20px] text-white tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            02 06
          </p>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[20px] text-white tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            16:52:36
          </p>
        </div>
      </div>

      {/* Menu + en haut à droite - visible au début */}
      <div
        className="absolute top-[10px] right-[10px] h-[101.58px] flex items-center justify-end transition-opacity duration-300 pointer-events-auto"
        style={{ opacity: menuTopOpacity }}
      >
        <button className="flex items-center justify-center hover:opacity-80 transition-opacity">
          <p className="font-['Roboto:ExtraBold',sans-serif] font-extrabold leading-[normal] text-[20px] text-white tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Menu +
          </p>
        </button>
      </div>

      {/* Header fixe en haut - Work + et Menu + apparaissent au scroll */}
      <div className="absolute top-[10px] right-[10px] flex gap-[20px] items-center h-[101.58px] pointer-events-auto">
        <button
          className="flex items-center justify-center hover:opacity-80 transition-opacity"
          style={{ opacity: workOpacity }}
        >
          <p className="font-['Roboto:ExtraBold',sans-serif] font-extrabold leading-[normal] text-[20px] text-white tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Work +
          </p>
        </button>
        <button className="flex items-center justify-center hover:opacity-80 transition-opacity">
          <p className="font-['Roboto:ExtraBold',sans-serif] font-extrabold leading-[normal] text-[20px] text-white tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Menu +
          </p>
        </button>
      </div>
    </div>
  );
}
