import { MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="mesh-bg py-16 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-navy">
          <ShieldCheck size={16} strokeWidth={2.5} />
          <span className="font-medium text-xs md:text-sm">
            Jasa Pembuatan Website Terpercaya
          </span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl leading-[1.08] max-w-3xl text-navy-dark">
          Website yang membangun{" "}
          <span className="text-navy">kepercayaan</span> untuk bisnis kamu.
        </h1>

        <p className="mt-8 max-w-xl text-base md:text-lg text-navy-dark/70 leading-relaxed">
          Company profile dan toko online yang dirancang rapi, profesional,
          dan dibangun custom sesuai kebutuhan — supaya calon pelanggan
          percaya sejak kunjungan pertama.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-hover bg-navy text-bg font-display font-semibold px-7 py-4 rounded-full flex items-center justify-center gap-2 text-base shadow-lg shadow-navy/25"
          >
            <MessageCircle size={20} strokeWidth={2} />
            Diskusi via WhatsApp
          </a>
          <a
            href="#portofolio"
            className="glass-card glass-hover text-navy-dark font-display font-semibold px-7 py-4 rounded-full flex items-center justify-center gap-2 text-base"
          >
            Lihat Portofolio
            <ArrowRight size={20} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}
