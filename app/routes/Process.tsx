import React, { useEffect, useRef } from "react";

const Process = () => {
  const dotRef = useRef(null);

  return (
    <section className="lg:px-[4rem] md:px-[3rem] px-[2rem]">
      <div className="min-h-[90dvh] flex flex-col">
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
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-[2rem]">
          <h2 className="mt-[40px] text-[clamp(5.0625rem,10vw,12rem)] font-black leading-[0.8] -tracking-[clamp(3.9px,0.9vw,12px)] font-[SpeziaNarrow]">
            <span className="relative -left-[5px]">SIMPLE</span>
            <div className="flex items-baseline">
              <img
                className="h-[0.71em] w-auto rounded-sm"
                src="/gifs/mountain1.webp"
                alt=""
              />
              <span>PROCESS</span>
            </div>
          </h2>
          <div className="font-[SpeziaMono] w-full md:w-[8rem] text-[clamp(12px,1.2vw,1rem)] leading-tight">
            <div className="flex justify-between">
              <span>01</span>
              <span>DEFINE</span>
            </div>
            <div className="flex justify-between">
              <span>02</span>
              <span>DESIGN</span>
            </div>
            <div className="flex justify-between">
              <span>03</span>
              <span>BUILD</span>
            </div>
            <div className="flex justify-between">
              <span>04</span>
              <span>RUN</span>
            </div>
          </div>
        </div>

        <div className="mt-auto mb-[2rem] flex flex-col md:flex-row w-full md:items-end gap-4">
          <article className="mb-[3rem] md:mb-0 w-full md:w-[40%] font-[SpeziaMedium]">
            <h2 className="inline-block py-1 px-1.5 uppercase bg-black text-[#f0ece5] rounded-[3px] text-[clamp(12px,1.2vw,1rem)]">
              DYNAMIC PRICE $
            </h2>
            <p className="mt-3 landing-intro-para leading-none -tracking-[1px]">
              Websites can be quite complex – but the process to get there and
              the website itself shouldn't be.
              <span className="text-[#75736f]">
                Nobody wants to click through endless pages.
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
      </div>

      <div className="h-screen md:h-auto py-[10vh] flex flex-col md:flex-row gap-8 md:gap-[5rem] lg:gap-[10rem]">
        <div className="relative flex-shrink-0">
          <div className="text-[12px] w-fit bg-black text-white text-xs px-2 py-1 rounded-[3px]">
            DEFINE
          </div>
          <div className="absolute top-0 right-0 flex gap-1">
            <div className="w-3 h-[1.5rem] bg-black rounded-sm"></div>
            <div className="w-3 h-[1.5rem] bg-black rounded-sm"></div>
            <div className="w-3 h-[1.5rem] bg-black rounded-sm"></div>
          </div>
          <img
            src="/images/define.webp"
            alt="Mountain island"
            className="w-full rounded-md mt-[12px] md:max-w-[clamp(161px,21vw,260px)] md:aspect-[1.1/2.3] max-h-[32.5rem] md:object-cover"
          />

          <div className="space-x-0.5">
            <span className="border-1 rounded-full p-[2px] text-[8px]">DY</span>
            <span className="border-1 rounded-full p-[2px] text-[8px]">23</span>
          </div>
        </div>

        <div className="flex flex-col justify-between flex-1 md:self-stretch min-h-[400px]">
          <p className="text-[clamp(16px,1vw,18px)] font-[SpeziaMedium]">
            Define the foundations of your project.
          </p>

          <div className="space-y-1 font-[SpeziaMedium] tracking-tighter leading-[1.3] text-[clamp(22px,1.3vw,28px)]">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-black text-[14px] px-2 py-1 rounded-[3px] font-[SpeziaMono] border-black border-1">
              <span>VIEW EXAMPLE</span>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
            </div>
            <div className="mt-7 flex items-start gap-3">
              <span>Workshop</span>
            </div>
            <p>Define tasks</p>
            <p>Content Mapping</p>
            <p>Moodboard</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-black h-[1px]"></div>

      <div className="h-screen md:h-auto py-[10vh] flex flex-col md:flex-row-reverse gap-8 md:gap-[5rem] lg:gap-[10rem] pr-[7rem]">
        <div className="relative flex-shrink-0">
          <div className="space-x-1 w-fit flex">
            <span className="w-3 h-[1.5rem] bg-black rounded-[3px]"></span>
            <span className="bg-black text-[12px] text-white text-xs px-2 py-1 rounded-[3px]">DESIGN</span>
          </div>
          <div className="absolute top-0 right-0 flex gap-1">
            <div className="w-3 h-[1.5rem] bg-black rounded-[3px]"></div>
            <div className="w-3 h-[1.5rem] bg-black rounded-[3px]"></div>
          </div>
          <img
            src="/images/define.webp"
            alt="Mountain island"
            className="w-full rounded-md mt-[12px] md:max-w-[clamp(161px,21vw,260px)] md:aspect-[1.1/2.3] max-h-[32.5rem] md:object-cover"
          />

          <div className="space-x-0.5">
            <span className="border-1 rounded-full p-[2px] text-[8px]">DY</span>
            <span className="border-1 rounded-full p-[2px] text-[8px]">23</span>
          </div>
        </div>

        <div className="flex flex-col justify-between flex-1 md:self-stretch min-h-[400px]">
          <p className="text-[clamp(16px,1vw,18px)] font-[SpeziaMedium]">
            Based on the foundations, we build the web design for all pages
          </p>

          <div className="space-y-1 font-[SpeziaMedium] tracking-tighter leading-[1.3] text-[clamp(22px,1.3vw,28px)]">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-black text-[14px] px-2 py-1 rounded-[3px] font-[SpeziaMono] border-black border-1">
              <span>VIEW EXAMPLE</span>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
            </div>
            <div className="mt-7 flex items-start gap-3">
              <span>Design System</span>
            </div>
            <p>Animations</p>
            <p>UX/UI Design</p>
            <p>Behind the Scenes</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-black h-[1px]"></div>

      <div className="h-screen md:h-auto py-[10vh] flex flex-col md:flex-row gap-8 md:gap-[5rem] lg:gap-[10rem] pr-[7rem]">
        <div className="relative flex-shrink-0">
          <div className="space-x-1 w-fit flex">
            <span className="w-3 h-[1.5rem] bg-black rounded-[3px]"></span>
            <span className="w-3 h-[1.5rem] bg-black rounded-[3px]"></span>
            <span className="bg-black text-[12px] text-white text-xs px-2 py-1 rounded-[3px]">BUILD</span>
          </div>
          <div className="absolute top-0 right-0 flex gap-1">
            <div className="w-3 h-[1.5rem] bg-black rounded-[3px]"></div>
          </div>
          <img
            src="/images/define.webp"
            alt="Mountain island"
            className="w-full rounded-md mt-[12px] md:max-w-[clamp(161px,21vw,260px)] md:aspect-[1.1/2.3] max-h-[32.5rem] md:object-cover"
          />

          <div className="space-x-0.5">
            <span className="border-1 rounded-full p-[2px] text-[8px]">DY</span>
            <span className="border-1 rounded-full p-[2px] text-[8px]">23</span>
          </div>
        </div>

        <div className="flex flex-col justify-between flex-1 md:self-stretch min-h-[400px]">
          <p className="text-[clamp(16px,1vw,18px)] font-[SpeziaMedium]">
            The web design is implemented with modern technologies
          </p>

          <div className="space-y-1 font-[SpeziaMedium] tracking-tighter leading-[1.3] text-[clamp(22px,1.3vw,28px)]">
            
            <div className="mt-7 flex items-start gap-3">
              <span>Design System</span>
            </div>
            <p>Accessible development</p>
            <p>Content Management System</p>
            <p>Technical SEO</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-black h-[1px]"></div>

      <div className="h-screen md:h-auto py-[10vh] flex flex-col md:flex-row-reverse gap-8 md:gap-[5rem] lg:gap-[10rem] pr-[7rem]">
        <div className="relative flex-shrink-0">
          <div className="space-x-1 w-fit flex">
            <span className="w-3 h-[1.5rem] bg-black rounded-[3px]"></span>
            <span className="w-3 h-[1.5rem] bg-black rounded-[3px]"></span>
            <span className="w-3 h-[1.5rem] bg-black rounded-[3px]"></span>
            <span className="bg-black text-[12px] text-white text-xs px-2 py-1 rounded-[3px]">RUN</span>
          </div>
          <img
            src="/images/define.webp"
            alt="Mountain island"
            className="w-full rounded-md mt-[12px] md:max-w-[clamp(161px,21vw,260px)] md:aspect-[1.1/2.3] max-h-[32.5rem] md:object-cover"
          />

          <div className="space-x-0.5">
            <span className="border-1 rounded-full p-[2px] text-[8px]">DY</span>
            <span className="border-1 rounded-full p-[2px] text-[8px]">23</span>
          </div>
        </div>

        <div className="flex flex-col justify-between flex-1 md:self-stretch min-h-[400px]">
          <p className="text-[clamp(16px,1vw,18px)] font-[SpeziaMedium]">
            Your site goes live.
          </p>

          <div className="space-y-1 font-[SpeziaMedium] tracking-tighter leading-[1.3] text-[clamp(22px,1.3vw,28px)]">
            
            <div className="mt-7 flex items-start gap-3">
              <span>Quality Assurance</span>
            </div>
            <p>Handover</p>
            <p>Go-Live</p>
            <p>Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
