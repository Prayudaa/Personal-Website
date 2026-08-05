import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, Layers3, Rocket } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";
import RevealOnScroll from "@/components/RevealOnScroll";
import HeroScene from "@/components/HeroScene";

export default function Hero() {
  return (
    <section id="home" className="mesh-bg py-16 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
          <div>
            <RevealOnScroll>
              <div className="glass-card glass-hover inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-navy shadow-sm bg-[rgba(255,255,255,0.08)] border border-white/10">
                <ShieldCheck size={16} strokeWidth={2.5} />
                <span className="font-medium text-xs md:text-sm text-navy-dark">
                  Trusted by founders, brands & growing teams
                </span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={120}>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl leading-[1.08] max-w-3xl text-navy-dark tracking-tight text-glow">
                Website profesional yang
                <span className="text-accent-light"> menanamkan kepercayaan</span> dari detik pertama.
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={220}>
              <p className="mt-8 max-w-xl text-base md:text-lg text-navy-dark/70 leading-relaxed">
                Company profile dan toko online yang dirancang rapi, profesional,
                dan dibangun custom sesuai kebutuhan — untuk memberi kesan terpercaya,
                memudahkan keputusan, dan memperkuat citra bisnis Anda sejak kunjungan pertama.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={320}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-primary group relative overflow-hidden rounded-full px-7 py-4 text-base font-display font-semibold text-white shadow-[0_20px_50px_rgba(var(--color-navy-rgb),0.28)]"
                >
                  
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <MessageCircle size={20} strokeWidth={2} />
                    Konsultasi Gratis
                  </span>
                </a>
                <a
                  href="#portofolio"
                  className="cta-secondary group glass-hover text-navy-dark font-display font-semibold px-7 py-4 rounded-full flex items-center justify-center gap-2 text-base hover:border-navy/20"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">Lihat Portofolio</span>
                  <ArrowRight size={20} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={360}>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-medium text-navy-dark/75">
                <span className="rounded-full border border-navy/10 bg-white/75 px-3 py-1.5 shadow-sm">
                  ⚡ Balas dalam 1 hari kerja
                </span>
                <span className="rounded-full border border-navy/10 bg-white/75 px-3 py-1.5 shadow-sm">
                  ✅ Gratis konsultasi awal
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  "⚡ Respons cepat",
                  "🎯 Desain khusus",
                  "📈 Siap tumbuh",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-navy/10 bg-white/70 px-3 py-1.5 text-sm font-medium text-navy-dark/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={240}>
            <div className="relative">
              <div className="absolute inset-0 rounded-[32px] bg-navy/10 blur-3xl animate-pulse" />
              <div className="relative glass-card rounded-[32px] p-6 md:p-8 shadow-[0_30px_80px_rgba(15,27,61,0.10)] border border-navy/10 overflow-hidden">
                <div className="absolute inset-0 bg-navy/10" />
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-light/25 blur-2xl" />
                <div className="relative flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-navy/70">
                      Experience
                    </p>
                    <h2 className="font-display font-bold text-2xl text-navy-dark mt-1">
                      Kesan premium, proses yang profesional
                    </h2>
                  </div>
                  <div className="rounded-2xl bg-navy/10 p-3 text-navy">
                    <Sparkles size={20} strokeWidth={2} />
                  </div>
                </div>

                <HeroScene />

                <div className="relative grid gap-4 sm:grid-cols-2 mt-6">
                  <div className="rounded-2xl border border-navy/10 bg-white/70 p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-3 inline-flex rounded-xl bg-accent-light/30 p-2 text-navy">
                      <Layers3 size={18} strokeWidth={2} />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-navy-dark">
                      Struktur yang rapi
                    </h3>
                    <p className="mt-2 text-sm text-navy-dark/65 leading-relaxed">
                      Layout yang jelas, fokus pada pesan utama, dan navigasi yang nyaman untuk pengunjung.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-navy/10 bg-white/70 p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-3 inline-flex rounded-xl bg-accent-light/30 p-2 text-navy">
                      <Rocket size={18} strokeWidth={2} />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-navy-dark">
                      Cepat naik level
                    </h3>
                    <p className="mt-2 text-sm text-navy-dark/65 leading-relaxed">
                      Website yang tidak hanya menarik, tapi juga siap jadi fondasi pertumbuhan bisnis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
