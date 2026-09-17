import React from "react";
import Image from "next/image";
import { MangaPanelProps } from "@/types";
import { CropMark } from "./EditorialMarks";

interface ExtendedMangaPanelProps extends MangaPanelProps {
  frameStyle?: "standard" | "heavy" | "bleed" | "hairline";
  showCropMarks?: boolean;
  registrationCode?: string;
}

export function MangaPanel({
  src,
  alt = "Manga panel",
  aspectRatio,
  className = "",
  caption,
  japaneseCaption,
  panelNumber,
  priority = false,
  variant = "custom",
  frameStyle = "standard",
  showCropMarks = true,
  registrationCode,
  children,
}: ExtendedMangaPanelProps) {
  // Border style variations
  const borderClasses =
    frameStyle === "heavy"
      ? "border-2 border-[#050505]"
      : frameStyle === "hairline"
      ? "border border-[#050505]/40"
      : frameStyle === "bleed"
      ? "border-0"
      : "border border-[#050505]";

  return (
    <figure
      data-panel={panelNumber || "frame"}
      className={`relative group overflow-hidden bg-[#050505] select-none ${borderClasses} ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {/* Corner Crop Marks for Print Editorial Feel */}
      {showCropMarks && (
        <>
          <CropMark className="absolute top-1 left-1 z-30 opacity-30 text-[#EDE9DF]" size={10} />
          <CropMark className="absolute top-1 right-1 z-30 opacity-30 text-[#EDE9DF]" size={10} />
          <CropMark className="absolute bottom-1 left-1 z-30 opacity-30 text-[#EDE9DF]" size={10} />
          <CropMark className="absolute bottom-1 right-1 z-30 opacity-30 text-[#EDE9DF]" size={10} />
        </>
      )}

      {/* Panel Index Indicator / Archive Stamp */}
      {panelNumber && (
        <div className="absolute top-2 left-2 z-20 flex items-center gap-1.5 px-2 py-0.5 bg-[#050505] text-[#EDE9DF] text-[9px] font-mono tracking-widest border border-[#EDE9DF]/20">
          <span className="w-1 h-1 bg-[#B50016]" />
          <span>{panelNumber}</span>
          {registrationCode && (
            <span className="opacity-50 text-[8px] pl-1 border-l border-[#EDE9DF]/20">
              {registrationCode}
            </span>
          )}
        </div>
      )}

      {/* Image or Photocopied Ink Horror Manga Illustration */}
      <div data-panel-inner className="relative w-full h-full">
        {src ? (
          <div className="relative w-full h-full min-h-[220px]">
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale contrast-150 brightness-95"
            />
          </div>
        ) : children ? (
          children
        ) : (
          <div className="relative w-full h-full min-h-[220px] flex items-center justify-center bg-[#050505] overflow-hidden">
            {variant === "eyes" && <PhotocopiedHorrorEyesArtwork />}
            {variant === "street" && <GrittyStreetArtwork />}
            {variant === "pagoda" && <GrittyPagodaArtwork />}
            {variant === "ink" && <InkWashArtwork />}
            {variant === "custom" && <AbstractMangaArtwork />}
          </div>
        )}
      </div>

      {/* Editorial Caption Bar */}
      {(caption || japaneseCaption) && (
        <figcaption
          data-caption
          className="relative z-10 px-3 py-2 bg-[#050505] border-t border-[#050505] text-[#EDE9DF] flex items-center justify-between text-xs font-mono"
        >
          {japaneseCaption && (
            <span className="font-serif tracking-widest text-[#EDE9DF] text-xs md:text-sm font-medium">
              {japaneseCaption}
            </span>
          )}
          {caption && (
            <span className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] text-[#EDE9DF]/80 ml-auto">
              {caption}
            </span>
          )}
        </figcaption>
      )}

      {/* Sharp Corner Accent (Top Right) */}
      <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#EDE9DF]/30 pointer-events-none z-20" />
    </figure>
  );
}

/* =========================================================================
   AUTHENTIC HORROR MANGA INK & PHOTOCOPIED SCAN ARTWORKS
   Inspired by Kentaro Miura, Junji Ito, and Sui Ishida (Raw ink cross-hatch,
   screentones, high threshold contrast, messy hair, gritty paper bleed)
   ========================================================================= */

function PhotocopiedHorrorEyesArtwork() {
  return (
    <div className="relative w-full h-full bg-[#E5E0D3] overflow-hidden select-none">
      {/* Underlying Manga Screentone & Print Halftone Dot Matrix */}
      <div className="absolute inset-0 halftone-dense opacity-35 pointer-events-none z-10" />

      {/* Photocopied Scan Noise Overlay */}
      <div className="absolute inset-0 opacity-20 editorial-grain pointer-events-none z-10" />

      <svg
        viewBox="0 0 900 360"
        className="w-full h-full object-cover select-none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Intense Halftone Screentone Pattern */}
          <pattern id="mangaHatch" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#050505" strokeWidth="1.6" />
          </pattern>
          <pattern id="crossHatch" width="8" height="8" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="8" y2="8" stroke="#050505" strokeWidth="1.2" />
            <line x1="8" y1="0" x2="0" y2="8" stroke="#050505" strokeWidth="1.2" />
          </pattern>
          <radialGradient id="shadowVignette" cx="50%" cy="50%" r="60%">
            <stop offset="60%" stopColor="#050505" stopOpacity="0" />
            <stop offset="100%" stopColor="#050505" stopOpacity="0.8" />
          </radialGradient>
        </defs>

        {/* Paper Background Fill with Distressed Aging */}
        <rect width="900" height="360" fill="#E8E3D7" />

        {/* ================= BACKGROUND CROSS-HATCH SHADOWS ================= */}
        <rect x="0" y="0" width="900" height="360" fill="url(#crossHatch)" opacity="0.18" />

        {/* Deep Eye Socket & Forehead Hatching Shading */}
        {/* Left Brow Shade */}
        <polygon points="120,40 380,30 360,180 180,170" fill="url(#mangaHatch)" opacity="0.45" />
        {/* Right Brow Shade */}
        <polygon points="500,30 760,40 700,170 520,180" fill="url(#mangaHatch)" opacity="0.45" />
        {/* Under-eye Hollow Shadows */}
        <ellipse cx="280" cy="245" rx="110" ry="40" fill="url(#mangaHatch)" opacity="0.6" />
        <ellipse cx="610" cy="245" rx="110" ry="40" fill="url(#mangaHatch)" opacity="0.6" />

        {/* ================= NOSE BRIDGE & FACIAL INK BONE LINES ================= */}
        {/* Dense Cross-hatched Nose Ridge */}
        <path d="M430,130 L430,280 L448,270 L442,130 Z" fill="#050505" />
        <g stroke="#050505" strokeWidth="1.5">
          <line x1="420" y1="160" x2="445" y2="175" />
          <line x1="418" y1="175" x2="445" y2="190" />
          <line x1="415" y1="190" x2="445" y2="205" />
          <line x1="418" y1="205" x2="445" y2="220" />
          <line x1="415" y1="220" x2="445" y2="235" />
          <line x1="418" y1="235" x2="445" y2="250" />
        </g>

        {/* ================= LEFT EYE (HORROR INK MANGA DETAIL) ================= */}
        <g transform="translate(10, 0)">
          {/* Eyebrow: Aggressive multi-stroked ink line */}
          <path d="M150,110 Q260,80 370,120" stroke="#050505" strokeWidth="14" fill="none" strokeLinecap="round" />
          <path d="M170,105 Q280,75 350,110" stroke="#050505" strokeWidth="7" fill="none" />
          {/* Furrowed Brow Strain Lines */}
          <line x1="365" y1="95" x2="385" y2="120" stroke="#050505" strokeWidth="3" />
          <line x1="380" y1="105" x2="395" y2="130" stroke="#050505" strokeWidth="2.5" />
          <line x1="392" y1="115" x2="405" y2="140" stroke="#050505" strokeWidth="2" />

          {/* Sclera (Eye White with shadow) */}
          <path d="M185,190 Q270,140 370,180 Q275,240 185,190 Z" fill="#F4F1E8" stroke="#050505" strokeWidth="3" />
          {/* Sclera Shadow Hatching (Upper Lid Shadow) */}
          <path d="M190,185 Q270,148 365,178 L360,195 Q270,165 195,198 Z" fill="#050505" opacity="0.4" />

          {/* Heavy Inked Upper Eyelid & Piercing Dark Lashes */}
          <path d="M175,190 Q265,130 380,180" stroke="#050505" strokeWidth="16" fill="none" strokeLinecap="round" />
          <path d="M175,190 Q265,135 380,180" stroke="#050505" strokeWidth="22" fill="none" opacity="0.3" />

          {/* Individual Spiky Dark Lashes */}
          <path d="M220,165 L210,140" stroke="#050505" strokeWidth="3.5" />
          <path d="M245,152 L240,128" stroke="#050505" strokeWidth="4" />
          <path d="M275,145 L272,120" stroke="#050505" strokeWidth="4.5" />
          <path d="M310,148 L315,124" stroke="#050505" strokeWidth="4" />
          <path d="M345,160 L358,135" stroke="#050505" strokeWidth="3.5" />

          {/* IRIS: Distressed Concentric Rings & Fine Etched Lines */}
          <g transform="translate(285, 186)">
            {/* Dark outer ring */}
            <circle cx="0" cy="0" r="38" fill="#050505" />
            <circle cx="0" cy="0" r="34" fill="#180407" />
            {/* Subtle red eerie occult rim */}
            <circle cx="0" cy="0" r="30" stroke="#B50016" strokeWidth="2.5" fill="none" opacity="0.85" />
            {/* Radiating Iris Ink Spikes */}
            <circle cx="0" cy="0" r="24" fill="#0c0c0c" />
            {/* Pupil */}
            <circle cx="0" cy="0" r="14" fill="#050505" />
            {/* Unsettling Sharp Highlights */}
            <circle cx="-10" cy="-10" r="4.5" fill="#FFFFFF" />
            <circle cx="8" cy="8" r="2.5" fill="#FFFFFF" />
            <circle cx="12" cy="-4" r="1.5" fill="#B50016" />
          </g>

          {/* Lower Lid: Rough Broken Ink Line */}
          <path d="M205,215 Q275,238 355,205" stroke="#050505" strokeWidth="4.5" fill="none" strokeDasharray="18 4 35 3" />
          <path d="M215,225 Q275,246 345,218" stroke="#050505" strokeWidth="1.8" fill="none" />

          {/* Heavy Horror Manga Hatching Below Left Eye */}
          <g stroke="#050505" strokeWidth="1.8">
            <line x1="210" y1="230" x2="225" y2="258" />
            <line x1="222" y1="232" x2="238" y2="260" />
            <line x1="235" y1="235" x2="252" y2="264" />
            <line x1="248" y1="238" x2="266" y2="266" />
            <line x1="262" y1="240" x2="280" y2="268" />
            <line x1="276" y1="240" x2="295" y2="268" />
            <line x1="290" y1="238" x2="310" y2="266" />
            <line x1="305" y1="234" x2="325" y2="262" />
            <line x1="320" y1="228" x2="340" y2="256" />
            <line x1="335" y1="222" x2="352" y2="248" />
          </g>
        </g>

        {/* ================= RIGHT EYE (HORROR INK MANGA DETAIL) ================= */}
        <g transform="translate(40, 0)">
          {/* Eyebrow: Aggressive arched stroke */}
          <path d="M510,120 Q620,80 730,110" stroke="#050505" strokeWidth="14" fill="none" strokeLinecap="round" />
          <path d="M530,110 Q610,75 710,105" stroke="#050505" strokeWidth="7" fill="none" />

          {/* Furrowed Brow Strains */}
          <line x1="490" y1="130" x2="505" y2="105" stroke="#050505" strokeWidth="3" />
          <line x1="480" y1="140" x2="492" y2="115" stroke="#050505" strokeWidth="2.5" />

          {/* Sclera (Eye White with shadow) */}
          <path d="M515,180 Q615,140 705,190 Q615,240 515,180 Z" fill="#F4F1E8" stroke="#050505" strokeWidth="3" />
          {/* Sclera Shadow */}
          <path d="M520,178 Q615,148 700,185 L695,198 Q615,165 525,195 Z" fill="#050505" opacity="0.4" />

          {/* Heavy Inked Upper Eyelid */}
          <path d="M505,180 Q615,130 715,190" stroke="#050505" strokeWidth="16" fill="none" strokeLinecap="round" />
          <path d="M505,180 Q615,135 715,190" stroke="#050505" strokeWidth="22" fill="none" opacity="0.3" />

          {/* Spiky Dark Lashes */}
          <path d="M535,160 L525,135" stroke="#050505" strokeWidth="3.5" />
          <path d="M565,148 L560,124" stroke="#050505" strokeWidth="4" />
          <path d="M600,145 L602,120" stroke="#050505" strokeWidth="4.5" />
          <path d="M635,152 L645,128" stroke="#050505" strokeWidth="4" />
          <path d="M670,165 L685,140" stroke="#050505" strokeWidth="3.5" />

          {/* IRIS: Distressed Concentric Rings */}
          <g transform="translate(605, 186)">
            <circle cx="0" cy="0" r="38" fill="#050505" />
            <circle cx="0" cy="0" r="34" fill="#180407" />
            <circle cx="0" cy="0" r="30" stroke="#B50016" strokeWidth="2.5" fill="none" opacity="0.85" />
            <circle cx="0" cy="0" r="24" fill="#0c0c0c" />
            <circle cx="0" cy="0" r="14" fill="#050505" />
            <circle cx="-10" cy="-10" r="4.5" fill="#FFFFFF" />
            <circle cx="8" cy="8" r="2.5" fill="#FFFFFF" />
            <circle cx="12" cy="-4" r="1.5" fill="#B50016" />
          </g>

          {/* Lower Lid: Rough Broken Ink Line */}
          <path d="M535,205 Q615,238 685,215" stroke="#050505" strokeWidth="4.5" fill="none" strokeDasharray="25 5 20 4" />
          <path d="M545,218 Q615,246 675,225" stroke="#050505" strokeWidth="1.8" fill="none" />

          {/* Heavy Horror Manga Hatching Below Right Eye */}
          <g stroke="#050505" strokeWidth="1.8">
            <line x1="535" y1="222" x2="550" y2="248" />
            <line x1="548" y1="228" x2="565" y2="256" />
            <line x1="562" y1="234" x2="580" y2="262" />
            <line x1="576" y1="238" x2="595" y2="266" />
            <line x1="590" y1="240" x2="610" y2="268" />
            <line x1="605" y1="240" x2="625" y2="268" />
            <line x1="620" y1="238" x2="640" y2="266" />
            <line x1="635" y1="235" x2="655" y2="264" />
            <line x1="650" y1="230" x2="668" y2="258" />
            <line x1="665" y1="222" x2="682" y2="250" />
          </g>
        </g>

        {/* ================= WILD JAGGED MANGA HAIR STRANDS CUTTING ACROSS ================= */}
        {/* Massive framing hair blocks */}
        <polygon points="0,0 900,0 900,70 780,45 680,110 580,30 460,95 380,20 280,105 180,35 70,90 0,60" fill="#050505" />
        {/* Left Side Hair Locks */}
        <polygon points="0,0 140,0 110,360 0,360" fill="#050505" />
        {/* Right Side Hair Locks */}
        <polygon points="770,0 900,0 900,360 790,360" fill="#050505" />

        {/* Heavy Jagged Bang Strands Slashing Between & Across Eyes */}
        <polygon points="460,40 435,240 420,245 440,45" fill="#050505" />
        <polygon points="340,30 375,215 360,220 320,40" fill="#050505" />
        <polygon points="530,30 500,220 485,215 510,35" fill="#050505" />
        <polygon points="260,40 280,190 268,195 240,45" fill="#050505" />
        <polygon points="620,40 600,195 588,190 605,35" fill="#050505" />

        {/* Fine Stray Inked Hair Strands (Scratchy & Unkempt) */}
        <path d="M300,50 Q360,180 395,290" stroke="#050505" strokeWidth="3" fill="none" />
        <path d="M580,50 Q520,180 485,290" stroke="#050505" strokeWidth="3" fill="none" />
        <path d="M220,60 Q260,190 290,320" stroke="#050505" strokeWidth="2.5" fill="none" />
        <path d="M680,60 Q640,190 610,320" stroke="#050505" strokeWidth="2.5" fill="none" />
        <path d="M410,70 Q440,190 430,340" stroke="#050505" strokeWidth="2" fill="none" />

        {/* ================= INK SPLATTERS & PHOTOCOPY TEXTURE IMPERFECTIONS ================= */}
        <circle cx="210" cy="70" r="2.5" fill="#050505" />
        <circle cx="218" cy="76" r="1.5" fill="#050505" />
        <circle cx="680" cy="80" r="3" fill="#050505" />
        <circle cx="692" cy="72" r="1.8" fill="#050505" />
        <circle cx="450" cy="290" r="2" fill="#050505" />
        <circle cx="462" cy="305" r="1.2" fill="#050505" />
        <circle cx="340" cy="275" r="1.5" fill="#050505" />
        <circle cx="560" cy="275" r="1.5" fill="#050505" />

        {/* Dark Vignette Shading */}
        <rect width="900" height="360" fill="url(#shadowVignette)" />

        {/* Japanese Manga Sound Effect / Focus Kanji Stamp */}
        <g transform="translate(45, 55)">
          <rect x="-6" y="-18" width="56" height="32" fill="#050505" />
          <text x="0" y="4" fill="#EDE9DF" fontSize="18" fontFamily="var(--font-japanese), serif" fontWeight="bold" letterSpacing="4">
            凝視
          </text>
        </g>
      </svg>
    </div>
  );
}

function GrittyStreetArtwork() {
  return (
    <div className="relative w-full h-full bg-[#050505] overflow-hidden select-none">
      {/* Screentone Texture */}
      <div className="absolute inset-0 halftone-dark opacity-30 pointer-events-none z-10" />

      <svg
        viewBox="0 0 400 600"
        className="w-full h-full object-cover select-none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grittySky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#080808" />
            <stop offset="40%" stopColor="#120104" />
            <stop offset="100%" stopColor="#030303" />
          </linearGradient>
          <radialGradient id="lanternHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#EDE9DF" />
            <stop offset="70%" stopColor="#B50016" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#050505" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="400" height="600" fill="url(#grittySky)" />

        {/* Traditional Edo Timber Houses Silhouette */}
        <polygon points="0,120 140,220 120,600 0,600" fill="#0a0a0a" stroke="#EDE9DF" strokeWidth="0.5" strokeOpacity="0.3" />
        <polygon points="400,150 270,240 285,600 400,600" fill="#0a0a0a" stroke="#EDE9DF" strokeWidth="0.5" strokeOpacity="0.3" />

        {/* Eaves & Beams */}
        <line x1="0" y1="150" x2="155" y2="250" stroke="#EDE9DF" strokeWidth="1.5" opacity="0.35" />
        <line x1="400" y1="170" x2="260" y2="270" stroke="#EDE9DF" strokeWidth="1.5" opacity="0.35" />

        {/* Vanishing Alleyway Pavement with Hatching */}
        <polygon points="120,600 188,360 212,360 285,600" fill="#111111" />
        <g stroke="#050505" strokeWidth="2">
          <line x1="140" y1="560" x2="265" y2="560" />
          <line x1="155" y1="520" x2="250" y2="520" />
          <line x1="168" y1="480" x2="238" y2="480" />
          <line x1="178" y1="440" x2="228" y2="440" />
          <line x1="184" y1="400" x2="220" y2="400" />
        </g>

        {/* Primary Glowing Lantern (Left) with Kanji '死境' */}
        <g transform="translate(85, 230)">
          <circle cx="25" cy="45" r="75" fill="url(#lanternHalo)" opacity="0.75" />
          <line x1="25" y1="0" x2="25" y2="20" stroke="#EDE9DF" strokeWidth="2" opacity="0.8" />
          <rect x="8" y="20" width="34" height="56" rx="5" fill="#F4F1E8" stroke="#050505" strokeWidth="3" />
          <line x1="8" y1="32" x2="42" y2="32" stroke="#050505" strokeWidth="1.5" />
          <line x1="8" y1="64" x2="42" y2="64" stroke="#050505" strokeWidth="1.5" />
          {/* Kanji: 死境 (Death Realm) */}
          <text x="25" y="47" fill="#B50016" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="var(--font-japanese)">
            死
          </text>
          <text x="25" y="60" fill="#B50016" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="var(--font-japanese)">
            境
          </text>
        </g>

        {/* Distant Secondary Lantern (Right) */}
        <g transform="translate(255, 320)">
          <circle cx="18" cy="30" r="50" fill="url(#lanternHalo)" opacity="0.6" />
          <line x1="18" y1="0" x2="18" y2="15" stroke="#EDE9DF" strokeWidth="1.5" opacity="0.7" />
          <rect x="6" y="15" width="24" height="42" rx="4" fill="#F4F1E8" stroke="#050505" strokeWidth="2.5" />
          <text x="18" y="38" fill="#B50016" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="var(--font-japanese)">
            厄
          </text>
        </g>

        {/* Solitary Silhouette Figure in Heavy Shadows */}
        <ellipse cx="200" cy="435" rx="8" ry="22" fill="#000000" />
        <circle cx="200" cy="408" r="5.5" fill="#000000" />

        {/* Scratchy Ink Rain / Print Noise */}
        <g stroke="#EDE9DF" strokeWidth="1" opacity="0.15">
          <line x1="40" y1="30" x2="15" y2="190" />
          <line x1="330" y1="50" x2="305" y2="230" />
          <line x1="170" y1="100" x2="145" y2="300" />
          <line x1="260" y1="70" x2="235" y2="280" />
        </g>
      </svg>
    </div>
  );
}

function GrittyPagodaArtwork() {
  return (
    <div className="relative w-full h-full bg-[#080808] overflow-hidden select-none">
      {/* Halftone Screentone */}
      <div className="absolute inset-0 halftone-dark opacity-25 pointer-events-none z-10" />

      <svg
        viewBox="0 0 600 360"
        className="w-full h-full object-cover select-none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="pagodaMoon" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F4F1E8" />
            <stop offset="35%" stopColor="#EDE9DF" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#EDE9DF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#080808" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="600" height="360" fill="#080808" />

        {/* Eerie Glowing Full Moon */}
        <circle cx="230" cy="105" r="75" fill="url(#pagodaMoon)" />
        <circle cx="230" cy="105" r="40" fill="#F4F1E8" />
        {/* Lunar Surface Ink Texture */}
        <circle cx="220" cy="95" r="8" fill="#D8D3C5" opacity="0.6" />
        <circle cx="242" cy="115" r="12" fill="#D8D3C5" opacity="0.5" />
        <circle cx="215" cy="120" r="6" fill="#D8D3C5" opacity="0.5" />

        {/* Mountain Silhouettes */}
        <path d="M0,260 Q150,180 300,250 T600,230 L600,360 L0,360 Z" fill="#121212" />

        {/* Silhouette Pagoda */}
        <g transform="translate(180, 75)">
          <line x1="50" y1="20" x2="50" y2="65" stroke="#000000" strokeWidth="4" />
          <path d="M18,85 Q50,70 82,85 L70,105 L30,105 Z" fill="#000000" />
          <path d="M10,120 Q50,105 90,120 L78,140 L22,140 Z" fill="#000000" />
          <path d="M3,155 Q50,135 97,155 L82,180 L18,180 Z" fill="#000000" />
          <rect x="24" y="180" width="52" height="55" fill="#000000" />
        </g>

        {/* Traditional Village Rooftops Foreground */}
        <polygon points="0,270 70,245 150,285 230,255 330,295 450,245 540,275 600,255 600,360 0,360" fill="#000000" />

        {/* Distant Window Lights */}
        <rect x="170" y="315" width="12" height="8" fill="#F4F1E8" opacity="0.9" />
        <rect x="460" y="305" width="10" height="7" fill="#F4F1E8" opacity="0.8" />

        {/* Murder of Flying Crows (Distressed Ink Silhouettes) */}
        <g fill="#000000">
          <path d="M270,110 Q295,92 320,118 Q295,108 270,110 Z" />
          <path d="M275,108 Q290,126 305,108 Z" />
          <path d="M195,130 Q210,116 225,130 Z" />
          <path d="M360,88 Q375,76 390,88 Z" />
          <path d="M150,150 Q160,142 170,150 Z" />
          <path d="M420,130 Q430,122 440,130 Z" />
        </g>
      </svg>
    </div>
  );
}

function InkWashArtwork() {
  return (
    <div className="relative w-full h-full bg-[#050505] flex items-center justify-center">
      <div className="w-full h-full flex flex-col items-center justify-center p-8 halftone-dark">
        <div className="w-16 h-16 rounded-full border border-[#B50016] flex items-center justify-center mb-4">
          <div className="w-10 h-10 bg-[#B50016]/20 rounded-full" />
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#EDE9DF]/60 text-center">
          DARK VISAGE
        </p>
      </div>
    </div>
  );
}

function AbstractMangaArtwork() {
  return (
    <div className="relative w-full h-full bg-[#0a0a0a] flex items-center justify-center">
      <div className="p-6 border border-[#EDE9DF]/10 bg-[#050505] text-center">
        <span className="font-mono text-xs tracking-widest text-[#B50016] uppercase">
          PANEL RECORD
        </span>
      </div>
    </div>
  );
}

export default MangaPanel;
