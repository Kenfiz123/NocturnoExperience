import { gsap } from "@/lib/gsap";

export function initIntroMotion(isMobile: boolean) {
  const introScene = document.querySelector<HTMLElement>('[data-scene="intro"]');
  if (!introScene) return;

  const displayTitle = introScene.querySelector<HTMLElement>("[data-display-title]");
  const verticalText = introScene.querySelector<HTMLElement>("[data-intro-vertical]");
  const toriiFrame = introScene.querySelector<HTMLElement>('[data-panel="torii-frame"]');
  const subtitles = introScene.querySelector<HTMLElement>("[data-intro-subtitles]");
  const proverb = introScene.querySelector<HTMLElement>("[data-intro-proverb]");

  // Main Intro Scroll Timeline
  const introTl = gsap.timeline({
    scrollTrigger: {
      trigger: introScene,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });

  // Giant Red Title NOCTURNO: Slow, heavy vertical creep and slight expansion
  if (displayTitle) {
    introTl.to(
      displayTitle,
      {
        y: isMobile ? -20 : -50,
        scale: isMobile ? 1.03 : 1.07,
        ease: "none",
      },
      0
    );
  }

  // Left Vertical Japanese Copy: Moves at slower velocity to establish depth (0.55x)
  if (verticalText) {
    introTl.to(
      verticalText,
      {
        y: isMobile ? -10 : -25,
        ease: "none",
      },
      0
    );
  }

  // Torii Gate Manga Frame: Pulls forward slightly faster than background (1.15x)
  if (toriiFrame) {
    introTl.to(
      toriiFrame,
      {
        y: isMobile ? -25 : -65,
        scale: isMobile ? 1.01 : 1.025,
        ease: "none",
      },
      0
    );
  }

  // Subtitles & Proverb: Gentle drift and subtle recession
  if (subtitles) {
    introTl.to(
      subtitles,
      {
        y: isMobile ? -10 : -25,
        opacity: 0.65,
        ease: "none",
      },
      0
    );
  }

  if (proverb) {
    introTl.to(
      proverb,
      {
        y: isMobile ? -5 : -15,
        opacity: 0.6,
        ease: "none",
      },
      0
    );
  }

  // Transition 01 -> 02: Page sliding over darkness
  // As Intro approaches the next scene, it lifts slightly as the ivory paper enters
  gsap.to(introScene, {
    scrollTrigger: {
      trigger: introScene,
      start: "bottom 90%",
      end: "bottom top",
      scrub: 0.8,
    },
    y: isMobile ? -20 : -40,
    ease: "none",
  });
}
