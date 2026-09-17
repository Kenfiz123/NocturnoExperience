import React from "react";

export function HorrorEyesArtwork() {
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

export default HorrorEyesArtwork;
