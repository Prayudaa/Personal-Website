"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";

export default function FloatingCta() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full border-2 border-navy bg-navy px-4 py-3 text-sm font-semibold text-bg shadow-neubrutal transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_rgba(41,69,162,0.2)]"
    >
      <MessageCircle size={18} strokeWidth={2.2} />
      <span className="hidden sm:inline">Chat WhatsApp</span>
      <span className="sm:hidden">WA</span>
    </a>
  );
}
