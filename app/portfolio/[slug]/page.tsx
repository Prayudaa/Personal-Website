import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";
import { PROJECTS } from "@/lib/data";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Studi Kasus | byprayuda`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) notFound();

  const otherProjects = PROJECTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="flex-1 mesh-bg min-h-screen">
        {/* Hero Section */}
        <section className="pt-16 pb-0 md:pt-24">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-navy-dark/60 hover:text-navy-dark transition-colors mb-8 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Kembali ke Portofolio
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex rounded-full bg-accent-light/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent-light">
                {project.type}
              </span>
              <span className="inline-flex rounded-full bg-navy/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-navy-dark/60">
                {project.category}
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl text-navy-dark mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-lg text-navy-dark/70 max-w-2xl leading-relaxed">
              {project.description}
            </p>

            {/* Meta info */}
            {project.details && (
              <div className="flex flex-wrap gap-6 mt-8">
                {project.details.client && (
                  <div>
                    <p className="text-xs uppercase tracking-widest text-navy-dark/40 font-semibold mb-1">Klien</p>
                    <p className="text-sm font-semibold text-navy-dark">{project.details.client}</p>
                  </div>
                )}
                {project.details.year && (
                  <div>
                    <p className="text-xs uppercase tracking-widest text-navy-dark/40 font-semibold mb-1">Tahun</p>
                    <p className="text-sm font-semibold text-navy-dark">{project.details.year}</p>
                  </div>
                )}
                <div>
                  <p className="text-xs uppercase tracking-widest text-navy-dark/40 font-semibold mb-1">Tech Stack</p>
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-navy/8 text-navy px-2 py-0.5 rounded-full border border-navy/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full cta-primary px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 shadow-[6px_6px_0_rgba(var(--color-navy-rgb),0.12)]"
              >
                <ExternalLink size={16} />
                Lihat Website Langsung
              </a>
            )}
          </div>
        </section>

        {/* Preview Image */}
        {project.image && (
          <section className="py-10">
            <div className="mx-auto max-w-5xl px-5 md:px-8">
              <div className="relative h-64 md:h-[420px] rounded-[28px] overflow-hidden border border-navy/10 shadow-[0_30px_80px_rgba(var(--color-navy-dark-rgb),0.12)]">
                <Image
                  src={project.image}
                  alt={`Preview ${project.title}`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/20 to-transparent" />
              </div>
            </div>
          </section>
        )}

        {/* Case Study Details */}
        {project.details && (
          <section className="py-12 md:py-16">
            <div className="mx-auto max-w-4xl px-5 md:px-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Challenge */}
                {project.details.challenge && (
                  <div className="glass-card rounded-[24px] p-8 border border-navy/10">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-4">
                      <span className="text-red-500 font-bold text-lg">?</span>
                    </div>
                    <h2 className="font-display font-bold text-xl text-navy-dark mb-3">
                      Tantangan
                    </h2>
                    <p className="text-navy-dark/70 leading-relaxed text-sm">
                      {project.details.challenge}
                    </p>
                  </div>
                )}

                {/* Solution */}
                {project.details.solution && (
                  <div className="glass-card rounded-[24px] p-8 border border-navy/10">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <span className="text-accent-light font-bold text-lg">✦</span>
                    </div>
                    <h2 className="font-display font-bold text-xl text-navy-dark mb-3">
                      Solusi
                    </h2>
                    <p className="text-navy-dark/70 leading-relaxed text-sm">
                      {project.details.solution}
                    </p>
                  </div>
                )}
              </div>

              {/* Results */}
              {project.details.results && project.details.results.length > 0 && (
                <div className="mt-8 glass-card rounded-[24px] p-8 border border-navy/10">
                  <h2 className="font-display font-bold text-xl text-navy-dark mb-5">
                    Hasil yang Dicapai
                  </h2>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {project.details.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-accent-light shrink-0 mt-0.5" />
                        <span className="text-navy-dark/80 text-sm leading-relaxed">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <section className="py-12 md:py-16 border-t border-navy/10">
            <div className="mx-auto max-w-4xl px-5 md:px-8">
              <h2 className="font-display font-bold text-2xl text-navy-dark mb-8">
                Proyek Lainnya
              </h2>
              <div className="grid md:grid-cols-3 gap-5">
                {otherProjects.map((p) => (
                  <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group">
                    <div className="glass-card rounded-[20px] overflow-hidden border border-navy/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                      <div className="h-28 relative bg-navy-dark overflow-hidden">
                        {p.image ? (
                          <>
                            <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-navy/30" />
                          </>
                        ) : (
                          <div className="h-full flex items-center justify-center">
                            <span className="text-white/30 text-xs">{p.category}</span>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <p className="text-xs text-navy-dark/40 uppercase tracking-widest mb-1">{p.category}</p>
                        <p className="font-display font-bold text-sm text-navy-dark group-hover:text-accent-light transition-colors">
                          {p.title}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-10 text-center">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full glass-card px-8 py-4 text-sm font-semibold text-navy-dark transition-all duration-300 hover:bg-navy-dark hover:text-white border border-navy/10 hover:-translate-y-1"
                >
                  Lihat Semua Proyek &rarr;
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
      <FloatingCta />
      <Footer />
    </>
  );
}
