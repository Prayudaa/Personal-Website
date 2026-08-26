import { Check, ArrowUpRight } from "lucide-react";
import { SERVICES, WHATSAPP_LINK } from "@/lib/data";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Services() {
  return (
    <section id="layanan" className="border-b border-line bg-bg py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <span className="swiss-label">— LAYANAN [ 05 ]</span>
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mt-2">Pilih paket sesuai kebutuhan</h2>
            <p className="text-sm text-zinc-500 mt-2 max-w-lg">Transparan, sistematis, dan siap scale sesuai kebutuhan bisnis kamu.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-zinc-400">
            <span>3 TIERS</span><span className="h-px w-8 bg-line" /><span>SWISS GRID</span>
          </div>
        </div>

        <div className="grid gap-2 md:hidden mb-6">
          {[
            { t: "Konsultasi Gratis", d: "Diskusi pertama tanpa biaya" },
            { t: "Harga Transparan", d: "Sesuai scope dan kebutuhan" },
            { t: "Support Pasca Launch", d: "Siap bantu setelah website aktif" },
          ].map((it) => (
            <div key={it.t} className="rounded-2xl border border-line bg-white px-4 py-3 flex items-center justify-between">
              <div>
                <div className="font-mono text-[11px] tracking-[0.08em] font-semibold">{it.t.toUpperCase()}</div>
                <div className="text-xs text-zinc-500">{it.d}</div>
              </div>
              <span className="h-6 w-6 rounded-full bg-ink text-white flex items-center justify-center text-xs">↗</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-[1px] bg-line border border-line rounded-[24px] overflow-hidden p-[1px]">
          {SERVICES.map((s, idx) => (
            <RevealOnScroll key={s.name} delay={idx * 80}>
              <div className={`p-6 md:p-7 flex flex-col h-full min-h-[420px] ${s.highlight ? "bg-ink text-white" : "bg-white text-ink"}`}>
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-[10px] tracking-[0.14em] ${s.highlight ? "text-white/50" : "text-zinc-400"}`}>0{idx + 1} — {s.highlight ? "POPULAR" : "TIER"}</span>
                  {s.highlight && <span className="rounded-full bg-swiss-red text-white font-mono text-[10px] tracking-[0.12em] px-2.5 py-1">PALING DIMINATI</span>}
                </div>
                <h3 className="font-display font-bold text-xl mt-4 tracking-tight">{s.name}</h3>
                <p className={`text-[13px] leading-relaxed mt-2 ${s.highlight ? "text-white/60" : "text-zinc-500"}`}>{s.desc}</p>
                <div className={`mt-4 font-display font-bold text-[18px] tracking-tight ${s.highlight ? "text-white" : "text-ink"}`}>{s.price}</div>
                <div className={`mt-5 h-px ${s.highlight ? "bg-white/10" : "bg-line"}`} />
                <ul className="space-y-2.5 mt-5 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px] leading-relaxed">
                      <span className={`mt-0.5 h-5 w-5 rounded-full flex items-center justify-center shrink-0 ${s.highlight ? "bg-white text-ink" : "bg-ink text-white"}`}>
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                      <span className={s.highlight ? "text-white/85" : "text-zinc-600"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-mono text-xs tracking-[0.08em] transition-colors ${s.highlight ? "bg-white text-ink hover:bg-zinc-100" : "bg-ink text-white hover:bg-zinc-800"}`}>
                  TANYA PAKET INI <ArrowUpRight size={14} />
                </a>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
