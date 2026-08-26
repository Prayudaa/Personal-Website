import { PROCESS_STEPS } from "@/lib/data";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Process() {
  return (
    <section className="border-b border-line bg-bg py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <span className="swiss-label">— PROSES KERJA [ 06 ]</span>
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mt-2">Cara kerja yang jelas & sistematis</h2>
          </div>
          <span className="hidden md:inline font-mono text-[10px] tracking-[0.12em] text-zinc-500">4 STEPS — END TO END</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-line border border-line rounded-[24px] overflow-hidden p-[1px]">
          {PROCESS_STEPS.map((item, idx) => (
            <RevealOnScroll key={item.step} delay={idx * 70}>
              <div className="bg-white p-6 h-full flex flex-col min-h-[200px]">
                <div className="flex items-start justify-between">
                  <span className="swiss-num text-4xl text-ink">{item.step}</span>
                  <span className="font-mono text-[10px] tracking-[0.14em] text-zinc-600 border border-line rounded-full px-2 py-1 bg-muted">STEP {item.step}</span>
                </div>
                <h3 className="font-display font-semibold text-[16px] mt-6 tracking-tight">{item.title}</h3>
                <p className="text-[13px] leading-relaxed text-zinc-500 mt-2 flex-1">{item.desc}</p>
                <div className="mt-4 flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-zinc-500">
                  <span className="h-px flex-1 bg-line" /> 0{idx + 1} / 04
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
