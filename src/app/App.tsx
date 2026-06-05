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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollY(containerRef.current.scrollTop);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div ref={containerRef} className="bg-black h-screen w-full overflow-y-auto overflow-x-hidden">
      <AnimatedHeader scrollY={scrollY} heroHeight={874} />
      <main className="w-full max-w-[402px] mx-auto">
        <HeroSection scrollY={scrollY} />
        <GallerySection />
        <div className="mt-[60px]">
          <NameBanner />
        </div>
        <BioSection />
        <InstagramBanner />
        <FooterSection />
      </main>
    </div>
  );
}
