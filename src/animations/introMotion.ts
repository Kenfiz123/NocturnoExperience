import { gsap } from "@/lib/gsap";

export function initIntroMotion(isMobile: boolean) {
  const introScene = document.querySelector<HTMLElement>('[data-scene="intro"]');
  if (!introScene) return;

  const introTitle = introScene.querySelector<HTMLElement>("[data-display-title]");
  const toriiFrame = introScene.querySelector<HTMLElement>('[data-panel="torii-frame"]');
  const introVertical = introScene.querySelector<HTMLElement>("[data-intro-vertical]");
  const introSubtitles = introScene.querySelector<HTMLElement>("[data-intro-subtitles]");
  const introLabel = introScene.querySelector<HTMLElement>("[data-scene-label]");

  const introTl = gsap.timeline({
    scrollTrigger: {
      trigger: introScene,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });

  // Giant Red NOCTURNO Title: Monumental heavy upward creep & scale
  if (introTitle) {
    introTl.to(
      introTitle,
      {
        yPercent: isMobile ? -8 : -15,
        scale: isMobile ? 1.03 : 1.06,
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
        yPercent: isMobile ? -10 : -16,
        scale: isMobile ? 1.01 : 1.03,
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
        yPercent: isMobile ? -4 : -8,
        ease: "none",
      },
      0
    );
  }

  // Scene Subtitles: Upward drift & gentle fade approaching exit
  if (introSubtitles) {
    introTl.to(
      introSubtitles,
      {
        yPercent: isMobile ? -6 : -12,
        opacity: isMobile ? 0.6 : 0.5,
        ease: "none",
      },
      0
    );
  }

  // Scene Metadata Label
  if (introLabel) {
    introTl.to(
      introLabel,
      {
        yPercent: isMobile ? -5 : -10,
        opacity: isMobile ? 0.7 : 0.6,
        ease: "none",
      },
      0
    );
  }
}

export default initIntroMotion;
