"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function CinematicScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Accessibility check: disable scrubbed motion if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    const mm = gsap.matchMedia();

    // =========================================================================
    // DESKTOP MOTION SETUP (>= 769px): Full cinematic camera-like movement
    // =========================================================================
    mm.add("(min-width: 769px)", () => {
      // -----------------------------------------------------------------------
      // SCENE 01 — INTRO
      // -----------------------------------------------------------------------
      const introScene = document.querySelector<HTMLElement>('[data-scene="intro"]');
      const introTitle = introScene?.querySelector<HTMLElement>("[data-display-title]");
      const toriiFrame = introScene?.querySelector<HTMLElement>('[data-panel="torii-frame"]');
      const introVertical = introScene?.querySelector<HTMLElement>("[data-intro-vertical]");
      const introSubtitles = introScene?.querySelector<HTMLElement>("[data-intro-subtitles]");
      const introLabel = introScene?.querySelector<HTMLElement>("[data-scene-label]");

      if (introScene) {
        const introTl = gsap.timeline({
          scrollTrigger: {
            trigger: introScene,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // Giant NOCTURNO Title: Slow heavy creep upward and scale expansion
        if (introTitle) {
          introTl.to(
            introTitle,
            {
              yPercent: -15,
              scale: 1.06,
              ease: "none",
              transformOrigin: "left center",
            },
            0
          );
        }

        // Torii Manga Frame: Pulls forward closer to camera
        if (toriiFrame) {
          introTl.to(
            toriiFrame,
            {
              yPercent: -16,
              scale: 1.03,
              ease: "none",
              transformOrigin: "center center",
            },
            0
          );
        }

        // Vertical Japanese Typography: Slower parallax velocity
        if (introVertical) {
          introTl.to(
            introVertical,
            {
              yPercent: -8,
              ease: "none",
            },
            0
          );
        }

        // Scene Metadata & Subtitles: Slight upward drift & gentle fade approaching exit
        if (introSubtitles) {
          introTl.to(
            introSubtitles,
            {
              yPercent: -12,
              opacity: 0.5,
              ease: "none",
            },
            0
          );
        }

        if (introLabel) {
          introTl.to(
            introLabel,
            {
              yPercent: -10,
              opacity: 0.6,
              ease: "none",
            },
            0
          );
        }

        // Transition 01 -> 02: Page sliding over darkness
        gsap.to(introScene, {
          scrollTrigger: {
            trigger: introScene,
            start: "bottom 90%",
            end: "bottom top",
            scrub: 1,
          },
          yPercent: -8,
          ease: "none",
        });
      }

      // -----------------------------------------------------------------------
      // SCENE 02 — DESCENT (Manga spread camera exploration)
      // -----------------------------------------------------------------------
      const descentScene = document.querySelector<HTMLElement>('[data-scene="descent"]');
      const eyePanel = descentScene?.querySelector<HTMLElement>('[data-panel="P.01"]');
      const eyePanelInner = eyePanel?.querySelector<HTMLElement>("[data-panel-inner]") || eyePanel;
      const alleyPanel = descentScene?.querySelector<HTMLElement>('[data-panel="P.02"]');
      const pagodaPanel = descentScene?.querySelector<HTMLElement>('[data-panel="P.03"]');
      const dialogueGutter = descentScene?.querySelector<HTMLElement>(".writing-vertical-rl");
      const mangaComposition = descentScene?.querySelector<HTMLElement>(".max-w-6xl");

      if (descentScene) {
        const descentTl = gsap.timeline({
          scrollTrigger: {
            trigger: descentScene,
            start: "top 75%",
            end: "bottom top",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

        // Main Manga Eye Panel: Clearly visible camera push (scale 1.0 -> 1.09)
        if (eyePanelInner) {
          descentTl.to(
            eyePanelInner,
            {
              scale: 1.09,
              yPercent: -8,
              ease: "none",
              transformOrigin: "center center",
            },
            0
          );
        }

        // Lower-Left Alleyway Panel: Pulls upward
        if (alleyPanel) {
          descentTl.to(
            alleyPanel,
            {
              yPercent: -12,
              ease: "none",
            },
            0
          );
        }

        // Lower-Right Pagoda Panel: Slower upward drift
        if (pagodaPanel) {
          descentTl.to(
            pagodaPanel,
            {
              yPercent: -15,
              ease: "none",
            },
            0
          );
        }

        // Center Dialogue Gutter: Minimal displacement for stability
        if (dialogueGutter) {
          descentTl.to(
            dialogueGutter,
            {
              yPercent: -4,
              ease: "none",
            },
            0
          );
        }

        // Overall Manga Composition: Subtle camera pull
        if (mangaComposition) {
          descentTl.to(
            mangaComposition,
            {
              scale: 1.02,
              ease: "none",
              transformOrigin: "center center",
            },
            0
          );
        }

        // Transition 02 -> 03: Paper composition shifts upward as black void rises
        gsap.to(descentScene, {
          scrollTrigger: {
            trigger: descentScene,
            start: "bottom 85%",
            end: "bottom top",
            scrub: 1,
          },
          yPercent: -10,
          ease: "none",
        });
      }

      // -----------------------------------------------------------------------
      // SCENE 03 — THE VOID (Controlled Pinning & Colossal Blood Moon Camera Push)
      // -----------------------------------------------------------------------
      const voidScene = document.querySelector<HTMLElement>('[data-scene="void"]');
      const voidStage = voidScene?.querySelector<HTMLElement>("[data-void-stage]");
      const redDisc = voidScene?.querySelector<HTMLElement>("[data-red-disc]");
      const silhouette = voidScene?.querySelector<HTMLElement>("[data-silhouette]");
      const voidCopy = voidScene?.querySelector<HTMLElement>("[data-void-copy]");

      if (voidScene && voidStage) {
        // Pin the visual stage container for 130% scroll distance (leaving nav unpinned)
        const voidTl = gsap.timeline({
          scrollTrigger: {
            trigger: voidScene,
            start: "top top",
            end: "+=130%",
            pin: voidStage,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Red Moon Ritual Disc: Clearly visible camera push expanding from 1.0 to 1.45x
        if (redDisc) {
          voidTl.to(
            redDisc,
            {
              scale: 1.45,
              yPercent: -6,
              ease: "none",
              transformOrigin: "center center",
            },
            0
          );
        }

        // Tiny Human Silhouette: Moves at differential depth, maintaining existential scale
        if (silhouette) {
          voidTl.to(
            silhouette,
            {
              yPercent: 12,
              scale: 0.92,
              ease: "none",
              transformOrigin: "center bottom",
            },
            0
          );
        }

        // Void Typography: Recedes gracefully as red disc commands full viewport
        if (voidCopy) {
          voidTl.to(
            voidCopy,
            {
              opacity: 0.4,
              xPercent: -8,
              ease: "none",
            },
            0
          );
        }
      }

      // -----------------------------------------------------------------------
      // SCENE 04 — AWAKENING (Finale spread restrained motion)
      // -----------------------------------------------------------------------
      const awakeningScene = document.querySelector<HTMLElement>('[data-scene="awakening"]');
      const awakeningTitle = awakeningScene?.querySelector<HTMLElement>("[data-display-title]");
      const awakeningSilhouette = awakeningScene?.querySelector<HTMLElement>("[data-awakening-silhouette]");
      const awakeningCopy = awakeningScene?.querySelector<HTMLElement>("[data-awakening-copy]");

      if (awakeningScene) {
        const awakeningTl = gsap.timeline({
          scrollTrigger: {
            trigger: awakeningScene,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

        if (awakeningTitle) {
          awakeningTl.to(
            awakeningTitle,
            {
              yPercent: -12,
              scale: 1.03,
              ease: "none",
              transformOrigin: "left center",
            },
            0
          );
        }

        if (awakeningSilhouette) {
          awakeningTl.to(
            awakeningSilhouette,
            {
              yPercent: -8,
              scale: 1.02,
              ease: "none",
            },
            0
          );
        }

        if (awakeningCopy) {
          awakeningTl.to(
            awakeningCopy,
            {
              yPercent: -5,
              ease: "none",
            },
            0
          );
        }
      }
    });

    // =========================================================================
    // MOBILE MOTION SETUP (<= 768px): Restrained movement without heavy pinning
    // =========================================================================
    mm.add("(max-width: 768px)", () => {
      const introScene = document.querySelector<HTMLElement>('[data-scene="intro"]');
      const introTitle = introScene?.querySelector<HTMLElement>("[data-display-title]");
      const toriiFrame = introScene?.querySelector<HTMLElement>('[data-panel="torii-frame"]');

      if (introScene) {
        const mobileIntroTl = gsap.timeline({
          scrollTrigger: {
            trigger: introScene,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        if (introTitle) {
          mobileIntroTl.to(introTitle, { yPercent: -8, scale: 1.03, ease: "none" }, 0);
        }
        if (toriiFrame) {
          mobileIntroTl.to(toriiFrame, { yPercent: -10, ease: "none" }, 0);
        }
      }

      const descentScene = document.querySelector<HTMLElement>('[data-scene="descent"]');
      const eyePanel = descentScene?.querySelector<HTMLElement>('[data-panel="P.01"]');
      if (descentScene && eyePanel) {
        gsap.to(eyePanel, {
          scrollTrigger: {
            trigger: descentScene,
            start: "top 70%",
            end: "bottom top",
            scrub: 1,
          },
          scale: 1.04,
          yPercent: -5,
          ease: "none",
        });
      }

      const voidScene = document.querySelector<HTMLElement>('[data-scene="void"]');
      const redDisc = voidScene?.querySelector<HTMLElement>("[data-red-disc]");
      if (voidScene && redDisc) {
        gsap.to(redDisc, {
          scrollTrigger: {
            trigger: voidScene,
            start: "top 60%",
            end: "bottom top",
            scrub: 1,
          },
          scale: 1.2,
          yPercent: -8,
          ease: "none",
        });
      }
    });

    // =========================================================================
    // ACTIVE SCENE NAVIGATION TRACKER (Pure DOM class toggle, 0 React re-renders)
    // =========================================================================
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

    // Refresh ScrollTrigger after elements mount and images/fonts compute
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      navTriggers.forEach((t) => t.kill());
      mm.revert();
    };
  }, []);

  return null;
}

export default CinematicScroll;
