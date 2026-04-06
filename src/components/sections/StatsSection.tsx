"use client";

import { NumberTicker } from "@/components/ui/number-ticker";
import { BlurFade } from "@/components/ui/blur-fade";

const stats = [
  { value: 1, suffix: " año", label: "Experiencia profesional" },
  { value: 8, suffix: "+", label: "Años como atleta de CrossFit" },
  { value: 15, suffix: "+", label: "Clases semanales dictadas" },
  { value: 20, suffix: "", label: "Alumnos por clase (máximo)" },
  { value: 2, suffix: "", label: "Boxes simultáneos" },
];

export default function StatsSection() {
  return (
    <section className="bg-secondary py-14">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {stats.map((stat, i) => (
            <BlurFade key={stat.label} delay={0.08 * i} inView>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 flex items-center justify-center gap-0.5">
                  <NumberTicker value={stat.value} />
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-sm text-muted-foreground font-medium leading-snug">
                  {stat.label}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
