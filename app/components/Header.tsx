import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "+=150",
        scrub: 0.5,
        onUpdate: (self) => {
          if (self.progress > 0.1) {
            gsap.to(logoRef.current, {
              opacity: 0,
              x: -50,
              // duration: 0.3,
              ease: "power2.out",
            });
            gsap.to(iconRef.current, {
              opacity: 1,
              x: 0,
              rotation: 0,
              // duration: 0.4,
              ease: "power2.out",
            });
          } else {
            gsap.to(logoRef.current, {
              opacity: 1,
              x: 0,
              // duration: 0.3,
              ease: "power2.out",
            });
            gsap.to(iconRef.current, {
              opacity: 0,
              x: -100,
              rotation: -360,
              // duration: 0.4,
              ease: "power2.in",
            });
          }
        },
      });

      
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="w-full pt-[1.5rem] px-[2.5rem] flex flex-row justify-between text-[1rem]"
    >
      <div className="relative inline-block">
        <a href="/" className="inline-block logo-link">
          <div
            ref={logoRef}
            className="flex flex-row text-nowrap bg-black text-white gap-1.5 py-[8px] px-[12px] rounded-[3px] transition-all duration-300"
          >
            <span>DHRUV</span>
            <img src="/icons/kokeshi_cross.svg" alt="kokeshi cross" />
            <span>YADAV</span>
          </div>
        </a>

        <a href="/" className="inline-block absolute top-0 left-0 icon-link">
          <div
            ref={iconRef}
            className="w-[44px] h-[44px] bg-black rounded-full flex items-center justify-center opacity-0 transition-all duration-300"
            style={{ transform: "translateX(-100px) rotate(-360deg)" }}
          >
            <img
              src="/icons/kokeshi_cross.svg"
              alt="icon"
              className="w-4 h-4"
            />
          </div>
        </a>
      </div>

      <nav>
        <ul className="flex flex-row gap-1.5">
          <li className="nav-item">
            <a href="#intro" className="nav-link">INTRO</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">PROJECTS</a>
          </li>
          <li className="nav-item">
            <a href="#values" className="nav-link">VALUES</a>
          </li>
          <li className="nav-item">
            <a href="#background" className="nav-link">BACKGROUND</a>
          </li>
        </ul>
      </nav>

      <a href="/resume" className="nav-item nav-link">
        RESUME
      </a>
    </header>
  );
};

export default Header;
