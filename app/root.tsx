import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import React, { useEffect } from "react";
import type { Route } from "./+types/root";
import "./app.css";

if (typeof window !== "undefined" && gsap?.registerPlugin) {
  gsap.registerPlugin(ScrollTrigger);
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

    (async () => {
      const mojs = await import("@mojs/core");
      burst = new mojs.Burst({
        parent: document.body,
        left:0,
        top:0,
        count: 4,
        radius: { 0: 50 },
        degree: -60,
        angle: 30,
        children: {
          shape: "line",
          stroke: "#000",
          strokeWidth: 7,
          scale: { 1: 0 },
          duration: 500,
        },
      });

      handleClick = (e: MouseEvent) => {
        const isDark = window.getComputedStyle(e.target as Element).backgroundColor === "rgb(0, 0, 0)";
        burst.tune({
          x: e.pageX,
          y: e.pageY,
          children: { stroke: isDark ? "#fff" : "#000" },
        }).replay();
      };

      document.addEventListener("click", handleClick);
    })();

    return () => {
      if (handleClick) document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
      <Outlet/>
  );
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
