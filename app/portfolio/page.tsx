"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";
import RevealOnScroll from "@/components/RevealOnScroll";
import { PROJECTS } from "@/lib/data";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  const categories = ["Semua", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

  const filteredProjects =
    activeCategory === "Semua"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <Header />
      <main className="flex-1 mesh-bg min-h-screen py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h1 className="font-display font-bold text-4xl md:text-5xl text-navy-dark mb-4">
                Portofolio Proyek
              </h1>
              <p className="text-navy-dark/70 max-w-2xl mx-auto">
                Koleksi lengkap dari hasil kerja, studi kasus, dan proyek personal yang dibangun dengan fokus pada performa, estetika, dan solusi bisnis.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-navy-dark text-white shadow-md"
                      : "bg-white/40 text-navy-dark hover:bg-white/80 border border-navy/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <RevealOnScroll key={project.slug} delay={index * 100}>
                <Link href={`/portfolio/${project.slug}`} className="block h-full group">
                  <article className="glass-card glass-hover rounded-[28px] overflow-hidden flex flex-col h-full border border-navy/10 shadow-[0_18px_45px_rgba(var(--color-navy-dark-rgb),0.08)] transition-all duration-300 group-hover:-translate-y-2">
                    <div className="h-44 border-b border-white/10 relative overflow-hidden bg-navy-dark">
                      {project.image ? (
                        <>
                          <div className="absolute inset-0">
                            <Image
                              src={project.image}
                              alt={`Screenshot ${project.title}`}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="absolute inset-0 bg-navy/25 group-hover:bg-navy/10 transition-colors duration-300" />
                        </>
                      ) : (
                        <div className="h-full bg-navy-dark flex items-center justify-center px-4 text-center">
                          <div className="absolute inset-0 bg-navy/10" />
                          <div className="relative z-10 space-y-2">
                            <p className="text-sm font-semibold text-white/85">
                              Preview tidak tersedia
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-3 flex flex-wrap gap-2">
                        <span className="inline-flex rounded-full bg-accent-light/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent-light">
                          {project.type}
                        </span>
                        <span className="text-xs uppercase tracking-[0.24em] text-navy-dark/50">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-xl mb-2 text-navy-dark leading-snug group-hover:text-accent-light transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-navy-dark/65 leading-relaxed flex-1">
                        {project.description}
                      </p>
                      <div className="mt-5 text-sm font-bold text-navy-dark flex items-center gap-2">
                        Baca Studi Kasus <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </main>
      <FloatingCta />
      <Footer />
    </>
  );
}
