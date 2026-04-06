import { BlurFade } from "@/components/ui/blur-fade";

const soluciones = [
  {
    numero: "01",
    titulo: "Eventos que se organizan solos",
    resultado: "80% menos tiempo de organización",
    descripcion:
      "Sistema para competencias internas que calcula rankings automáticamente, gestiona equipos y resultados. Usado en competencia real con 40+ participantes.",
    link: null,
    linkLabel: null,
  },
  {
    numero: "02",
    titulo: "Presencia digital profesional",
    resultado: "€3,000+ de ahorro vs agencia",
    descripcion:
      "Web del box lista en 1 semana con diseño moderno y responsive. Misma calidad que una agencia a costo cero.",
    link: "https://gunnen-web.vercel.app",
    linkLabel: "Ver ejemplo →",
  },
  {
    numero: "03",
    titulo: "Procesos estandarizados",
    resultado: "Onboarding 6× más rápido",
    descripcion:
      "Manual técnico con especificaciones de movimientos, protocolos de corrección y estándares de calidad para el equipo de coaches.",
    link: null,
    linkLabel: null,
  },
  {
    numero: "04",
    titulo: "Administración automatizada",
    resultado: "De 3 horas a 5 minutos por mes",
    descripcion:
      "Planilla de liquidación de sueldos con cálculo automático por clases dictadas y reportes mensuales instantáneos.",
    link: null,
    linkLabel: null,
  },
];

export default function ValorAdicionalSection() {
  return (
    <section id="diferencial" className="py-24 bg-secondary">
      <div className="max-w-[1120px] mx-auto px-6">
        <BlurFade inView>
          <div className="mb-14">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
              Diferencial
            </p>
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-primary max-w-xl">
              Soluciones con IA para boxes
            </h2>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed max-w-xl">
              No soy &ldquo;un programador que da clases&rdquo;. Soy un coach que entiende los
              problemas del día a día y tiene las herramientas para resolverlos.
            </p>
          </div>
        </BlurFade>

        {/* List layout — no cards */}
        <div className="max-w-3xl divide-y divide-border">
          {soluciones.map((sol, i) => (
            <BlurFade key={sol.numero} delay={0.06 * i} inView>
              <div className="py-7 flex gap-8 items-start">
                <span className="font-[family-name:var(--font-fraunces)] text-3xl font-black text-accent/20 leading-none shrink-0 w-10 pt-1">
                  {sol.numero}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                    <h3 className="font-semibold text-foreground">{sol.titulo}</h3>
                    <span className="text-xs font-semibold text-accent shrink-0">
                      {sol.resultado}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {sol.descripcion}
                    {sol.link && (
                      <>
                        {" "}
                        <a
                          href={sol.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-primary transition-colors font-medium"
                        >
                          {sol.linkLabel}
                        </a>
                      </>
                    )}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.3} inView>
          <div className="mt-12 max-w-3xl rounded-xl bg-background border border-border px-8 py-8">
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-6">
              Esto significa que puedo
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Dar clases de calidad (lo principal)",
                "Ayudar con tareas de gestión cuando haga falta",
                "Crear soluciones específicas para el box",
                "Aportar visión de negocio",
              ].map((punto) => (
                <div key={punto} className="flex gap-3 items-start">
                  <span className="text-accent font-bold text-base shrink-0 leading-snug">✓</span>
                  <span className="text-sm font-medium text-foreground leading-snug">{punto}</span>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
