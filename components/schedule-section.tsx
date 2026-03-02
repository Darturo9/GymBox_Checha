'use client'

import { Clock, Sun, Moon, CalendarX2 } from 'lucide-react'
import { siteContent } from '@/lib/site-content'

export default function ScheduleSection() {
  return (
    <section id="horarios" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-primary" />
              <span className="text-primary text-xs font-black uppercase tracking-[0.25em]">
                Horarios Semanales
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground text-balance leading-tight">
              Horario de{' '}
              <span className="text-primary">lunes a viernes</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Cada clase dura 60 minutos</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {siteContent.scheduleBands.map((band) => {
            const Icon = band.title === 'Manana' ? Sun : Moon

            return (
              <article key={band.title} className="border border-border bg-card/20 overflow-hidden">
                <header className="px-6 py-4 border-b border-border bg-secondary/40 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Icon size={16} className="text-primary" />
                    <h3 className="text-sm font-black uppercase tracking-widest text-foreground">
                      {band.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">
                    Clase de Boxeo
                  </span>
                </header>

                <div className="p-4 flex flex-col gap-2">
                  {band.slots.map((slot) => (
                    <div
                      key={`${band.title}-${slot.start}`}
                      className="px-4 py-3 border border-border bg-background/40 flex items-center justify-between gap-3"
                    >
                      <span className="text-base font-black text-primary">
                        {slot.start} - {slot.end}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Cupo limitado
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-5 border border-border bg-card/20 px-6 py-5 flex items-start gap-3">
          <div className="w-9 h-9 bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
            <CalendarX2 size={16} className="text-primary" />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-foreground">
              Sabado y domingo: Cerrado ❌
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Las clases se imparten unicamente de lunes a viernes.
            </p>
          </div>
        </div>

        <p className="mt-4 text-xs text-muted-foreground text-center">
          Reserva tu espacio por WhatsApp o desde el formulario de contacto.
        </p>
      </div>
    </section>
  )
}
