import { SkillCardBack, SkillCardFront } from "~/components";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeroSection = () => {
  const dotRef = useRef(null);
  const frontEndRef = useRef(null);
  const backEndRef = useRef(null);
  const aiMlRef = useRef(null);
  const cards = useRef(null);
  const [isMediumOrLarger, setIsMediumOrLarger] = useState(
    typeof window !== "undefined" &&
      window.matchMedia("(min-width: 425px)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleResize = (e: MediaQueryListEvent) => {
      setIsMediumOrLarger(e.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  useGSAP(() => {
    // Check if screen is medium size or larger
    const isMediumOrLarger = window.matchMedia("(min-width: 425px)").matches;

    if (!isMediumOrLarger) return; // Exit early on small screens

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
          { y: -30, opacity: 0.8, duration: 0.6, ease: "power1.out" },
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
          { y: 0, opacity: 0, duration: 0.6, ease: "power1.out" },
        );
      },
    });

    tl.to({}, { duration: 0.6 }); // Empty tween as a delay

    const cards = [frontEndRef, backEndRef, aiMlRef];
    cards.forEach((card, index) => {
      if (!card.current) return;

      gsap.to(card.current, {
        ease: "power1.inOut",
        zIndex: 10 - index,
        y: index === 0 ? "+=240" : index === 1 ? "+=210" : "+=180",
        x: index === 0 ? 120 : index === 1 ? 0 : -120,
        rotation: index === 0 ? -10 : index === 1 ? 5 : 10,
        scale: 0.7,
        scrollTrigger: {
          trigger: "#hero-cards-wrapper",
          scrub: true,
          start: "bottom 60%",
          end: "bottom top",
        },
      });

      gsap.to(card.current, {
        opacity: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: card.current,
          start: "top 15%",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, [isMediumOrLarger]);

  return (
    <section className="min-h-[100vh] lg:px-[4rem] md:px-[3rem] px-[2rem] pt-[3rem] flex flex-col">
      <div className="mt-[3rem] flex flex-col">
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
        <div className="w-full justify-center md:items-center flex flex-col">
          <div className="flex flex-col items-start">
            <p className="">Hello I'm</p>
            <h1 className="font-[SpeziaNarrow] text-[clamp(4rem,15vw,10rem)] -ml-[5px] tracking-[clamp(-9.48666px,2vw,-3.84px)] leading-[clamp(52px,11vw,130px)] flex flex-col md:flex-row gap-0 md:gap-3">
              <span>DHRUV</span>
              <span>YADAV</span>
            </h1>
          </div>
        </div>
        <span className="h-10"></span>
        <div
          id="hero-cards-wrapper"
          ref={cards}
          className="flex-1 flex flex-row justify-center items-center gap-[1.5rem] mb-[3rem] "
        >
          <div ref={frontEndRef}>
            <SkillCardFront
              id="hero-card-1"
              className="max-w-[11rem] hero-cards"
              color="#e5daf6"
              coverImg="./icons/kokeshi_cross_dark.svg"
              coverText="FRONT END"
            />
          </div>
          <div ref={backEndRef}>
            <SkillCardFront
              id="hero-card-2"
              className="max-w-[11rem] hero-cards"
              color="#ffd2f3"
              coverImg="./icons/kokeshi_cross_dark.svg"
              coverText="BACK END"
            />
          </div>
          <div ref={aiMlRef}>
            <SkillCardFront
              id="hero-card-3"
              className="max-w-[11rem] hero-cards"
              color="#fcdeac"
              coverImg="./icons/kokeshi_cross_dark.svg"
              coverText="AI/ML"
            />
          </div>
        </div>
      </div>
      <div className="mt-auto mb-[2rem] flex flex-col md:flex-row w-full md:items-end gap-4">
        <article className="mb-[3rem] md:mb-0 w-full md:w-[40%] font-[SpeziaMedium]">
          <h2 className="inline-block py-1 px-1.5 uppercase bg-black text-[#f0ece5] rounded-[3px] text-[clamp(12px,1.2vw,1rem)]">
            ABOUT ME
          </h2>
          <p className="mt-3 landing-intro-para leading-none -tracking-[1px]">
            I'm Dhruv, a full-stack developer and AI engineer based in Toronto.
            <span className="text-[#75736f]">
              From training neural networks to deploying scalable backends — I
              create tools that think and scale.
            </span>
          </p>
        </article>
        <div className="flex justify-between md:justify-center items-center w-full md:w-[20%]">
          <div className="relative">
            <div
              ref={dotRef}
              className="rounded-full bg-black h-1.5 aspect-square relative z-10"
            ></div>
            <div className="trail-dot absolute top-0 left-0 rounded-full bg-black/40 h-1.5 aspect-square z-0"></div>
          </div>
          <div className="md:hidden w-auto text-[12px] leading-none -tracking-[1px]">
            <p>UI/UX & WEB DEVELOPER</p>
          </div>
        </div>
        <div className="hidden md:flex w-[40%] text-[12px] leading-none -tracking-[1px] justify-end">
          <p>UI/UX & WEB DEVELOPER</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
