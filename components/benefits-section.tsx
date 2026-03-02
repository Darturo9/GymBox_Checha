'use client'

import Image from 'next/image'
import { Brain, Heart, Users } from 'lucide-react'
import { siteContent } from '@/lib/site-content'

const pillars = [
  {
    icon: Brain,
    title: 'Disciplina',
    description:
      'Cada sesion refuerza enfoque, control mental y constancia. El objetivo es que avances tecnicamente en cada clase.',
    stat: '60 MIN',
    statLabel: 'Por clase',
  },
  {
    icon: Heart,
    title: 'Condicion',
    description:
      'Trabajo fisico orientado al boxeo para mejorar cardio, ritmo y fuerza util dentro y fuera del ring.',
    stat: 'L - V',
    statLabel: 'Dias activos',
  },
  {
    icon: Users,
    title: 'Guia directa',
    description:
      `Entrenamiento guiado por ${siteContent.coachName} "${siteContent.coachNickname}" para mantener correccion tecnica y progreso continuo.`,
    stat: '1 COACH',
    statLabel: 'Cesar al frente',
  },
]

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-24 bg-card border-y border-border relative overflow-hidden">
      {/* Background texture lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-foreground w-full"
            style={{ top: `${(i + 1) * 8}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-primary" />
            <span className="text-primary text-xs font-black uppercase tracking-[0.25em]">
              Por qué elegirnos
            </span>
            <span className="w-6 h-px bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground text-balance leading-tight">
            Los tres pilares de{' '}
            <span className="text-primary">{siteContent.coachNickname}</span>
          </h2>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className={`group p-10 flex flex-col items-start gap-6 hover:bg-secondary/40 transition-colors duration-300 ${
                  index < pillars.length - 1 ? 'border-b md:border-b-0 md:border-r border-border' : ''
                }`}
              >
                {/* Icon container */}
                <div className="relative">
                  <div className="w-16 h-16 bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <Icon
                      size={28}
                      className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                    />
                  </div>
                  {/* Stat badge */}
                  <div className="absolute -top-3 -right-3 bg-background border border-border px-2 py-0.5">
                    <span className="text-[10px] font-black text-primary uppercase tracking-wider">
                      {pillar.stat}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-foreground mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {pillar.description}
                  </p>
                </div>

                {/* Stat row */}
                <div className="mt-auto pt-4 border-t border-border/50 w-full flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {pillar.statLabel}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {siteContent.coachPhotos.map((photoSrc, index) => (
            <article
              key={photoSrc}
              className="relative overflow-hidden border border-border bg-secondary/20"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={photoSrc}
                  alt={`${siteContent.coachName} en entrenamiento de boxeo ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute bottom-3 left-3 bg-background/85 border border-border px-3 py-1.5">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                  Cesar En Accion
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-xl md:text-2xl font-black uppercase tracking-tight text-muted-foreground/60 text-balance">
            &ldquo;No se trata de golpear mas fuerte.
            <br />
            <span className="text-foreground">Se trata de no parar.&rdquo;</span>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
