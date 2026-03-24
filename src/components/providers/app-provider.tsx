"use client";

import { type ReactNode, useEffect } from "react";
import Lenis from "lenis";

import { AgentProvider } from "@/components/providers/agent-provider";

export function AppProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get("capture") === "1") {
      return;
    }

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true
    });

    let frame = 0;

    const onFrame = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(onFrame);
    };

    frame = window.requestAnimationFrame(onFrame);

    return () => {
      window.cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return <AgentProvider>{children}</AgentProvider>;
}
