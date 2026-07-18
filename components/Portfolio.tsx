import { PROJECTS } from "@/lib/data";

export default function Portfolio() {
  return (
    <section id="portofolio" className="mesh-bg py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-dark">
              Portofolio
            </h2>
            <p className="mt-3 text-navy-dark/70 max-w-lg">
              Kumpulan personal project untuk menunjukkan pendekatan dan
              kemampuan teknis saya secara langsung.
            </p>
          </div>
          <div className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm font-medium text-navy self-start">
            Personal Project — bukan pekerjaan klien
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <article
              key={project.slug}
              className="glass-card glass-hover rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="h-40 bg-navy/5 flex items-center justify-center border-b border-navy/10">
                <span className="text-navy-dark/35 text-sm font-medium px-4 text-center">
                  Preview {project.title}
                  <br />
                  (ganti dengan screenshot asli)
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-navy mb-1">
                  {project.category}
                </span>
                <h3 className="font-display font-bold text-xl mb-2 text-navy-dark">
                  {project.title}
                </h3>
                <p className="text-sm text-navy-dark/65 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-navy/8 text-navy px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
