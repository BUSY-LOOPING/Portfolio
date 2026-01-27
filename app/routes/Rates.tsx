import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Rates = () => {
  const priceCardRef = useRef<HTMLDivElement>(null);
  const stackItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const arcCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Reset initial states before animating
    gsap.set(".headline", { y: 0, opacity: 1 });
    gsap.set(".price-card-container", { scale: 1, rotation: 0, opacity: 1 });
    gsap.set(".subtext", { y: 0, opacity: 1 });

    // Hero animations
    gsap.fromTo(".headline", 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.2,
      }
    );

    gsap.fromTo(".price-card-container",
      { scale: 0, rotation: -45, opacity: 0 },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        delay: 0.8,
      }
    );

    gsap.fromTo(".subtext",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 1,
      }
    );

    // 3D card flip on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!priceCardRef.current) return;
      
      const width = window.innerWidth;
      const xPos = e.clientX;
      const yPos = e.clientY;
      
      const tiltX = (yPos / window.innerHeight - 0.5) * 20;
      const normX = xPos / width;
      const rotateY = (normX - 0.5) * 360;

      gsap.to(priceCardRef.current, {
        rotationX: -tiltX,
        rotationY: rotateY,
        transformPerspective: 1000,
        duration: 0.8,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Stack list scroll highlighting
    stackItemsRef.current.forEach((item) => {
      if (!item) return;
      ScrollTrigger.create({
        trigger: item,
        start: "top 55%",
        end: "bottom 45%",
        onEnter: () => item.classList.add("active"),
        onLeave: () => item.classList.remove("active"),
        onEnterBack: () => item.classList.add("active"),
        onLeaveBack: () => item.classList.remove("active"),
      });
    });

    // Infinite arc animation
    const isMobile = window.innerWidth <= 768;
    const gap = isMobile ? 14 : 15;
    const totalCards = arcCardsRef.current.length;
    let scrollProgress = 0;

    ScrollTrigger.create({
      trigger: "#cards-section",
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        scrollProgress = self.progress * 100;
      },
    });

    const arcTicker = () => {
      arcCardsRef.current.forEach((card, i) => {
        if (!card) return;
        
        let rawAngle = (i * gap) + scrollProgress;
        let centeredAngle = rawAngle % (totalCards * gap);
        if (centeredAngle > (totalCards * gap) / 2) centeredAngle -= totalCards * gap;
        if (centeredAngle < -(totalCards * gap) / 2) centeredAngle += totalCards * gap;
        
        let yOffset = Math.abs(centeredAngle) * (isMobile ? 0.8 : 1.2);

        gsap.set(card, {
          rotation: centeredAngle,
          y: yOffset,
          zIndex: 100 - Math.round(Math.abs(centeredAngle)),
        });
      });
    };

    gsap.ticker.add(arcTicker);

    // Refresh ScrollTrigger after component mounts
    ScrollTrigger.refresh();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(arcTicker);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const toggleFAQ = (e: React.MouseEvent<HTMLDivElement>) => {
    const faqItem = e.currentTarget.parentElement;
    faqItem?.classList.toggle("open");
  };

  const stackItems = [
    "REACT / NEXT.JS",
    "FLUTTER / ANDROID",
    "NODE / NEST / PHP",
    "PYTHON / C++ / C#",
    "TENSORFLOW / PYTORCH",
    "SQL / MONGO / POSTGRES",
    "MACHINE LEARNING",
  ];

  const features = [
    { title: "Frontend Mastery.", icon: "⚛️", desc: "Fluent in React, Next.js, Flutter, & Tailwind. Responsive, pixel-perfect UIs." },
    { title: "Backend Power.", icon: "🔙", desc: "Robust APIs with Node.js, Express, Nest, PHP, & ASP.NET." },
    { title: "Data & ML.", icon: "🤖", desc: "Integration of TensorFlow, Sklearn, & PyTorch models into production apps." },
    { title: "Database.", icon: "💾", desc: "Architecting scalable data layers with SQL, PostgreSQL, & MongoDB." },
    { title: "Languages.", icon: "🗣️", desc: "Polyglot coding in C++, C#, Java, & Python." },
    { title: "Cross Platform.", icon: "📱", desc: "Native Android (Java) & Cross-platform (Flutter) development." },
  ];

  const faqs = [
    { q: "Do you handle both Frontend and Backend?", a: "Yes. I provide full-stack solutions using React/Next.js for frontend and Node/Nest/PHP/ASP.NET for backend." },
    { q: "Can you integrate AI into my website?", a: "Absolutely. I can build and deploy models using TensorFlow/PyTorch and serve them via Python or Node APIs." },
    { q: "What mobile technologies do you use?", a: "I develop using Flutter for cross-platform efficiency and native Java for Android specific requirements." },
    { q: "How do you handle databases?", a: "I am proficient in both SQL (PostgreSQL) and NoSQL (MongoDB) environments, optimizing for performance and scale." },
    { q: "Do you work with legacy code?", a: "Yes, my experience with PHP, WordPress, and C++ allows me to maintain and upgrade legacy systems efficiently." },
    { q: "Is the first consultation free?", a: "Yes, the first call to discuss your architecture and requirements is completely free." },
    { q: "Can you build custom ML models?", a: "Yes, using Scikit-learn for statistical models or Deep Learning frameworks for complex tasks like vision or NLP." },
  ];

  return (
    <div className="bg-[#050505] text-[#f4f4f0]">

      <section className="min-h-screen flex flex-col justify-center items-center px-5 md:px-10 perspective-[1000px]">
        <div className="flex flex-col items-center leading-[0.85] z-[1] pointer-events-none">
          <h1 className="headline text-[16vw] md:text-[14vw] leading-[0.8] -tracking-[clamp(3.9px,0.9vw,12px)] font-[SpeziaNarrow] uppercase text-[#f9f4eb] text-center m-0">
            SIMPLE
          </h1>
          <h1 className="headline text-[16vw] md:text-[14vw] leading-[0.8] -tracking-[clamp(3.9px,0.9vw,12px)] font-[SpeziaNarrow] uppercase text-[#f9f4eb] text-center m-0">
            FIXED PRICE
          </h1>
        </div>

        <div className="price-card-container absolute top-1/2 left-1/2 w-[150px] md:w-[200px] h-[210px] md:h-[280px] z-10 -translate-x-1/2 -translate-y-1/2">
          <div ref={priceCardRef} className="price-card w-full h-full relative" style={{ transformStyle: 'preserve-3d' }}>
            <div className="card-face card-front absolute w-full h-full bg-[#f9f4eb] text-[#0a0a0a] rounded-xl flex flex-col justify-center items-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-[2]">
              <div className="absolute top-[15px]">+</div>
              <div className="absolute bottom-[15px] left-[15px]">♦</div>
              <div className="absolute bottom-[15px] right-[15px]">♦</div>
              <div className="text-[1rem] md:text-[1.2rem] font-bold uppercase">STARTING</div>
              <div className="text-[1rem] md:text-[1.2rem] font-bold uppercase">AT</div>
              <div className="text-[3.5rem] md:text-[5rem] font-bold leading-[0.9] flex flex-col items-center">
                <span>30</span>
                <div className="flex items-start">
                  <span className="text-[1rem] md:text-[1.2rem] mt-[10px]">CAD/HR</span>
                </div>
              </div>
              <div className="absolute bottom-[15px]">+</div>
            </div>
            <div className="card-face card-back absolute w-full h-full bg-[#0a0a0a] text-[#e8e6e1] border-2 border-[#e8e6e1] rounded-xl flex flex-col justify-center items-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-[1]" style={{ backgroundImage: 'radial-gradient(#333 15%, transparent 16%)', backgroundSize: '20px 20px' }}>
              <div className="absolute top-[15px] left-[15px]">+</div>
              <div className="absolute top-[15px] right-[15px]">+</div>
              <div className="absolute bottom-[15px] left-[15px]">+</div>
              <div className="absolute bottom-[15px] right-[15px]">+</div>
              <div className="text-[1rem] md:text-[1.2rem] font-bold uppercase text-center">FIRST CALL</div>
              <div className="text-[3rem] font-bold">FREE</div>
              <div className="text-[4rem]">♦</div>
            </div>
          </div>
        </div>

        <div className="mt-[240px] md:mt-[320px] text-center max-w-[700px] z-[2] pointer-events-none font-[SpeziaMedium]">
          <p className="text-[clamp(22px,2vw,35px)] text-[#888] leading-[clamp(2px, 0.1vw,5px)] -tracking-[clamp(1px,0.1vw,10px)] ">
            Finding a developer who understands both <span className="text-white">Modern Web</span> and <span className="text-white">Machine Learning</span> is rare. Subscribing to me bridges that gap.
          </p>
        </div>
      </section>

      <section id="stack-list" className="flex flex-col justify-center items-center min-h-[80vh] max-w-[800px] mx-auto px-5 pt-0">
        <ul className="list-none w-full uppercase text-white text-[1.1rem] p-0">
          {stackItems.map((item, index) => (
            <li
              key={index}
              ref={(el) => (stackItemsRef.current[index] = el)}
              className="stack-item flex justify-between items-baseline py-[25px] w-full"
            >
              <span className="font-bold mr-[10px]">{String(index + 1).padStart(2, '0')}.</span>
              <span className="flex-grow border-b-2 border-dotted border-[#333] mx-[15px] relative -top-[6px]"></span>
              <span className="text-right">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="cards-section" className="flex flex-col justify-center items-center overflow-hidden px-5 py-[60px]">
        <div className="text-center z-[2] absolute top-1/4">
          <div className="text-[12vw] font-bold uppercase leading-[0.9]">30 CAD</div>
          <div className="text-[12vw] font-bold uppercase leading-[0.9] text-white">PER HOUR</div>
        </div>

        <div className="relative w-full h-[300px] md:h-[500px] flex justify-center items-end perspective-[1000px] mb-[50px]" style={{ maskImage: 'linear-gradient(to top, transparent, black 15%, black 85%, transparent)' }}>
          {[...Array(14)].map((_, i) => (
            <div
              key={i}
              ref={(el) => (arcCardsRef.current[i] = el)}
              className="arc-card absolute w-[10vw] min-w-[80px] max-w-[130px] h-[14vw] min-h-[120px] max-h-[190px] bg-[#2a6bbd] border-4 border-white rounded-lg shadow-[0_15px_40px_rgba(0,0,0,0.6)] top-0 flex justify-center items-center overflow-hidden"
            >
              <img src="https://placehold.co/400x600/2a6bbd/2a6bbd.png?text=%20" alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>


        <div className="flex flex-col md:flex-row justify-between w-full max-w-[1200px] mt-auto px-5 pb-10 uppercase text-[0.9rem] text-[#888] gap-[10px] md:gap-0 items-center md:items-start">
          <div>♦ Full Stack x Machine Learning</div>
          <div>Mobile x Backend ♦</div>
        </div>
      </section>

      <section id="features" className="flex flex-col justify-center max-w-[1200px] mx-auto px-5 py-[60px]">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr] py-10 border-b border-[#333] items-start gap-[15px] md:gap-0 ${index === 0 ? 'border-t' : ''}`}
          >
            <div className="text-[1.5rem] text-[#888] font-[SpeziaNarrow]">{feature.title}</div>
            <div className="text-[1.5rem] font-semibold text-white mb-[5px] md:mb-0">{feature.icon}</div>
            <div className="text-[1.2rem] text-[#888] leading-[1.5] font-[SpeziaNarrow]"  dangerouslySetInnerHTML={{ __html: feature.desc.replace(/React, Next.js, Flutter, & Tailwind|Node.js, Express, Nest, PHP, & ASP.NET|TensorFlow, Sklearn, & PyTorch|SQL, PostgreSQL, & MongoDB|C\+\+, C#, Java, & Python/g, (match) => `<span class="text-white">${match}</span>`) }}></div>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto w-full px-5 py-[60px]">
        <h2 className="text-[2rem] mb-[60px] font-normal pl-0">Technical Q&A.</h2>
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item border-b border-[#333] flex justify-end w-full ${index === 0 ? 'border-t' : ''}`}>
            <div className="w-full md:w-1/2 cursor-pointer" onClick={toggleFAQ}>
              <div className="py-[30px] flex justify-between items-center text-[1.2rem] font-medium">
                {faq.q} <span className="plus text-[1.5rem] transition-transform duration-300">+</span>
              </div>
              <div className="faq-answer text-[#888] text-[1.1rem] leading-[1.6]">
                <p className="pb-[30px]">{faq.a}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Footer CTA */}
      <section id="footer" className="flex flex-col justify-center items-center min-h-[50vh] p-10">
        <div className="text-center max-w-[600px] w-full">
          <p className="text-[2rem] mb-10 leading-[1.3]">Ready to build intelligent web solutions?</p>
          <div className="flex gap-[10px] justify-center flex-wrap">
            <input
              type="email"
              placeholder="E-MAIL"
              className="bg-white border-none p-[15px_20px]uppercase w-[250px] rounded text-black"
            />
            <button className="bg-[#d4cd33] border-none p-[15px_30px] font-bold uppercase rounded cursor-pointer text-black">
              ↪ ENTER
            </button>
          </div>
        </div>
        <div className="mt-auto text-white">✦</div>
      </section>
    </div>
  );
};

export default Rates;
