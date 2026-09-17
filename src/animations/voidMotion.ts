import { gsap } from "@/lib/gsap";

export function initVoidMotion(isMobile: boolean) {
  const voidScene = document.querySelector<HTMLElement>('[data-scene="void"]');
  const voidStage = voidScene?.querySelector<HTMLElement>("[data-void-stage]");
  if (!voidScene || !voidStage) return;

  const redDisc = voidScene.querySelector<HTMLElement>("[data-red-disc]");
  const silhouette = voidScene.querySelector<HTMLElement>("[data-silhouette]");
  const voidCopy = voidScene.querySelector<HTMLElement>("[data-void-copy]");

  if (!isMobile) {
    // Desktop: Pin visual stage container for 130% scroll distance (leaving nav unpinned)
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
  } else {
    // Mobile: Natural scrolling without heavy pinning to prevent touch entrapment
    const mobileVoidTl = gsap.timeline({
      scrollTrigger: {
        trigger: voidScene,
        start: "top 60%",
        end: "bottom top",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    if (redDisc) {
      mobileVoidTl.to(
        redDisc,
        {
          scale: 1.2,
          yPercent: -8,
          ease: "none",
          transformOrigin: "center center",
        },
        0
      );
    }

    if (silhouette) {
      mobileVoidTl.to(
        silhouette,
        {
          yPercent: 6,
          scale: 0.96,
          ease: "none",
        },
        0
      );
    }

    if (voidCopy) {
      mobileVoidTl.to(
        voidCopy,
        {
          opacity: 0.5,
          xPercent: -4,
          ease: "none",
        },
        0
      );
    }
  }
}

export default initVoidMotion;
