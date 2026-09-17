import React from "react";
import Image from "next/image";
import { MangaPanelProps } from "@/types";
import { CropMark } from "./EditorialMarks";
import {
  HorrorEyesArtwork,
  StreetArtwork,
  PagodaArtwork,
  InkWashArtwork,
  AbstractMangaArtwork,
} from "@/components/artwork";

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
            {variant === "eyes" && <HorrorEyesArtwork />}
            {variant === "street" && <StreetArtwork />}
            {variant === "pagoda" && <PagodaArtwork />}
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
            <span className="font-japanese tracking-widest text-[#EDE9DF] text-xs md:text-sm font-medium">
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

export default MangaPanel;
