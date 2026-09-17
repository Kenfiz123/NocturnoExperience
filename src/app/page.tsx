import React from "react";
import ExperienceShell from "@/components/experience/ExperienceShell";
import IntroSection from "@/components/sections/IntroSection";
import DescentSection from "@/components/sections/DescentSection";
import VoidSection from "@/components/sections/VoidSection";
import AwakeningSection from "@/components/sections/AwakeningSection";

export default function HomePage() {
  return (
    <ExperienceShell>
      {/* 01 — INTRO */}
      <IntroSection />

      {/* 02 — DESCENT */}
      <DescentSection />

      {/* 03 — THE VOID */}
      <VoidSection />

      {/* 04 — AWAKENING */}
      <AwakeningSection />
    </ExperienceShell>
  );
}
