import React from "react";

export function PagodaArtwork() {
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

export default PagodaArtwork;
