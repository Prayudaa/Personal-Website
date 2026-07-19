import RevealOnScroll from "@/components/RevealOnScroll";

const testimonials = [
  {
    quote:
      "Prosesnya jelas, komunikasinya nyaman, dan hasil website-nya terasa benar-benar custom.",
    name: "Rina Putri",
    role: "Pemilik UMKM Fashion",
  },
  {
    quote:
      "Saya suka detail desainnya. Website terasa profesional dan cocok banget untuk brand saya.",
    name: "Dimas Arga",
    role: "Founder Studio Kreatif",
  },
];

export default function Testimonial() {
  return (
    <section className="py-16 md:py-24 section-shell bg-white/8">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-light/80">
                Testimonial
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-dark mt-2 text-glow">
                Apa yang klien rasakan
              </h2>
            </div>
            <p className="max-w-xl text-navy-dark/70">
              Desain yang rapi, komunikasi yang jelas, dan hasil yang siap dipakai untuk membangun kepercayaan pelanggan.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((item, index) => (
            <RevealOnScroll key={item.name} delay={index * 120}>
              <blockquote className="glass-card rounded-[28px] p-7 md:p-8 h-full border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.2)] bg-[rgba(255,255,255,0.05)]">
                <p className="text-lg leading-relaxed text-navy-dark/75">
                  “{item.quote}”
                </p>
                <footer className="mt-6">
                  <div className="font-display font-semibold text-lg text-navy-dark">
                    {item.name}
                  </div>
                  <div className="text-sm text-navy-dark/60 mt-1">{item.role}</div>
                </footer>
              </blockquote>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
