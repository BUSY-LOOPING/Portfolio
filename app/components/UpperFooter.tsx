import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const UpperFooter = () => {
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef(null)
  const imageRef = useRef(null)
  const cursorRef = useRef(null)
  const tooltipRef = useRef(null)
  const xToRef = useRef(null)
  const yToRef = useRef(null)
  const xTooltipToRef = useRef(null)
  const yTooltipToRef = useRef(null)
  const leftProcessRef = useRef(null)
  const rightProcessRef = useRef(null)
  const leftTrail1Ref = useRef(null)
  const leftTrail2Ref = useRef(null)
  const leftTrail3Ref = useRef(null)
  const rightTrail1Ref = useRef(null)
  const rightTrail2Ref = useRef(null)
  const rightTrail3Ref = useRef(null)

  useEffect(() => {
    if (cursorRef.current && tooltipRef.current) {
      xToRef.current = gsap.quickTo(cursorRef.current, 'x', { duration: 0.5, ease: 'power3' })
      yToRef.current = gsap.quickTo(cursorRef.current, 'y', { duration: 0.5, ease: 'power3' })
      xTooltipToRef.current = gsap.quickTo(tooltipRef.current, 'x', { duration: 0.6, ease: 'power3' })
      yTooltipToRef.current = gsap.quickTo(tooltipRef.current, 'y', { duration: 0.6, ease: 'power3' })
    }

    const handleMouseMove = (e) => {
      if (isHovering && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        if (xToRef.current && yToRef.current) {
          xToRef.current(x)
          yToRef.current(y)
        }

        if (xTooltipToRef.current && yTooltipToRef.current) {
          xTooltipToRef.current(x + 20)
          yTooltipToRef.current(y - 40)
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isHovering])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(leftTrail1Ref.current, {
        x: -150,
        opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
        }
      })

      gsap.to(leftTrail2Ref.current, {
        x: -150,
        opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
        }
      })

      gsap.to(leftTrail3Ref.current, {
        x: -150,
        opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
        }
      })

      gsap.to(rightTrail1Ref.current, {
        x: 150,
        opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
        }
      })

      gsap.to(rightTrail2Ref.current, {
        x: 150,
        opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
        }
      })

      gsap.to(rightTrail3Ref.current, {
        x: 150,
        opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
        }
      })
    })

    return () => ctx.revert()
  }, [])

  const handleMouseEnter = () => {
    setIsHovering(true)
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        width: '200px',
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out'
      })
    }
    if (leftProcessRef.current) {
      gsap.to(leftProcessRef.current, {
        x: 20,
        y: -10,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
    if (rightProcessRef.current) {
      gsap.to(rightProcessRef.current, {
        x: -20,
        y: -10,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        width: '0px',
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out'
      })
    }
    if (leftProcessRef.current) {
      gsap.to(leftProcessRef.current, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
    if (rightProcessRef.current) {
      gsap.to(rightProcessRef.current, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  const processSteps = [
    { number: '01', label: 'DEFINE' },
    { number: '02', label: 'DESIGN' },
    { number: '03', label: 'BUILD' },
    { number: '04', label: 'RUN' }
  ]

  return (
    <div className="mt-[800px] min-h-screen upper-footer w-full relative z-[99] overflow-hidden">
      <a 
        href="#process"
        className="absolute top-12 left-12 px-6 py-3 rounded-full text-sm font-medium transition-all hover:bg-[#FFF47D] cursor-pointer group"
      >
        <span className="relative z-10 group-hover:text-black">↘ TO PROCESS</span>
      </a>

      <div className="absolute left-32 top-1/3 flex items-center gap-4">
        <div ref={leftProcessRef} className="bg-black text-white px-4 py-2 text-sm font-medium relative z-20">
          PROCESS
        </div>
        <div ref={leftTrail1Ref} className="bg-[#e5daf6] w-16 h-8 opacity-0"></div>
        <div ref={leftTrail2Ref} className="bg-[#ffd2f3] w-16 h-8 opacity-0"></div>
        <div ref={leftTrail3Ref} className="bg-[#fcdca6] w-16 h-8 opacity-0"></div>
        <img 
          src="/icons/kokeshi_cross_dark.svg" 
          alt="" 
          className="w-4 h-4"
        />
      </div>

      <div className="absolute right-32 top-1/3 flex items-center gap-4">
        <img 
          src="/icons/kokeshi_cross_dark.svg" 
          alt="" 
          className="w-4 h-4"
        />
        <div ref={rightTrail3Ref} className="bg-[#fcdca6] w-16 h-8 opacity-0"></div>
        <div ref={rightTrail2Ref} className="bg-[#ffd2f3] w-16 h-8 opacity-0"></div>
        <div ref={rightTrail1Ref} className="bg-[#e5daf6] w-16 h-8 opacity-0"></div>
        <div ref={rightProcessRef} className="bg-black text-white px-4 py-2 text-sm font-medium relative z-20">
          PROCESS
        </div>
      </div>

      <a
        href="#process"
        ref={containerRef}
        className="flex flex-col items-center justify-center min-h-screen relative cursor-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative text-center">
          <div className="flex items-center justify-center">
            <h1 className="text-[12rem] font-black leading-none tracking-tighter">
              MY
            </h1>
            <div 
              ref={imageRef}
              className="overflow-hidden h-[9rem] ml-4 opacity-0 flex items-center"
              style={{
                width: '0px'
              }}
            >
              <img 
                src="/images/my_process.webp"
                alt="Process illustration"
                className="h-full w-auto object-cover rounded-sm"
              />
            </div>
          </div>
          <h1 className="text-[12rem] font-black leading-none tracking-tighter -mt-8">
            PROCESS
          </h1>
        </div>

        <p className="text-center text-lg mt-8 max-w-md -tracking-[0.5px] leading-6">
          <span className="block">Four Steps to a New</span>
          <span className="block">Website Look.</span>
        </p>

        <div className="flex items-center gap-6 mt-16">
          {processSteps.map((step, index) => (
            <div key={step.number} className="flex items-center gap-[2px]">
              <span className="text-[#afb4bd] text-sm">{step.number}</span>
              <span className="text-sm font-medium">{step.label}</span>
            </div>
          ))}
        </div>

        {isHovering && (
          <>
            <div 
              ref={tooltipRef}
              className="absolute pointer-events-none bg-[#FFF47D] px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap top-0 left-0 z-50"
            >
              ↘ TO PROCESS
            </div>
            <div 
              ref={cursorRef}
              className="absolute pointer-events-none text-2xl -translate-x-1/2 -translate-y-1/2 top-0 left-0 z-40"
            >
              👆
            </div>
          </>
        )}
      </a>

      <div className="absolute bottom-12 right-12">
        <img 
          src="/icons/kokeshi_cross_dark.svg" 
          alt="" 
          className="w-6 h-6"
        />
      </div>
    </div>
  )
}

export default UpperFooter
