import { METRICS } from "@/lib/data";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Metrics() {
  return (
    <section className="border-b border-line bg-bg py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <span className="swiss-label">— METRICS [ 03 ]</span>
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mt-2">Angka yang menunjukkan kualitas.</h2>
          </div>
          <p className="hidden md:block max-w-[360px] text-sm leading-relaxed text-zinc-500">Setiap angka adalah cerminan layanan yang cepat, rapi, dan berfokus pada hasil bisnis.</p>
        </div>

        <div className="grid gap-[1px] bg-line border border-line rounded-[24px] overflow-hidden p-[1px] sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <RevealOnScroll key={m.label} delay={i * 70}>
              <div className={`p-6 h-full flex flex-col min-h-[160px] ${i === 1 ? "bg-ink text-white" : i === 2 ? "bg-swiss-red text-white" : "bg-white"}`}>
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-[10px] tracking-[0.14em] ${i === 1 || i === 2 ? "text-white/60" : "text-zinc-400"}`}>0{i + 1} — {m.label.toUpperCase()}</span>
                  <span className={`h-7 w-7 rounded-full flex items-center justify-center text-[14px] border ${i === 1 || i === 2 ? "border-white/15 bg-white/10" : "border-line bg-muted"}`}>{m.icon}</span>
                </div>
                <div className={`swiss-num text-4xl mt-5 ${i === 1 || i === 2 ? "text-white" : "text-ink"}`}>{m.value}</div>
                <p className={`text-[13px] leading-relaxed mt-2 flex-1 ${i === 1 || i === 2 ? "text-white/70" : "text-zinc-500"}`}>{m.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
