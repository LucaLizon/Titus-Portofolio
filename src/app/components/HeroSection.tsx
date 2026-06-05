import { useEffect, useRef } from "react";

interface HeroSectionProps {
  scrollY: number;
}

export function HeroSection({ scrollY }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="relative w-full h-[874px]">
      {/* Video background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-fit opacity-49 scale-[2.1] rotate-[90deg]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Titus_HELLOUIN-Video-DRID_M1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
