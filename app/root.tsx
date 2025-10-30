import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";

import React, { useEffect } from "react";
import type { Route } from "./+types/root";
import "./app.css";
// import "lenis/dist/lenis.css"; // Import Lenis CSS

if (typeof window !== "undefined" && gsap?.registerPlugin) {
  gsap.registerPlugin(ScrollTrigger);
}

// Declare Lenis on window type
declare global {
  interface Window {
    lenis?: Lenis;
  }
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  useEffect(() => {
    let burst: any;
    let handleClick: (e: MouseEvent) => void;
    let lenis: Lenis;

    // Initialize Lenis smooth scroll
    lenis = new Lenis();

      function raf(time: number) {
        lenis.raf(time * 1000);
        ScrollTrigger.update();
      }

      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

    // Store Lenis instance globally
    window.lenis = lenis;

    // Integrate Lenis with GSAP ScrollTrigger
    // lenis.on("scroll", ScrollTrigger.update);


    // Initialize mojs burst animation
    (async () => {
      const mojs = await import("@mojs/core");
      
      // Create a fixed container for mojs
      const container = document.createElement('div');
      container.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999;';
      document.body.appendChild(container);
      
      burst = new mojs.Burst({
        parent: container,
        left: 0,
        top: 0,
        count: 4,
        radius: { 0: 40 },
        degree: 120, // Changed from -120 to 120 for right rotation
        rotate: -80, // Rotate the entire burst 90 degrees to the right
        children: {
          shape: "line",
          stroke: "#000",
          strokeWidth: 7,
          scale: { 1: 0 },
          duration: 600,
          // rotate: -15,
          degreeShift: 0, // Can adjust this for additional rotation
        },
      });

      handleClick = (e: MouseEvent) => {
        const isDark = window.getComputedStyle(e.target as Element).backgroundColor === "rgb(0, 0, 0)";
        
        // Use clientY instead of pageY for fixed positioning
        burst.tune({
          x: e.clientX,
          y: e.clientY,
          children: { stroke: isDark ? "#fff" : "#000" },
        }).replay();
      };

      document.addEventListener("click", handleClick);
    })();

    return () => {
      // Cleanup
      if (handleClick) document.removeEventListener("click", handleClick);
      if (lenis) {
        lenis.destroy();
        delete window.lenis;
      }
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
