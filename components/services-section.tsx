'use client'

import { Target, Zap, Shield, Trophy } from 'lucide-react'

const services = [
  {
    icon: Target,
    title: 'Tecnica De Golpeo',
    description:
      'Fundamentos de guardia, desplazamiento, combinaciones y defensa para mejorar cada round desde el primer dia.',
    tag: 'Base Solida',
    highlight: false,
  },
  {
    icon: Zap,
    title: 'Acondicionamiento',
    description:
      'Rutinas de fuerza y resistencia orientadas al boxeo para mejorar potencia, velocidad y recuperacion.',
    tag: 'Alta Intensidad',
    highlight: true,
  },
  {
    icon: Shield,
    title: 'Defensa Y Control',
    description:
      'Trabajo de reflejos, postura y timing para aprender a responder con calma y precision en entrenamiento.',
    tag: 'Disciplina',
    highlight: false,
  },
  {
    icon: Trophy,
    title: 'Mentoria De Ring',
    description:
      'Seguimiento tecnico y mental para sostener ritmo, mejorar ejecucion y elevar rendimiento en cada sesion.',
    tag: 'Coach Directo',
    highlight: false,
  },
]

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-primary" />
              <span className="text-primary text-xs font-black uppercase tracking-[0.25em]">
                Nuestros Programas
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground text-balance leading-tight">
              Trabajo real
              <br />
              <span className="text-primary">de boxeo</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground leading-relaxed text-sm md:text-base">
            Una metodologia de boxeo enfocada en tecnica, condicion fisica y constancia de
            lunes a viernes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className={`group relative flex flex-col p-7 border transition-all duration-300 cursor-default overflow-hidden ${
                  service.highlight
                    ? 'bg-primary border-primary text-primary-foreground'
                    : 'bg-card border-border hover:border-primary/60 hover:bg-card/80'
                }`}
              >
                {/* Corner accent */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 ${
                    service.highlight
                      ? 'bg-primary-foreground/10'
                      : 'bg-primary/5 group-hover:bg-primary/10'
                  } transition-colors`}
                />

                {/* Tag */}
                <span
                  className={`inline-block text-[10px] font-black uppercase tracking-[0.2em] mb-6 ${
                    service.highlight
                      ? 'text-primary-foreground/70'
                      : 'text-primary'
                  }`}
                >
                  {service.tag}
                </span>

                {/* Icon */}
                <div
                  className={`w-12 h-12 flex items-center justify-center mb-6 border ${
                    service.highlight
                      ? 'border-primary-foreground/30 bg-primary-foreground/10'
                      : 'border-border group-hover:border-primary/50 bg-secondary'
                  } transition-colors`}
                >
                  <Icon
                    size={22}
                    className={service.highlight ? 'text-primary-foreground' : 'text-primary'}
                  />
                </div>

                {/* Title */}
                <h3
                  className={`text-lg font-black uppercase tracking-tight mb-3 ${
                    service.highlight ? 'text-primary-foreground' : 'text-foreground'
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed flex-1 ${
                    service.highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'
                  }`}
                >
                  {service.description}
                </p>

                {/* Bottom arrow */}
                <div
                  className={`mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all duration-200 ${
                    service.highlight
                      ? 'text-primary-foreground/70'
                      : 'text-primary group-hover:gap-3'
                  }`}
                >
                  Ver detalle
                  <span
                    className={`h-px transition-all duration-300 ${
                      service.highlight ? 'w-6 bg-primary-foreground/50' : 'w-4 bg-primary group-hover:w-8'
                    }`}
                  />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
