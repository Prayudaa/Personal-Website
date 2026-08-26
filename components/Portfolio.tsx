import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Portfolio() {
  const featured = PROJECTS.filter((p) => p.featured);
  return (
    <section id="portofolio" className="border-b border-line bg-bg py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <span className="swiss-label">— PORTOFOLIO [ 04 ]</span>
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mt-2">Bukti hasil, bukan sekadar tampilan</h2>
            <p className="mt-2 text-sm text-zinc-500 max-w-lg">Setiap proyek dibuat dengan fokus pada tujuan bisnis: memperjelas pesan dan membuat pengunjung lebih mudah bertindak.</p>
          </div>
          <span className="inline-flex self-start rounded-full border border-line bg-white px-3 py-1.5 font-mono text-[10px] tracking-[0.12em] text-zinc-500">STUDI KASUS / PERSONAL PROJECT</span>
        </div>

        <div className="grid md:grid-cols-3 gap-[1px] bg-line border border-line rounded-[24px] overflow-hidden p-[1px]">
          {featured.map((p, i) => (
            <RevealOnScroll key={p.slug} delay={i * 80}>
              <article className="bg-white flex flex-col h-full group">
                <div className="h-[168px] relative overflow-hidden bg-zinc-100 border-b border-line">
                  {p.image ? (
                    <>
                      <Image src={p.image} alt={p.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                      <div className="absolute inset-0 bg-ink/5 group-hover:bg-ink/0 transition-colors" />
                    </>
                  ) : (
                    <div className="h-full flex items-center justify-center bg-muted">
                      <span className="font-mono text-xs tracking-[0.12em] text-zinc-600">NO PREVIEW</span>
                    </div>
                  )}
                  <div className="absolute left-3 top-3 flex gap-1.5">
                    <span className="rounded-full bg-white border border-line px-2.5 py-1 font-mono text-[10px] tracking-[0.12em]">{p.type.toUpperCase()}</span>
                  </div>
                  <div className="absolute right-3 top-3 h-7 w-7 rounded-full bg-white border border-line flex items-center justify-center font-mono text-xs">↗</div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] tracking-[0.12em] text-zinc-500">0{i + 1} / {p.category.toUpperCase()}</span>
                    <span className="h-px flex-1 bg-line" />
                  </div>
                  <h3 className="font-display font-bold text-[18px] leading-tight mt-2 tracking-tight">{p.title}</h3>
                  <p className="text-[13px] leading-relaxed text-zinc-500 mt-2 flex-1">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="font-mono text-[10px] tracking-[0.08em] border border-line bg-muted text-zinc-600 px-2 py-1 rounded-full">{t.toUpperCase()}</span>
                    ))}
                  </div>
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-ink text-white px-4 py-2.5 font-mono text-[11px] tracking-[0.08em] hover:bg-zinc-800 transition-colors">
                      LIHAT PROJECT <span>↗</span>
                    </a>
                  )}
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 font-mono text-xs tracking-[0.08em] hover:border-ink transition-colors">
            LIHAT SEMUA PROYEK <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
