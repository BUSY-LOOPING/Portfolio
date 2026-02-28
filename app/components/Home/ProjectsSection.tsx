import React, {
  useMemo,
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "OpenWav",
    description:
      "Production-grade audio sharing platform using microservices architecture with React.js frontend and Node.js/Express backend services.",
    subtext: "Full Stack Social Audio Platform",
    tag: "FULL STACK",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop",
    github: "https://github.com/yourusername/openwav",
    live: "https://openwav.io",
  },
  {
    title: "Self-Hosted Cloud",
    description:
      "Private cloud running multiple production web apps and self-hosted LLM models using Docker, NGINX reverse proxy, and automated deployment pipelines.",
    subtext: "Achieving 99.8% Uptime",
    tag: "INFRA",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    github: "https://github.com/yourusername/homelab",
    live: null,
  },
  {
    title: "Instagram Clone",
    description:
      "Scalable social media app using Flutter/Dart frontend with Java and Swift backend services, implementing microservices for auth, media upload, and real-time chat.",
    subtext: "Cross-Platform Mobile Application",
    tag: "MOBILE",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    github: "https://github.com/yourusername/instagram-clone",
    live: null,
  },
  {
    title: "DeepLearning Optimizers",
    description:
      "Interactive visualization of popular Deep Learning optimizers built on Gradient Descent, demonstrating optimization algorithms and their convergence patterns.",
    subtext: "Machine Learning Visualization",
    tag: "AI / ML",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    github: "https://github.com/yourusername/dl-optimizers",
    live: "https://dl-optimizers.vercel.app",
  },
];

const BAR_COUNT = 60;
const HIGHLIGHT_RADIUS = 2;

const RulerBars = ({
  refs,
  thickIndices,
}: {
  refs: React.MutableRefObject<HTMLDivElement[]>;
  thickIndices: Set<number>;
}) => (
  <div className="absolute left-0 w-full flex justify-between pointer-events-none">
    {Array.from({ length: BAR_COUNT }).map((_, i) => (
      <div
        key={i}
        ref={(el) => {
          if (el) refs.current[i] = el;
        }}
        style={{ height: "12px", opacity: 0.3 }}
        className={`bg-white ${thickIndices.has(i) ? "w-[2px]" : "w-[1px]"}`}
      />
    ))}
  </div>
);

const ProjectsSection = () => {
  const topRefs = useRef<HTMLDivElement[]>([]);
  const bottomRefs = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const rulerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);

  // Refs instead of state for values read inside GSAP callbacks
  const currentProjectRef = useRef(0);
  const isHoveringRef = useRef(false);

  // State only for triggering React re-renders
  const [currentProject, setCurrentProject] = useState(0);

  const topThickIndices = useMemo(() => {
    const s = new Set<number>();
    while (s.size < 10) s.add(Math.floor(Math.random() * BAR_COUNT));
    return s;
  }, []);

  const bottomThickIndices = useMemo(() => {
    const s = new Set<number>();
    while (s.size < 10) s.add(Math.floor(Math.random() * BAR_COUNT));
    return s;
  }, []);

  const animateRuler = useCallback((position: number) => {
    const animate = (refs: HTMLDivElement[]) => {
      refs.forEach((bar, i) => {
        if (!bar) return;
        const distance = Math.abs(i - position);
        const h =
          distance === 0 ? 24 : distance <= 2 ? 18 : distance <= 4 ? 14 : 12;
        const opacity =
          distance <= HIGHLIGHT_RADIUS ? 1 - distance * 0.15 : 0.3;
        gsap.to(bar, {
          height: `${h}px`,
          opacity,
          duration: 0.1,
          ease: "none",
        });
      });
    };
    animate(topRefs.current);
    animate(bottomRefs.current);
  }, []);

  useLayoutEffect(() => {
    const ruler = rulerRef.current;
    if (!ruler) return;

    const onMove = (e: MouseEvent) => {
      const rect = ruler.getBoundingClientRect();
      const hoverIndex = Math.floor(
        ((e.clientX - rect.left) / rect.width) * BAR_COUNT,
      );
      animateRuler(hoverIndex);
    };

    const onEnter = () => {
      isHoveringRef.current = true;
    };
    const onLeave = () => {
      isHoveringRef.current = false;
    };

    ruler.addEventListener("mousemove", onMove);
    ruler.addEventListener("mouseenter", onEnter);
    ruler.addEventListener("mouseleave", onLeave);

    return () => {
      ruler.removeEventListener("mousemove", onMove);
      ruler.removeEventListener("mouseenter", onEnter);
      ruler.removeEventListener("mouseleave", onLeave);
    };
  }, [animateRuler]);

  // ── Scroll trigger — empty deps, built once ───────────────────────────────
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${(projects.length - 1) * window.innerHeight}`,
        pin: section,
        pinSpacing: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (projects.length - 1),
          duration: 0.5,
          ease: "power2.inOut",
        },
        onUpdate: (self) => {
          // Ruler follows scroll only when not hovering
          if (!isHoveringRef.current) {
            animateRuler(self.progress * BAR_COUNT);
          }

          const next = Math.round(self.progress * (projects.length - 1));
          if (next === currentProjectRef.current) return;

          currentProjectRef.current = next;
          setCurrentProject(next);

          // Image transition
          if (imageRef.current) {
            gsap.fromTo(
              imageRef.current,
              { opacity: 0, scale: 0.92, y: 12 },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.45,
                ease: "power2.out",
              },
            );
          }

          // Text transition
          if (textRef.current) {
            gsap.fromTo(
              textRef.current,
              { opacity: 0, y: 14 },
              { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
            );
          }

          // Tag transition
          if (tagRef.current) {
            gsap.fromTo(
              tagRef.current,
              { opacity: 0, x: -8 },
              { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" },
            );
          }
        },
      });
    }, section);

    return () => ctx.revert();
  }, []); // ← empty — never rebuilds

  const p = projects[currentProject];

  return (
    <section
      ref={sectionRef}
      className="relative bg-black h-[100vh] lg:px-[4rem] md:px-[3rem] px-[2rem] w-full text-[#f9f4eb] flex overflow-hidden"
    >
      {/* ── Left: Text ── */}
      <div className="flex-1 my-[10%] flex flex-col justify-between items-start">
        {/* Top label */}
        <div className="flex items-center gap-3">
          <h3 className="text-[12px] font-[SpeziaMono] opacity-40 tracking-widest uppercase">
            Featured Projects
          </h3>
          <span className="text-[10px] opacity-30 font-[SpeziaMono]">
            {String(currentProject + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        {/* Project text — fades on change */}
        <div ref={textRef} className="flex flex-col gap-6">
          {/* Tag + year */}
          <div className="flex items-center gap-3">
            <span
              ref={tagRef}
              className="text-[11px] font-[SpeziaMono] bg-white/10 px-2 py-1 rounded-[3px] tracking-wider"
            >
              {p.tag}
            </span>
            <span className="text-[11px] font-[SpeziaMono] opacity-30">
              {p.year}
            </span>
          </div>

          {/* Title */}
          <h2 className="font-[SpeziaMedium] text-[clamp(2rem,3.5vw,3rem)] leading-7.5 -tracking-[2px]">
            {p.title}
          </h2>

          {/* Description */}
          <p className="font-[SpeziaMedium] text-[clamp(0.9rem,1.2vw,1.1rem)] leading-relaxed -tracking-[0.5px] mr-[6rem] text-[#c8c4bc]">
            {p.description}
            <br />
            <span className="text-[#6b6864] mt-1 block">{p.subtext}</span>
          </p>

          {/* CTA links */}
          <div className="flex gap-3">
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/60 text-[12px] font-[SpeziaMono] px-3 py-1.5 rounded-[3px] transition-colors duration-200"
            >
              GITHUB
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FFF47D] text-black text-[12px] font-[SpeziaMono] px-3 py-1.5 rounded-[3px] hover:bg-yellow-300 transition-colors duration-200"
              >
                LIVE
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex gap-2 items-center">
          {projects.map((_, i) => (
            <div
              key={i}
              className="rounded-full bg-white transition-all duration-300"
              style={{
                width: i === currentProject ? "20px" : "4px",
                height: "4px",
                opacity: i === currentProject ? 1 : 0.25,
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Right: Image + Rulers ── */}
      <div
        ref={rulerRef}
        className="flex-1 relative flex items-center justify-center"
      >
        {/* Top ruler */}
        <div className="absolute top-[10%] left-0 w-full">
          <RulerBars refs={topRefs} thickIndices={topThickIndices} />
        </div>

        {/* Project image */}
        <img
          ref={imageRef}
          src={p.image}
          alt={p.title}
          className="max-w-[65%] max-h-[55%] object-cover rounded-lg pointer-events-none select-none shadow-2xl"
        />

        {/* Bottom ruler */}
        <div className="absolute bottom-[10%] left-0 w-full">
          <RulerBars refs={bottomRefs} thickIndices={bottomThickIndices} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
