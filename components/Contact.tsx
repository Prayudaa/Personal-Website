import { MessageCircle, AtSign, Mail } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Contact() {
  return (
    <section id="kontak" className="relative overflow-hidden bg-[linear-gradient(135deg,_#0f1b3d_0%,_#2945a2_100%)] section-shell py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8 text-center">
        <RevealOnScroll>
          <h2 className="font-display font-bold text-3xl md:text-5xl max-w-2xl mx-auto leading-tight text-bg text-glow">
            Siap wujudkan website bisnis yang terasa high-end?
            <br />
            <span className="text-accent-light">Ngobrol dulu, gratis.</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <p className="mt-6 text-bg/60 max-w-lg mx-auto">
            Ceritakan kebutuhan bisnis kamu, saya bantu kasih gambaran solusi dan
            estimasi biayanya — tanpa komitmen.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={220}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary group relative overflow-hidden rounded-full px-8 py-4 text-base font-display font-semibold text-[#08101f] shadow-[0_30px_90px_rgba(0,0,0,0.28)] hover:shadow-[0_35px_110px_rgba(0,0,0,0.32)]"
            >
              <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.28),transparent)] translate-x-[-120%] transition-transform duration-700 group-hover:translate-x-[120%]" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                <MessageCircle size={22} strokeWidth={2} />
                Saya Siap Bantu Hari Ini
              </span>
            </a>
            <p className="text-sm text-bg/70">
              Gratis, cepat, dan tanpa komitmen — langsung hubungi lewat WhatsApp.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={260}>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-bg/70">
            {[
              "⚡ Respons cepat",
              "📍 Bisa konsultasi via WhatsApp",
              "🛠️ Proses jelas dari awal sampai launch",
            ].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5">
                {item}
              </span>
            ))}
          </div>
        </RevealOnScroll>

        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-sm text-bg/50">
          <a
            href="mailto:prayuda040305@gmail.com"
            className="flex items-center gap-2 hover:text-bg transition-colors rounded-full px-3 py-2 hover:bg-white/10"
          >
            <Mail size={16} />
            prayuda040305@gmail.com
          </a>
          <a
            href="https://www.instagram.com/pr4yuda._/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-bg transition-colors rounded-full px-3 py-2 hover:bg-white/10"
          >
            <AtSign size={16} />
            @pr4yuda._
          </a>
        </div>
      </div>
    </section>
  );
}
