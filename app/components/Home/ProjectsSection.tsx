import React, { useMemo, useEffect, useRef, useState, useLayoutEffect  } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const topRefs = useRef<HTMLDivElement[]>([]);
  const bottomRefs = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [currentProject, setCurrentProject] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const barCount = 60;
  const highlightRadius = 2;

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern online shopping experience with seamless checkout and inventory management.",
      subtext: "Built with React and Node.js",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics platform for tracking engagement across multiple social channels.",
      subtext: "Real-time data visualization",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
      title: "Mobile Banking App",
      description:
        "Secure financial management with intuitive interface and biometric authentication.",
      subtext: "iOS and Android native",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    },
    {
      title: "Project Management Tool",
      description:
        "Collaborative workspace for teams to plan, track and deliver projects efficiently.",
      subtext: "Agile workflow support",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    },
  ];

  const topThickIndices = useMemo(() => {
    const indices = new Set<number>();
    while (indices.size < 10) {
      indices.add(Math.floor(Math.random() * barCount));
    }
    return indices;
  }, []);

  const bottomThickIndices = useMemo(() => {
    const indices = new Set<number>();
    while (indices.size < 10) {
      indices.add(Math.floor(Math.random() * barCount));
    }
    return indices;
  }, []);

  const animateRulerForProgress = (progress: number) => {
    const highlightPosition = progress * barCount;

    topRefs.current.forEach((bar, i) => {
      const distance = Math.abs(i - highlightPosition);
      const scaleY =
        distance === 0 ? 2 : distance <= 2 ? 1.5 : distance <= 4 ? 1.2 : 1;
      const opacity = distance <= 4 ? 1 - distance * 0.15 : 0.3;
      gsap.to(bar, {
        height: `${scaleY * 12}px`,
        opacity: opacity,
        duration: 0.1,
        ease: "none",
      });
    });

    bottomRefs.current.forEach((bar, i) => {
      const distance = Math.abs(i - highlightPosition);
      const scaleY =
        distance === 0 ? 2 : distance <= 2 ? 1.5 : distance <= 4 ? 1.2 : 1;
      const opacity = distance <= 4 ? 1 - distance * 0.15 : 0.3;
      gsap.to(bar, {
        height: `${scaleY * 12}px`,
        opacity: opacity,
        duration: 0.1,
        ease: "none",
      });
    });
  };

  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const barWidth = rect.width / barCount;
      const hoverIndex = Math.floor(relativeX / barWidth);

      topRefs.current.forEach((bar, i) => {
        const distance = Math.abs(i - hoverIndex);
        const scaleY =
          distance === 0 ? 2 : distance === 1 ? 1.5 : distance === 2 ? 1.2 : 1;
        const opacity = distance <= highlightRadius ? 1 - distance * 0.3 : 0.3;
        gsap.to(bar, {
          height: `${scaleY * 12}px`,
          opacity: opacity,
          duration: 0.2,
          ease: "power2.out",
        });
      });

      bottomRefs.current.forEach((bar, i) => {
        const distance = Math.abs(i - hoverIndex);
        const scaleY =
          distance === 0 ? 2 : distance === 1 ? 1.5 : distance === 2 ? 1.2 : 1;
        const opacity = distance <= highlightRadius ? 1 - distance * 0.3 : 0.3;
        gsap.to(bar, {
          height: `${scaleY * 12}px`,
          opacity: opacity,
          duration: 0.2,
          ease: "power2.out",
        });
      });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useLayoutEffect (() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${(projects.length - 1) * window.innerHeight}`,
        pin: section,
        pinSpacing: true,
        // anticipatePin: 1,
        markers: false,
        scrub: 1,
        snap: {
          snapTo: 1 / (projects.length - 1),
          duration: 0.5,
          ease: "power2.inOut",
        },
        onUpdate: (self) => {
          if (!isHovering) {
            animateRulerForProgress(self.progress);
          }

          const newProject = Math.round(self.progress * (projects.length - 1));
          if (newProject !== currentProject) {
            setCurrentProject(newProject);

            if (imageRef.current) {
              gsap.fromTo(
                imageRef.current,
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
              );
            }
          }
        },
      });
    });

    return () => ctx.revert();
  }, [currentProject, isHovering, projects.length]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black h-[100vh] lg:px-[4rem] md:px-[3rem] px-[2rem] w-full text-[#f9f4eb] flex"
    >
      <div className="flex-1 my-[10%] flex flex-col justify-between items-start">
        <h3 className="text-[14px]">FEATURED PROJECTS</h3>
        <div>
          <p className="font-[SpeziaMedium] leading-7.5 -tracking-[1px] text-[2rem] mr-[10rem]">
            <span>{projects[currentProject].title}</span>
          </p>
          <p className="font-[SpeziaMedium] leading-7.5 -tracking-[1px] text-[2rem] mr-[10rem] mt-4">
            <span>{projects[currentProject].description}</span>
            <br />
            <span className="text-[#8e8b86]">
              {projects[currentProject].subtext}
            </span>
          </p>
        </div>
      </div>
      <div
        className="flex-1 relative flex items-center justify-center"
        ref={containerRef}
      >
        <div className="absolute top-[20%] left-0 w-full flex justify-between">
          {Array.from({ length: barCount }).map((_, i) => (
            <div
              key={`top-${i}`}
              ref={(el) => el && (topRefs.current[i] = el)}
              className={`h-3 bg-white opacity-100 ${
                topThickIndices.has(i) ? "w-[2px]" : "w-[1px]"
              }`}
            />
          ))}
        </div>
        <img
          ref={imageRef}
          src={projects[currentProject].image}
          alt={projects[currentProject].title}
          className="max-w-[80%] max-h-[60%] object-cover rounded-lg"
        />
        <div className="absolute bottom-[20%] left-0 w-full flex justify-between">
          {Array.from({ length: barCount }).map((_, i) => (
            <div
              key={`bottom-${i}`}
              ref={(el) => el && (bottomRefs.current[i] = el)}
              className={`h-3 bg-white opacity-100 ${
                bottomThickIndices.has(i) ? "w-[2px]" : "w-[1px]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
