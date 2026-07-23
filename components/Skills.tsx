import { SKILLS } from "@/lib/data";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Skills() {
  return (
    <section id="skill" className="bg-navy-dark section-shell py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <RevealOnScroll>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-10 text-bg text-glow">
            Skill & Tools
          </h2>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((skill, index) => (
            <RevealOnScroll key={skill.name} delay={index * 80}>
              <div className="rounded-[24px] px-5 py-5 flex items-center justify-between bg-[rgba(255,255,255,0.05)] border border-white/10 backdrop-blur-sm shadow-[0_18px_40px_rgba(0,0,0,0.16)]">
                <span className="font-display font-semibold text-base text-bg">
                  {skill.name}
                </span>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
                    skill.level === "Utama"
                      ? "bg-accent-light text-[#08101f]"
                      : "bg-white/10 text-bg/70"
                  }`}
                >
                  {skill.level}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
