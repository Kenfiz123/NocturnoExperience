import React from "react";
import { SectionLabelProps } from "@/types";

export function SectionLabel({
  number,
  title,
  subtitle,
  theme = "dark",
  className = "",
  align = "left",
}: SectionLabelProps) {
  const isPaper = theme === "paper";
  const isRed = theme === "red";

  const numColor = isPaper
    ? "text-[#050505]"
    : isRed
    ? "text-[#F6F3EA]"
    : "text-[#EDE9DF]";

  const titleColor = isPaper
    ? "text-[#050505]/70"
    : isRed
    ? "text-[#F6F3EA]/70"
    : "text-[#EDE9DF]/60";

  const lineColor = isPaper
    ? "bg-[#050505]/20"
    : isRed
    ? "bg-[#F6F3EA]/20"
    : "bg-[#EDE9DF]/20";

  const alignClasses =
    align === "center"
      ? "items-center text-center"
      : align === "right"
      ? "items-end text-right"
      : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignClasses} select-none ${className}`}>
      <div className="flex items-baseline gap-2">
        <span
          className={`font-mono text-2xl md:text-3xl font-light tracking-tight ${numColor}`}
        >
          {number}
        </span>
      </div>
      <span
        className={`font-mono text-xs uppercase tracking-[0.25em] font-medium mt-1 ${titleColor}`}
      >
        {title}
      </span>
      {subtitle && (
        <span className={`text-[10px] tracking-widest uppercase mt-0.5 opacity-50`}>
          {subtitle}
        </span>
      )}
      <div className={`w-8 h-[1px] ${lineColor} mt-3`} />
    </div>
  );
}

export default SectionLabel;
