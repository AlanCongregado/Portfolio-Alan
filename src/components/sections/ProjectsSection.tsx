import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";

const projects = [
  {
    title: "Sistema de Gestión de Competencias",
    meta: "WebApp · HTML/CSS/JavaScript",
    year: "2025",
    description:
      "Sistema para competencias internas que calcula rankings automáticamente, gestiona equipos y resultados. Usado en competencia real con 40+ participantes.",
    tags: [
      "Eventos que se organizan solos",
      "Rankings automáticos",
      "Export a Excel",
      "40+ participantes",
      "Sistema de desempate",
    ],
    impact: "80% menos tiempo de organización vs planillas manuales.",
    link: "https://compegunnen.vercel.app/",
    linkLabel: "Ver sistema →",
  },
  {
    title: "Página Web Gunnen",
    meta: "Website · Vercel Deploy",
    year: "2025",
    description:
      "Sitio web profesional para Gunnen Centro de Entrenamiento. Diseño responsive, branding consistente y optimizado para conversión de leads. Deployment en Vercel con dominio personalizado.",
    tags: [
      "Responsive design",
      "Branding profesional",
      "Deploy en Vercel",
      "Optimizado para SEO",
    ],
    impact: "Presencia digital profesional que posiciona al box como referente local.",
    link: "https://gunnen-web.vercel.app/",
    linkLabel: "Ver sitio web →",
  },
  {
    title: "Manual de Coaches",
    meta: "Documentación · Estandarización",
    year: "2025",
    description:
      "Manual técnico completo con especificaciones de movimientos (halterofilia, gimnásticos, powerlifting), protocolos de corrección, cues de coaching y estándares de calidad para clases grupales. Herramienta para onboarding de nuevos coaches.",
    tags: [
      "Especificaciones técnicas",
      "Protocolos de corrección",
      "Estándares de calidad",
      "Onboarding coaches",
    ],
    impact: "Estandarización de la calidad de coaching y reducción de la curva de aprendizaje para nuevos coaches.",
    link: "https://drive.google.com/drive/folders/1dWXCPXfTNLyI74y3zI4KCnPKOH8QDcZX",
    linkLabel: "Ver manual →",
  },
  {
    title: "Sistema de Liquidación de Sueldos",
    meta: "Automatización · Excel/Google Sheets",
    year: "2025",
    description:
      "Planilla automatizada para cálculo de sueldos según clases dictadas, eventos especiales y horas trabajadas. Incluye generación automática de reportes mensuales y tracking de pagos.",
    tags: [
      "Cálculo automático",
      "Reportes mensuales",
      "Tracking de pagos",
      "Fórmulas avanzadas",
    ],
    impact: "Eliminación de errores administrativos y reducción del tiempo de procesamiento en 90%.",
    link: null,
  },
];

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 bg-secondary">
      <div className="max-w-[1120px] mx-auto px-6">
        <BlurFade inView>
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Proyectos desarrollados
          </h2>
        </BlurFade>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <BlurFade key={project.title} delay={0.08 * i} inView>
              <Card className="border-border hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {project.meta}
                      </p>
                    </div>
                    <Badge variant="secondary" className="shrink-0 font-medium">
                      {project.year}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs font-normal border-accent/40 text-accent"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-foreground/80 bg-muted rounded-md px-3 py-2">
                    <strong>Impacto:</strong> {project.impact}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm font-medium text-accent hover:text-primary transition-colors"
                    >
                      {project.linkLabel}
                    </a>
                  )}
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
