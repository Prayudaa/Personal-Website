import { PROJECTS } from "@/lib/data";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Portfolio() {
  return (
    <section id="portofolio" className="mesh-bg section-shell py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <RevealOnScroll>
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-dark">
                Bukti hasil, bukan sekadar tampilan
              </h2>
              <p className="mt-3 text-navy-dark/70 max-w-lg">
                Setiap proyek dibuat dengan fokus pada tujuan bisnis: memperjelas pesan, meningkatkan rasa percaya, dan membuat pengunjung lebih mudah bertindak.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <div className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm font-medium text-navy self-start">
              Fokus belajar & eksperimen — bukti kemampuan teknis
            </div>
          </RevealOnScroll>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <RevealOnScroll key={project.slug} delay={index * 120}>
              <article className="glass-card glass-hover rounded-[28px] overflow-hidden flex flex-col h-full border border-navy/10 shadow-[0_18px_45px_rgba(15,27,61,0.08)]">
                <div className="h-44 border-b border-white/10 relative overflow-hidden bg-[#102040]">
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={`Screenshot ${project.title}`}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-navy/25" />
                    </>
                  ) : (
                    <div className="h-full bg-gradient-to-br from-[#102040] via-[#13264f] to-[#283d70] flex items-center justify-center px-4 text-center">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(138,164,255,0.18),_transparent_45%)]" />
                      <div className="relative z-10 space-y-2">
                        <p className="text-sm font-semibold text-white/85">
                          Preview tidak tersedia
                        </p>
                        <p className="text-xs text-white/60 max-w-xs">
                          Tampilan proyek tetap ada dengan ringkasan dan link yang jelas.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="inline-flex w-fit rounded-full bg-navy/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-navy mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-display font-bold text-xl mb-2 text-navy-dark leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-navy-dark/65 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-navy/8 text-navy px-2.5 py-1 rounded-full border border-navy/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#5d74e8] via-[#8aa4ff] to-[#f7c948] px-4 py-3 text-sm font-semibold text-[#08101f] shadow-[0_18px_40px_rgba(0,0,0,0.18)] hover:opacity-90 transition-opacity"
                    >
                      Lihat Project
                    </a>
                  )}
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
