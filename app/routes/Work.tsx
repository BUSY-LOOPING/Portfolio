import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollProgressPill from "../components/ScrollProgressPill";

const projects = [
  {
    number: "01",
    tag: "FULL STACK",
    title: "OpenWav",
    description:
      "Production-grade audio sharing platform built with a microservices architecture — React.js frontend, Node.js/Express backend, real-time audio streaming.",
    image: "/images/projects/openwav.webp",
    stack: ["React.js", "Node.js", "Express", "Microservices"],
    highlights: [
      "Microservices architecture for scalable audio handling",
      "Real-time audio streaming and sharing",
      "Full authentication and user management system",
    ],
    github: "https://github.com/BUSY-LOOPING/OpenWav",
    live: null,
    year: "2025",
    reverse: false,
  },
  {
    number: "02",
    tag: "AI / ML",
    title: "FaceNet TensorFlow 2.0",
    description:
      "Implementation of FaceNet — a deep learning face recognition model that generates face embeddings using TensorFlow 2.0.",
    image: "/images/projects/facenet.webp",
    stack: ["Python", "TensorFlow 2.0", "Deep Learning", "NumPy"],
    highlights: [
      "State-of-the-art face embedding generation",
      "Built on TensorFlow 2.0 with modern Keras API",
      "Supports real-time face recognition pipelines",
    ],
    github: "https://github.com/BUSY-LOOPING/FaceNet-Tensorflow2.0",
    live: null,
    year: "2024",
    reverse: true,
  },
  {
    number: "03",
    tag: "AI / ML",
    title: "DeepLearning Optimizers",
    description:
      "Interactive visualization of popular Deep Learning optimizers built on Gradient Descent — SGD, Adam, RMSProp and more with convergence demos.",
    image: "/images/projects/dl-optimizers.webp",
    stack: ["Python", "NumPy", "Matplotlib", "Jupyter"],
    highlights: [
      "Side-by-side convergence comparison of 6+ optimizers",
      "Smooth step and loss landscape visualizations",
      "Educational tool for understanding gradient descent variants",
    ],
    github: "https://github.com/BUSY-LOOPING/DeepLearning-Optimizers",
    live: null,
    year: "2024",
    reverse: false,
  },
  {
    number: "04",
    tag: "AI / ML",
    title: "Reinforcement Learning",
    description:
      "Reinforcement Learning from scratch — bandit algorithms, dynamic programming for Bellman's equation, and clean Python implementations of core RL math.",
    image: "/images/projects/rl.webp",
    stack: ["Python", "NumPy", "Matplotlib", "OpenAI Gym"],
    highlights: [
      "Multi-armed bandit algorithm implementations",
      "Bellman equation solved via dynamic programming",
      "Clean, documented code from mathematical foundations",
    ],
    github: "https://github.com/BUSY-LOOPING/Reinforcement-Learning",
    live: null,
    year: "2024",
    reverse: true,
  },
  {
    number: "05",
    tag: "MOBILE",
    title: "Instagram Clone",
    description:
      "Full-featured Instagram clone built with Flutter and Firebase — posts, stories, real-time chat, and pixel-perfect UI matching the original app.",
    image: "/images/projects/instagram-clone.webp",
    stack: ["Flutter", "Dart", "Firebase", "Firestore"],
    highlights: [
      "Pixel-perfect UI matching Instagram's design language",
      "Real-time chat and notifications via Firebase",
      "Published on Google Play Store",
    ],
    github: "https://github.com/BUSY-LOOPING/Instagram-Clone",
    live: "https://play.google.com/store/apps/developer?id=Busy+Looping",
    year: "2023",
    reverse: false,
  },
  {
    number: "06",
    tag: "FULL STACK",
    title: "Sync",
    description:
      "A real-time sync and collaboration tool — built to keep data and state in sync across clients seamlessly.",
    image: "/images/projects/sync.webp",
    stack: ["JavaScript", "WebSockets", "Node.js"],
    highlights: [
      "Real-time bi-directional state sync",
      "WebSocket-based live collaboration",
      "Lightweight and fast client-server protocol",
    ],
    github: "https://github.com/BUSY-LOOPING/Sync",
    live: null,
    year: "2023",
    reverse: true,
  },
];

const TagBar = ({ number, tag }: { number: string; tag: string }) => {
  const filled = parseInt(number);
  return (
    <div className="space-x-1 w-fit flex items-center">
      {Array.from({ length: filled - 1 }).map((_, i) => (
        <span key={i} className="w-3 h-[1.5rem] bg-black rounded-[3px]" />
      ))}
      <span className="bg-black text-[12px] text-white px-2 py-1 rounded-[3px] font-[SpeziaMono]">
        {tag}
      </span>
    </div>
  );
};

const ProjectRow = ({ project }: { project: (typeof projects)[0] }) => {
  return (
    <div
      className={`h-auto py-[10vh] flex flex-col gap-8 md:gap-[5rem] lg:gap-[10rem] ${
        project.reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Image column */}
      <div className="relative flex-shrink-0">
        <TagBar number={project.number} tag={project.tag} />

        <img
          src="/images/define.webp"
          alt={project.title}
          className="w-full rounded-md mt-[12px] md:max-w-[clamp(161px,21vw,260px)] md:aspect-[1.1/2.3] max-h-[32.5rem] md:object-cover"
        />

        {/* Stack pills */}
        <div className="flex flex-wrap gap-1 mt-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="border border-black/20 rounded-full px-2 py-[2px] text-[10px] font-[SpeziaMono]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Content column */}
      <div className="flex flex-col justify-between flex-1 md:self-stretch min-h-[400px]">
        <div className="flex items-start justify-between">
          <p className="text-[clamp(16px,1vw,18px)] font-[SpeziaMedium] max-w-sm">
            {project.description}
          </p>
          <span className="text-[#afb4bd] text-sm font-[SpeziaMono]">
            {project.year}
          </span>
        </div>

        <div className="space-y-1 font-[SpeziaMedium] tracking-tighter leading-[1.3] text-[clamp(22px,1.3vw,28px)]">
          <div className="flex gap-2 flex-wrap">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white text-[14px] px-3 py-1.5 rounded-[3px] font-[SpeziaMono] hover:bg-neutral-800 transition-colors"
            >
              <span>GITHUB</span>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-yellow-400 text-black text-[14px] px-3 py-1.5 rounded-[3px] font-[SpeziaMono] border border-black hover:bg-yellow-300 transition-colors"
              >
                <span>LIVE SITE</span>
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

          {/* Highlights */}
          <div className="mt-7 space-y-1">
            {project.highlights.map((h, i) => (
              <p key={i}>{h}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Process = () => {
  return (
    <>
      <ScrollProgressPill projects={projects} />
      <section className="lg:px-[4rem] md:px-[3rem] px-[2rem]" id="projects">
        {/* Header — same decorative cross grid as before */}
        <div className="min-h-[90dvh] flex flex-col">
          <div className="w-full flex space-between items-center mb-6">
            {/* ...your existing cross icon rows, unchanged... */}
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-[2rem]">
            <h2 className="mt-[40px] text-[clamp(5.0625rem,10vw,12rem)] font-black leading-[0.8] -tracking-[clamp(3.9px,0.9vw,12px)] font-[SpeziaNarrow]">
              <span className="relative -left-[5px]">SELECTED</span>
              <div className="flex items-baseline">
                <img
                  className="h-[0.71em] w-auto rounded-sm"
                  src="/gifs/mountain1.webp"
                  alt=""
                />
                <span>WORK</span>
              </div>
            </h2>

            <div className="font-[SpeziaMono] w-full md:w-[25rem] text-[clamp(12px,1.2vw,1rem)] leading-tight">
              {projects.map((p) => (
                <div key={p.number} className="flex justify-between">
                  <span>{p.number}</span>
                  <span>{p.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto mb-[2rem] flex flex-col md:flex-row w-full md:items-end gap-4">
            <article className="mb-[3rem] md:mb-0 w-full md:w-[40%] font-[SpeziaMedium]">
              <h2 className="inline-block py-1 px-1.5 uppercase bg-black text-[#f0ece5] rounded-[3px] text-[clamp(12px,1.2vw,1rem)]">
                OPEN SOURCE ✦
              </h2>
              <p className="mt-3 landing-intro-para leading-none -tracking-[1px]">
                Projects built in public — from AI tools to self-hosted
                infrastructure.
                <span className="text-[#75736f]">
                  {" "}
                  Every repo tells a different story.
                </span>
              </p>
            </article>
            <div className="hidden md:flex w-[40%] text-[12px] leading-none -tracking-[1px] justify-end">
              <p>UI/UX & WEB DEVELOPER</p>
            </div>
          </div>
        </div>

        {projects.map((project, i) => (
          <React.Fragment key={project.number}>
            <ProjectRow project={project} />
            {i < projects.length - 1 && (
              <div className="w-full bg-black/20 md:bg-black h-[1px] my-[1rem] md:my-0" />
            )}
          </React.Fragment>
        ))}
      </section>
    </>
  );
};

export default Process;
