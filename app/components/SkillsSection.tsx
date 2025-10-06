import Lenis from "lenis";
import { useEffect } from "react";
import { SkillCardBack, SkillCardFront } from "~/components";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const SkillsSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const smoothStep = (p: any) => p * p * (3 - 2 * p);

    ScrollTrigger.create({
      trigger: ".skills",
      start: "top top",
      end: `+=${window.innerHeight * 4}px`,
      pin: ".skills",
      pinSpacing: true,
    });

    ScrollTrigger.create({
      trigger: ".skills",
      start: "top top",
      end: `+=${window.innerHeight * 4}px`,
      onLeave: () => {
        const skillsSection = document.querySelector(".skills");
        // if (!skillsSection) alert("no skills section");
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
      trigger: ".skills",
      start: "top bottom",
      end: `+=${window.innerHeight * 4}px`,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        const headerProgress = gsap.utils.clamp(0, 1, progress / 0.9);
        const headerY = gsap.utils.interpolate(
          "400%",
          "0%",
          smoothStep(headerProgress)
        );
        gsap.set(".skills-header", {
          y: headerY,
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

          let opacity;
          if (cardProgress < 0.2) {
            const normalizedProgress = cardProgress / 0.2;
            opacity = smoothStep(normalizedProgress);
          } else {
            opacity = 1;
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

          gsap.set(innerCard, {
            rotationY: rotationY,
          });
        });
      },
    });
  }, []);

  return (
    <>
      <section className="mt-[4rem] lg:px-[4rem] md:px-[3rem] px-[2rem] skills">
        <div className="relative flex items-center skills-header">
          <h2 className="text-[1.2rem] font-[SpeziaMedium] text-left">
            What I Do
          </h2>
          <p className="font-[SpeziaMedium] absolute left-1/2 transform -translate-x-1/2 text-[1rem] text-black text-center whitespace-nowrap">
            When tech is personal, it's not just code—it's craftsmanship.
          </p>
        </div>
      </section>
      <section className="cards">
        <div className="cards-container">
          <div className="card" id="skill-card-1">
            <div className="card-wrapper">
              <div className="flip-card-inner">
                <SkillCardFront
                  skillsList={[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React",
                    "Vue",
                    "Angular",
                  ]}
                  coverImg="./icons/kokeshi_cross_dark.svg"
                  coverText="Front End Development"
                  className="flip-card-back"
                />
                <SkillCardBack
                  color="#e6d9f5"
                  coverImg="./icons/kokeshi_cross_dark.svg"
                  coverText="Cover etxt"
                  className="flip-card-front"
                />
              </div>
            </div>
          </div>

          <div className="card" id="skill-card-2">
            <div className="card-wrapper">
              <div className="flip-card-inner">
                <SkillCardFront
                  skillsList={[
                    "Node.js",
                    "Express",
                    "Django",
                    "Ruby on Rails",
                    "SQL",
                    "MongoDB",
                  ]}
                  coverImg="./icons/kokeshi_cross_dark.svg"
                  coverText="Back End Development"
                  className="flip-card-back"
                />
                <SkillCardBack
                  color="#ffd1f1"
                  coverImg="./icons/kokeshi_cross_dark.svg"
                  coverText="Cover etxt"
                  className="flip-card-front"
                />
              </div>
            </div>
          </div>

          <div className="card" id="skill-card-3">
            <div className="card-wrapper">
              <div className="flip-card-inner">
                <SkillCardFront
                  skillsList={[
                    "Python",
                    "R",
                    "TensorFlow",
                    "PyTorch",
                    "Keras",
                    "Scikit-learn",
                  ]}
                  coverImg="./icons/kokeshi_cross_dark.svg"
                  coverText="AI & Machine Learning"
                  className="flip-card-back"
                />
                <SkillCardBack
                  color="#fce0ae"
                  coverImg="./icons/kokeshi_cross_dark.svg"
                  coverText="Cover etxt"
                  className="flip-card-front"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
