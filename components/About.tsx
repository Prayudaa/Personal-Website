import { BENEFITS } from "@/lib/data";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function About() {
  return (
    <section id="tentang" className="border-b border-line bg-bg py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex items-center justify-between mb-6">
          <span className="swiss-label">— TENTANG SAYA [ 02 ]</span>
          <span className="hidden md:inline font-mono text-[10px] tracking-[0.12em] text-zinc-500">DESIGNER & DEVELOPER / SEMARANG</span>
        </div>

        <div className="grid grid-cols-12 gap-[1px] bg-line border border-line rounded-[24px] overflow-hidden p-[1px]">
          {/* left - profile bento */}
          <div className="col-span-12 md:col-span-4 bg-white p-6 md:p-7 flex flex-col">
            <RevealOnScroll className="flex-1 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.14em] text-zinc-500">PROFILE — 2026</span>
                <span className="h-2 w-2 rounded-full bg-swiss-red" />
              </div>
              <div className="mt-6 flex flex-col items-center text-center">
                <div className="h-20 w-20 rounded-2xl bg-ink flex items-center justify-center text-white font-display font-bold text-2xl">P</div>
                <h3 className="mt-4 font-display font-bold text-xl tracking-tight">Prayuda</h3>
                <p className="font-mono text-[11px] tracking-[0.12em] text-zinc-500 mt-1">DESIGNER & DEVELOPER</p>
                <div className="mt-4 grid grid-cols-3 gap-2 w-full">
                  {[
                    { v: "10+", l: "PROJECT" },
                    { v: "1d", l: "BALAS" },
                    { v: "100%", l: "GRATIS" },
                  ].map((s) => (
                    <div key={s.l} className="rounded-xl border border-line bg-muted py-3 text-center">
                      <div className="font-display font-bold text-sm leading-none text-ink">{s.v}</div>
                      <div className="font-mono text-[9px] tracking-[0.12em] text-zinc-600 mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 rounded-xl border border-line bg-muted p-4">
                <p className="font-mono text-[10px] tracking-[0.12em] text-zinc-600">FOCUS</p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600">Membantu bisnis menjadikan website sebagai alat penjualan dan kepercayaan.</p>
              </div>
            </RevealOnScroll>
          </div>

          {/* right - intro + benefits */}
          <div className="col-span-12 md:col-span-8 bg-muted p-6 md:p-8 flex flex-col gap-6">
            <RevealOnScroll>
              <h2 className="font-display font-bold text-3xl md:text-[32px] leading-[0.95] tracking-[-0.03em] text-ink">
                Website sebagai alat
                <br />
                <span className="text-zinc-600 font-mono font-medium tracking-[-0.02em]">penjualan & kepercayaan.</span>
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-zinc-600 max-w-2xl">
                Dari company profile yang memberi kesan profesional sampai toko online yang memudahkan calon pelanggan mengambil keputusan, setiap detail dibuat untuk memperjelas nilai bisnis Anda.
              </p>
            </RevealOnScroll>

            <div className="grid sm:grid-cols-3 gap-[1px] bg-line border border-line rounded-2xl overflow-hidden p-[1px]">
              {BENEFITS.map((b, i) => (
                <RevealOnScroll key={b.title} delay={i * 80}>
                  <div className="bg-white p-5 h-full flex flex-col">
                    <div className="flex items-center justify-between">
                      <span className="swiss-num text-2xl text-zinc-500">0{i + 1}</span>
                      <span className="h-6 w-6 rounded-full border border-line flex items-center justify-center font-mono text-[10px]">↗</span>
                    </div>
                    <h3 className="font-display font-semibold text-[15px] leading-tight mt-4 text-ink">{b.title}</h3>
                    <p className="text-[13px] leading-relaxed text-zinc-500 mt-2 flex-1">{b.desc}</p>
                    <div className="mt-4 h-px bg-line" />
                    <span className="font-mono text-[10px] tracking-[0.12em] text-zinc-500 mt-3">0{i + 1} / BENEFIT</span>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
