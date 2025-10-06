import React from "react";

interface SkillCardFrontProps {
  color: string;
  coverImg: string;
  coverText: string;
  className?: string;
}

const SkillCardFront = ({ color, coverImg, coverText, className }: SkillCardFrontProps) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`w-[22vw] aspect-[3/4.5] rounded-[8px] flex flex-col items-center justify-between px-[1rem] py-[0.8rem] ${className ?? ''}`}
    >
      <div  className="w-full flex flex-row justify-between items-center">
        <h4 className="uppercase p-0 text-[0.4rem]">{coverText}</h4>
        <img src={coverImg} alt="cover" className="w-2 h-2" />
      </div>
      <img src={coverImg} alt={coverText} className="w-[30%] aspect-[1/1]" />
      <div style={{ transform: "scale(-1, -1)" }}  className="w-full flex flex-row justify-between items-center">
        <p className="p-0 text-[0.4rem]">{coverText}</p>
        <div className="flex flex-row gap-2 justify-center items-center">
          <svg
            style={{ transform: "scale(-1, -1)" }} 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 16"
            fill="none"
            className="h-[0.55rem] aspect-[1/1] text-black"
            aria-hidden="true"
          >
            <path
              d="M21 15.96v-2.417a4.94 4.94 0 0 1-.75.057c-2.514 0-4.614-1.884-5.13-4.4h4.38V6.8h-4.38c.516-2.516 2.617-4.4 5.13-4.4.255 0 .505.02.75.057V.039A7.115 7.115 0 0 0 20.25 0c-4.142 0-7.5 3.582-7.5 8s3.358 8 7.5 8c.253 0 .503-.013.75-.04ZM0 8c0 4.418 3.358 8 7.5 8 .27 0 .537-.015.8-.045v-2.42a4.96 4.96 0 0 1-.8.065c-2.9 0-5.25-2.507-5.25-5.6 0-3.093 2.35-5.6 5.25-5.6.272 0 .54.022.8.065V.045A7.145 7.145 0 0 0 7.5 0C3.358 0 0 3.582 0 8Z"
              fill="currentColor"
            />
          </svg>
          <span className="text-[0.4rem]">HTML</span>
          <img src={coverImg} alt="cover" className="w-2 h-2" />
        </div>
        
      </div>  
    </div>
  );
};

export default SkillCardFront;
