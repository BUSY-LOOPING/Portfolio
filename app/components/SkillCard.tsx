import React from "react";

interface SkillCardProps {
  color: string;
  coverText: string;
  skills: string[];
  cardRef?: React.RefObject<HTMLDivElement>;
}

const SkillCard = ({ color, coverText, skills, cardRef }: SkillCardProps) => {
  return (
    
    <div 
      ref={cardRef}
      className="relative w-80 h-[28rem]"
      style={{ 
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >
      {/* Back Side - Cover */}
      <div
        className="absolute inset-0 rounded-2xl shadow-2xl p-8 flex flex-col justify-between"
        style={{
          backgroundColor: color,
          backfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="flex justify-between items-start">
          <span className="text-xs font-bold tracking-wider opacity-70">
            {coverText}
          </span>
          <svg
            className="w-4 h-4 opacity-60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>

        <div className="flex justify-center items-center">
          <svg
            className="w-24 h-24 opacity-40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>

        <div className="flex justify-between items-end" style={{ transform: "rotate(180deg)" }}>
          <span className="text-xs font-bold tracking-wider opacity-70">
            {coverText}
          </span>
          <svg
            className="w-4 h-4 opacity-60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </div>

      {/* Front Side - Content */}
      <div
        className="absolute inset-0 rounded-2xl shadow-2xl p-10 flex flex-col bg-white"
        style={{
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <h3 className="text-2xl font-bold mb-8 text-gray-900">
          {coverText}
        </h3>

        <div className="space-y-3 flex-1">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-gray-700"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gray-800" />
              <span className="text-base">{skill}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>2+ years experience</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
