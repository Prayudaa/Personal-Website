import { METRICS } from "@/lib/data";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Metrics() {
  return (
    <section className="py-16 md:py-24 section-shell bg-glass-04">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <RevealOnScroll>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-light/80">
                Metrics
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-dark mt-2 text-glow">
                Angka yang menunjukkan kualitas kerja.
              </h2>
            </div>
            <p className="max-w-xl text-navy-dark/70">
              Setiap angka ini adalah cerminan layanan yang cepat, rapi, dan berfokus pada hasil bisnis.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric, index) => (
            <RevealOnScroll key={metric.label} delay={index * 100}>
              <div className="glass-card rounded-[26px] border border-white/10 bg-glass-06 p-6 shadow-[0_24px_60px_rgba(var(--color-navy-dark-rgb),0.18)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(var(--color-navy-dark-rgb),0.22)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-light/15 text-accent-light text-xl font-bold">
                    {metric.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/60">
                      {metric.label}
                    </p>
                    <p className="font-display font-bold text-3xl text-navy-dark mt-2">
                      {metric.value}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-navy-dark/70">
                  {metric.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
