import React from "react";

export function InkWashArtwork() {
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

export default InkWashArtwork;
