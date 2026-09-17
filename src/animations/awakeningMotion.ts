import { gsap } from "@/lib/gsap";

export function initAwakeningMotion(isMobile: boolean) {
  const awakeningScene = document.querySelector<HTMLElement>('[data-scene="awakening"]');
  if (!awakeningScene) return;

  const displayTitle = awakeningScene.querySelector<HTMLElement>("[data-display-title]");
  const silhouetteSvg = awakeningScene.querySelector<HTMLElement>("svg");
  const verticalText = awakeningScene.querySelector<HTMLElement>(".writing-vertical-rl");

  const awakeningTl = gsap.timeline({
    scrollTrigger: {
      trigger: awakeningScene,
      start: "top 80%",
      end: "bottom bottom",
      scrub: 1.2,
      invalidateOnRefresh: true,
    },
  });

  // Display Title: Slow vertical drift and subtle scale
  if (displayTitle) {
    awakeningTl.to(
      displayTitle,
      {
        y: isMobile ? -15 : -35,
        scale: isMobile ? 1.015 : 1.035,
        ease: "none",
        transformOrigin: "left center",
      },
      0
    );
  }

  // Woman Profile Silhouette: Subtle forward parallax
  if (silhouetteSvg) {
    awakeningTl.to(
      silhouetteSvg,
      {
        y: isMobile ? -10 : -22,
        scale: isMobile ? 1.01 : 1.025,
        ease: "none",
      },
      0
    );
  }

  // Vertical Japanese Poetry: Gentle anchored motion
  if (verticalText) {
    awakeningTl.to(
      verticalText,
      {
        y: isMobile ? -6 : -14,
        ease: "none",
      },
      0
    );
  }
}
