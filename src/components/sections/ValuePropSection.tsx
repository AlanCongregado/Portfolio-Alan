import { Card, CardContent } from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";

const cards = [
  {
    icon: "🏋️",
    title: "Coaching de calidad",
    description:
      "Corrección técnica especializada en halterofilia y gimnásticos. Gestión de clases grupales de hasta 20 alumnos.",
  },
  {
    icon: "💻",
    title: "Desarrollo de herramientas",
    description:
      "Creo webs, sistemas de gestión y automatizaciones que profesionalizan las operaciones de tu box.",
  },
  {
    icon: "📋",
    title: "Sistematización",
    description:
      "Estandarizo procesos de coaching, creo manuales técnicos y optimizo la administración.",
  },
  {
    icon: "📊",
    title: "Visión de negocio",
    description:
      "Formación en Administración de Empresas aplicada a la gestión estratégica de boxes.",
  },
];

export default function ValuePropSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-[1120px] mx-auto px-6">
        <BlurFade inView>
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            ¿Qué aporto a tu box?
          </h2>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <BlurFade key={card.title} delay={0.08 * i} inView>
              <Card className="h-full border-border hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">{card.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
