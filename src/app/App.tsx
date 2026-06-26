import { useState, useEffect, useRef } from "react";
import { AnimatedHeader } from "./components/AnimatedHeader";
import { HeroSection } from "./components/HeroSection";
import { GallerySection } from "./components/GallerySection";
import { NameBanner } from "./components/NameBanner";
import { BioSection } from "./components/BioSection";
import { InstagramBanner } from "./components/InstagramBanner";
import { FooterSection } from "./components/FooterSection";
import { WorkSection } from "./components/WorkSection";

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  // Reste monté pendant l'animation de fermeture (fade-out) avant de disparaître du DOM
  const [menuMounted, setMenuMounted] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  // Reste monté pendant l'animation de fermeture (slide-out) avant de disparaître du DOM
  const [workMounted, setWorkMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (workOpen) {
      setWorkMounted(true);
    } else if (workMounted) {
      const timer = setTimeout(() => setWorkMounted(false), 400);
      return () => clearTimeout(timer);
    }
  }, [workOpen, workMounted]);

  // Même logique pour l'overlay menu : on le garde monté le temps du fade-out.
  useEffect(() => {
    if (menuOpen) {
      setMenuMounted(true);
    } else if (menuMounted) {
      const timer = setTimeout(() => setMenuMounted(false), 350);
      return () => clearTimeout(timer);
    }
  }, [menuOpen, menuMounted]);

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (containerRef.current) {
          setScrollY(containerRef.current.scrollTop);
        }
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        container.removeEventListener('scroll', handleScroll);
        cancelAnimationFrame(rafId);
      };
    }
  }, []);

  // Fade du header (TH + heure) quand la section basse entre dans le viewport
  // bottomTop est `undefined` tant que le ref n'est pas attaché (premier rendu) :
  // on garde alors bottomFade à 0 plutôt que de calculer un NaN (qui ferait ignorer
  // l'opacité par le navigateur et afficherait brièvement la date/heure du haut).
  const bottomTop = bottomSectionRef.current?.offsetTop;
  let bottomFade = 0; // 0 = visible, 1 = invisible
  if (bottomTop !== undefined) {
    const fadeStart = bottomTop - 280;
    const fadeEnd = bottomTop - 80;
    const rawFade = (scrollY - fadeStart) / (fadeEnd - fadeStart);
    bottomFade = Math.max(0, Math.min(1, rawFade));
  }

  return (
    <>
      {/* Overlay menu — reste monté pendant le fade-out (animation symétrique). */}
      {menuMounted && (
        <div
          className={`${menuOpen ? 'menu-overlay' : 'menu-overlay-out'} fixed inset-0 z-[200] flex items-center justify-center cursor-pointer`}
          onClick={() => setMenuOpen(false)}
        >
          <p
            className={`${menuOpen ? 'menu-text' : 'menu-text-out'} font-['Roboto:ExtraBold',sans-serif] font-extrabold text-white text-[28px] tracking-[-0.28px] select-none`}
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Available soon
          </p>
        </div>
      )}

      {/* Section Work — reste montée pendant le slide-out */}
      {workMounted && <WorkSection closing={!workOpen} />}

      <div ref={containerRef} className="bg-black h-screen w-full overflow-y-auto overflow-x-hidden overscroll-y-contain">
        <AnimatedHeader
          scrollY={scrollY}
          heroHeight={874}
          workOpen={workOpen}
          workMounted={workMounted}
          bottomFade={bottomFade}
          onScrollTop={() => {
            containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
            setWorkOpen(false);
          }}
          onMenuOpen={() => setMenuOpen(true)}
          onWorkToggle={() => setWorkOpen(prev => !prev)}
        />

        {/* Tout le contenu dans le même cadre 402px */}
        <div className="w-full max-w-[402px] mx-auto">
          <HeroSection scrollY={scrollY} />
          <div className="mt-[50px]">
            <GallerySection />
          </div>
          {/* Sections basses : même largeur que le reste, min 1 écran de hauteur */}
          <div ref={bottomSectionRef} className="mt-[60px] min-h-screen flex flex-col">
            <NameBanner />
            <BioSection />
            <InstagramBanner />
            <FooterSection />
          </div>
        </div>
      </div>
    </>
  );
}
