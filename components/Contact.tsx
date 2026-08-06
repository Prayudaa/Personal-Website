import { MessageCircle, AtSign, Mail } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Contact() {
  return (
    <section id="kontak" className="relative overflow-hidden section-shell py-16 md:py-24 bg-bg">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <RevealOnScroll>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-light/80">
                Kontak
              </p>
              <h2 className="font-display font-bold text-3xl md:text-5xl max-w-2xl leading-tight text-navy-dark text-glow mt-3">
                Ayo diskusikan website yang membuat bisnis kamu terlihat lebih profesional.
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <p className="mt-6 text-navy-dark/92 max-w-xl leading-relaxed">
                Isi form ini atau langsung chat WhatsApp untuk dapat ide konsep, estimasi harga, dan langkah selanjutnya tanpa biaya.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={220}>
              <div className="mt-10 rounded-[32px] border-2 border-navy-dark bg-glass-12 p-6 shadow-neubrutal transition-colors duration-200 hover:border-navy/70">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-light">
                  Chat WhatsApp
                </p>
                <p className="mt-2 text-sm text-navy-dark/85">
                  Lebih cepat dan cocok untuk diskusi awal, clarifikasi kebutuhan, dan penjadwalan.
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-bg border-2 border-navy shadow-neubrutal"
                >
                  <MessageCircle size={18} strokeWidth={2} />
                  Hubungi via WhatsApp
                </a>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={180}>
            <div className="rounded-[32px] border-2 border-navy-dark bg-glass-12 p-8 shadow-neubrutal transition-colors duration-200 hover:border-navy/70">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-light">
                    Hubungi langsung
                  </p>
                  <p className="mt-2 text-sm text-bg/70 leading-relaxed">
                    Tidak perlu form. Langsung chat WhatsApp untuk diskusi cepat, atau hubungi email dan Instagram jika kamu ingin kirim brief terlebih dahulu.
                  </p>
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-bg border-2 border-navy shadow-neubrutal"
                >
                  <MessageCircle size={18} strokeWidth={2} />
                  Hubungi via WhatsApp
                </a>

                <div className="text-sm text-navy-dark/80">
                  <p className="font-semibold text-navy-dark">Alternatif kontak</p>
                  <div className="mt-4 space-y-3">
                    <a
                      href="mailto:prayuda040305@gmail.com"
                      className="flex items-center gap-2 rounded-3xl border-2 border-navy bg-navy/90 px-4 py-3 text-bg hover:border-accent-light"
                    >
                      <Mail size={16} />
                      prayuda040305@gmail.com
                    </a>
                    <a
                      href="https://www.instagram.com/pr4yuda._/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-3xl border-2 border-navy bg-navy/90 px-4 py-3 text-bg hover:border-accent-light"
                    >
                      <AtSign size={16} />
                      @pr4yuda._
                    </a>
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
