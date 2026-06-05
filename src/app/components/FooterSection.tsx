import svgPaths from "../../imports/VTelephone5/svg-zgbm0b7srq";

export function FooterSection() {
  return (
    <div className="relative w-full mt-[20px] pb-[20px]">
      <div className="flex flex-row items-center size-full">
        <div className="flex gap-[5px] items-center pb-[20px] pt-[10px] px-[20px] size-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <div className="flex flex-[1_0_0] flex-col gap-[10px] h-full items-start min-w-px">
              <div className="flex flex-col font-['Roboto:ExtraBold',sans-serif] font-extrabold items-start text-[#acacac] text-[13px] tracking-[-0.13px] w-full">
                <a className="block leading-[0] w-full hover:opacity-80 transition-opacity" href="mailto:titus.hello1@gmail.com" style={{ fontVariationSettings: '"wdth" 100' }} target="_blank">
                  <p className="cursor-pointer leading-[normal]">titus.hello1@gmail.com</p>
                </a>
                <a className="block leading-[0] w-full hover:opacity-80 transition-opacity" href="tel:+33664396973" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="cursor-pointer leading-[normal]">+33 6 64 39 69 73</p>
                </a>
                <a className="block leading-[0] w-full hover:opacity-80 transition-opacity" href="https://linkedin.com" style={{ fontVariationSettings: '"wdth" 100' }} target="_blank">
                  <p className="cursor-pointer leading-[normal]">+ Linkedin</p>
                </a>
                <a className="block leading-[0] w-full hover:opacity-80 transition-opacity" href="https://instagram.com" style={{ fontVariationSettings: '"wdth" 100' }} target="_blank">
                  <p className="cursor-pointer leading-[normal]">+ Instagram</p>
                </a>
              </div>
              <div className="h-[60.881px] w-[50px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 60.8809">
                  <path d={svgPaths.pfd2f600} fill="#ACACAC" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <div className="flex flex-[1_0_0] flex-col h-full items-start justify-between min-w-px">
              <div className="flex flex-col font-['Roboto:ExtraBold',sans-serif] font-extrabold items-start leading-[normal] text-[#acacac] text-[13px] tracking-[-0.13px] w-full">
                <p className="w-full" style={{ fontVariationSettings: '"wdth" 100' }}>Montreuil, 93100, France</p>
                <p className="w-full" style={{ fontVariationSettings: '"wdth" 100' }}>Terms and conditions</p>
                <p className="w-full" style={{ fontVariationSettings: '"wdth" 100' }}>Legal mentions</p>
                <p className="w-full" style={{ fontVariationSettings: '"wdth" 100' }}>Credits</p>
                <p className="w-full" style={{ fontVariationSettings: '"wdth" 100' }}>Privacy policy</p>
              </div>
              <div className="h-[30px] w-[91px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 30">
                  <path clipRule="evenodd" d={svgPaths.p27c00100} fill="#ACACAC" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
