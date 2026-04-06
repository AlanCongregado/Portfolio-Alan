"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-primary transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.25)]" : ""
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="#"
          className="font-[family-name:var(--font-fraunces)] text-[18px] font-semibold text-primary-foreground no-underline"
        >
          Alan Congregado
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Menú principal">
          <a
            href="#experiencia"
            onClick={(e) => handleAnchorClick(e, "#experiencia")}
            className="text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors no-underline relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full"
          >
            Experiencia
          </a>
          <a
            href="#diferencial"
            onClick={(e) => handleAnchorClick(e, "#diferencial")}
            className="text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors no-underline relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full"
          >
            Diferencial
          </a>
          <a
            href="#contacto"
            onClick={(e) => handleAnchorClick(e, "#contacto")}
            className="text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors no-underline relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full"
          >
            Contacto
          </a>
          <a
            href="https://wa.me/34643382057"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "sm" }),
              "bg-accent hover:bg-accent/90 text-accent-foreground font-semibold no-underline"
            )}
          >
            Hablemos
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={`block w-6 h-0.5 bg-primary-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 px-6 py-4 flex flex-col gap-4">
          <a
            href="#experiencia"
            onClick={(e) => handleAnchorClick(e, "#experiencia")}
            className="text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors no-underline relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full"
          >
            Experiencia
          </a>
          <a
            href="#diferencial"
            onClick={(e) => handleAnchorClick(e, "#diferencial")}
            className="text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors no-underline relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full"
          >
            Diferencial
          </a>
          <a
            href="#contacto"
            onClick={(e) => handleAnchorClick(e, "#contacto")}
            className="text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors no-underline relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full"
          >
            Contacto
          </a>
          <a
            href="https://wa.me/34643382057"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "sm" }),
              "w-fit bg-accent hover:bg-accent/90 text-accent-foreground font-semibold no-underline"
            )}
          >
            Hablemos
          </a>
        </div>
      )}
    </header>
  );
}
