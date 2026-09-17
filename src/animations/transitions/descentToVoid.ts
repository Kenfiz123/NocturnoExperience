import { gsap } from "@/lib/gsap";

export function initDescentToVoid(isMobile: boolean) {
  const descentScene = document.querySelector<HTMLElement>('[data-scene="descent"]');
  if (!descentScene) return;

  // Transition 02 -> 03: Paper spread shifts upward as dark void rises
  gsap.to(descentScene, {
    scrollTrigger: {
      trigger: descentScene,
      start: "bottom 85%",
      end: "bottom top",
      scrub: 1,
      invalidateOnRefresh: true,
    },
    yPercent: isMobile ? -6 : -10,
    ease: "none",
  });
}

export default initDescentToVoid;
