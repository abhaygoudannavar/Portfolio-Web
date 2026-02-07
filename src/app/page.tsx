"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import SkillsSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";

// CSS 3D Animated Background Component
const Animated3DBackground = () => {
  return (
    <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none perspective-1000">
      {/* 3D Rotating Cube */}
      <div className="absolute top-1/4 right-1/4 cube-container">
        <div className="cube">
          <div className="cube-face cube-front"></div>
          <div className="cube-face cube-back"></div>
          <div className="cube-face cube-right"></div>
          <div className="cube-face cube-left"></div>
          <div className="cube-face cube-top"></div>
          <div className="cube-face cube-bottom"></div>
        </div>
      </div>

      {/* Second Cube - smaller */}
      <div className="absolute bottom-1/3 left-1/4 cube-container-small">
        <div className="cube-small">
          <div className="cube-face-small cube-front-small"></div>
          <div className="cube-face-small cube-back-small"></div>
          <div className="cube-face-small cube-right-small"></div>
          <div className="cube-face-small cube-left-small"></div>
          <div className="cube-face-small cube-top-small"></div>
          <div className="cube-face-small cube-bottom-small"></div>
        </div>
      </div>

      {/* Floating 3D Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ring-container">
        <div className="ring ring-1"></div>
        <div className="ring ring-2"></div>
        <div className="ring ring-3"></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-4 h-4 rounded-full bg-cyan-500/50 blur-sm animate-pulse-slow" />
      <div className="absolute bottom-40 right-32 w-3 h-3 rounded-full bg-purple-500/50 blur-sm animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-16 w-2 h-2 rounded-full bg-pink-500/50 blur-sm animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-1/3 w-3 h-3 rounded-full bg-emerald-500/50 blur-sm animate-pulse-slow" style={{ animationDelay: '0.5s' }} />

      {/* Grid floor effect */}
      <div className="absolute bottom-0 left-0 right-0 h-96 grid-floor opacity-20"></div>
    </div>
  );
};

function MainPage() {
  return (
    <SmoothScroll>
      {/* Base gradient background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      
      {/* CSS 3D Animation */}
      <Animated3DBackground />
      
      <main className={cn("bg-slate-100 dark:bg-transparent")}>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}

export default MainPage;
