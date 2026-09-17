import { gsap } from "@/lib/gsap";

export function initDescentMotion(isMobile: boolean) {
  const descentScene = document.querySelector<HTMLElement>('[data-scene="descent"]');
  if (!descentScene) return;

  const eyePanel = descentScene.querySelector<HTMLElement>('[data-panel="P.01"]');
  const eyePanelInner = eyePanel?.querySelector<HTMLElement>("[data-panel-inner]") || eyePanel;
  const alleyPanel = descentScene.querySelector<HTMLElement>('[data-panel="P.02"]');
  const pagodaPanel = descentScene.querySelector<HTMLElement>('[data-panel="P.03"]');
  const dialogueGutter = descentScene.querySelector<HTMLElement>("[data-dialogue-gutter]");
  const mangaComposition = descentScene.querySelector<HTMLElement>("[data-manga-composition]");

  const descentTl = gsap.timeline({
    scrollTrigger: {
      trigger: descentScene,
      start: "top 75%",
      end: "bottom top",
      scrub: 1.2,
      invalidateOnRefresh: true,
    },
  });

  // Main Manga Eye Panel: Piercing gaze camera push
  if (eyePanelInner) {
    descentTl.to(
      eyePanelInner,
      {
        scale: isMobile ? 1.04 : 1.09,
        yPercent: isMobile ? -5 : -8,
        ease: "none",
        transformOrigin: "center center",
      },
      0
    );
  }

  // Lower-Left Alleyway Panel: Pulls upward into shadows
  if (alleyPanel) {
    descentTl.to(
      alleyPanel,
      {
        yPercent: isMobile ? -6 : -12,
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
        yPercent: isMobile ? -7 : -15,
        ease: "none",
      },
      0
    );
  }

  // Center Dialogue Gutter: Anchored to page with subtle vertical stability
  if (dialogueGutter) {
    descentTl.to(
      dialogueGutter,
      {
        yPercent: isMobile ? -2 : -4,
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
        scale: isMobile ? 1.01 : 1.02,
        ease: "none",
        transformOrigin: "center center",
      },
      0
    );
  }
}

export default initDescentMotion;
