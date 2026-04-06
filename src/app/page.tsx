"use client";

import React from "react";
import SkillsSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import ModernBackground from "@/components/modern-background";
import SmoothScroll from "@/components/smooth-scroll";
import FloatingContact from "@/components/floating-contact";

export default function MainPage() {
  return (
    <>
      <ModernBackground />
      <FloatingContact />
      <SmoothScroll>
        <main className="relative min-h-screen w-full">
          <HeroSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </SmoothScroll>
    </>
  );
}
