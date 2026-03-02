'use client'

import { useState } from 'react'
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import { siteContent, type DayCode } from '@/lib/site-content'

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState<DayCode>('Lun')
  const currentIndex = siteContent.weekDays.findIndex((day) => day.code === activeDay)
  const daySchedule = siteContent.schedule[activeDay]
  const isClosedDay = daySchedule.length === 0

  const prev = () => {
    const prevIndex = (currentIndex - 1 + siteContent.weekDays.length) % siteContent.weekDays.length
    setActiveDay(siteContent.weekDays[prevIndex].code)
  }

  const next = () => {
    const nextIndex = (currentIndex + 1) % siteContent.weekDays.length
    setActiveDay(siteContent.weekDays[nextIndex].code)
  }

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
              Horarios de{' '}
              <span className="text-primary">entrenamiento</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Cada clase dura 60 minutos</span>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={prev}
            className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label="Dia anterior"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex-1 overflow-x-auto">
            <div className="flex gap-2 min-w-max">
              {siteContent.weekDays.map((day) => (
                <button
                  key={day.code}
                  onClick={() => setActiveDay(day.code)}
                  className={`px-4 py-2.5 text-xs font-black uppercase tracking-widest transition-all duration-200 border ${
                    activeDay === day.code
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                  }`}
                >
                  {day.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label="Dia siguiente"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="border border-border overflow-hidden">
          <div className="grid grid-cols-3 bg-secondary border-b border-border px-6 py-3">
            {['Hora', 'Clase', 'Instructor'].map((header) => (
              <span
                key={header}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground"
              >
                {header}
              </span>
            ))}
          </div>

          {isClosedDay ? (
            <div className="px-6 py-12 text-center bg-card/20">
              <p className="text-lg font-black uppercase tracking-wide text-primary">Cerrado ❌</p>
              <p className="text-sm text-muted-foreground mt-2">
                Sabado y domingo no hay clases.
              </p>
            </div>
          ) : (
            daySchedule.map((slot, index) => (
              <div
                key={`${activeDay}-${slot.start}-${slot.end}`}
                className={`grid grid-cols-3 px-6 py-4 items-center gap-2 border-b border-border/40 last:border-0 hover:bg-secondary/30 transition-colors ${
                  index % 2 === 0 ? '' : 'bg-card/30'
                }`}
              >
                <span className="text-primary font-black text-base leading-none">
                  {slot.start} - {slot.end}
                </span>
                <span className="text-sm font-bold text-foreground leading-tight">Clase de Boxeo</span>
                <span className="text-xs text-muted-foreground">
                  {siteContent.coachName} ({siteContent.coachNickname})
                </span>
              </div>
            ))
          )}
        </div>

        <p className="mt-4 text-xs text-muted-foreground text-center">
          Clases activas de lunes a viernes. Reserva tu espacio por WhatsApp o desde el formulario
          de contacto.
        </p>
      </div>
    </section>
  )
}
