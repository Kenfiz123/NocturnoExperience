import { gsap } from "@/lib/gsap";

export function initAwakeningMotion(isMobile: boolean) {
  const awakeningScene = document.querySelector<HTMLElement>('[data-scene="awakening"]');
  if (!awakeningScene) return;

  const awakeningTitle = awakeningScene.querySelector<HTMLElement>("[data-display-title]");
  const awakeningSilhouette = awakeningScene.querySelector<HTMLElement>("[data-awakening-silhouette]");
  const awakeningCopy = awakeningScene.querySelector<HTMLElement>("[data-awakening-copy]");

  // Establish clean starting state matching portal completion handoff
  if (awakeningTitle) gsap.set(awakeningTitle, { yPercent: 0, scale: 1, opacity: 1 });
  if (awakeningSilhouette) gsap.set(awakeningSilhouette, { yPercent: 0, scale: 1, opacity: 1 });
  if (awakeningCopy) gsap.set(awakeningCopy, { yPercent: 0, opacity: 1 });

  // Normal Awakening motion begins strictly AFTER the portal handoff completes (top top)
  const awakeningTl = gsap.timeline({
    scrollTrigger: {
      trigger: awakeningScene,
      start: "top top",
      end: "+=60%",
      scrub: 1.2,
      invalidateOnRefresh: true,
    },
  });

  // Display Title: Slow vertical drift and subtle scale
  if (awakeningTitle) {
    awakeningTl.to(
      awakeningTitle,
      {
        yPercent: isMobile ? -6 : -12,
        scale: isMobile ? 1.015 : 1.03,
        ease: "none",
        transformOrigin: "left center",
      },
      0
    );
  }

  // Woman Profile Silhouette: Subtle forward parallax
  if (awakeningSilhouette) {
    awakeningTl.to(
      awakeningSilhouette,
      {
        yPercent: isMobile ? -4 : -8,
        scale: isMobile ? 1.01 : 1.02,
        ease: "none",
      },
      0
    );
  }

  // Vertical Narrative Copy & Proverb: Gentle anchored motion
  if (awakeningCopy) {
    awakeningTl.to(
      awakeningCopy,
      {
        yPercent: isMobile ? -2 : -5,
        ease: "none",
      },
      0
    );
  }
}

export default initAwakeningMotion;
