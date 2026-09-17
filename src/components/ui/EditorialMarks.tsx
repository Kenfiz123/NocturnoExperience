import React from "react";

interface CropMarksProps {
  className?: string;
  color?: string;
  size?: number;
}

export function CropMark({ className = "", color = "currentColor", size = 12 }: CropMarksProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={`select-none opacity-40 ${className}`}
      aria-hidden="true"
    >
      <line x1="8" y1="0" x2="8" y2="16" stroke={color} strokeWidth="1" />
      <line x1="0" y1="8" x2="16" y2="8" stroke={color} strokeWidth="1" />
    </svg>
  );
}

export function RegistrationTarget({ className = "", color = "currentColor", size = 18 }: CropMarksProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`select-none opacity-45 ${className}`}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="7" stroke={color} strokeWidth="0.8" />
      <circle cx="12" cy="12" r="2.5" fill={color} />
      <line x1="12" y1="1" x2="12" y2="23" stroke={color} strokeWidth="0.8" />
      <line x1="1" y1="12" x2="23" y2="12" stroke={color} strokeWidth="0.8" />
    </svg>
  );
}

export function CornerBrackets({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true">
      <div
        className="absolute top-0 left-0 w-2 h-2 border-t border-l"
        style={{ borderColor: color }}
      />
      <div
        className="absolute top-0 right-0 w-2 h-2 border-t border-r"
        style={{ borderColor: color }}
      />
      <div
        className="absolute bottom-0 left-0 w-2 h-2 border-b border-l"
        style={{ borderColor: color }}
      />
      <div
        className="absolute bottom-0 right-0 w-2 h-2 border-b border-r"
        style={{ borderColor: color }}
      />
    </div>
  );
}

export function ChapterStamp({
  code,
  label,
  className = "",
  theme = "dark",
}: {
  code: string;
  label?: string;
  className?: string;
  theme?: "dark" | "paper" | "red";
}) {
  const isPaper = theme === "paper";
  const isRed = theme === "red";

  const borderColor = isPaper
    ? "border-[#050505]/40"
    : isRed
    ? "border-[#F6F3EA]/30"
    : "border-[#EDE9DF]/25";

  const textColor = isPaper
    ? "text-[#050505]"
    : isRed
    ? "text-[#F6F3EA]"
    : "text-[#EDE9DF]";

  return (
    <div
      className={`inline-flex items-center gap-2 px-2 py-0.5 border ${borderColor} font-mono text-[9px] md:text-[10px] tracking-widest uppercase select-none ${textColor} ${className}`}
    >
      <span className="w-1.5 h-1.5 bg-[#B50016] inline-block" />
      <span className="font-semibold">{code}</span>
      {label && <span className="opacity-60 font-light border-l pl-2 border-current">{label}</span>}
    </div>
  );
}
