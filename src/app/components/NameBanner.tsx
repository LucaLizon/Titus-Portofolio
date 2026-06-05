import { useRef, useEffect } from "react";

export function NameBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="relative w-full h-[52px] overflow-hidden">
      {/* Zoomed video background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 min-w-[300%] min-h-[300%] w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-49"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Titus_HELLOUIN-Video-DRID_M1.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative flex flex-col justify-center size-full">
        <div className="flex flex-col items-start justify-center px-[20px] size-full">
          <p className="font-['Roboto:ExtraBold',sans-serif] font-extrabold leading-[normal] text-[20px] text-white tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Titus Hellouin
          </p>
        </div>
      </div>
    </div>
  );
}
