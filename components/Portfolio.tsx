import { PROJECTS } from "@/lib/data";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Portfolio() {
  return (
    <section id="portofolio" className="mesh-bg py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <RevealOnScroll>
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-dark">
                Portofolio
              </h2>
              <p className="mt-3 text-navy-dark/70 max-w-lg">
                Kumpulan personal project untuk menunjukkan pendekatan dan
                kemampuan teknis saya secara langsung.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <div className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm font-medium text-navy self-start">
              Personal Project — bukan pekerjaan klien
            </div>
          </RevealOnScroll>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <RevealOnScroll key={project.slug} delay={index * 120}>
              <article className="glass-card glass-hover rounded-[28px] overflow-hidden flex flex-col h-full border border-navy/10 shadow-[0_18px_45px_rgba(15,27,61,0.08)]">
                <div className="h-44 bg-gradient-to-br from-navy/10 via-white to-accent-light/20 flex items-center justify-center border-b border-navy/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(41,69,162,0.16),_transparent_50%)]" />
                  <span className="relative text-navy-dark/35 text-sm font-medium px-4 text-center">
                    Preview {project.title}
                    <br />
                    (ganti dengan screenshot asli)
                  </span>
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
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
