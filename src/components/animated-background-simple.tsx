"use client";

import React, { useEffect } from "react";
import { usePreloader } from "./preloader";

export default function AnimatedBackgroundSimple() {
  const { bypassLoading } = usePreloader();

  useEffect(() => {
    bypassLoading();
  }, [bypassLoading]);

  return (
    <div
      className="fixed inset-0 z-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"
      aria-hidden
    />
  );
}
