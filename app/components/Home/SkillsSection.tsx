import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { SkillCardBack, SkillCardFront } from "~/components";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const SkillsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);

    let lenis: Lenis;
    const ctx = gsap.context(() => {
      // lenis = new Lenis();

      // function raf(time: number) {
      //   lenis.raf(time * 1000);
      //   ScrollTrigger.update();
      // }

      // gsap.ticker.add(raf);
      // gsap.ticker.lagSmoothing(0);

      const smoothStep = (p: number) => p * p * (3 - 2 * p);

      ScrollTrigger.create({
        trigger: ".skills",
        start: `+=${window.innerHeight * 2.5}`,
        end: `+=${window.innerHeight * 6}`,
        onEnter: () => {
          gsap.to(".cards", {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.3,
          });
        },
        onLeave: () => {
          gsap.to(".cards", {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.3,
          });
        },
        onEnterBack: () => {
          gsap.to(".cards", {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.3,
          });
        },
        onLeaveBack: () => {
          gsap.to(".cards", {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.3,
          });
        },
      });

      const pinTrigger = ScrollTrigger.create({
        trigger: ".skills",
        start: `+=${window.innerHeight * 3}`,
        end: `+=${window.innerHeight * 4}`,
        pin: ".skills",
        // pinSpacing: true,
        onUpdate: (self) => {
          // Force the pinned section to stay at top: 0
          const pinnedSection = document.querySelector(
            ".skills"
          ) as HTMLElement;
          if (pinnedSection && self.isActive) {
            gsap.set(pinnedSection, { top: 0 });
          }
        },
      });

      ScrollTrigger.create({
        invalidateOnRefresh: true,
        trigger: ".skills",
        start: `+=${window.innerHeight * 3}`,
        end: `+=${window.innerHeight * 4}`,
        onLeave: () => {
          const skillsSection = document.querySelector(
            ".skills"
          ) as HTMLElement;
          if (!skillsSection) return;
          const skillsRect = skillsSection.getBoundingClientRect();
          const skillsTop = window.pageYOffset + skillsRect.top;

          gsap.set(".cards", {
            position: "absolute",
            top: skillsTop,
            left: 0,
            width: "100vw",
            height: "100vh",
          });
        },
        onEnterBack: () => {
          gsap.set(".cards", {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
          });
        },
      });

      ScrollTrigger.create({
        invalidateOnRefresh: true,
        trigger: ".skills",
        start: `+=${window.innerHeight * 2.5}`,
        end: `+=${window.innerHeight * 4}`,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(".skills-header", {
            y: "0%",
            opacity: 1,
          });

          const cards = ["#skill-card-1", "#skill-card-2", "#skill-card-3"];
          cards.forEach((cardId, index) => {
            const delay = index * 0.5;
            const cardProgress = gsap.utils.clamp(
              0,
              1,
              (progress - delay * 0.1) / (0.9 - delay * 0.1)
            );
            const innerCard = document.querySelector(
              `${cardId} .flip-card-inner`
            );

            let y;
            if (cardProgress < 0.4) {
              const normalizedProgress = cardProgress / 0.4;
              y = gsap.utils.interpolate(
                "-100%",
                "50%",
                smoothStep(normalizedProgress)
              );
            } else if (cardProgress < 0.6) {
              const normalizedProgress = (cardProgress - 0.4) / 0.2;
              y = gsap.utils.interpolate(
                "50%",
                "0%",
                smoothStep(normalizedProgress)
              );
            } else {
              y = "0%";
            }

            let scale;
            if (cardProgress < 0.4) {
              const normalizedProgress = cardProgress / 0.4;
              scale = gsap.utils.interpolate(
                0.25,
                0.75,
                smoothStep(normalizedProgress)
              );
            } else if (cardProgress < 0.6) {
              const normalizedProgress = (cardProgress - 0.4) / 0.2;
              scale = gsap.utils.interpolate(
                0.75,
                1,
                smoothStep(normalizedProgress)
              );
            } else {
              scale = 1;
            }

            let x, rotate, rotationY;
            if (cardProgress < 0.6) {
              x = index === 0 ? "100%" : index === 1 ? "0%" : "-100%";
              rotate = index === 0 ? -5 : index === 1 ? 0 : 5;
              rotationY = 0;
            } else if (cardProgress < 1) {
              const normalizedProgress = (cardProgress - 0.6) / 0.4;
              x = gsap.utils.interpolate(
                index === 0 ? "100%" : index === 1 ? "0%" : "-100%",
                "0%",
                smoothStep(normalizedProgress)
              );
              rotate = gsap.utils.interpolate(
                index === 0 ? -5 : index === 1 ? 0 : 5,
                0,
                smoothStep(normalizedProgress)
              );

              rotationY = smoothStep(normalizedProgress) * 180;
            } else {
              x = "0%";
              rotate = 0;
              rotationY = 180;
            }

            gsap.set(cardId, {
              y: y,
              x: x,
              rotate: rotate,
              scale: scale,
            });

            if (innerCard) {
              gsap.set(innerCard, {
                rotationY: rotationY,
              });
            }
          });
        },
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => {
      // Kill all ScrollTriggers first
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Revert the context last
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef}>
      <section className="relative mt-[4rem] lg:px-[4rem] md:px-[3rem] px-[2rem] skills">
        <div className="relative flex items-center skills-header">
          <h2 className="text-[clamp(1rem,2vw,1.2rem)] font-[SpeziaMedium] text-left">
            What I Do
          </h2>
          <p className="font-[SpeziaMedium] absolute left-1/2 transform -translate-x-1/2 text-[clamp(0.75rem,1.5vw,1rem)] text-black text-center whitespace-nowrap">
            When tech is personal, it's not just code—it's craftsmanship.
          </p>
        </div>
      </section>
      <section className="cards">
        <div className="cards-container">
          <div className="card" id="skill-card-1">
            <div className="card-wrapper">
              <div className="flip-card-inner">
                <SkillCardBack
                  skillsList={[
                    "React",
                    "TypeScript",
                    "Tailwind",
                    "GSAP",
                    "Next.js",
                    "Vite",
                  ]}
                  coverImg="./icons/kokeshi_cross_dark.svg"
                  coverText="Front End"
                  className="flip-card-back"
                />
                <SkillCardFront
                  color="#e6d9f5"
                  coverImg="./icons/kokeshi_cross_dark.svg"
                  coverText="Front End"
                  className="flip-card-front"
                />
              </div>
            </div>
          </div>

          <div className="card" id="skill-card-2">
            <div className="card-wrapper">
              <div className="flip-card-inner">
                <SkillCardBack
                  skillsList={[
                    "Node.js",
                    "Express",
                    "MySQL",
                    "PostgreSQL",
                    "Docker",
                    "AWS",
                  ]}
                  coverImg="./icons/kokeshi_cross_dark.svg"
                  coverText="Back End"
                  className="flip-card-back"
                />
                <SkillCardFront
                  color="#ffd1f1"
                  coverImg="./icons/kokeshi_cross_dark.svg"
                  coverText="Back End"
                  className="flip-card-front"
                />
              </div>
            </div>
          </div>

          <div className="card" id="skill-card-3">
            <div className="card-wrapper">
              <div className="flip-card-inner">
                <SkillCardBack
                  skillsList={[
                    "Python",
                    "TensorFlow",
                    "PyTorch",
                    "AWS",
                    "MLOps",
                    "Scikit-learn",
                  ]}
                  coverImg="./icons/kokeshi_cross_dark.svg"
                  coverText="AI/ML"
                  className="flip-card-back"
                />
                <SkillCardFront
                  color="#fce0ae"
                  coverImg="./icons/kokeshi_cross_dark.svg"
                  coverText="AI/ML"
                  className="flip-card-front"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;
