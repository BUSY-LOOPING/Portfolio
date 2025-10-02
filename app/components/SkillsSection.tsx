import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkillCard from "./SkillCard";

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = [card1Ref.current, card2Ref.current, card3Ref.current];
    
    const smoothStep = (x: number) => {
      return x < 0.5 
        ? 4 * x * x * x 
        : 1 - Math.pow(-2 * x + 2, 3) / 2;
    };

    gsap.registerEase("smoothStep", smoothStep);

    gsap.set(cards, {
      y: -800,
      x: (i) => [400, 0, -400][i],
      rotationY: 0,
      rotationZ: (i) => [-8, -2, 6][i],
      opacity: 0,
      scale: 0.8,
      transformStyle: "preserve-3d",
      transformPerspective: 1000,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 1,
        pin: true,
      },
    });

    tl.to(cards, {
      y: 120,
      opacity: 1,
      scale: 0.9,
      duration: 0.3,
      stagger: 0.08,
      ease: "smoothStep",
    })
    .to(cards, {
      x: (i) => [60, 0, -60][i],
      y: (i) => [0, 10, 20][i],
      rotationZ: (i) => [-4, -1, 3][i],
      scale: 1,
      duration: 0.25,
      ease: "power2.out",
    }, "+=0.1")
    .to(cards, {
      x: 0,
      y: (i) => [0, 5, 10][i],
      rotationZ: 0,
      duration: 0.15,
      ease: "power2.inOut",
    }, "+=0.05")
    .to(cards, {
      rotationY: 180,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.inOut",
    }, "+=0.1");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="h-[400vh] w-full relative overflow-hidden"
    >
      <div className="h-screen flex flex-col justify-center items-center px-8">
        <div className="mb-20 text-center max-w-5xl">
          <h2 className="text-5xl font-[SpeziaMedium] mb-4">What I Do</h2>
          <p className="text-xl text-gray-600">
            When tech is personal, it's not just code—it's craftsmanship.
          </p>
        </div>

        <div className="flex gap-16 items-center justify-center">
          <SkillCard
            cardRef={card1Ref}
            color="#e5daf6"
            coverText="FRONT END"
            skills={["React", "TypeScript", "Tailwind", "Next.js", "Redux", "HTML/CSS"]}
          />
          <SkillCard
            cardRef={card2Ref}
            color="#ffd2f3"
            coverText="BACK END"
            skills={["Node.js", "Express", "PostgreSQL", "Docker", "AWS", "Redis"]}
          />
          <SkillCard
            cardRef={card3Ref}
            color="#fcdeac"
            coverText="AI/ML"
            skills={["Python", "TensorFlow", "PyTorch", "MLOps", "SageMaker", "CI/CD"]}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
