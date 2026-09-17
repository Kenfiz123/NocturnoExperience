import React from "react";

export function StreetArtwork() {
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

export default StreetArtwork;
