"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";

export default function FloatingCta() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-ink text-white px-4 py-3 font-mono text-xs tracking-[0.08em] border border-ink shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:bg-zinc-800 transition-colors"
    >
      <MessageCircle size={16} />
      <span className="hidden sm:inline">WHATSAPP</span>
      <span className="sm:hidden">WA</span>
    </a>
  );
}
