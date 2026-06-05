import svgPaths from "./svg-81nbe11cn7";

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Roboto:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[20px] text-white tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Menu +
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex h-[101.58px] items-center justify-end p-[10px] relative shrink-0 w-[402px]">
      <Frame4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-white tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        02 06
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-white tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        16:52:36
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
        <Frame2 />
      </div>
    </div>
  );
}

export default function VTelephone() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between relative size-full" data-name="VTelephone1">
      <div className="absolute inset-0 opacity-49 overflow-hidden" />
      <Frame3 />
      <div className="h-[244.74px] relative shrink-0 w-[200.999px]" data-name="Union">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200.999 244.74">
          <path d={svgPaths.p30dfcb00} fill="var(--fill-0, white)" id="Union" />
        </svg>
      </div>
      <Frame5 />
    </div>
  );
}