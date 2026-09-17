import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import MangaPanel from "@/components/ui/MangaPanel";
import { ChapterStamp, RegistrationTarget, CropMark } from "@/components/ui/EditorialMarks";

export function DescentSection() {
  return (
    <section
      id="descent"
      data-scene="descent"
      className="relative min-h-screen w-full bg-[#EDE9DF] text-[#050505] flex flex-col justify-between pt-[var(--scene-safe-top,7.5rem)] pb-8 px-6 md:px-14 overflow-hidden select-none border-b-2 border-[#050505] paper-texture-aged"
    >
      {/* Background Editorial Margin Print Lines */}
      <div className="absolute top-0 bottom-0 left-6 md:left-14 w-[1px] bg-[#050505]/10 pointer-events-none z-[var(--z-base,1)]" />
      <div className="absolute top-0 bottom-0 right-6 md:right-14 w-[1px] bg-[#050505]/10 pointer-events-none z-[var(--z-base,1)]" />

      {/* =========================================================================
          SCENE 02 METADATA HEADER (Positioned safely below global chrome safe-zone)
          ========================================================================= */}
      <div className="relative z-[var(--z-scene-meta,30)] flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-6">
        {/* Left: Scene Label & Chapter Title */}
        <div className="flex items-start gap-5">
          <SectionLabel number="02" title="DESCENT" theme="paper" />
          <div className="hidden lg:flex flex-col justify-end pb-2.5 border-l border-[#050505]/15 pl-4">
            <span className="font-mono text-[9px] text-[#050505]/50 tracking-widest">
              PROOF SHEET // SPREAD 02
            </span>
            <span className="font-japanese text-sm font-semibold tracking-wider text-[#050505]">
              深淵への下降
            </span>
          </div>
        </div>

        {/* Right: Scene Chapter Stamp & Editorial Subtitle (Safely separated from TopNav) */}
        <div className="flex flex-col items-start md:items-end gap-1.5 select-none pt-1">
          <div className="flex items-center gap-2.5">
            <RegistrationTarget size={13} className="text-[#050505]/50 hidden sm:inline-block" />
            <span className="hidden sm:inline-block font-mono text-[9px] text-[#050505]/50 tracking-widest">
              REG // 02-DESCENT
            </span>
            <ChapterStamp code="ACT 02" label="THRESHOLD" theme="paper" />
          </div>
          <div className="font-mono text-[10px] md:text-[11px] tracking-[0.25em] text-[#050505]/70 uppercase border-l-2 border-[#B50016] pl-2.5 py-0.5 mt-0.5">
            THE DEEPER YOU GO
          </div>
        </div>
      </div>

      {/* =========================================================================
          ASYMMETRIC MANGA STORY PAGE COMPOSITION
          ========================================================================= */}
      <div
        data-manga-composition
        className="relative z-[var(--z-artwork,10)] my-6 md:my-10 max-w-6xl mx-auto w-full flex flex-col gap-8"
      >
        {/* TOP ROW: ASYMMETRICAL 75% WIDTH HORROR EYE PANEL + EDITORIAL GUTTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main 75% Width Large Eyes Panel */}
          <div className="lg:col-span-9">
            <MangaPanel
              variant="eyes"
              panelNumber="P.01"
              registrationCode="REG-A1"
              frameStyle="heavy"
              aspectRatio="16/7"
              japaneseCaption="凝視する闇"
              caption="THE GAZE OF THE UNSEEN"
              className="shadow-sm"
            />
          </div>

          {/* Right Negative Space: Printer Proofing Notes & Chapter Metadata */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full border-t lg:border-t-0 lg:border-l border-[#050505]/20 pt-4 lg:pt-0 lg:pl-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between font-mono text-[9px] text-[#050505]/50">
                <span>BLEED: +3MM</span>
                <span className="text-[#B50016] font-bold">INK // DENSE</span>
              </div>
              <p className="font-serif text-xs md:text-sm text-[#050505]/80 leading-relaxed">
                Eyes stripped of warmth, staring out of the newsprint shadows. What witnesses you cannot be named.
              </p>
            </div>

            <div className="mt-4 lg:mt-10 flex flex-col gap-1.5 font-mono text-[10px] text-[#050505]/60 border-t border-[#050505]/15 pt-3">
              <span className="tracking-widest">CHAPTER: 02 // DESCENT</span>
              <span className="tracking-wider text-[#B50016]">ARCHIVE // 094-B</span>
              <div className="w-12 h-[1px] bg-[#050505]/30 mt-1" />
            </div>
          </div>
        </div>

        {/* LOWER ROW: UNEVEN 3-COLUMN SPREAD (ALLEYWAY + VERTICAL TYPOGRAPHY + PAGODA) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Lower Left (5 cols): Dark Alleyway with Distressed Japanese Lanterns */}
          <div className="md:col-span-5 flex flex-col">
            <MangaPanel
              variant="street"
              panelNumber="P.02"
              registrationCode="FRAME-02"
              frameStyle="standard"
              aspectRatio="3/4"
              japaneseCaption="死境の路地"
              caption="ALLEYWAY OF SHADOWS"
              className="h-full shadow-sm"
            />
          </div>

          {/* Center (2 cols): Very Narrow Vertical Japanese Typography Strip (Dialogue Gutter) */}
          <div
            data-dialogue-gutter
            className="md:col-span-2 flex flex-col items-center justify-between bg-[#EDE9DF] border border-[#050505] p-4 py-6 shadow-sm min-h-[220px]"
          >
            {/* Top Registration Cross */}
            <CropMark size={12} className="text-[#050505]" />

            {/* Vertical Japanese Dialogue Gutter */}
            <div className="my-auto py-4 flex flex-col items-center">
              {/* Desktop/Tablet: Vertical Writing */}
              <div className="hidden sm:block writing-vertical-rl font-japanese text-2xl md:text-3xl tracking-[0.4em] text-[#050505] font-semibold leading-relaxed border-r border-[#050505]/30 pr-3">
                落ちていく
              </div>
              {/* Mobile: Horizontal Writing */}
              <div className="sm:hidden font-japanese text-xl tracking-[0.3em] text-[#050505] font-semibold">
                落ちていく
              </div>

              <span className="font-mono text-[10px] tracking-[0.25em] text-[#B50016] font-bold uppercase mt-4">
                FALLING
              </span>
              <span className="font-mono text-[9px] tracking-[0.2em] text-[#050505]/60 uppercase">
                FURTHER
              </span>
            </div>

            {/* Bottom Proof Code */}
            <span className="font-mono text-[8px] text-[#050505]/40 tracking-widest">
              GUTTER // 02
            </span>
          </div>

          {/* Lower Right (5 cols): Narrative Paragraph + Moody Pagoda Panel */}
          <div className="md:col-span-5 flex flex-col justify-between gap-6">
            {/* Narrative Box with Halftone Texture */}
            <div className="relative border border-[#050505] bg-[#F4F1E8] p-5 shadow-sm overflow-hidden">
              <div className="absolute inset-0 halftone-light opacity-20 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center justify-between pb-2 border-b border-[#050505]/15 text-[10px] font-mono text-[#050505]/60">
                  <span className="font-semibold text-[#050505]">RECORD: LOWER DISTRICT</span>
                  <span>TIME: 23:48</span>
                </div>
                <p className="font-serif text-xs md:text-sm text-[#050505]/85 mt-2.5 leading-relaxed">
                  Stepping past the threshold, gravity alters. The lantern light does not guide you out—it marks how deeply you have plunged into the ink.
                </p>
              </div>
            </div>

            {/* Pagoda & Crows Under Moon */}
            <div className="w-full flex-1 flex flex-col">
              <MangaPanel
                variant="pagoda"
                panelNumber="P.03"
                registrationCode="SECTOR-09"
                frameStyle="standard"
                aspectRatio="16/9"
                japaneseCaption="月下の古塔"
                caption="INTO THE UNKNOWN"
                className="shadow-sm h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spread Marker & Margin Codes */}
      <div className="relative z-[var(--z-scene-meta,30)] flex items-center justify-between pt-4 border-t border-[#050505]/20 font-mono text-xs text-[#050505]/70">
        <div className="flex items-center gap-4">
          <span className="font-bold text-sm tracking-widest text-[#050505] border-b-2 border-[#B50016]">
            02
          </span>
          <div className="w-16 h-[1px] bg-[#050505]/30 hidden sm:block" />
          <span className="text-[10px] uppercase tracking-[0.2em]">
            CHAPTER TWO — TRANSITION OF REALMS
          </span>
        </div>

        <div className="flex items-center gap-4 text-[9px] tracking-widest uppercase">
          <span className="hidden md:inline text-[#050505]/50">PLATE 02 // OFFSET PRINT</span>
          <span className="font-bold text-[#050505]">PAGE 028</span>
        </div>
      </div>
    </section>
  );
}

export default DescentSection;
