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
      className={`w-full h-full rounded-[8px] px-[clamp(0.75rem,3vw,2rem)] py-[clamp(0.6rem,2.5vw,1.2rem)] flex flex-col items-center justify-between overflow-hidden bg-white ${
        className ?? ""
      }`}
    >
      {/* Top label */}
      <div className="w-full flex flex-row justify-between items-center flex-shrink-0">
        <h4 className="uppercase p-0 font-[SpeziaMono] text-[clamp(0.45rem,0.7vw,0.9rem)] leading-tight">
          {coverText}
        </h4>
        <img
          src={coverImg}
          alt="cover"
          className="w-[clamp(0.6rem,2.5cqw,1rem)] h-[clamp(0.6rem,2.5cqw,1rem)] flex-shrink-0"
        />
      </div>

      {/* Skills list — key changes here */}
      <div className="flex flex-col w-full min-h-0 flex-1 justify-center gap-[clamp(0.2rem,0.4vw,0.6rem)] my-[clamp(0.3rem,1vw,0.8rem)]">
        {skillsList.map((skill, index) => (
          <div
            key={`${skill}-${index}`}
            className="bg-[#f0ece5] font-[SpeziaMedium] w-full text-center text-[clamp(0.45rem,0.8vw,1rem)] min-h-0 flex-1 flex items-center justify-center leading-tight px-2"
          >
            {skill}
          </div>
        ))}
      </div>

      {/* Bottom label */}
      <div className="uppercase w-full flex flex-row justify-between items-center rotate-180 flex-shrink-0">
        <h4 className="p-0 font-[SpeziaMono] text-[clamp(0.45rem,0.7vw,0.9rem)] leading-tight">
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
