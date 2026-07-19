"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";

export default function FloatingCta() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[linear-gradient(135deg,_#234b63_0%,_#3c6d87_100%)] px-4 py-3 text-sm font-semibold text-[#fdf9f2] shadow-[0_20px_50px_rgba(35,75,99,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(35,75,99,0.32)]"
    >
      <MessageCircle size={18} strokeWidth={2.2} />
      <span className="hidden sm:inline">Chat WhatsApp</span>
      <span className="sm:hidden">WA</span>
    </a>
  );
}
