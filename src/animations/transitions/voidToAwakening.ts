import { gsap } from "@/lib/gsap";

export function initVoidToAwakening(isMobile: boolean) {
  const voidScene = document.querySelector<HTMLElement>('[data-scene="void"]');
  const awakeningScene = document.querySelector<HTMLElement>('[data-scene="awakening"]');
  if (!voidScene || !awakeningScene) return;

  const redDisc = voidScene.querySelector<HTMLElement>("[data-red-disc]");
  const silhouette = voidScene.querySelector<HTMLElement>("[data-silhouette]");
  const voidCopy = voidScene.querySelectorAll<HTMLElement>("[data-void-copy]");
  const voidMeta = voidScene.querySelectorAll<HTMLElement>("[data-void-meta]");

  // Awakening internal elements for restrained reveal hierarchy & portal depth
  const awakeningStage = awakeningScene.querySelector<HTMLElement>("[data-awakening-stage]");
  const awakeningTitle = awakeningScene.querySelector<HTMLElement>("[data-display-title]");
  const awakeningSilhouette = awakeningScene.querySelector<HTMLElement>("[data-awakening-silhouette]");
  const awakeningCopy = awakeningScene.querySelector<HTMLElement>("[data-awakening-copy]");
  const portalRim = awakeningScene.querySelector<HTMLElement>("[data-portal-rim]");

  if (!isMobile) {
    // Disc center calculation relative to viewport in percentage
    const getDiscCenter = () => {
      if (!redDisc) return { x: 50, y: 48 };
      const rect = redDisc.getBoundingClientRect();
      const cx = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
      const cy = ((rect.top + rect.height / 2) / window.innerHeight) * 100;
      return {
        x: Number.isFinite(cx) ? Number(cx.toFixed(2)) : 50,
        y: Number.isFinite(cy) ? Number(cy.toFixed(2)) : 48,
      };
    };

    // Calculate target scale ensuring full viewport coverage with safety margin
    const calculateTargetScale = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const diagonal = Math.hypot(vw, vh);
      const discRect = redDisc ? redDisc.getBoundingClientRect() : null;
      const circleDiameter = (discRect ? discRect.width : 540) * 0.75;
      const safetyFactor = 1.48;
      return Math.max(7.2, (diagonal / (circleDiameter || 465)) * safetyFactor);
    };

    const discCenter = getDiscCenter();
    const targetScale = calculateTargetScale();

    // Dynamically align the portal-rim radial vignette center to the disc center
    awakeningScene.style.setProperty("--portal-cx", `${discCenter.x}%`);
    awakeningScene.style.setProperty("--portal-cy", `${discCenter.y}%`);

    // Desktop: Pin voidScene with pinSpacing: false so awakeningScene naturally aligns at transition completion
    const portalTl = gsap.timeline({
      scrollTrigger: {
        trigger: voidScene,
        start: "top top",
        end: () => `+=${voidScene.offsetHeight}`,
        pin: voidScene,
        pinSpacing: false,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (self.progress >= 1) {
            // Handover complete: clear inline transforms so Scene 04 flows naturally into normal scroll
            gsap.set(awakeningScene, { clearProps: "clipPath,y" });
            if (awakeningStage) gsap.set(awakeningStage, { clearProps: "scale" });
            if (awakeningTitle) gsap.set(awakeningTitle, { clearProps: "opacity,yPercent" });
            if (awakeningSilhouette) gsap.set(awakeningSilhouette, { clearProps: "opacity" });
            if (awakeningCopy) gsap.set(awakeningCopy, { clearProps: "opacity" });
            if (portalRim) gsap.set(portalRim, { clearProps: "opacity" });
            awakeningScene.style.pointerEvents = "auto";
          } else if (self.progress <= 0) {
            // Before transition: clear inline overrides so Awakening sits below in normal flow
            gsap.set(awakeningScene, { clearProps: "clipPath,y" });
            if (awakeningStage) gsap.set(awakeningStage, { clearProps: "scale" });
            if (awakeningTitle) gsap.set(awakeningTitle, { clearProps: "opacity,yPercent" });
            if (awakeningSilhouette) gsap.set(awakeningSilhouette, { clearProps: "opacity" });
            if (awakeningCopy) gsap.set(awakeningCopy, { clearProps: "opacity" });
            if (portalRim) gsap.set(portalRim, { clearProps: "opacity" });
            awakeningScene.style.pointerEvents = "none";
          } else {
            // Inside transition: enable pointer events once full cover moment is reached
            awakeningScene.style.pointerEvents = self.progress >= 0.86 ? "auto" : "none";
          }
        },
      },
    });

    // 1. VOID METADATA & EDITORIAL RECESSION: Early dissolve & recession as camera plunge initiates
    if (voidCopy.length) {
      portalTl.to(
        voidCopy,
        {
          opacity: 0,
          xPercent: -15,
          scale: 0.96,
          ease: "power1.in",
          duration: 0.25,
        },
        0
      );
    }

    if (voidMeta.length) {
      portalTl.to(
        voidMeta,
        {
          opacity: 0,
          ease: "power1.in",
          duration: 0.22,
        },
        0
      );
    }

    // 2. SILHOUETTE SWALLOW: Consumed by the expanding singularity and sinking into reflective water
    if (silhouette) {
      portalTl.to(
        silhouette,
        {
          opacity: 0,
          yPercent: 36,
          scale: 0.72,
          ease: "power1.in",
          duration: 0.24,
        },
        0
      );
    }

    // 3. STAGED RED DISC CAMERA PLUNGE:
    // Non-linear perceived expansion: controlled start -> accelerating plunge -> heavy full-cover landing
    if (redDisc) {
      // Stage 1 (0.04 -> 0.28): Controlled initial opening
      portalTl.to(
        redDisc,
        {
          scale: 2.25,
          ease: "power1.in",
          transformOrigin: "center center",
          duration: 0.24,
        },
        0.04
      );

      // Stage 2 (0.28 -> 0.70): Accelerating perceptual plunge
      portalTl.to(
        redDisc,
        {
          scale: 5.2,
          ease: "none",
          transformOrigin: "center center",
          duration: 0.42,
        },
        0.28
      );

      // Stage 3 (0.70 -> 0.86): Heavy deceleration into complete full-screen cover
      portalTl.to(
        redDisc,
        {
          scale: targetScale,
          ease: "power1.out",
          transformOrigin: "center center",
          duration: 0.16,
        },
        0.70
      );
    }

    // 4. SINGLE AWAKENING DOM COUNTER-TRANSLATION:
    // Holds the real AwakeningSection stationary at viewport top: 0 throughout the transition
    portalTl.fromTo(
      awakeningScene,
      {
        y: () => -voidScene.offsetHeight,
      },
      {
        y: 0,
        ease: "none",
        duration: 1.0,
      },
      0
    );

    // 5. STAGED PORTAL CIRCULAR CLIP EXPANSION:
    // Expands aperture synchronously with the red disc plunge, achieving 140% cover by 0.86
    // Stage 1 (0.06 -> 0.28): Emerges from disc core
    portalTl.fromTo(
      awakeningScene,
      {
        clipPath: `circle(0% at ${discCenter.x}% ${discCenter.y}%)`,
      },
      {
        clipPath: `circle(22% at ${discCenter.x}% ${discCenter.y}%)`,
        ease: "power1.in",
        duration: 0.22,
      },
      0.06
    );

    // Stage 2 (0.28 -> 0.70): Accelerating expansion
    portalTl.to(
      awakeningScene,
      {
        clipPath: `circle(78% at ${discCenter.x}% ${discCenter.y}%)`,
        ease: "none",
        duration: 0.42,
      },
      0.28
    );

    // Stage 3 (0.70 -> 0.86): Deceleration to complete 140% viewport coverage (Zero black corners)
    portalTl.to(
      awakeningScene,
      {
        clipPath: `circle(140% at ${discCenter.x}% ${discCenter.y}%)`,
        ease: "power1.out",
        duration: 0.16,
      },
      0.70
    );
    // 0.86 - 1.0 is the dedicated full-cover moment (no black corners, pure red Awakening world)

    // 6. PORTAL INK RIM & DEPTH VIGNETTE:
    // Frames the expanding aperture with dark crimson depth, fading out as full cover is reached
    if (portalRim) {
      portalTl.fromTo(
        portalRim,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: "power1.in",
          duration: 0.14,
        },
        0.06
      );

      portalTl.to(
        portalRim,
        {
          opacity: 0,
          ease: "power1.out",
          duration: 0.16,
        },
        0.70
      );
    }

    // 7. INNER WORLD DEPTH (Scale Differential):
    // Gives the visceral feeling of camera push into the space behind the aperture
    if (awakeningStage) {
      portalTl.fromTo(
        awakeningStage,
        {
          scale: 0.94,
          transformOrigin: "center center",
        },
        {
          scale: 1.0,
          ease: "power1.out",
          duration: 0.78,
        },
        0.08
      );
    }

    // 8. RESTRAINED AWAKENING REVEAL HIERARCHY:
    // Silhouette appears first -> Title emerges embedded at 0.65 opacity -> Full contrast settles
    if (awakeningSilhouette) {
      portalTl.fromTo(
        awakeningSilhouette,
        {
          opacity: 0.7,
        },
        {
          opacity: 1.0,
          ease: "power1.inOut",
          duration: 0.28,
        },
        0.08
      );
    }

    if (awakeningTitle) {
      portalTl.fromTo(
        awakeningTitle,
        {
          opacity: 0.62,
          yPercent: 3,
        },
        {
          opacity: 1.0,
          yPercent: 0,
          ease: "power1.out",
          duration: 0.48,
        },
        0.24
      );
    }

    if (awakeningCopy) {
      portalTl.fromTo(
        awakeningCopy,
        {
          opacity: 0.45,
        },
        {
          opacity: 1.0,
          ease: "power1.out",
          duration: 0.46,
        },
        0.36
      );
    }
  } else {
    // Mobile: Fluid, lightweight transition without pin lock or expensive filter stacks
    const mobilePortalTl = gsap.timeline({
      scrollTrigger: {
        trigger: voidScene,
        start: "bottom 95%",
        end: "bottom 30%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    if (redDisc) {
      mobilePortalTl.to(
        redDisc,
        {
          scale: 1.35,
          yPercent: -8,
          ease: "none",
        },
        0
      );
    }

    if (silhouette) {
      mobilePortalTl.to(
        silhouette,
        {
          opacity: 0.3,
          yPercent: 12,
          scale: 0.9,
          ease: "none",
        },
        0
      );
    }

    if (voidCopy.length) {
      mobilePortalTl.to(
        voidCopy,
        {
          opacity: 0.25,
          ease: "none",
        },
        0
      );
    }
  }
}

export default initVoidToAwakening;
