"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { initIntroMotion } from "./introMotion";
import { initDescentMotion } from "./descentMotion";
import { initVoidMotion } from "./voidMotion";
import { initAwakeningMotion } from "./awakeningMotion";
import { initIntroToDescent } from "./transitions/introToDescent";
import { initDescentToVoid } from "./transitions/descentToVoid";
import { initVoidToAwakening } from "./transitions/voidToAwakening";
import { initNavigationMotion } from "./navigationMotion";

export function useSceneMotion() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Active Navigation Scene Tracker (functional for all users, including reduced-motion)
    const navTriggers = initNavigationMotion();

    // Check accessibility reduced-motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // If reduced-motion is preferred, bypass cinematic scrub timelines and pins
    if (prefersReducedMotion) {
      return () => {
        navTriggers.forEach((t) => t.kill());
      };
    }

    const mm = gsap.matchMedia();

    // =========================================================================
    // DESKTOP MOTION SETUP (>= 769px): Full cinematic camera movement & void pin
    // =========================================================================
    mm.add("(min-width: 769px)", () => {
      initIntroMotion(false);
      initIntroToDescent(false);
      initDescentMotion(false);
      initDescentToVoid(false);
      initVoidMotion(false);
      initVoidToAwakening(false);
      initAwakeningMotion(false);
    });

    // =========================================================================
    // MOBILE MOTION SETUP (<= 768px): Restrained movement without pinning
    // =========================================================================
    mm.add("(max-width: 768px)", () => {
      initIntroMotion(true);
      initIntroToDescent(true);
      initDescentMotion(true);
      initDescentToVoid(true);
      initVoidMotion(true);
      initVoidToAwakening(true);
      initAwakeningMotion(true);
    });

    // Controlled refresh once components mount and layout computes
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      navTriggers.forEach((t) => t.kill());
      mm.revert();
    };
  }, []);
}

export default useSceneMotion;
