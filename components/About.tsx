import { BENEFITS } from "@/lib/data";

export default function About() {
  return (
    <section id="tentang" className="mesh-bg py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-14 items-start">
          {/* Foto */}
          <div className="mx-auto md:mx-0">
            <div className="glass-card w-56 h-56 md:w-64 md:h-64 rounded-3xl flex items-center justify-center">
              <span className="text-navy-dark/40 text-sm text-center px-4 font-medium">
                Foto Prayuda
                <br />
                (ganti dengan foto asli)
              </span>
            </div>
          </div>

          {/* Perkenalan + benefit */}
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-navy-dark">
              Tentang Saya
            </h2>
            <p className="text-base md:text-lg text-navy-dark/70 leading-relaxed max-w-2xl">
              Saya Prayuda, developer dan desainer independen berbasis di
              Semarang. Fokus saya membangun website yang benar-benar
              dikerjakan sesuai kebutuhan klien — dari company profile bisnis
              jasa sampai toko online — dengan proses yang jelas dari awal
              sampai akhir, bukan sekadar utak-atik template.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {BENEFITS.map((benefit, i) => (
                <div
                  key={benefit.title}
                  className="glass-card glass-hover rounded-2xl p-5"
                >
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
