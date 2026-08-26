import { MessageCircle, Mail, AtSign, ArrowUpRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Contact() {
  return (
    <section id="kontak" className="border-b border-line bg-bg py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <span className="swiss-label">— KONTAK [ 08 ]</span>
        <div className="mt-6 grid gap-[1px] bg-line border border-line rounded-[24px] overflow-hidden p-[1px] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="bg-white p-6 md:p-8 flex flex-col">
            <RevealOnScroll>
              <h2 className="font-display font-bold text-2xl md:text-[32px] leading-[0.95] tracking-[-0.03em]">
                Ayo diskusikan website yang
                <br />
                <span className="text-zinc-500 font-mono font-medium tracking-[-0.02em]">membuat bisnis kamu</span> terlihat lebih profesional.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500 max-w-xl">Isi form ini atau langsung chat WhatsApp untuk dapat ide konsep, estimasi harga, dan langkah selanjutnya tanpa biaya.</p>
            </RevealOnScroll>

            <RevealOnScroll delay={120}>
              <div className="mt-8 rounded-2xl border border-line bg-muted p-6">
                <div className="flex items-center justify-between">
                  <span className="swiss-label">CHAT WHATSAPP</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <p className="mt-2 text-sm text-zinc-600">Lebih cepat dan cocok untuk diskusi awal, clarifikasi kebutuhan, dan penjadwalan.</p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink text-white px-6 py-3 font-mono text-xs tracking-[0.08em] hover:bg-zinc-800 transition-colors">
                  <MessageCircle size={16} /> HUBUNGI VIA WHATSAPP <ArrowUpRight size={14} />
                </a>
              </div>
            </RevealOnScroll>

            <div className="mt-auto pt-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.12em] text-zinc-500 border-t border-line mt-6">
              <span>RESPONSE &lt; 24H</span><span className="h-1 w-1 rounded-full bg-line" /><span>GRATIS KONSULTASI</span>
            </div>
          </div>

          <RevealOnScroll delay={140}>
            <div className="bg-ink text-white p-6 md:p-8 flex flex-col h-full">
              <span className="font-mono text-[10px] tracking-[0.14em] text-white/70">HUBUNGI LANGSUNG</span>
              <p className="mt-3 text-sm leading-relaxed text-white/85">Tidak perlu form. Langsung chat WhatsApp untuk diskusi cepat, atau hubungi email dan Instagram jika kamu ingin kirim brief terlebih dahulu.</p>

              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white text-ink px-6 py-3 font-mono text-xs tracking-[0.08em] hover:bg-zinc-100 transition-colors">
                <MessageCircle size={16} /> WHATSAPP <ArrowUpRight size={14} />
              </a>

              <div className="mt-8">
                <p className="font-mono text-[10px] tracking-[0.14em] text-white/60">ALTERNATIF KONTAK</p>
                <div className="mt-3 space-y-2">
                  <a href="mailto:prayuda040305@gmail.com" className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-mono text-xs hover:bg-white/15 transition-colors">
                    <Mail size={14} className="text-white" /> prayuda040305@gmail.com
                  </a>
                  <a href="https://www.instagram.com/pr4yuda._/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-mono text-xs hover:bg-white/15 transition-colors">
                    <AtSign size={14} className="text-white" /> @pr4yuda._
                  </a>
                </div>
              </div>

              <div className="mt-auto pt-8 flex items-center justify-between font-mono text-[10px] tracking-[0.12em] text-white/60">
                <span>SEMARANG · INDONESIA</span><span>© 2026</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
