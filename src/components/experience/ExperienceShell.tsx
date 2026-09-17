"use client";

import React, { ReactNode } from "react";
import { LenisProvider } from "@/hooks/useLenis";
import CinematicScroll from "./CinematicScroll";
import TopNav from "@/components/ui/TopNav";
import SiteFooter from "@/components/ui/SiteFooter";

interface ExperienceShellProps {
  children: ReactNode;
}

export function ExperienceShell({ children }: ExperienceShellProps) {
  return (
    <LenisProvider>
      <div className="relative w-full min-h-screen bg-[#050505] text-[#EDE9DF] flex flex-col">
        {/* Cinematic Motion Runtime */}
        <CinematicScroll />

        {/* Editorial Global Navigation Bar */}
        <TopNav />

        {/* Main Narrative Experience Canvas */}
        <main className="relative flex-1 w-full flex flex-col">
          {children}
        </main>

        {/* Editorial Site Footer */}
        <SiteFooter />
      </div>
    </LenisProvider>
  );
}

export default ExperienceShell;
