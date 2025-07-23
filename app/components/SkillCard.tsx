import React, { useRef, useEffect } from "react";
import SkillCardBack from "./SkillCardBack";
import SkillCardFront from "./SkillCardFront";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

interface SkillCardProps {
  color: string;
  coverImg: string;
  coverText: string;
  delay: number; // in seconds
  className?: string;
}

const SkillCard = ({
  color,
  coverImg,
  coverText,
  delay,
  className,
}: SkillCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cardRef.current) return;

    // Reset rotation on mount
    gsap.set(cardRef.current, {
      rotationY: 0,
      transformStyle: "preserve-3d",
      perspective: 800,
	  transformOrigin: "50% 50%",
    });

    // Flip rotation from 0 to 180 on scroll
    gsap.to(cardRef.current, {
      rotationY: 180,
	  transformOrigin: "50% 50%",
      ease: "none",
      delay,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className={`w-full h-full relative`}
      style={{ perspective: 800 }} 
    >
      <div
        className="absolute w-full h-full backface-hidden"
        style={{
          backfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
        }}
      >
        <SkillCardBack
          color={color}
          coverImg={coverImg}
          coverText={coverText}
          className={`${className}`}
        />
      </div>

      <div
        className="absolute w-full h-full backface-hidden"
        style={{
          backfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
          transform: "rotateY(180deg)", // flip front by 180 to hide initially
        }}
      >
        <SkillCardFront
          coverText={coverText}
          className={`${className}`}
        />
      </div>
    </div>
  );
};

export default SkillCard;
