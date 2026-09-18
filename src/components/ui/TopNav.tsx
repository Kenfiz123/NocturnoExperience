"use client";

import React from "react";
import { useLenis } from "@/hooks/useLenis";

export function TopNav() {
  const { scrollTo } = useLenis();

  const scrollToSection = (id: string) => {
    scrollTo(`#${id}`, { duration: 1.1 });
  };

  return (
    <header
      className="fixed top-0 left-0 w-full h-[var(--chrome-height,4.5rem)] z-[var(--z-chrome,50)] flex items-center justify-between px-5 sm:px-8 md:px-12 pointer-events-auto backdrop-blur-md bg-[#050505]/60 border-b border-[#EDE9DF]/5 text-[#EDE9DF] select-none"
      role="banner"
    >
      {/* Brand Titlemark (Left) */}
      <a
        href="#intro"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("intro");
        }}
        className="font-serif tracking-[0.22em] sm:tracking-[0.28em] text-xs sm:text-sm md:text-base font-semibold uppercase hover:text-[#B50016] transition-colors py-2 cursor-pointer"
        aria-label="NOCTURNO Home"
      >
        NOCTURNO
      </a>

      {/* Navigation Indicators (Right) */}
      <nav
        className="flex items-center gap-4 sm:gap-6 md:gap-10 font-mono text-[11px] md:text-xs tracking-widest"
        aria-label="Scene navigation"
      >
        <div className="flex items-center gap-3 sm:gap-5 md:gap-7">
          <button
            data-nav-scene="intro"
            onClick={() => scrollToSection("intro")}
            className="hover:text-[#B50016] transition-colors cursor-pointer py-1 px-0.5"
            aria-label="Scene 01 Intro"
          >
            01
          </button>
          <button
            data-nav-scene="descent"
            onClick={() => scrollToSection("descent")}
            className="hover:text-[#B50016] transition-colors cursor-pointer py-1 px-0.5"
            aria-label="Scene 02 Descent"
          >
            02
          </button>
          <button
            data-nav-scene="void"
            onClick={() => scrollToSection("void")}
            className="hover:text-[#B50016] transition-colors cursor-pointer py-1 px-0.5"
            aria-label="Scene 03 The Void"
          >
            03
          </button>
          <button
            data-nav-scene="awakening"
            onClick={() => scrollToSection("awakening")}
            className="hover:text-[#B50016] transition-colors cursor-pointer py-1 px-0.5"
            aria-label="Scene 04 Awakening"
          >
            04
          </button>
        </div>

        <div className="hidden sm:block h-3 w-[1px] bg-[#EDE9DF]/40" />

        <span className="hidden sm:inline-block font-japanese text-[10px] md:text-[11px] tracking-[0.2em] text-[#EDE9DF]/80 select-none">
          JP / EN
        </span>
      </nav>
    </header>
  );
}

export default TopNav;
