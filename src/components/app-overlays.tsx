"use client";

import Particles from "@/components/Particles";

export default function AppOverlays() {
  return (
    <Particles
      className="fixed inset-0 -z-10 animate-fade-in"
      quantity={50}
    />
  );
}
