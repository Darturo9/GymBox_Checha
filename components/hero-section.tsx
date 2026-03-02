'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { buildWhatsAppUrl, siteContent } from '@/lib/site-content'

export default function HeroSection() {
  const heroMessage = `Hola ${siteContent.coachName}, quiero reservar una clase de boxeo.`

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={siteContent.heroImage}
          alt="Entrenamiento de boxeo en ring"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlays for depth */}
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Decorative side accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-6 h-px bg-primary" />
            <span className="text-primary text-xs font-black uppercase tracking-[0.25em]">
              Boxeo en Zona 18
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tighter text-balance text-foreground mb-6">
            Entrena
            <br />
            <span className="text-primary">boxeo</span>
            <br />
            con El Flaco Pesado
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mb-10 font-medium">
            {siteContent.brandShort}. Clases guiadas de lunes a viernes, reserva por WhatsApp
            o formulario en segundos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={buildWhatsAppUrl(heroMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-black uppercase tracking-widest text-sm px-8 py-4 hover:bg-primary/85 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-primary/20"
            >
              WhatsApp Directo
              <span className="w-5 h-px bg-primary-foreground group-hover:w-8 transition-all duration-300" />
            </a>
            <Link
              href="#horarios"
              className="inline-flex items-center justify-center gap-3 border-2 border-foreground/30 text-foreground font-black uppercase tracking-widest text-sm px-8 py-4 hover:border-primary hover:text-primary transition-all duration-200 hover:-translate-y-0.5"
            >
              Ver Horarios
            </Link>
          </div>

          {/* Stats bar */}
          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4">
            {[
              { value: '8', label: 'Horarios Por Dia' },
              { value: 'Lun - Vie', label: 'Dias De Clase' },
              { value: '60 Min', label: 'Cada Sesion' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl font-black text-primary leading-none">{stat.value}</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#horarios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Desplazarse hacia abajo"
      >
        <span className="text-xs font-semibold uppercase tracking-widest">Explorar</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  )
}
