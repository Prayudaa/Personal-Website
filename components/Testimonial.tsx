import RevealOnScroll from "@/components/RevealOnScroll";

const testimonials = [
  {
    quote:
      "Prosesnya jelas, komunikasinya nyaman, dan hasil website-nya terasa benar-benar custom.",
    name: "Rina Putri",
    role: "Pemilik UMKM Fashion",
    accent: "Dari konsep sampai launch, semuanya terasa terarah dan profesional.",
  },
  {
    quote:
      "Saya suka detail desainnya. Website terasa profesional dan cocok banget untuk brand saya.",
    name: "Dimas Arga",
    role: "Founder Studio Kreatif",
    accent: "Visual yang premium, pesan yang kuat, dan pengalaman pengguna yang nyaman.",
  },
];

export default function Testimonial() {
  return (
    <section className="py-16 md:py-24 section-shell">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#4f6fd3]">
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
              <blockquote className="group glass-card glass-hover rounded-[28px] p-7 md:p-8 h-full border border-[#2945a2]/10 shadow-[0_24px_70px_rgba(23,40,80,0.08)] relative overflow-hidden">
                <div className="absolute inset-0 bg-navy/10 opacity-70" />
                <div className="relative">
                  <div className="mb-5 flex items-center gap-2 text-[#4f6fd3]">
                    <span className="text-3xl font-semibold">“</span>
                    <span className="h-2 w-16 rounded-full bg-[#2945A2]" />
                  </div>
                  <p className="text-lg leading-relaxed text-navy-dark/75">
                    {item.quote}
                  </p>
                  <p className="mt-4 text-sm font-medium text-[#2945a2]">
                    {item.accent}
                  </p>
                  <footer className="mt-6 flex items-center justify-between gap-3 border-t border-[#2945a2]/10 pt-4">
                    <div>
                      <div className="font-display font-semibold text-lg text-navy-dark">
                        {item.name}
                      </div>
                      <div className="text-sm text-navy-dark/60 mt-1">{item.role}</div>
                    </div>
                    <div className="rounded-full border border-[#2945a2]/10 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#2945a2]">
                      Trusted
                    </div>
                  </footer>
                </div>
              </blockquote>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
