import { gsap } from "@/lib/gsap";

export function initDescentMotion(isMobile: boolean) {
  const descentScene = document.querySelector<HTMLElement>('[data-scene="descent"]');
  if (!descentScene) return;

  const eyePanel = descentScene.querySelector<HTMLElement>('[data-panel="P.01"]');
  const alleyPanel = descentScene.querySelector<HTMLElement>('[data-panel="P.02"]');
  const pagodaPanel = descentScene.querySelector<HTMLElement>('[data-panel="P.03"]');
  const dialogueGutter = descentScene.querySelector<HTMLElement>(".writing-vertical-rl");
  const narrativeBox = descentScene.querySelector<HTMLElement>(".paper-texture-aged p");

  // Main Descent Manga Camera Timeline
  const descentTl = gsap.timeline({
    scrollTrigger: {
      trigger: descentScene,
      start: "top 80%",
      end: "bottom top",
      scrub: 1.2,
      invalidateOnRefresh: true,
    },
  });

  // Main Eye Panel: Slow, steady camera push into the piercing manga gaze
  if (eyePanel) {
    const eyeInner = eyePanel.querySelector<HTMLElement>("[data-panel-inner]") || eyePanel;
    descentTl.to(
      eyeInner,
      {
        scale: isMobile ? 1.03 : 1.08,
        y: isMobile ? -10 : -20,
        ease: "none",
        transformOrigin: "center center",
      },
      0
    );
  }

  // Lower-Left Alleyway Panel: Slightly upward pull (pulling deeper into the Edo street)
  if (alleyPanel) {
    descentTl.to(
      alleyPanel,
      {
        y: isMobile ? -15 : -40,
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
        y: isMobile ? -8 : -20,
        ease: "none",
      },
      0
    );
  }

  // Dialogue Gutter: Anchored to page with subtle vertical stability
  if (dialogueGutter) {
    descentTl.to(
      dialogueGutter,
      {
        y: isMobile ? -4 : -8,
        ease: "none",
      },
      0
    );
  }

  // Narrative Copy: Very slight drift
  if (narrativeBox) {
    descentTl.to(
      narrativeBox,
      {
        y: isMobile ? -5 : -12,
        ease: "none",
      },
      0
    );
  }

  // Transition 02 -> 03: Paper spread lifts away as darkness rises
  gsap.to(descentScene, {
    scrollTrigger: {
      trigger: descentScene,
      start: "bottom 85%",
      end: "bottom top",
      scrub: 1,
    },
    y: isMobile ? -25 : -50,
    ease: "none",
  });
}
