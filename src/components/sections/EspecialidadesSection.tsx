import { BlurFade } from "@/components/ui/blur-fade";

const especialidades = [
  {
    title: "Halterofilia Olímpica",
    items: [
      "Snatch (potencia y full)",
      "Clean & Jerk (todas las variantes)",
      "Jerk split y squat",
      "Corrección de patrones de movimiento",
      "Progresiones desde fundamentos",
    ],
  },
  {
    title: "Gimnásticos",
    items: [
      "Muscle-ups (estrictos y kipping)",
      "Handstands y handstand walks",
      "Bar muscle-ups",
      "Pull-ups (chest to bar, butterfly)",
      "Pistols y movimientos unilaterales",
    ],
  },
  {
    title: "Programación y Coaching",
    items: [
      "Diseño de WODs adaptados a múltiples niveles",
      "Escalado individual según limitaciones y objetivos",
      "Gestión de clases grupales de alta intensidad",
      "Corrección técnica en tiempo real",
      "Seguimiento de progresiones de fuerza",
    ],
  },
  {
    title: "Hyrox & Hybrid Training",
    items: [
      "Programación que combina fuerza y resistencia cardiovascular",
      "Entrenamiento metabólico de alta intensidad (HIIT, EMOM, Intervals)",
      "Rowing, Ski Erg, Air Bike, Assault Bike",
      "Sled push/pull, farmers carries, sandbag work",
      "Estrategias de pacing y transiciones para eventos",
    ],
  },
];

export default function EspecialidadesSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-[1120px] mx-auto px-6">
        <BlurFade inView>
          <div className="mb-14">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
              Técnica
            </p>
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-primary">
              Especialidades técnicas
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">
          {especialidades.map((esp, i) => (
            <BlurFade key={esp.title} delay={0.08 * i} inView>
              <div>
                <h3 className="font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  {esp.title}
                </h3>
                <ul className="space-y-2.5">
                  {esp.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground leading-snug flex gap-2.5">
                      <span className="text-accent/70 shrink-0 mt-0.5 select-none">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
