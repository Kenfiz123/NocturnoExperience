import React from "react";

export function AwakeningStage() {
  return (
    <div
      data-awakening-stage
      className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-6 md:my-10 w-full"
    >
      {/* Left Column (3 cols): Vertical Japanese Poem & Editorial Proverb */}
      <div
        data-awakening-copy
        className="lg:col-span-3 flex flex-row lg:flex-col items-start gap-8 z-20 pl-1 will-change-transform"
      >
        {/* Vertical Japanese line */}
        <div className="writing-vertical-rl font-japanese text-2xl md:text-3xl tracking-[0.45em] text-[#F6F3EA] font-normal leading-loose border-r border-[#F6F3EA]/25 pr-5">
          そして、目覚める。
        </div>

        <div className="flex flex-col gap-1 max-w-[200px]">
          <span className="font-mono text-[9px] tracking-[0.3em] text-[#050505] uppercase font-bold bg-[#F6F3EA] px-2 py-0.5 inline-block w-fit">
            RESURGENCE
          </span>
          <p className="font-mono text-[11px] text-[#F6F3EA]/85 tracking-wider leading-relaxed mt-1">
            BEYOND THE SHADOWS OF EXTINCTION, CONSCIOUSNESS SURGES FORTH.
          </p>
        </div>
      </div>

      {/* Center/Right Column (9 cols): Silhouette Profile + Oversized Cropped AWAKENING Title */}
      <div className="lg:col-span-9 relative flex flex-col justify-center min-h-[460px] md:min-h-[580px]">
        {/* High-Contrast Inked Profile Silhouette with Windswept Hair */}
        <div
          data-awakening-silhouette
          className="absolute inset-0 flex items-center justify-end pointer-events-none opacity-90 overflow-hidden will-change-transform"
        >
          <svg
            viewBox="0 0 900 600"
            className="w-full h-full object-contain object-right select-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="awakeningHairGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#050505" />
                <stop offset="65%" stopColor="#1a0003" />
                <stop offset="100%" stopColor="#3d0006" />
              </linearGradient>
            </defs>

            {/* Massive Dark Framing Hair Blocks Sweeping Across the Canvas */}
            <path
              d="M520,60 Q750,20 900,180 Q850,420 540,580 L440,600 Q720,380 520,60 Z"
              fill="url(#awakeningHairGrad)"
            />
            <path d="M560,90 Q720,180 820,380 Q740,460 520,560" stroke="#050505" strokeWidth="12" fill="none" opacity="0.7" />
            <path d="M580,130 Q760,260 840,420" stroke="#050505" strokeWidth="8" fill="none" opacity="0.6" />

            {/* Inked Profile Silhouette (Facing Left) with High Manga Contrast */}
            <path
              d="M510,90 
                 Q440,110 410,180 
                 Q405,205 398,235 
                 Q385,248 360,268 
                 L368,274 
                 Q384,275 372,295 
                 Q362,305 378,315 
                 Q368,335 390,345 
                 Q375,370 395,410 
                 Q405,460 440,580 
                 L600,580 
                 Q550,360 530,220 
                 Z"
              fill="#050505"
            />

            {/* Sclera & Piercing Eye Profile */}
            <path d="M400,240 Q418,234 430,246" stroke="#F6F3EA" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <path d="M406,243 Q418,247 424,252" stroke="#F6F3EA" strokeWidth="1.8" fill="none" />
            {/* Eerie White Rim Light on Lips */}
            <path d="M366,272 Q372,274 369,282" stroke="#F6F3EA" strokeWidth="1" fill="none" opacity="0.8" />

            {/* Bangs & Spiky Strands Framing the Face */}
            <polygon points="450,70 410,200 440,180 470,90" fill="#050505" />
            <polygon points="480,70 430,230 455,210 500,100" fill="#050505" />
            <polygon points="510,80 460,270 485,240 530,110" fill="#050505" />

            {/* Stray Inked Strands Whipping Forward in the Red Storm */}
            <path d="M480,90 Q380,170 330,280" stroke="#050505" strokeWidth="4" fill="none" />
            <path d="M500,100 Q400,200 350,310" stroke="#050505" strokeWidth="3" fill="none" />
            <path d="M520,110 Q420,230 380,350" stroke="#050505" strokeWidth="2.5" fill="none" />
            <path d="M540,120 Q440,260 410,390" stroke="#050505" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Oversized Partially Cropped Display Typography */}
        <div className="relative z-20 flex flex-col items-start text-left pl-2 md:pl-8">
          <h2
            data-display-title
            className="font-serif text-[clamp(4.2rem,13.5vw,13.5rem)] font-normal tracking-tight text-[#F6F3EA] leading-[0.82] uppercase select-none -ml-1 md:-ml-4 lg:-ml-8 drop-shadow-md"
          >
            AWAKENING
          </h2>

          <div className="mt-8 flex flex-col items-start gap-2">
            <p className="font-mono text-xs md:text-sm tracking-[0.35em] text-[#F6F3EA]/95 uppercase font-medium">
              A NEW NIGHT BEGINS.
            </p>
            <div className="w-20 h-[1px] bg-[#F6F3EA]/40 mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwakeningStage;
