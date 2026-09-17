import { gsap } from "@/lib/gsap";

export function initIntroToDescent(isMobile: boolean) {
  const introScene = document.querySelector<HTMLElement>('[data-scene="intro"]');
  if (!introScene) return;

  // Transition 01 -> 02: Page sliding over darkness
  // As Intro approaches the next scene, it lifts slightly as the ivory paper enters
  gsap.to(introScene, {
    scrollTrigger: {
      trigger: introScene,
      start: "bottom 90%",
      end: "bottom top",
      scrub: 1,
      invalidateOnRefresh: true,
    },
    yPercent: isMobile ? -5 : -8,
    ease: "none",
  });
}

export default initIntroToDescent;
