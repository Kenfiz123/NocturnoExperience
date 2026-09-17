"use client";

import React, { createContext, useContext, useEffect, useRef, useCallback, ReactNode } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface LenisScrollOptions {
  duration?: number;
  offset?: number;
}

interface LenisContextValue {
  getLenis: () => Lenis | null;
  scrollTo: (target: string | HTMLElement, options?: LenisScrollOptions) => void;
}

const LenisContext = createContext<LenisContextValue>({
  getLenis: () => null,
  scrollTo: () => {},
});

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Initialize Lenis smooth scroll engine
    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0.1 : 1.25,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: !prefersReducedMotion,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.1,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Synchronize Lenis scroll event to ScrollTrigger
    const onScroll = () => {
      ScrollTrigger.update();
    };
    lenis.on("scroll", onScroll);

    // Drive Lenis directly via GSAP ticker (unifies RAF loops and eliminates frame drift)
    const lenisTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(lenisTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(lenisTicker);
      lenis.off("scroll", onScroll);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const getLenis = useCallback(() => lenisRef.current, []);

  const scrollTo = useCallback((target: string | HTMLElement, options?: LenisScrollOptions) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        duration: options?.duration ?? 1.1,
        offset: options?.offset ?? 0,
      });
    } else {
      const el = typeof target === "string" ? document.querySelector(target) : target;
      if (el) {
        el.scrollIntoView();
      }
    }
  }, []);

  return (
    <LenisContext.Provider value={{ getLenis, scrollTo }}>
      {children}
    </LenisContext.Provider>
  );
}

export function useLenis() {
  return useContext(LenisContext);
}

export default useLenis;
