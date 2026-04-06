import { BlurFade } from "@/components/ui/blur-fade";

const certGroups = [
  {
    category: "CrossFit & Entrenamiento Funcional",
    certs: [
      {
        title: "Crosstraining Level 1 y 2",
        institution: "FitJaguar Academy",
        year: "2025",
        items: [
          "Especialización en halterofilia olímpica",
          "Gimnásticos avanzados",
          "Programación de entrenamientos metabólicos",
          "Psicología deportiva aplicada",
        ],
      },
    ],
  },
  {
    category: "Fitness & Personal Training",
    certs: [
      {
        title: "Instructor Avanzado en Fitness",
        institution: "Gualda Training",
        year: "2025",
        items: [
          "Hipertrofia y ganancia muscular",
          "Nutrición deportiva aplicada",
          "Entrenamiento funcional, HIIT y GAP",
          "Prevención y manejo de lesiones",
          "RCP y Primeros Auxilios",
        ],
      },
    ],
  },
  {
    category: "Formación Académica",
    certs: [
      {
        title: "Lic. en Administración de Empresas",
        institution: "Universidad del Salvador",
        year: "2016 – 2022",
        items: [],
      },
    ],
  },
];

export default function CertificationsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1120px] mx-auto px-6">
        <BlurFade inView>
          <div className="mb-14">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
              Formación
            </p>
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-primary">
              Certificaciones
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 max-w-4xl">
          {certGroups.map((group, i) => (
            <BlurFade key={group.category} delay={0.08 * i} inView>
              <div>
                <p className="text-xs font-semibold text-accent/80 uppercase tracking-wide mb-4 pb-3 border-b border-border">
                  {group.category}
                </p>
                {group.certs.map((cert) => (
                  <div key={cert.title}>
                    <h4 className="font-semibold text-sm text-foreground leading-snug mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">{cert.institution}</p>
                    <p className="text-xs font-medium text-accent mt-0.5 mb-3">{cert.year}</p>
                    {cert.items.length > 0 && (
                      <ul className="space-y-1.5">
                        {cert.items.map((item) => (
                          <li key={item} className="text-xs text-muted-foreground flex gap-2">
                            <span className="text-accent/60 shrink-0 mt-0.5 select-none">—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
