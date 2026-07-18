import { SKILLS } from "@/lib/data";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Skills() {
  return (
    <section className="bg-navy-dark py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <RevealOnScroll>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-10 text-bg">
            Skill & Tools
          </h2>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((skill, index) => (
            <RevealOnScroll key={skill.name} delay={index * 80}>
              <div className="rounded-2xl px-5 py-4 flex items-center justify-between bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="font-display font-semibold text-base text-bg">
                {skill.name}
              </span>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    skill.level === "Utama"
                      ? "bg-accent-light text-navy-dark"
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
