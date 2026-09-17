import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { ChapterStamp, RegistrationTarget, CropMark } from "@/components/ui/EditorialMarks";

export function VoidSection() {
  return (
    <section
      id="void"
      data-scene="void"
      className="relative min-h-screen w-full bg-[#050505] text-[#EDE9DF] flex flex-col justify-between pt-[var(--scene-safe-top,7.5rem)] pb-8 px-6 md:px-14 overflow-hidden select-none border-b border-[#EDE9DF]/10"
    >
      {/* Background Editorial Noise & Halftone Screentone */}
      <div className="absolute inset-0 pointer-events-none opacity-20 editorial-grain z-[var(--z-base,1)]" />

      {/* Printer Alignment Guides */}
      <div className="absolute top-0 bottom-0 left-8 md:left-14 w-[1px] bg-[#EDE9DF]/5 pointer-events-none z-[var(--z-base,1)]" />
      <div className="absolute top-0 bottom-0 right-8 md:right-14 w-[1px] bg-[#EDE9DF]/5 pointer-events-none z-[var(--z-base,1)]" />

      {/* Top Header Region (Safely positioned below global chrome) */}
      <div className="relative z-[var(--z-scene-meta,30)] flex items-start justify-between mb-4 md:mb-6">
        <SectionLabel number="03" title="THE VOID" theme="dark" />

        <div className="flex items-center gap-4 text-[#EDE9DF]/50 font-mono text-[9px] select-none pt-1">
          <RegistrationTarget size={14} />
          <CropMark size={10} className="text-[#EDE9DF]/40" />
          <ChapterStamp code="ACT 03" label="SINGULARITY" theme="dark" />
          <span className="hidden sm:inline tracking-widest text-[#B50016]">STAGE: ZERO</span>
        </div>
      </div>

      {/* =========================================================================
          MAIN VOID SPREAD: COLOSSAL BLOOD MOON PORTAL & TINY HUMAN SILHOUETTE
          (Supernatural scale contrast with ink erosion and foreground depth planes)
          ========================================================================= */}
      <div
        data-void-stage
        className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-between my-6 md:my-10 gap-8 will-change-transform"
      >
        {/* Left Column (3 cols): Vertical Japanese Warning & Philosophy */}
        <div data-void-copy className="flex flex-row lg:flex-col items-start gap-8 lg:w-1/4 z-20 will-change-transform">
          <div className="writing-vertical-rl font-serif text-2xl md:text-3xl tracking-[0.4em] text-[#EDE9DF]/95 font-light leading-loose border-r border-[#EDE9DF]/15 pr-5">
            ここから、戻れない。
          </div>

          <div className="flex flex-col gap-1.5 max-w-[220px]">
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#B50016] uppercase font-bold">
              THE ABYSS
            </span>
            <p className="font-mono text-xs text-[#EDE9DF]/65 tracking-widest uppercase leading-relaxed">
              THERE IS NO RETURN FROM HERE.
            </p>
            <div className="w-10 h-[1px] bg-[#B50016]/80 mt-2" />
          </div>
        </div>

        {/* Center Canvas: Giant Dominant Red Blood Moon / Eclipse Portal */}
        <div className="relative flex-1 flex items-center justify-center w-full max-w-3xl py-4">
          {/* Ambient Deep Blood Glow */}
          <div className="absolute w-[360px] h-[360px] md:w-[540px] md:h-[540px] rounded-full bg-[#B50016]/15 blur-3xl pointer-events-none" />

          {/* Colossal Red Disc Container */}
          <div
            id="void-portal-container"
            data-red-disc
            className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] md:w-[540px] md:h-[540px] lg:w-[620px] lg:h-[620px] flex items-center justify-center"
          >
            {/* SVG Artwork: Eroded Textured Blood Moon with Ink Breakup */}
            <svg
              viewBox="0 0 600 600"
              className="w-full h-full select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="voidBloodGrad" cx="44%" cy="40%" r="56%">
                  <stop offset="0%" stopColor="#E0001B" />
                  <stop offset="50%" stopColor="#B50016" />
                  <stop offset="80%" stopColor="#6E000D" />
                  <stop offset="100%" stopColor="#250005" />
                </radialGradient>
                {/* Ink Distressing Filter for Rough Lunar Perimeter */}
                <filter id="voidErosion">
                  <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="4" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="14" xChannelSelector="R" yChannelSelector="G" />
                </filter>
              </defs>

              {/* Dominant Deep-Red Ritual Disc with Ink Edge Erosion */}
              <circle
                cx="300"
                cy="280"
                r="225"
                fill="url(#voidBloodGrad)"
                filter="url(#voidErosion)"
              />

              {/* Ink Spatters & Dripping Tendrils breaking through perimeter */}
              {/* Dripping Tendril 1 (Center) */}
              <path d="M300,505 Q297,550 300,580 Q303,550 300,505" stroke="#B50016" strokeWidth="5" fill="none" />
              {/* Dripping Tendril 2 (Left) */}
              <path d="M260,490 Q258,540 260,565" stroke="#8E0011" strokeWidth="3.5" fill="none" />
              {/* Dripping Tendril 3 (Right) */}
              <path d="M340,495 Q343,535 340,555" stroke="#8E0011" strokeWidth="3" fill="none" />
              {/* Dripping Tendril 4 */}
              <path d="M220,460 Q215,505 218,530" stroke="#68000C" strokeWidth="2.5" fill="none" />
              {/* Dripping Tendril 5 */}
              <path d="M380,465 Q385,510 382,530" stroke="#68000C" strokeWidth="2.5" fill="none" />

              {/* Outer Edge Breakup Particles & Inked Splatters */}
              <circle cx="120" cy="190" r="3.5" fill="#B50016" />
              <circle cx="112" cy="205" r="2" fill="#B50016" />
              <circle cx="485" cy="180" r="4" fill="#B50016" />
              <circle cx="498" cy="195" r="2.5" fill="#B50016" />
              <circle cx="150" cy="120" r="3" fill="#B50016" />
              <circle cx="450" cy="115" r="3.5" fill="#B50016" />

              {/* Internal Occult Ink Cracks & Lunar Craters */}
              <path d="M210,170 Q270,220 255,320 Q240,370 280,440" stroke="#120002" strokeWidth="4.5" fill="none" opacity="0.8" />
              <path d="M255,320 Q350,290 400,350" stroke="#120002" strokeWidth="3" fill="none" opacity="0.7" />
              <path d="M230,250 Q160,280 140,340" stroke="#120002" strokeWidth="2.5" fill="none" opacity="0.65" />
              <circle cx="340" cy="220" r="28" fill="#140003" opacity="0.45" />
              <circle cx="240" cy="260" r="20" fill="#140003" opacity="0.4" />

              {/* Dark Reflective Water Plane with Ripple Lines */}
              <ellipse cx="300" cy="545" rx="275" ry="28" fill="#000000" opacity="0.9" />
              <line x1="40" y1="545" x2="560" y2="545" stroke="#B50016" strokeWidth="1.2" opacity="0.45" />
              <line x1="100" y1="558" x2="500" y2="558" stroke="#B50016" strokeWidth="0.8" opacity="0.3" />
              <line x1="160" y1="568" x2="440" y2="568" stroke="#B50016" strokeWidth="0.6" opacity="0.2" />

              {/* ================= FOREGROUND DEPTH PLANES ================= */}
              {/* Jagged Foreground Rock Silhouettes on Left and Right */}
              <polygon points="0,520 60,480 120,530 180,500 220,600 0,600" fill="#000000" />
              <polygon points="600,530 530,490 480,540 430,510 390,600 600,600" fill="#000000" />

              {/* TINY HUMAN SILHOUETTE (Creating Colossal Scale Contrast) */}
              <g id="void-silhouette" data-silhouette transform="translate(300, 520)">
                {/* Body & Cloak Silhouette (Small relative to 600px disc) */}
                <ellipse cx="0" cy="8" rx="4" ry="14" fill="#000000" />
                <circle cx="0" cy="-9" r="3" fill="#000000" />
                {/* Thin walking staff */}
                <line x1="5" y1="-8" x2="6" y2="22" stroke="#000000" strokeWidth="1" />
                {/* Shadow reflection in dark water */}
                <ellipse cx="0" cy="22" rx="3.5" ry="7" fill="#000000" opacity="0.6" />
              </g>
            </svg>
          </div>
        </div>

        {/* Right Column (3 cols): Technical Editorial Codes */}
        <div className="hidden lg:flex flex-col items-end gap-8 lg:w-1/4 z-20">
          <div className="flex flex-col items-end gap-2 text-right">
            <span className="font-mono text-xs tracking-widest text-[#EDE9DF]/40">
              TOTAL ECLIPSE
            </span>
            <div className="w-12 h-[1px] bg-[#EDE9DF]/20" />
            <p className="font-serif text-xs md:text-sm text-[#EDE9DF]/70 max-w-[180px] leading-relaxed">
              When the dark celestial body absorbs the final ray of reason, only the core remains.
            </p>
          </div>

          <div className="writing-vertical-rl font-mono text-[9px] tracking-[0.3em] text-[#B50016] uppercase border-l border-[#B50016]/30 pl-2">
            NULL_ZONE // DEPTH: 10,000M
          </div>
        </div>
      </div>

      {/* Bottom Editorial Marker */}
      <div className="relative z-10 flex items-center justify-between pt-6 border-t border-[#EDE9DF]/10 font-mono text-xs text-[#EDE9DF]/50">
        <div className="flex items-center gap-3">
          <span className="text-[#B50016] font-bold">03</span>
          <span className="text-[#EDE9DF]/70">THE UNBOUND VOID</span>
        </div>
        <div className="text-[10px] tracking-widest uppercase opacity-60">
          SINGULARITY // PLATE 03
        </div>
      </div>
    </section>
  );
}

export default VoidSection;
