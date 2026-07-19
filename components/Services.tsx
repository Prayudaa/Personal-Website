import { Check } from "lucide-react";
import { SERVICES, WHATSAPP_LINK } from "@/lib/data";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Services() {
  return (
    <section id="layanan" className="mesh-bg section-shell py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <RevealOnScroll>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-3 text-navy-dark">
            Layanan
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={120}>
          <p className="text-navy-dark/70 max-w-lg mb-10">
            Pilih paket sesuai kebutuhan, atau diskusikan langsung kalau
            kebutuhan kamu spesifik.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={180}>
          <div className="mb-10 grid sm:grid-cols-3 gap-3">
            {[
              { title: "Konsultasi Gratis", desc: "Diskusi pertama tanpa biaya" },
              { title: "Harga Transparan", desc: "Sesuai scope dan kebutuhan" },
              { title: "Support Pasca Launch", desc: "Siap bantu setelah website aktif" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-navy/10 bg-white/70 px-4 py-3">
                <div className="font-display font-semibold text-base text-navy-dark">{item.title}</div>
                <div className="text-sm text-navy-dark/60 mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {SERVICES.map((service, index) => (
            <RevealOnScroll key={service.name} delay={index * 100}>
              <div
                className={`rounded-[28px] p-6 flex flex-col h-full border ${
                  service.highlight
                    ? "border-white/10"
                    : "border-navy/10"
                } ${
                  service.highlight
                    ? "bg-gradient-to-br from-[#f7c948] via-[#e5b739] to-[#d8a130] text-[#08101f] shadow-[0_24px_70px_rgba(0,0,0,0.24)] md:-translate-y-3"
                    : "glass-card text-navy-dark"
                }`}
              >
                {service.highlight && (
                  <span className="self-start bg-accent-light text-navy-dark text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Paling Diminati
                  </span>
                )}
                <h3 className="font-display font-bold text-2xl mb-1">
                  {service.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    service.highlight ? "text-bg/75" : "text-navy-dark/65"
                  }`}
                >
                  {service.desc}
                </p>
                <div className="font-display font-bold text-lg mb-5">
                  {service.price}
                </div>

                <ul className="space-y-2.5 flex-1 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check
                        size={18}
                        strokeWidth={2.5}
                        className={`shrink-0 mt-0.5 ${
                          service.highlight ? "text-accent-light" : "text-navy"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-hover text-center font-display font-semibold px-5 py-3 rounded-full text-sm ${
                    service.highlight
                      ? "bg-bg text-navy-dark"
                      : "bg-navy text-bg"
                  }`}
                >
                  Tanya Paket Ini
                </a>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
