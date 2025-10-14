import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router";
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
              ease: "power2.out",
            });
            gsap.to(iconRef.current, {
              opacity: 1,
              x: 0,
              rotation: 0,
              ease: "power2.out",
            });
          } else {
            gsap.to(logoRef.current, {
              opacity: 1,
              x: 0,
              ease: "power2.out",
            });
            gsap.to(iconRef.current, {
              opacity: 0,
              x: -100,
              rotation: -360,
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
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
            >
              INTRO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/process"
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
            >
              PROCESS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/works"
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
            >
              WORKS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>

      <NavLink
        to="/resume"
        className={({ isActive }) =>
          `nav-item nav-link ${isActive ? "active" : ""}`
        }
      >
        RESUME
      </NavLink>
    </header>
  );
};

export default Header;
