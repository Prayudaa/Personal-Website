import { BENEFITS } from "@/lib/data";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function About() {
  return (
    <section id="tentang" className="mesh-bg section-shell py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-14 items-start">
          {/* Foto */}
          <RevealOnScroll className="mx-auto md:mx-0">
            <div className="glass-card w-56 h-56 md:w-64 md:h-64 rounded-3xl flex items-center justify-center">
              <span className="text-navy-dark/40 text-sm text-center px-4 font-medium">
                Foto Prayuda
                <br />
                (ganti dengan foto asli)
              </span>
            </div>
          </RevealOnScroll>

          {/* Perkenalan + benefit */}
          <div>
            <RevealOnScroll>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-navy-dark">
                Tentang Saya
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <p className="text-base md:text-lg text-navy-dark/70 leading-relaxed max-w-2xl">
                Saya Prayuda, developer dan desainer independen berbasis di
                Semarang. Fokus saya membangun website yang benar-benar
                dikerjakan sesuai kebutuhan klien — dari company profile bisnis
                jasa sampai toko online — dengan proses yang jelas dari awal
                sampai akhir, bukan sekadar utak-atik template.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={180}>
              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                {[
                  { value: "10+", label: "Project selesai" },
                  { value: "1 hari", label: "Balasan rata-rata" },
                  { value: "100%", label: "Konsultasi gratis" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.06)] px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                    <div className="font-display font-bold text-xl text-navy-dark">{stat.value}</div>
                    <div className="text-sm text-navy-dark/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {BENEFITS.map((benefit, i) => (
                <RevealOnScroll key={benefit.title} delay={i * 120}>
                  <div className="glass-card glass-hover rounded-2xl p-5 h-full">
                    <div className="font-display font-bold text-2xl mb-2 text-navy">
                      0{i + 1}
                    </div>
                    <h3 className="font-display font-semibold text-base mb-2 text-navy-dark">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-navy-dark/65 leading-relaxed">
                      {benefit.desc}
                    </p>
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
