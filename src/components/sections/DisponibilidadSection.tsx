import { BlurFade } from "@/components/ui/blur-fade";

const info = [
  { label: "Posición", value: "Coach de CrossFit / Entrenamiento Funcional" },
  { label: "Ubicación", value: "Valencia, España" },
  { label: "Disponibilidad", value: "Abril / Mayo 2026 (proceso de instalación en curso)" },
  { label: "Horarios", value: "Flexibilidad total (mañanas / tardes / fines de semana)" },
  { label: "Situación legal", value: "Residente en España (TIE en trámite – familiar de ciudadano UE)" },
{ label: "Idiomas", value: "Español (nativo) · Inglés (avanzado)" },
  { label: "Referencias", value: "Disponibles bajo solicitud de boxes anteriores en Argentina" },
];

export default function DisponibilidadSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-[1120px] mx-auto px-6">
        <BlurFade inView>
          <div className="mb-14">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
              Disponibilidad
            </p>
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-primary">
              Lo que busco
            </h2>
          </div>
        </BlurFade>

        <BlurFade delay={0.08} inView>
          <div className="max-w-2xl mx-auto divide-y divide-border rounded-xl border border-border overflow-hidden">
            {info.map((item) => (
              <div
                key={item.label}
                className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6 px-5 py-4 bg-card"
              >
                <span className="text-xs font-semibold text-accent uppercase tracking-wide shrink-0 sm:w-36 pt-0.5">
                  {item.label}
                </span>
                <span className="text-sm text-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
