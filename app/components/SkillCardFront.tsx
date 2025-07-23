import React from "react";

interface SkillCardFrontProps {
  coverText: string;
  className?: string;
}
const SkillCardFront = ({ coverText, className }: SkillCardFrontProps) => {
  return (
    <div className={`w-[22vw] aspect-[3/4.5] max-w-[11rem] rounded-[8px] flex flex-col justify-center items-center px-[1rem] py-[0.8rem] ${className ?? ''} bg-red-500`}>
      {coverText} - FRONT
    </div>
  );
};

export default SkillCardFront;
