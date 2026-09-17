import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { CropMark, RegistrationTarget, ChapterStamp } from "@/components/ui/EditorialMarks";

export function IntroSection() {
  return (
    <section
      id="intro"
      data-scene="intro"
      className="relative min-h-screen w-full bg-[#050505] text-[#EDE9DF] flex flex-col justify-between pt-[var(--scene-safe-top,7.5rem)] pb-8 px-6 md:px-14 overflow-hidden select-none border-b border-[#EDE9DF]/10"
    >
      {/* Background Subtle Editorial Grain & Halftone */}
      <div className="absolute inset-0 pointer-events-none opacity-20 editorial-grain z-[var(--z-base,1)]" />

      {/* Editorial Vertical Printer Guides */}
      <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-[#EDE9DF]/5 pointer-events-none hidden md:block z-[var(--z-base,1)]" />
      <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-[#EDE9DF]/5 pointer-events-none hidden md:block z-[var(--z-base,1)]" />

      {/* =========================================================================
          SCENE 01 METADATA ROW (Left-anchored only; top-right kept clean for global nav)
          ========================================================================= */}
      <div
        data-scene-label
        className="relative z-[var(--z-scene-meta,30)] flex items-start pl-1 sm:pl-3 mb-4 md:mb-6"
      >
        <SectionLabel number="01" title="INTRO" theme="dark" />
      </div>

      {/* =========================================================================
          MAIN EDITORIAL CANVAS: ASYMMETRIC TITLE, VERTICAL TEXT & TORII MANGA FRAME
          ========================================================================= */}
      <div className="relative z-[var(--z-artwork,10)] flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-6 md:my-10">
        {/* Left Column (3 cols): Vertical Japanese Poetry & Editorial Marker */}
        <div
          data-intro-vertical
          className="lg:col-span-3 flex flex-row lg:flex-col items-start gap-8 pl-1 will-change-transform"
        >
          {/* Vertical Japanese line */}
          <div className="writing-vertical-rl font-japanese text-xl md:text-2xl tracking-[0.35em] text-[#EDE9DF]/95 font-light leading-loose border-r border-[#EDE9DF]/15 pr-5">
            見えるものが、すべてではない。
          </div>

          <div data-intro-proverb className="flex flex-col gap-1.5 max-w-[200px]">
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#B50016] uppercase font-bold">
              PROVERB 01
            </span>
            <p className="font-mono text-[11px] text-[#EDE9DF]/65 tracking-wider leading-relaxed">
              WHAT YOU SEE IS NOT EVERYTHING.
            </p>
            <div className="w-8 h-[1px] bg-[#B50016]/80 mt-1" />
          </div>
        </div>

        {/* Center Hero Column (6 cols): Giant Asymmetrically Cropped NOCTURNO Title */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left relative">
          {/* Intentionally Cropped Oversized Title */}
          <h1
            data-display-title
            className="font-serif text-[clamp(4.2rem,13vw,13rem)] font-normal tracking-tight text-[#B50016] leading-[0.85] uppercase select-none -ml-1 md:-ml-3 lg:-ml-6 will-change-transform origin-center lg:origin-left"
          >
            NOCTURNO
          </h1>

          {/* Subtitles: Balanced Japanese and English lines */}
          <div
            data-intro-subtitles
            className="mt-8 flex flex-col items-center lg:items-start gap-2.5 will-change-transform"
          >
            <p className="font-japanese text-lg md:text-2xl tracking-[0.38em] text-[#EDE9DF]/90 font-medium">
              夜に、何かが目を覚ます。
            </p>
            <p className="font-mono text-xs md:text-sm tracking-[0.3em] text-[#EDE9DF]/60 uppercase">
              SOME THINGS ONLY AWAKEN IN THE NIGHT.
            </p>
          </div>

          {/* Hairline Accent */}
          <div className="w-16 h-[1px] bg-[#B50016] mt-6" />
        </div>

        {/* Right Column (3 cols): Torii Gate Manga Frame with Scene Metadata Relocated Here */}
        <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center gap-3">
          {/* Relocated Scene Chapter Stamp (safely lower in Scene 01, leaving nav row free) */}
          <div className="w-full max-w-[280px] flex items-center justify-between font-mono text-[9px] text-[#EDE9DF]/40 select-none pb-1 border-b border-[#EDE9DF]/10">
            <span className="flex items-center gap-1.5">
              <RegistrationTarget size={12} />
              <span>PROLOGUE // NIGHTFALL</span>
            </span>
            <ChapterStamp code="ACT 01" theme="dark" />
          </div>

          <div
            data-panel="torii-frame"
            className="relative w-full max-w-[280px] h-[340px] md:h-[400px] border border-[#EDE9DF]/20 bg-[#050505] p-1.5 overflow-hidden will-change-transform"
          >
            {/* Corner Crop Marks on Manga Frame */}
            <CropMark className="absolute top-1 left-1 text-[#EDE9DF]" size={10} />
            <CropMark className="absolute top-1 right-1 text-[#EDE9DF]" size={10} />
            <CropMark className="absolute bottom-1 left-1 text-[#EDE9DF]" size={10} />
            <CropMark className="absolute bottom-1 right-1 text-[#EDE9DF]" size={10} />

            <div className="relative w-full h-full overflow-hidden bg-[#030303] flex items-center justify-center border border-[#EDE9DF]/10">
              {/* Torii Gate Artwork with Heavy Contrast & Ink Grain */}
              <svg
                viewBox="0 0 320 440"
                className="w-full h-full object-cover select-none"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient id="toriiMistDark" cx="50%" cy="65%" r="50%">
                    <stop offset="0%" stopColor="#EDE9DF" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#030303" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Night mist */}
                <rect width="320" height="440" fill="#050505" />
                <circle cx="160" cy="270" r="150" fill="url(#toriiMistDark)" />

                {/* Cedar Trees Silhouettes */}
                <path d="M-20,380 L30,110 L80,380 Z" fill="#0a0a0a" />
                <path d="M35,360 L85,150 L135,360 Z" fill="#080808" />
                <path d="M245,380 L295,130 L345,380 Z" fill="#0a0a0a" />
                <path d="M185,360 L235,160 L285,360 Z" fill="#080808" />

                {/* Stone Steps */}
                <polygon points="120,380 200,380 218,440 102,440" fill="#0f0f0f" />
                <line x1="117" y1="395" x2="203" y2="395" stroke="#EDE9DF" strokeWidth="0.8" opacity="0.3" />
                <line x1="112" y1="410" x2="208" y2="410" stroke="#EDE9DF" strokeWidth="0.8" opacity="0.3" />
                <line x1="107" y1="425" x2="213" y2="425" stroke="#EDE9DF" strokeWidth="0.8" opacity="0.3" />

                {/* Torii Gate Structure */}
                <path d="M65,222 Q160,200 255,222 L250,234 Q160,214 70,234 Z" fill="#000000" stroke="#EDE9DF" strokeWidth="0.6" />
                <rect x="80" y="244" width="160" height="8" fill="#000000" stroke="#EDE9DF" strokeWidth="0.6" />
                <polygon points="103,230 112,230 117,380 100,380" fill="#000000" />
                <polygon points="208,230 217,230 220,380 203,380" fill="#000000" />
                <rect x="156" y="220" width="8" height="26" fill="#000000" />

                {/* Solitary Figure */}
                <ellipse cx="160" cy="360" rx="5" ry="14" fill="#000000" />
                <circle cx="160" cy="342" r="3.5" fill="#000000" />

                {/* Frame stamp on artwork */}
                <text x="18" y="32" fill="#EDE9DF" opacity="0.35" fontSize="9" fontFamily="monospace" letterSpacing="3">
                  KYOTO // 00:00
                </text>
              </svg>
            </div>

            {/* Frame Margin Metadata */}
            <div className="mt-2 flex items-center justify-between text-[9px] font-mono text-[#EDE9DF]/40">
              <span>TORII // THRESHOLD</span>
              <span className="text-[#B50016]">FRAME 01</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Marker: Scroll Cue with Technical Coordinates */}
      <div className="relative z-[var(--z-scene-meta,30)] flex items-center justify-between pt-4 border-t border-[#EDE9DF]/10 text-xs font-mono text-[#EDE9DF]/50">
        <div className="flex items-center gap-3">
          <span className="tracking-[0.25em] uppercase text-[#EDE9DF]/80">SCROLL TO DESCEND</span>
          <span className="text-[#B50016] font-bold text-sm">/</span>
        </div>
        <div className="text-[10px] tracking-widest hidden sm:block opacity-60">
          35.0116° N, 135.7681° E // PLATE 01
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
