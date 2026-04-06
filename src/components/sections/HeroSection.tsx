"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

export default function HeroSection() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative bg-primary pt-16 overflow-hidden">
      {/* Subtle gradient depth — radial glow top-left + bottom-right fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_10%_20%,rgba(255,255,255,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_90%_100%,rgba(0,0,0,0.25)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-[1120px] mx-auto px-6 pt-12 pb-14 w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-center">
          {/* Left: text */}
          <div>
            <BlurFade delay={0} inView>
              <AnimatedShinyText className="text-xs font-semibold text-primary-foreground/60 tracking-[0.2em] uppercase mb-6 block">
                Coach de CrossFit · Valencia · Disponible desde abril / mayo 2026
              </AnimatedShinyText>
            </BlurFade>

            <BlurFade delay={0.08} inView>
              <h1 className="font-[family-name:var(--font-fraunces)] text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[0.95] tracking-tight mb-6">
                Alan<br />Congregado
              </h1>
            </BlurFade>

            <BlurFade delay={0.15} inView>
              <div className="w-12 h-0.5 bg-accent mb-6" />
            </BlurFade>

            <BlurFade delay={0.18} inView>
              <p className="text-base md:text-lg text-primary-foreground/70 max-w-md leading-relaxed mb-3">
                Coach de CrossFit y Entrenamiento Funcional
              </p>
              <p className="text-sm text-primary-foreground/55 max-w-md leading-relaxed mb-10">
                Especializado en corrección técnica y clases grupales. Además, creo
                soluciones con IA que optimizan la gestión de boxes.
              </p>
            </BlurFade>

            <BlurFade delay={0.25} inView>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  onClick={(e) => { e.preventDefault(); handleScroll("#contacto"); }}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-accent hover:bg-accent/90 text-accent-foreground font-semibold no-underline"
                  )}
                >
                  Hablemos
                </a>
                <a
                  href="#experiencia"
                  onClick={(e) => { e.preventDefault(); handleScroll("#experiencia"); }}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-primary-foreground/25 text-primary-foreground bg-transparent hover:bg-primary-foreground/8 no-underline"
                  )}
                >
                  Ver experiencia
                </a>
              </div>
            </BlurFade>
          </div>

          {/* Right: photo */}
          <BlurFade delay={0.1} inView>
            <div className="relative mx-auto md:mx-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 shrink-0">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/foto-alan.jpg"
                  alt="Alan Congregado"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-accent/30 -z-10" />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
