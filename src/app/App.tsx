import { useState, useEffect, useRef } from "react";
import { AnimatedHeader } from "./components/AnimatedHeader";
import { HeroSection } from "./components/HeroSection";
import { GallerySection } from "./components/GallerySection";
import { NameBanner } from "./components/NameBanner";
import { BioSection } from "./components/BioSection";
import { InstagramBanner } from "./components/InstagramBanner";
import { FooterSection } from "./components/FooterSection";

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      {/* Overlay menu — fixed plein écran, z-[200] au-dessus de tout */}
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

      <div ref={containerRef} className="bg-black h-screen w-full overflow-y-auto overflow-x-hidden">
        <AnimatedHeader
          scrollY={scrollY}
          heroHeight={874}
          onScrollTop={() => containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
          onMenuOpen={() => setMenuOpen(true)}
        />
        <main className="w-full max-w-[402px] mx-auto">
          <HeroSection scrollY={scrollY} />
          <div className="mt-[50px]">
            <GallerySection />
          </div>
          <div className="mt-[60px]">
            <NameBanner />
          </div>
          <BioSection />
          <InstagramBanner />
          <FooterSection />
        </main>
      </div>
    </>
  );
}
