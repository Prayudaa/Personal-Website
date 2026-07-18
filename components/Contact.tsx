import { MessageCircle, AtSign, Mail } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Contact() {
  return (
    <section id="kontak" className="bg-navy-dark py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8 text-center">
        <RevealOnScroll>
          <h2 className="font-display font-bold text-3xl md:text-5xl max-w-2xl mx-auto leading-tight text-bg">
            Punya rencana bikin website?
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
          <div className="mt-10 flex justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-hover bg-accent-light text-navy-dark font-display font-semibold px-8 py-4 rounded-full flex items-center gap-2 text-base shadow-lg shadow-black/20"
            >
              <MessageCircle size={22} strokeWidth={2} />
              Chat via WhatsApp Sekarang
            </a>
          </div>
        </RevealOnScroll>

        <div className="mt-12 flex justify-center gap-6 text-sm text-bg/50">
          <a
            href="mailto:prayuda040305@gmail.com"
            className="flex items-center gap-2 hover:text-bg transition-colors"
          >
            <Mail size={16} />
            prayuda040305@gmail.com
          </a>
          <a
            href="https://instagram.com/Pr4yuda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-bg transition-colors"
          >
            <AtSign size={16} />
            @Pr4yuda
          </a>
        </div>
      </div>
    </section>
  );
}
