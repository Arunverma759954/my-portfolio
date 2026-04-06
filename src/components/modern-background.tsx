"use client";

import { usePreloader } from "./preloader";
import React, { useEffect } from "react";

export default function ModernBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-white transition-colors duration-1000">
      {/* Structural Professional Grid */}
      <div 
        className="absolute inset-0 opacity-[0.4]" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #f1f5f9 1px, transparent 1px), 
            linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} 
      />

      {/* Subtle Depth Shading */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50/30 to-transparent" />
    </div>
  );
}
