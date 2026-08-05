"use client";

import { useEffect, useState } from "react";

export default function HeroScene() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="relative h-[320px] w-full overflow-hidden rounded-[32px] border border-navy/10 bg-white/60 p-4 shadow-[0_24px_70px_rgba(15,27,61,0.12)]">
      <div
        className="absolute inset-0 transition-all duration-500 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(140,160,217,0.28), transparent 35%)`,
        }}
      />
      <div className="absolute inset-0 bg-navy/6 animate-[gradientShift_8s_ease_infinite]" />

      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-navy/15" />
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-navy/10" />
      <div className="absolute left-[18%] top-[22%] h-20 w-20 rounded-full bg-navy/10 blur-2xl" />
      <div className="absolute right-[12%] bottom-[16%] h-24 w-24 rounded-full bg-accent-light/30 blur-3xl" />

      <div className="absolute left-[24%] top-[28%] h-16 w-16 rounded-full border border-navy/20 animate-[floatOrb_4s_ease-in-out_infinite]" />
      <div className="absolute right-[20%] top-[24%] h-14 w-14 rounded-full border border-navy/20 animate-[floatOrb_5s_ease-in-out_infinite_0.6s]" />
      <div className="absolute bottom-[22%] left-[30%] h-12 w-12 rounded-full border border-navy/20 animate-[floatOrb_4.8s_ease-in-out_infinite_1.2s]" />

      <div className="absolute left-[50%] top-[50%] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy/10 shadow-[0_0_50px_rgba(41,69,162,0.16)]" />
      <div className="absolute left-[50%] top-[50%] h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-white/70" />
    </div>
  );
}
