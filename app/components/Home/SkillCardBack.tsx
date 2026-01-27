import React from "react";

interface SkillCardBackProps {
  coverText: string;
  className?: string;
  coverImg: string;
  skillsList: string[];
}

const SkillCardBack = ({
  coverText,
  coverImg,
  className,
  skillsList,
}: SkillCardBackProps) => {
  return (
    <div
      className={`w-full h-full aspect-[3/4.5] rounded-[8px] px-[clamp(0.75rem,3vw,2rem)] py-[clamp(0.6rem,2.5vw,1.2rem)] flex flex-col items-center justify-between min-h-[23rem] ${
        className ?? ""
      } bg-white`}
    >
      <div className="w-full flex flex-row justify-between items-center">
        <h4 className="uppercase p-0 font-[SpeziaMono] text-[clamp(0.45rem,0.7vw,0.9rem)] leading-tight">
          {coverText}
        </h4>
        <img
          src={coverImg}
          alt="cover"
          className="w-[clamp(0.6rem,2.5cqw,1rem)] h-[clamp(0.6rem,2.5cqw,1rem)] flex-shrink-0"
        />
      </div>

      <div className="flex flex-col w-full flex-1 justify-center gap-[clamp(0.3rem,0.5vw,0.8rem)] flex-nowrap mb-[clamp(0.5rem,1.5vw,1rem)] flex-shrink-0">
        {skillsList.map((skill, index) => (
          <div
            key={`${skill}-${index}`}
            className="bg-[#f0ece5] font-[SpeziaMedium] w-full text-center text-[clamp(0.5rem,0.9vw,1.1rem)] py-[clamp(0.4rem,1.8vw,1rem)] px-2 flex items-center justify-center leading-tight"
          >
            {skill}
          </div>
        ))}
      </div>

      <div className="uppercase w-full flex flex-row justify-between items-center rotate-180">
        <h4 className="p-0 text-[clamp(0.45rem,0.7vw,0.9rem)] leading-tight">
          {coverText}
        </h4>
        <img
          src={coverImg}
          alt="cover"
          className="w-[clamp(0.6rem,2.5cqw,1rem)] h-[clamp(0.6rem,2.5cqw,1rem)] flex-shrink-0"
        />
      </div>
    </div>
  );
};

export default SkillCardBack;
