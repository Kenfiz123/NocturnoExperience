"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { initIntroMotion } from "./introMotion";
import { initDescentMotion } from "./descentMotion";
import { initVoidMotion } from "./voidMotion";
import { initAwakeningMotion } from "./awakeningMotion";

export function useSceneMotion() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    console.log("[NOCTURNO] useSceneMotion MOUNTED!", {
      prefersReducedMotion,
      windowWidth: window.innerWidth,
      introEl: !!document.querySelector('[data-scene="intro"]'),
      titleEl: !!document.querySelector('[data-display-title]'),
    });

    if (prefersReducedMotion) {
      console.log("[NOCTURNO] prefers-reduced-motion is TRUE, returning early!");
      return;
    }

    const mm = gsap.matchMedia();

    // Desktop & Tablet Landscape Setup (>= 769px)
    mm.add("(min-width: 769px)", () => {
      console.log("[NOCTURNO] mm.add min-width: 769px executing!");
      initIntroMotion(false);
      initDescentMotion(false);
      initVoidMotion(false);
      initAwakeningMotion(false);
      
      const all = ScrollTrigger.getAll();
      console.log("[NOCTURNO] Triggers created:", all.length);
      all.forEach((st, i) => {
        console.log(`[NOCTURNO] Trigger ${i}:`, {
          trigger: st.trigger,
          start: st.start,
          end: st.end,
          progress: st.progress,
        });
      });
    });

    // Mobile & Small Tablet Setup (<= 768px)
    mm.add("(max-width: 768px)", () => {
      console.log("[NOCTURNO] mm.add max-width: 768px executing!");
      initIntroMotion(true);
      initDescentMotion(true);
      initVoidMotion(true);
      initAwakeningMotion(true);
      console.log("[NOCTURNO] Mobile Triggers created:", ScrollTrigger.getAll().length);
    });

    // Global Active Scene Indicator in TopNav (pure DOM updates, zero React re-renders)
    const sceneIds = ["intro", "descent", "void", "awakening"];
    const navTriggers: ScrollTrigger[] = [];

    sceneIds.forEach((id) => {
      const sceneEl = document.querySelector(`[data-scene="${id}"]`);
      if (!sceneEl) return;

      const trigger = ScrollTrigger.create({
        trigger: sceneEl,
        start: "top 55%",
        end: "bottom 45%",
        onToggle: (self) => {
          if (self.isActive) {
            document.querySelectorAll<HTMLElement>("[data-nav-scene]").forEach((btn) => {
              if (btn.getAttribute("data-nav-scene") === id) {
                btn.classList.add("text-[#B50016]", "font-bold");
              } else {
                btn.classList.remove("text-[#B50016]", "font-bold");
              }
            });
          }
        },
      });
      navTriggers.push(trigger);
    });

    return () => {
      navTriggers.forEach((t) => t.kill());
      mm.revert();
    };
  }, []);
}

export default useSceneMotion;
