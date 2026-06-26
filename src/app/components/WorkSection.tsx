import { useState } from "react";

import { PROJECTS } from "../../content/projects";
import { img } from "../../content/images";

interface WorkSectionProps {
  closing: boolean;
}

export function WorkSection({ closing }: WorkSectionProps) {
  const [openProject, setOpenProject] = useState<string | null>(null);

  const toggle = (num: string) => {
    setOpenProject(prev => (prev === num ? null : num));
  };

  return (
    <div className={`${closing ? 'work-slide-out' : 'work-slide-in'} fixed inset-0 z-[100] bg-black overflow-y-auto`}>
      {/* pt: place la barre du haut (border-t du 1er projet) ~10px sous le bas du logo TH (10px + 81.58px) */}
      <div className="pt-[102px] pb-[80px] max-w-[402px] mx-auto px-[10px]">

        {/* Liste des projets */}
        <div className="flex flex-col">
          {PROJECTS.map((project) => {
            const isOpen = openProject === project.number;
            // Résout les noms de fichiers en images réelles, en ignorant celles
            // qui ne sont pas (encore) présentes dans src/imports/.
            const images = (project.images ?? [])
              .map((name) => ({ src: img(name), alt: project.title }))
              .filter((im) => im.src);

            return (
              <div key={project.number} className="border-t border-[#222222]">
                {/* Ligne cliquable */}
                <button
                  className="w-full flex items-start justify-between py-[20px] gap-[12px] text-left group"
                  onClick={() => toggle(project.number)}
                >
                  <div className="flex items-start flex-1 min-w-0">
                    <div className="flex flex-col gap-[3px] min-w-0">
                      <span
                        className="font-['Roboto:ExtraBold',sans-serif] font-extrabold text-[22px] text-white tracking-[-0.22px] leading-none group-hover:text-[#acacac] transition-colors duration-200"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        {project.title}
                      </span>
                      <span
                        className="font-['Roboto:ExtraBold',sans-serif] font-extrabold text-[11px] text-[#555555] tracking-[-0.11px]"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <span
                    className="font-['Roboto:ExtraBold',sans-serif] font-extrabold text-[22px] text-white leading-none mt-[1px] shrink-0 transition-transform duration-300"
                    style={{
                      fontVariationSettings: '"wdth" 100',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Contenu expandable — grid 0fr/1fr : s'adapte à la hauteur réelle du contenu, jamais de clipping */}
                <div
                  className="grid"
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 500ms ease-in-out',
                  }}
                >
                  <div className="overflow-hidden min-h-0">
                  <div className="pb-[36px] flex flex-col gap-[24px]">

                    {/* Photos du projet */}
                    {images.length > 0 && (
                      <div
                        className="no-scrollbar flex gap-[10px] overflow-x-auto -mx-[10px] px-[10px] pb-[2px] snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none' }}
                      >
                        {images.map((image, i) => (
                          <div
                            key={i}
                            className="shrink-0 w-[345px] h-[240px] overflow-hidden snap-start"
                          >
                            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" loading="lazy" />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Description */}
                    <p
                      className="font-['Roboto:ExtraBold',sans-serif] font-extrabold text-[14px] text-white tracking-[-0.14px] leading-[1.65]"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      {project.description}
                    </p>

                    {/* Accroche (optionnelle) */}
                    {project.hook && (
                      <p
                        className="font-['Roboto:ExtraBold',sans-serif] font-extrabold text-[13px] text-[#777777] tracking-[-0.13px] leading-[1.6] border-l-2 border-[#2a2a2a] pl-[12px]"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        {project.hook}
                      </p>
                    )}

                    {/* Blocs de détails (Concept, Matériaux, Références, etc.) */}
                    {project.details?.map((detail) => (
                      <div key={detail.label} className="flex flex-col gap-[8px]">
                        <p
                          className="font-['Roboto:ExtraBold',sans-serif] font-extrabold text-[10px] text-[#555555] tracking-[0.5px] uppercase"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          {detail.label}
                        </p>
                        {Array.isArray(detail.body) ? (
                          <ul className="flex flex-col gap-[6px]">
                            {detail.body.map((line, i) => (
                              <li
                                key={i}
                                className="font-['Roboto:ExtraBold',sans-serif] font-extrabold text-[13px] text-[#acacac] tracking-[-0.13px] leading-[1.5] pl-[14px] relative before:content-['·'] before:absolute before:left-0 before:text-[#555555]"
                                style={{ fontVariationSettings: '"wdth" 100' }}
                              >
                                {line}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p
                            className="font-['Roboto:ExtraBold',sans-serif] font-extrabold text-[13px] text-[#acacac] tracking-[-0.13px] leading-[1.6]"
                            style={{ fontVariationSettings: '"wdth" 100' }}
                          >
                            {detail.body}
                          </p>
                        )}
                      </div>
                    ))}

                    {/* Outils */}
                    {project.tools && project.tools.length > 0 && (
                      <div className="flex flex-col gap-[8px]">
                        <p
                          className="font-['Roboto:ExtraBold',sans-serif] font-extrabold text-[10px] text-[#555555] tracking-[0.5px] uppercase"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          Outils
                        </p>
                        <div className="flex flex-wrap gap-[6px]">
                          {project.tools.map((tool) => (
                            <span
                              key={tool}
                              className="font-['Roboto:ExtraBold',sans-serif] font-extrabold text-[11px] text-[#acacac] tracking-[-0.11px] border border-[#2a2a2a] px-[10px] py-[5px]"
                              style={{ fontVariationSettings: '"wdth" 100' }}
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* Bordure basse */}
          <div className="border-t border-[#222222]" />
        </div>
      </div>
    </div>
  );
}
