import { Marquee } from "@/components/ui/marquee";
import { BlurFade } from "@/components/ui/blur-fade";

const techs = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Excel Avanzado",
  "Google Sheets",
  "Vercel",
  "Git",
  "Responsive Design",
];

export default function TechStackSection() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6">
        <BlurFade inView>
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Stack técnico
          </h2>
        </BlurFade>
      </div>

      <Marquee pauseOnHover className="[--duration:25s]">
        {techs.map((tech) => (
          <div
            key={tech}
            className="mx-4 px-6 py-3 rounded-full border border-accent/30 bg-secondary text-sm font-semibold text-primary hover:border-accent hover:bg-accent/10 transition-colors duration-200 cursor-default select-none"
          >
            {tech}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
