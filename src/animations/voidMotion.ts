import { gsap } from "@/lib/gsap";

export function initVoidMotion(isMobile: boolean) {
  const voidScene = document.querySelector<HTMLElement>('[data-scene="void"]');
  if (!voidScene) return;

  const redDisc = voidScene.querySelector<HTMLElement>("[data-red-disc]");
  const silhouette = voidScene.querySelector<HTMLElement>("[data-silhouette]");
  const verticalWarning = voidScene.querySelector<HTMLElement>(".writing-vertical-rl");
  const voidMetadata = voidScene.querySelectorAll<HTMLElement>(".font-mono");

  // Controlled Pin Sequence for THE VOID (100–140vh scroll duration)
  // Pinning the scene composition while the camera slowly pushes in on the blood moon
  const pinDuration = isMobile ? "+=80%" : "+=130%";

  const voidTl = gsap.timeline({
    scrollTrigger: {
      trigger: voidScene,
      start: "top top",
      end: pinDuration,
      pin: true,
      scrub: 1.2,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  // Red Blood Moon Camera Push: Grows from contained disc to commanding presence (1.0 -> 1.38x)
  if (redDisc) {
    voidTl.to(
      redDisc,
      {
        scale: isMobile ? 1.2 : 1.38,
        y: isMobile ? -15 : -35,
        ease: "none",
        transformOrigin: "center center",
      },
      0
    );
  }

  // Solitary Silhouette: Moves at a differential rate to enhance existential scale contrast
  if (silhouette) {
    voidTl.to(
      silhouette,
      {
        y: isMobile ? 8 : 16,
        scale: 0.95,
        ease: "none",
        transformOrigin: "center bottom",
      },
      0
    );
  }

  // Void Typography: Recedes gracefully as the red celestial body dominates
  if (verticalWarning) {
    voidTl.to(
      verticalWarning,
      {
        opacity: 0.35,
        x: isMobile ? -10 : -25,
        ease: "none",
      },
      0
    );
  }

  if (voidMetadata.length > 0) {
    voidTl.to(
      voidMetadata,
      {
        opacity: 0.4,
        y: -15,
        ease: "none",
      },
      0
    );
  }
}
