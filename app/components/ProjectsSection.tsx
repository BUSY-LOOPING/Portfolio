import React, { useMemo, useEffect, useRef } from 'react';
import gsap from 'gsap';

const ProjectsSection = () => {
  const topRefs = useRef<HTMLDivElement[]>([]);
  const bottomRefs = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const barCount = 60;
  const highlightRadius = 2;

  // Random thicker indices
  const topThickIndices = useMemo(() => {
    const indices = new Set<number>()
    while (indices.size < 10) {
      indices.add(Math.floor(Math.random() * barCount));
    }
    return indices;
  }, [])

  const bottomThickIndices = useMemo(() => {
    const indices = new Set<number>();
    while (indices.size < 10) {
      indices.add(Math.floor(Math.random() * barCount));
    }
    return indices;
  }, [])

  // Handle mouse move effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const barWidth = rect.width / barCount;
      const hoverIndex = Math.floor(relativeX / barWidth);

      // Animate top bars
      topRefs.current.forEach((bar, i) => {
        const distance = Math.abs(i - hoverIndex);
        const scaleY = distance === 0 ? 2 : distance === 1 ? 1.5 : distance === 2 ? 1.2 : 1;
        const opacity = distance <= highlightRadius ? 1 - distance * 0.3 : 0.1;
        gsap.to(bar, {
          height: `${scaleY * 12}px`,
          opacity: opacity,
          duration: 0.2,
          ease: 'power2.out',
        });
      });

      // Animate bottom bars
      bottomRefs.current.forEach((bar, i) => {
        const distance = Math.abs(i - hoverIndex);
        const scaleY = distance === 0 ? 2 : distance === 1 ? 1.5 : distance === 2 ? 1.2 : 1;
        const opacity = distance <= highlightRadius ? 1 - distance * 0.3 : 0.1;
        gsap.to(bar, {
          height: `${scaleY * 12}px`,
          opacity: opacity,
          duration: 0.2,
          ease: 'power2.out',
        });
      });
      return true;
    }

    const resetBars = () => {
      topRefs.current.forEach((bar) => {
        gsap.to(bar, {
          height: '12px',
          opacity: 1,
          duration: 0.2,
          ease: 'power2.out',
        })
      });
      bottomRefs.current.forEach((bar) => {
        gsap.to(bar, {
          height: '12px',
          opacity: 1,
          duration: 0.2,
          ease: 'power2.out',
        });
      });
      return true;
    }

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', resetBars);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', resetBars);
    };
  }, [])

  return (
    <section className='relative bg-black h-[100vh] lg:px-[4rem] md:px-[3rem] px-[2rem] w-full text-[#f9f4eb] flex'>
      <div className='flex-1 my-[10%] flex flex-col justify-between items-start'>
        <h3 className='text-[14px]'>FEATURED PROJECTS</h3>
        <p className='font-[SpeziaMedium] leading-7.5 -tracking-[1px] text-[2rem] mr-[10rem]'>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </span><br />
          <span className="text-[#8e8b86]">ut labore et dolore magna aliqua.</span>
        </p>
      </div>

      <div
        className='flex-1 relative flex items-center justify-center'
        ref={containerRef}
      >
        {/* Top Ruler */}
        <div className='absolute top-[20%] left-0 w-full flex justify-between'>
          {Array.from({ length: barCount }).map((_, i) => (
            <div
              key={`top-${i}`}
              ref={(el) => el && (topRefs.current[i] = el)}
              className={`h-3 bg-white opacity-100 ${
                topThickIndices.has(i) ? 'w-[2px]' : 'w-[1px]'
              }`}
            />
          ))} 
        </div>

        <img src="./images/project1.png" alt="" />

        {/* Bottom Ruler */}
        <div className='absolute bottom-[20%] left-0 w-full flex justify-between'>
          {Array.from({ length: barCount }).map((_, i) => (
            <div
              key={`bottom-${i}`}
              ref={(el) => el && (bottomRefs.current[i] = el)}
              className={`h-3 bg-white opacity-100 ${
                bottomThickIndices.has(i) ? 'w-[2px]' : 'w-[1px]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
