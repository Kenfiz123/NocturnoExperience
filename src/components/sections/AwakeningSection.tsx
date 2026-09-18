import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { ChapterStamp, RegistrationTarget, CropMark } from "@/components/ui/EditorialMarks";
import AwakeningStage from "./AwakeningStage";

export function AwakeningSection() {
  return (
    <section
      id="awakening"
      data-scene="awakening"
      className="relative z-20 min-h-screen w-full bg-[#7A000C] text-[#F6F3EA] flex flex-col justify-between pt-[var(--scene-safe-top,7.5rem)] pb-8 px-6 md:px-14 overflow-hidden select-none border-b border-[#050505]/30 will-change-[clip-path,transform]"
    >
      {/* Editorial Screentone Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-20 editorial-grain z-[var(--z-base,1)]" />

      {/* Portal Transition Inked Rim & Depth Vignette (Active exclusively during portal plunge) */}
      <div
        data-portal-rim
        className="absolute inset-0 pointer-events-none z-[25] opacity-0 will-change-[opacity]"
        style={{
          background:
            "radial-gradient(circle at var(--portal-cx, 50%) var(--portal-cy, 48%), transparent 0%, transparent 58%, rgba(20, 0, 3, 0.42) 78%, rgba(10, 0, 2, 0.85) 94%, #050505 100%)",
        }}
      />

      {/* Asymmetrical Black Graphic Blocks Framing Top and Edge (Manga Splash Page Style) */}
      <div className="absolute top-0 right-0 w-32 md:w-64 h-2 bg-[#050505] pointer-events-none z-[var(--z-base,1)]" />
      <div className="absolute top-0 right-0 w-2 h-48 md:h-72 bg-[#050505] pointer-events-none z-[var(--z-base,1)]" />
      <div className="absolute bottom-0 left-0 w-48 h-3 bg-[#050505] pointer-events-none z-[var(--z-base,1)]" />

      {/* Top Header Region (Safely positioned below global chrome) */}
      <div className="relative z-[var(--z-scene-meta,30)] flex items-start justify-between mb-4 md:mb-6">
        <SectionLabel number="04" title="AWAKENING" theme="red" />

        <div className="flex items-center gap-4 text-[#F6F3EA]/60 font-mono text-[9px] select-none pt-1">
          <RegistrationTarget size={14} />
          <CropMark size={10} className="text-[#F6F3EA]/50" />
          <ChapterStamp code="ACT 04" label="RESURGENCE" theme="red" />
          <span className="hidden sm:inline tracking-widest text-[#F6F3EA] font-semibold">
            FINAL SPREAD
          </span>
        </div>
      </div>

      {/* MAIN AWAKENING SPREAD: ASYMMETRICAL PROFILE SILHOUETTE + CROPPED WORDMARK */}
      <AwakeningStage />

      {/* Bottom Editorial Marker & Manga Finale Stamp */}
      <div className="relative z-10 flex items-center justify-between pt-6 border-t border-[#F6F3EA]/20 font-mono text-xs text-[#F6F3EA]/70">
        <div className="flex items-center gap-3">
          <span className="text-[#050505] font-bold bg-[#F6F3EA] px-2 py-0.5 text-[9px]">
            SPLASH 04
          </span>
          <span className="text-[10px] tracking-widest uppercase">
            NOCTURNO // PHASE 02
          </span>
        </div>

        <div className="text-[10px] tracking-[0.25em] uppercase text-right opacity-80">
          END IS A BEGINNING.
        </div>
      </div>
    </section>
  );
}

export default AwakeningSection;
