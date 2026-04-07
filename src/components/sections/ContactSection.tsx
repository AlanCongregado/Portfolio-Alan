"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.858L.057 23.5a.5.5 0 0 0 .614.614l5.684-1.49A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.877 9.877 0 0 1-5.031-1.375l-.36-.214-3.733.979.997-3.645-.235-.374A9.861 9.861 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1c5.466 0 9.9 4.433 9.9 9.9 0 5.466-4.434 9.9-9.9 9.9z"/>
  </svg>
);

const IconEmail = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m2 7 10 7 10-7"/>
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const IconLocation = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const ICONS = {
  whatsapp: IconWhatsApp,
  email: IconEmail,
  linkedin: IconLinkedIn,
  instagram: IconInstagram,
  location: IconLocation,
} as const;

const contactItems = [
  {
    iconKey: "whatsapp" as const,
    label: "WhatsApp",
    value: "(+34) 643 38 20 57",
    href: "https://wa.me/34643382057",
    external: true,
  },
  {
    iconKey: "email" as const,
    label: "Email",
    value: "alan.congregado@hotmail.com",
    href: "mailto:alan.congregado@hotmail.com",
    external: false,
  },
  {
    iconKey: "linkedin" as const,
    label: "LinkedIn",
    value: "linkedin.com/in/alan-congregado",
    href: "https://www.linkedin.com/in/alan-congregado/",
    external: true,
  },
  {
    iconKey: "instagram" as const,
    label: "Instagram",
    value: "@alancongregado",
    href: "https://www.instagram.com/alancongregado/",
    external: true,
  },
  {
    iconKey: "location" as const,
    label: "Ubicación",
    value: "Valencia, España",
    href: null,
    external: false,
  },
];

type FormState = "idle" | "sending" | "sent";

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("sending");

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const text = encodeURIComponent(
      `Hola Alan, soy ${name} (${email}).\n\n${message}`
    );
    window.open(`https://wa.me/34643382057?text=${text}`, "_blank");
    trackEvent("form_submit", { method: "whatsapp" });

    setFormState("sent");
    form.reset();
    setTimeout(() => setFormState("idle"), 3000);
  }

  return (
    <section id="contacto" className="py-20 bg-secondary">
      <div className="max-w-[1120px] mx-auto px-6">
        <BlurFade inView>
          <div className="mb-12">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
              Contacto
            </p>
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-primary mb-3">
              ¿Hablamos?
            </h2>
            <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
              Si buscas un coach comprometido con la calidad técnica y con algo más que ofrecer,
              me encantaría conocer tu box.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact info */}
          <BlurFade delay={0.05} inView>
            <div className="space-y-3">
              {contactItems.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={() => trackEvent("contact_link_click", { label: item.label.toLowerCase() })}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-sm transition-all duration-200 no-underline group"
                  >
                    <span className="text-primary/70 shrink-0">{(() => { const Icon = ICONS[item.iconKey]; return <Icon />; })()}</span>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card"
                  >
                    <span className="text-primary/70 shrink-0">{(() => { const Icon = ICONS[item.iconKey]; return <Icon />; })()}</span>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                )
              )}

              <div className="flex gap-3 pt-2">
                <a
                  href="https://wa.me/34643382057?text=Hola%20Alan%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20hablar%20sobre..."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_click", { source: "boton_contacto" })}
                  className={cn(
                    buttonVariants(),
                    "flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold no-underline text-center"
                  )}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href="/CV-Coach-Alan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("cv_download")}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "flex-1 no-underline text-center"
                  )}
                >
                  Descargar CV
                </a>
              </div>
            </div>
          </BlurFade>

          {/* Contact form */}
          <BlurFade delay={0.1} inView>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-5">
                  Envíame un mensaje
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Nombre</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Tu nombre"
                        required
                        disabled={formState === "sending"}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        required
                        disabled={formState === "sending"}
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Cuéntame sobre tu box..."
                      rows={5}
                      required
                      disabled={formState === "sending"}
                      className="resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                    disabled={formState === "sending" || formState === "sent"}
                  >
                    {formState === "sending"
                      ? "Enviando..."
                      : formState === "sent"
                      ? "¡Mensaje enviado!"
                      : "Enviar mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
