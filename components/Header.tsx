"use client";

import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, WHATSAPP_LINK } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-nav">
      <div className="mx-auto max-w-6xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#home"
          className="font-display font-bold text-xl md:text-2xl tracking-tight text-navy-dark transition-all duration-200 hover:text-accent-light"
        >
          by<span className="text-accent-light">prayuda</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium text-sm text-navy-dark/70 hover:text-navy transition-all duration-200 hover:-translate-y-0.5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-hover cta-primary text-white font-display font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 text-sm shadow-neubrutal hover:shadow-[8px_8px_0_rgba(var(--color-navy-rgb),0.2)]"
          >
            <MessageCircle size={18} strokeWidth={2} />
            Chat WhatsApp
          </a>
        </div>

          <button
          className="md:hidden glass-card p-2 rounded-xl text-navy-dark transition-transform duration-200 active:scale-95 bg-glass-08 border border-white/10"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-nav border-t border-navy/10">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-medium text-base text-navy-dark py-3 border-b border-navy/10 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy text-bg font-display font-semibold px-5 py-3 rounded-full flex items-center justify-center gap-2 text-sm mt-4 shadow-md shadow-navy/20"
            >
              <MessageCircle size={18} strokeWidth={2} />
              Chat WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
