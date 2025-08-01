import { SkillCardBack } from "~/components";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const dotRef = useRef(null);
  const frontEndRef = useRef(null);
  const backEndRef = useRef(null);
  const aiMlRef = useRef(null);
  const cards = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    // Dot bounce up
    tl.to(dotRef.current, {
      y: -30,
      duration: 0.6,
      ease: "power1.out",
      onStart: () => {
        gsap.fromTo(
          ".trail-dot",
          { y: 0, opacity: 0 },
          { y: -30, opacity: 0.8, duration: 0.6, ease: "power1.out" }
        );
      },
    });

    // Dot bounce back down
    tl.to(dotRef.current, {
      y: 0,
      duration: 0.6,
      ease: "bounce.out",
      onStart: () => {
        gsap.fromTo(
          ".trail-dot",
          { y: -30, opacity: 0.8 },
          { y: 0, opacity: 0, duration: 0.6, ease: "power1.out" }
        );
      },
    });

    tl.to({}, { duration: 0.6 }); // Empty tween as a delay

    const float = (element: any, delay = 0) => {
      let tween = gsap.to(element, {
        y: -15,
        duration: 1.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay,
      });
      return tween;
    };

    let t1 = float(frontEndRef.current, 0);
    let t2 = float(backEndRef.current, 0.3);
    let t3 = float(aiMlRef.current, 0.6);

    const cards = [frontEndRef, backEndRef, aiMlRef];
    cards.forEach((card, index) => {
      if (!card.current) return;

      gsap.to(card.current, { 
        ease: "power1.inOut",
        zIndex: 10-index,
        y: index === 0 ? "+=240" : index === 1 ? "+=210" : "+=180",
        x: index === 0 ? 120 : index === 1 ? 0 : -120,
        rotation: index === 0 ? -10 : index === 1 ? 5 : 10,
        scale: 0.7,
        scrollTrigger: {
          trigger: card.current,
          scrub: true,
          start: "bottom 60%",
          end: "bottom top",
          onEnter: () => {
            t1.pause();
            t2.pause();
            t3.pause();
          },
          // onLeave: () => {
          //   t1.resume();
          //   t2.resume();
          //   t3.resume();
          // },
          onLeaveBack: () => {
            t1.resume();
            t2.resume();
            t3.resume();
          }
        },

      });

      gsap.to(card.current, {
        
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: card.current,
        start: "top 15%",  // fade starts when scroll reaches 10% from top
        end: "bottom top",   // tweak this range as needed
        scrub: true,
      },
    });
    });
  }, []);

  return (
    <section className="min-h-[100vh] lg:px-[4rem] md:px-[3rem] px-[2rem] mt-[3rem] flex flex-col">
      <div className="w-full flex space-between items-center mb-6">
        <div className="flex flex-row gap-[1.5rem]">
          <img
            src="/icons/kokeshi_cross_dark.svg"
            alt="kokeshi cross"
            className="w-2.5 h-2.5"
          />
          <img
            src="/icons/kokeshi_cross_dark.svg"
            alt="kokeshi cross"
            className="w-2.5 h-2.5"
          />
          <img
            src="/icons/kokeshi_cross_dark.svg"
            alt="kokeshi cross"
            className="w-2.5 h-2.5"
          />
        </div>

        <div className="flex flex-1 justify-center gap-[15rem]">
          <img
            src="/icons/kokeshi_cross_dark.svg"
            alt="kokeshi cross"
            className="w-2.5 h-2.5"
          />
          <img
            src="/icons/kokeshi_cross_dark.svg"
            alt="kokeshi cross"
            className="w-2.5 h-2.5"
          />
          <img
            src="/icons/kokeshi_cross_dark.svg"
            alt="kokeshi cross"
            className="w-2.5 h-2.5"
          />
        </div>

        <div className="flex flex-row gap-[1.5rem]">
          <img
            src="/icons/kokeshi_cross_dark.svg"
            alt="kokeshi cross"
            className="w-2.5 h-2.5"
          />
          <img
            src="/icons/kokeshi_cross_dark.svg"
            alt="kokeshi cross"
            className="w-2.5 h-2.5"
          />
          <img
            src="/icons/kokeshi_cross_dark.svg"
            alt="kokeshi cross"
            className="w-2.5 h-2.5"
          />
        </div>
      </div>

      <div className="w-full justify-center items-center flex flex-col mb-[3rem]">
        <div className="flex flex-col items-start">
          <p className="">Hello I'm</p>
          <h1
            style={{ fontSize: "max(10rem, 13vw)" }}
            className="font-[SpeziaNarrow] text-[17rem] leading-none -tracking-[18px] -ml-[20px] -mt-[25px]"
          >
            DHRUV YADAV
          </h1>
        </div>
      </div>

      <div ref={cards} className="flex flex-row justify-center items-center gap-[1.5rem] mb-[3rem] ">
        <div ref={frontEndRef}>
          <SkillCardBack
            color="#e5daf6"
            coverImg="./icons/kokeshi_cross_dark.svg"
            coverText="FRONT END"
          />
        </div>
        <div ref={backEndRef}>
          <SkillCardBack
            color="#ffd2f3"
            coverImg="./icons/kokeshi_cross_dark.svg"
            coverText="BACK END"
          />
        </div>
        <div ref={aiMlRef}>
          <SkillCardBack
            color="#fcdeac"
            coverImg="./icons/kokeshi_cross_dark.svg"
            coverText="AI/ML"
          />
        </div>
      </div>

      {/* <div className="flex-1 shrink"></div> */}

      <div className="mt-[5rem] flex flex-row w-full">
        <article className="w-[40%] font-[SpeziaMedium]">
          <h2 className="inline-block text-[0.7rem] py-1 px-1.5 uppercase bg-black text-[#f0ece5] rounded-[3px]">
            About me
          </h2>
          <p className="landing-intro-para leading-none -tracking-[1px]">
            Nice to meet you. I’m Dhruv, full-stack developer & machine learning
            explorer based in Toronto building tools and apps that just work —
            and scale.
          </p>
        </article>

        <div className="flex justify-center items-center w-[20%]">
          <div className="relative">
            {/* Main dot */}
            <div
              ref={dotRef}
              className="rounded-full bg-black h-1.5 aspect-square relative z-10"
            ></div>

            {/* Trail dot */}
            <div className="trail-dot absolute top-0 left-0 rounded-full bg-black/40 h-1.5 aspect-square z-0"></div>
          </div>
        </div>
        <div className="w-[40%] text-[0.7rem] leading-none -tracking-[1px] flex justify-end items-end">
          <p>UI/UX & WEB DEVELOPER</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;