import { BlurFade } from "@/components/ui/blur-fade";

const experiences = [
  {
    box: "URUZ Box",
    location: "Argentina",
    period: "Mar 2025 – Mar 2026",
    items: [
      "Dictado de 15+ clases grupales semanales",
      "Gestión de grupos de 12-20 alumnos por clase",
      "Corrección técnica en halterofilia (snatch, clean & jerk) y gimnásticos (pull-ups, muscle-ups, handstands)",
      "Adaptación de WODs a 3 niveles (principiante, intermedio, avanzado)",
      "Trabajo de movilidad y prevención de lesiones",
      "Seguimiento de progresiones individuales de fuerza",
    ],
  },
  {
    box: "Gunnen Centro de Entrenamiento",
    location: "Argentina",
    period: "Mar 2025 – Mar 2026",
    items: [
      "Planificación semanal de clases en equipo de coaches",
      "Gestión de grupos mixtos con escalado en tiempo real",
      "Introducción a fundamentos para nuevos miembros",
      "Participación en eventos internos y construcción de comunidad",
      "Coordinación de competencia interna (40+ participantes)",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="py-24 bg-background">
      <div className="max-w-[1120px] mx-auto px-6">
        <BlurFade inView>
          <div className="mb-14">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
              Trayectoria
            </p>
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-primary">
              Experiencia como Coach
            </h2>
          </div>
        </BlurFade>

        <div className="max-w-3xl">
          {experiences.map((exp, i) => (
            <BlurFade key={exp.box} delay={0.1 * i} inView>
              <div className={`flex gap-8 ${i < experiences.length - 1 ? "mb-14" : ""}`}>
                {/* Timeline line */}
                <div className="flex flex-col items-center shrink-0 pt-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent mt-1" />
                  {i < experiences.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-2">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.box}
                    </h3>
                    <span className="text-sm text-muted-foreground">{exp.location}</span>
                    <span className="text-xs font-medium text-accent ml-auto shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                        <span className="text-accent/60 shrink-0 mt-0.5 select-none">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
