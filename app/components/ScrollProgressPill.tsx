import { useRef, useEffect, useState } from "react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Project = {
  number: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  highlights: string[];
  github: string;
  live: string | null;
  year: string;
  reverse: boolean;
};

interface ScrollProgressPillProps {
  projects: Project[];
}

const ScrollProgressPill = ({ projects }: ScrollProgressPillProps) => {
  const pillRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const section = document.getElementById("projects");
    if (!section || !pillRef.current) return;

    // Set initial state — hidden off to the right
    gsap.set(pillRef.current, { x: "120%", opacity: 0 });

    // Slide in when section enters, slide out when leaving back up
    ScrollTrigger.create({
      trigger: section,
      start: "top 60%",
      end: "bottom bottom",
      onEnter: () => {
        gsap.to(pillRef.current, {
          x: "0%",
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.4)",   // slight overshoot pop
        });
      },
      onLeaveBack: () => {
        gsap.to(pillRef.current, {
          x: "120%",
          opacity: 0,
          duration: 0.35,
          ease: "power2.in",
        });
      },
    });

    // Progress tracking
    ScrollTrigger.create({
      trigger: section,
      start: "top 60%",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        progressRef.current = self.progress;
        const idx = Math.min(
          Math.floor(self.progress * projects.length),
          projects.length - 1,
        );
        setActiveIndex(idx);
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div
    style={{ transform: "translateY(-50%) translateX(120%)", opacity: 0 }}
      ref={pillRef}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50"
      // No inline opacity/transform — GSAP owns these now
    >
      <div className="bg-black rounded-full px-2 py-3 flex flex-col items-center gap-2 min-w-[2.2rem]">
        {projects.map((p, i) => (
          <React.Fragment key={p.number}>
            <span
              className="font-[SpeziaMono] text-[9px] leading-none transition-colors duration-300"
              style={{ color: i <= activeIndex ? "#ffffff" : "#555555" }}
            >
              {p.number}
            </span>

            {i < projects.length - 1 && (
              <div className="flex flex-col gap-[3px] items-center">
                {[0, 1, 2, 3].map((tick) => {
                  const globalTick = i * 4 + tick;
                  const totalTicks = (projects.length - 1) * 4;
                  const currentTick = progressRef.current * totalTicks;
                  const distance = Math.abs(globalTick - currentTick);

                  const brightness =
                    distance === 0 ? 1 :
                    distance <= 1  ? 0.75 :
                    distance <= 2  ? 0.45 :
                    distance <= 3  ? 0.2  : 0;

                  return (
                    <div
                      key={tick}
                      className="rounded-full transition-all duration-150"
                      style={{
                        width: brightness > 0 && distance <= 1 ? "12px" : tick === 1 || tick === 2 ? "8px" : "5px",
                        height: "1.5px",
                        backgroundColor: `rgba(255, 255, 255, ${brightness > 0 ? brightness : 0.15})`,
                      }}
                    />
                  );
                })}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ScrollProgressPill;
