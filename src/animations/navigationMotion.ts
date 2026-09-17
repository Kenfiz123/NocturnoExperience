import { ScrollTrigger } from "@/lib/gsap";

export function initNavigationMotion(): ScrollTrigger[] {
  const sceneIds = ["intro", "descent", "void", "awakening"];
  const navTriggers: ScrollTrigger[] = [];

  sceneIds.forEach((id) => {
    const sceneEl = document.querySelector(`[data-scene="${id}"]`);
    if (!sceneEl) return;

    const trigger = ScrollTrigger.create({
      trigger: sceneEl,
      start: "top 55%",
      end: "bottom 45%",
      onToggle: (self) => {
        if (self.isActive) {
          document.querySelectorAll<HTMLElement>("[data-nav-scene]").forEach((btn) => {
            if (btn.getAttribute("data-nav-scene") === id) {
              btn.classList.add("text-[#B50016]", "font-bold");
            } else {
              btn.classList.remove("text-[#B50016]", "font-bold");
            }
          });
        }
      },
    });
    navTriggers.push(trigger);
  });

  return navTriggers;
}

export default initNavigationMotion;
