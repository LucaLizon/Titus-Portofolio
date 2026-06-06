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
  const [workOpen, setWorkOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomSectionRef = useRef<HTMLDivElement>(null);

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
  const bottomTop = bottomSectionRef.current?.offsetTop ?? Infinity;
  const fadeStart = bottomTop - 280;
  const fadeEnd = bottomTop - 80;
  const rawFade = (scrollY - fadeStart) / (fadeEnd - fadeStart);
  const bottomFade = Math.max(0, Math.min(1, rawFade)); // 0 = visible, 1 = invisible

  return (
    <>
      {/* Overlay menu */}
      {menuOpen && (
        <div
          className="menu-overlay fixed inset-0 z-[200] flex items-center justify-center cursor-pointer"
          style={{ backdropFilter: 'blur(14px)', backgroundColor: 'rgba(0,0,0,0.45)' }}
          onClick={() => setMenuOpen(false)}
        >
          <p
            className="menu-text font-['Roboto:ExtraBold',sans-serif] font-extrabold text-white text-[28px] tracking-[-0.28px] select-none"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Available soon
          </p>
        </div>
      )}

      {/* Section Work */}
      {workOpen && <WorkSection onClose={() => setWorkOpen(false)} />}

      <div ref={containerRef} className="bg-black h-screen w-full overflow-y-auto overflow-x-hidden">
        <AnimatedHeader
          scrollY={scrollY}
          heroHeight={874}
          workOpen={workOpen}
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
