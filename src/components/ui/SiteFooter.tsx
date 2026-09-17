import React from "react";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-[#EDE9DF]/10 bg-[#050505] text-[#EDE9DF]/70 px-6 md:px-12 py-10 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Copyright */}
        <div className="text-[11px] tracking-widest text-[#EDE9DF]/50">
          © {new Date().getFullYear()} NOCTURNO
        </div>

        {/* Center Tagline */}
        <div className="text-center flex flex-col items-center">
          <span className="font-serif tracking-[0.3em] text-xs uppercase text-[#EDE9DF]">
            NOCTURNO
          </span>
          <span className="text-[10px] tracking-[0.25em] text-[#EDE9DF]/50 uppercase mt-1">
            A Journey Into What Lies Beneath.
          </span>
          <div className="w-6 h-[1px] bg-[#B50016] mt-2" />
        </div>

        {/* Right Editorial Controls */}
        <div className="flex items-center gap-6 text-[11px] tracking-widest uppercase">
          <span className="hover:text-[#B50016] cursor-pointer transition-colors">
            ABOUT
          </span>
          <span className="hover:text-[#B50016] cursor-pointer transition-colors">
            SOUND
          </span>
          <span className="hover:text-[#B50016] cursor-pointer transition-colors">
            FULLSCREEN
          </span>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
