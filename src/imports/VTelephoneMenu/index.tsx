import svgPaths from "./svg-jopgo0qe53";

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
    <div className="content-stretch flex flex-col items-start justify-center relative">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="h-[81.58px] relative shrink-0 w-[67px]" data-name="Union">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 81.5801">
          <path d={svgPaths.p236bd500} fill="var(--fill-0, white)" id="Union" />
        </svg>
      </div>
      <div className="flex h-[76px] items-center justify-center relative shrink-0 w-[46px]">
        <div className="flex-none rotate-90">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Roboto:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[20px] text-white tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Work +
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Roboto:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[20px] text-white tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Menu +
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <Frame4 />
      <Frame6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex h-[101.58px] items-center justify-between p-[10px] relative shrink-0 w-[402px]">
      <Frame5 />
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Roboto:ExtraBold',sans-serif] font-extrabold gap-[21px] items-center justify-center leading-[normal] min-h-px relative text-[30px] text-white tracking-[-0.3px] w-full whitespace-nowrap">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>{`Inspiration `}</p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        Information
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        Contact
      </p>
    </div>
  );
}

export default function VTelephoneMenu() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start relative size-full" data-name="VTelephoneMenu">
      <Frame3 />
      <Frame8 />
    </div>
  );
}