"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, WHATSAPP_LINK } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-[12px]">
      <div className="mx-auto max-w-6xl px-5 md:px-8 h-[56px] md:h-[64px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-[9px] bg-ink flex items-center justify-center text-white font-mono text-[11px] font-bold tracking-widest">BY</div>
          <span className="font-display font-bold text-[17px] tracking-tight text-ink">
            byprayuda<span className="font-mono font-medium text-swiss-red">.co</span>
          </span>
          <span className="hidden sm:inline-flex ml-1 rounded-full border border-line bg-white px-2.5 py-1 font-mono text-[10px] leading-none tracking-[0.12em] text-zinc-500">SEMARANG — ID</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] tracking-[0.12em] text-zinc-500 hover:text-ink px-3 py-1.5 rounded-full hover:bg-white border border-transparent hover:border-line transition-colors"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.14em] text-zinc-500 hidden lg:block">INDEX 2026 / 01</span>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ink text-white font-mono text-[11px] tracking-[0.08em] px-4 py-2.5 rounded-full hover:bg-zinc-800 transition-colors"
          >
            WHATSAPP
            <ArrowUpRight size={14} />
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-line bg-white text-ink"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-bg">
          <nav id="mobile-nav" className="flex flex-col px-5 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-[12px] tracking-[0.14em] text-zinc-600 py-4 border-b border-line last:border-0"
              >
                {link.label.toUpperCase()}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-ink text-white font-mono text-xs tracking-[0.12em] px-5 py-3 rounded-full"
            >
              WHATSAPP <ArrowUpRight size={14} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
