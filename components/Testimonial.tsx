import RevealOnScroll from "@/components/RevealOnScroll";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonial() {
  return (
    <section className="border-b border-line bg-bg py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <span className="swiss-label">— TESTIMONIAL [ 07 ]</span>
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mt-2">Apa yang klien rasakan</h2>
          </div>
          <p className="max-w-xl text-sm text-zinc-500">Desain yang rapi, komunikasi yang jelas, dan hasil yang siap dipakai untuk membangun kepercayaan.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-[1px] bg-line border border-line rounded-[24px] overflow-hidden p-[1px]">
          {TESTIMONIALS.map((item, idx) => (
            <RevealOnScroll key={item.name} delay={idx * 80}>
              <blockquote className="bg-white p-7 md:p-8 h-full flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.14em] text-zinc-400">QUOTE 0{idx + 1}</span>
                  <span className="rounded-full bg-ink text-white font-mono text-[10px] tracking-[0.12em] px-2.5 py-1">TRUSTED</span>
                </div>
                <p className="mt-6 font-display font-medium text-[18px] leading-relaxed tracking-tight text-ink">“{item.quote}”</p>
                <p className="mt-3 text-[13px] leading-relaxed text-zinc-500">{item.accent}</p>
                <div className="mt-auto pt-6 border-t border-line flex items-center justify-between">
                  <div>
                    <div className="font-display font-semibold text-[15px] tracking-tight">{item.name}</div>
                    <div className="font-mono text-[11px] tracking-[0.08em] text-zinc-500 mt-0.5">{item.role.toUpperCase()}</div>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-muted border border-line flex items-center justify-center font-display font-bold text-sm">
                    {item.name.charAt(0)}
                  </div>
                </div>
              </blockquote>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
