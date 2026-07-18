import { PROCESS_STEPS, FAQS } from "@/lib/data";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Process() {
  return (
    <section className="mesh-bg py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <RevealOnScroll>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-3 text-navy-dark">
            Proses Kerja
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={120}>
          <p className="text-navy-dark/70 max-w-lg mb-10">
            Belum ada testimoni klien untuk ditampilkan — jadi biar tetap jujur,
            ini cara saya kerja supaya kamu tahu persis apa yang akan terjadi.
          </p>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {PROCESS_STEPS.map((item, index) => (
            <RevealOnScroll key={item.step} delay={index * 90}>
              <div className="glass-card glass-hover rounded-2xl p-5 h-full">
                <div className="font-display font-bold text-4xl text-navy mb-3">
                  {item.step}
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-navy-dark">
                  {item.title}
                </h3>
                <p className="text-sm text-navy-dark/65 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <h3 className="font-display font-bold text-2xl mb-6 text-navy-dark">
            Pertanyaan yang Sering Muncul
          </h3>
        </RevealOnScroll>
        <div className="grid sm:grid-cols-2 gap-4">
          {FAQS.map((faq, index) => (
            <RevealOnScroll key={faq.q} delay={index * 80}>
              <div className="glass-card rounded-2xl p-5 h-full">
                <h4 className="font-display font-semibold text-base mb-2 text-navy-dark">
                  {faq.q}
                </h4>
                <p className="text-sm text-navy-dark/65 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
