import { ReactNode } from "react";

export type SectionTheme = "dark" | "paper" | "red";

export interface SectionLabelProps {
  number: string;
  title: string;
  subtitle?: string;
  theme?: SectionTheme;
  className?: string;
  align?: "left" | "right" | "center";
}

export type MangaPlaceholderVariant = "eyes" | "street" | "pagoda" | "ink" | "custom";

export interface MangaPanelProps {
  src?: string;
  alt?: string;
  aspectRatio?: string;
  className?: string;
  caption?: string;
  japaneseCaption?: string;
  panelNumber?: string;
  priority?: boolean;
  variant?: MangaPlaceholderVariant;
  children?: ReactNode;
}

export interface NavItem {
  id: string;
  label: string;
  number: string;
}
