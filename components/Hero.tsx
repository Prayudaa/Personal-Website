import { MessageCircle, ArrowUpRight, Grid3X3, Layers } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Hero() {
  return (
    <section id="home" className="border-b border-line bg-bg">
      {/* top meta bar */}
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex items-center justify-between py-3 border-b border-line font-mono text-[10px] tracking-[0.14em] text-zinc-500">
          <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-swiss-red animate-pulse" /> AVAILABLE FOR NEW PROJECTS — Q3 2026</span>
          <span className="hidden md:inline">SEMARANG · JAKARTA · REMOTE</span>
          <span className="hidden md:inline">EST. 2023 — INDEX / BYPRAYUDA</span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 md:px-8 py-8 md:py-12">
        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-[1px] bg-line border border-line rounded-[24px] overflow-hidden p-[1px]">
          {/* main headline - spans 8 */}
          <div className="col-span-12 lg:col-span-8 bg-white p-6 md:p-8 lg:p-10 flex flex-col">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-line bg-white px-3 py-1.5">
                <Grid3X3 size={14} className="text-zinc-400" />
                <span className="font-mono text-[10px] tracking-[0.14em] text-zinc-600">JASA PEMBUATAN WEBSITE — COMPANY PROFILE & TOKO ONLINE</span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={80}>
              <h1 className="mt-6 font-display font-bold text-[34px] sm:text-[42px] lg:text-[52px] leading-[0.95] tracking-[-0.04em] text-ink">
                Website profesional
                <br />
                <span className="font-mono font-medium tracking-[-0.03em] text-zinc-400">yang menanamkan</span>
                <br />
                <span className="inline-block bg-ink text-white px-2.5 py-1 text-[1em] leading-none mt-1">kepercayaan</span>
                <span className="text-swiss-red">.</span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={160}>
              <p className="mt-6 max-w-[520px] text-[15px] leading-relaxed text-zinc-600">
                Company profile dan toko online yang dirancang rapi, profesional, dan dibangun custom — untuk memberi kesan terpercaya dan memperkuat citra bisnis sejak kunjungan pertama.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={220}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-ink text-white px-6 py-3.5 rounded-full font-mono text-xs tracking-[0.08em] hover:bg-zinc-800 transition-colors">
                  <MessageCircle size={16} /> KONSULTASI GRATIS <ArrowUpRight size={14} />
                </a>
                <a href="#portofolio" className="inline-flex items-center justify-center gap-2 bg-white border border-line px-6 py-3.5 rounded-full font-mono text-xs tracking-[0.08em] text-ink hover:border-ink transition-colors">
                  LIHAT PORTOFOLIO <Layers size={14} />
                </a>
              </div>
              <div className="mt-5 flex flex-wrap gap-2 font-mono text-[10px] tracking-[0.12em] text-zinc-500">
                <span className="rounded-full border border-line bg-muted px-3 py-1.5">↳ BALAS &lt; 24JAM</span>
                <span className="rounded-full border border-line bg-muted px-3 py-1.5">↳ GRATIS KONSULTASI AWAL</span>
                <span className="rounded-full border border-line bg-muted px-3 py-1.5">↳ CUSTOM — BUKAN TEMPLATE</span>
              </div>
            </RevealOnScroll>

            <div className="mt-auto pt-8 flex items-center gap-6 border-t border-line mt-8">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full border border-white bg-zinc-200" />
                <div className="h-8 w-8 rounded-full border border-white bg-zinc-300" />
                <div className="h-8 w-8 rounded-full border border-white bg-ink flex items-center justify-center text-white font-mono text-[10px]">10+</div>
              </div>
              <p className="font-mono text-[11px] leading-tight text-zinc-500">Dipercaya bisnis & UMKM<br /><span className="text-ink font-semibold">4.9/5 rating kepuasan</span></p>
              <div className="ml-auto hidden sm:flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-zinc-400">
                <span>SYSTEM</span><span className="h-1 w-1 rounded-full bg-swiss-red" /><span>ONLINE</span>
              </div>
            </div>
          </div>

          {/* right bento - spans 4 */}
          <div className="col-span-12 lg:col-span-4 grid gap-[1px] bg-line">
            {/* stats bento */}
            <div className="bg-white p-6 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="swiss-label">EXPERIENCE / INDEX</span>
                <span className="font-mono text-[10px] text-zinc-400">[ 01 — 04 ]</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-line bg-muted p-4">
                  <div className="swiss-num text-3xl">10+</div>
                  <div className="font-mono text-[10px] tracking-[0.12em] text-zinc-500 mt-1">PROJECT SELESAI</div>
                </div>
                <div className="rounded-2xl border border-line bg-ink p-4 text-white">
                  <div className="swiss-num text-3xl">1<span className="text-swiss-red">d</span></div>
                  <div className="font-mono text-[10px] tracking-[0.12em] text-white/60 mt-1">RESPONSE TIME</div>
                </div>
                <div className="rounded-2xl border border-line bg-white p-4 col-span-2 flex items-center justify-between">
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.14em] text-zinc-400">STACK</div>
                    <div className="font-mono text-xs mt-1 text-ink">NEXT.JS · TS · TAILWIND</div>
                  </div>
                  <div className="h-9 w-9 rounded-full bg-muted border border-line flex items-center justify-center font-mono text-[10px]">↗</div>
                </div>
              </div>
            </div>

            {/* Swiss grid visual */}
            <div className="bg-muted p-6 relative overflow-hidden min-h-[240px] flex flex-col">
              <div className="absolute inset-0 swiss-grid opacity-[0.35]" />
              <div className="relative flex items-center justify-between">
                <span className="swiss-label text-ink">GRID SYSTEM</span>
                <span className="font-mono text-[10px] border border-line bg-white rounded-full px-2 py-1">12 COLUMNS</span>
              </div>
              {/* mini bento preview */}
              <div className="relative mt-6 grid grid-cols-3 gap-2">
                <div className="h-16 rounded-xl bg-white border border-line" />
                <div className="h-16 rounded-xl bg-ink border border-ink" />
                <div className="h-16 rounded-xl bg-white border border-line" />
                <div className="col-span-2 h-20 rounded-xl bg-white border border-line p-3 flex flex-col justify-between">
                  <span className="font-mono text-[9px] tracking-[0.12em] text-zinc-400">STRUCTURE</span>
                  <span className="font-display font-bold text-sm leading-none">Rapi & konsisten</span>
                </div>
                <div className="h-20 rounded-xl bg-swiss-red border border-swiss-red p-3 flex flex-col justify-between text-white">
                  <span className="font-mono text-[9px] tracking-[0.12em] text-white/70">GROWTH</span>
                  <span className="font-display font-bold text-sm leading-none">Siap scale</span>
                </div>
              </div>
              <div className="relative mt-4 flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-zinc-500">
                <span className="h-px flex-1 bg-line" /> SWISS — BENTO GRID
              </div>
            </div>
          </div>
        </div>

        {/* bottom ticker */}
        <div className="mt-3 flex items-center gap-3 overflow-hidden rounded-full border border-line bg-white px-4 py-2.5">
          <span className="shrink-0 font-mono text-[10px] tracking-[0.14em] bg-ink text-white px-2.5 py-1 rounded-full">SERVICES</span>
          <div className="flex items-center gap-3 font-mono text-[11px] text-zinc-500 whitespace-nowrap overflow-x-auto scrollbar-none">
            <span>COMPANY PROFILE</span><span className="h-1 w-1 rounded-full bg-line" /><span>TOKO ONLINE</span><span className="h-1 w-1 rounded-full bg-line" /><span>CUSTOM PROJECT</span><span className="h-1 w-1 rounded-full bg-line" /><span>LANDING PAGE</span><span className="h-1 w-1 rounded-full bg-line" /><span>DASHBOARD</span>
          </div>
          <span className="ml-auto hidden md:inline font-mono text-[10px] tracking-[0.12em] text-zinc-400">— 2026 EDITION</span>
        </div>
      </div>
    </section>
  );
}
