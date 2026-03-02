'use client'

import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl, siteContent } from '@/lib/site-content'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [phoneError, setPhoneError] = useState('')

  const activeDays = siteContent.weekDays.filter(
    (day) => day.code !== 'Sab' && day.code !== 'Dom'
  )

  const normalizeGuatemalaPhone = (value: string) => {
    const digitsOnly = value.replace(/\D/g, '')
    if (digitsOnly.startsWith('502')) {
      return digitsOnly.slice(3)
    }
    return digitsOnly
  }

  const isValidGuatemalaPhone = (value: string) => {
    const localPhone = normalizeGuatemalaPhone(value)
    return /^[2-7]\d{7}$/.test(localPhone)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(false)
    setPhoneError('')

    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '').trim()
    const phone = String(form.get('phone') ?? '').trim()
    const day = String(form.get('day') ?? '').trim()
    const time = String(form.get('time') ?? '').trim()
    const note = String(form.get('message') ?? '').trim()

    if (!isValidGuatemalaPhone(phone)) {
      setPhoneError('Ingresa un telefono valido de Guatemala (8 digitos).')
      return
    }

    const localPhone = normalizeGuatemalaPhone(phone)

    const whatsappMessage = [
      'Hola, quiero reservar clase de boxeo.',
      `Nombre: ${name}`,
      `Telefono: +502 ${localPhone}`,
      `Dia de interes: ${day}`,
      `Horario: ${time}`,
      note ? `Mensaje: ${note}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(buildWhatsAppUrl(whatsappMessage), '_blank', 'noopener,noreferrer')
    event.currentTarget.reset()
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="py-24 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-primary" />
            <span className="text-primary text-xs font-black uppercase tracking-[0.25em]">
              Contacto
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground text-balance leading-tight">
            Reserva por formulario
            <br />
            <span className="text-primary">o WhatsApp</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: MapPin,
                  title: 'Direccion',
                  lines: [siteContent.addressArea, siteContent.addressStreet],
                },
                {
                  icon: Clock,
                  title: 'Horario',
                  lines: ['Lunes a viernes', '6:00 AM - 9:00 PM'],
                },
                {
                  icon: Phone,
                  title: 'WhatsApp',
                  lines: [siteContent.whatsappDisplay, 'Atencion directa'],
                },
                {
                  icon: MessageCircle,
                  title: 'Entrenador',
                  lines: [siteContent.coachDisplay, 'Coach principal'],
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="bg-secondary/30 border border-border p-5 flex flex-col gap-3 hover:border-primary/40 transition-colors"
                  >
                    <div className="w-9 h-9 bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">
                        {item.title}
                      </p>
                      {item.lines.map((line) => (
                        <p key={line} className="text-sm font-semibold text-foreground leading-snug">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            <form className="border border-border p-6 flex flex-col gap-4" onSubmit={handleSubmit}>
              <h3 className="text-lg font-black uppercase tracking-tight text-foreground">
                Formulario rapido
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-[10px] font-black uppercase tracking-widest text-muted-foreground"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className="bg-input border border-border text-foreground placeholder:text-muted-foreground text-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phone"
                    className="text-[10px] font-black uppercase tracking-widest text-muted-foreground"
                  >
                    Telefono
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="47726017"
                    inputMode="numeric"
                    autoComplete="tel"
                    maxLength={14}
                    pattern="(\+?502[\s-]?)?[2-7][0-9]{7}"
                    title="Ingresa un telefono de Guatemala valido (ej. 47726017 o +502 47726017)"
                    aria-invalid={phoneError ? 'true' : 'false'}
                    aria-describedby={phoneError ? 'phone-error' : undefined}
                    onChange={() => {
                      if (phoneError) setPhoneError('')
                    }}
                    className="bg-input border border-border text-foreground placeholder:text-muted-foreground text-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                  {phoneError && (
                    <p id="phone-error" className="text-[11px] text-primary font-semibold">
                      {phoneError}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="day"
                    className="text-[10px] font-black uppercase tracking-widest text-muted-foreground"
                  >
                    Dia
                  </label>
                  <select
                    id="day"
                    name="day"
                    required
                    defaultValue=""
                    className="bg-input border border-border text-foreground text-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Selecciona dia
                    </option>
                    {activeDays.map((day) => (
                      <option key={day.code} value={day.label}>
                        {day.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="time"
                    className="text-[10px] font-black uppercase tracking-widest text-muted-foreground"
                  >
                    Horario
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    defaultValue=""
                    className="bg-input border border-border text-foreground text-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Selecciona horario
                    </option>
                    {siteContent.weekdaySlots.map((slot) => (
                      <option key={slot.label} value={slot.label}>
                        {slot.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-[10px] font-black uppercase tracking-widest text-muted-foreground"
                >
                  Mensaje (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Quiero empezar esta semana..."
                  rows={3}
                  className="bg-input border border-border text-foreground placeholder:text-muted-foreground text-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-primary text-primary-foreground font-black uppercase tracking-widest text-sm py-4 hover:bg-primary/85 transition-all duration-200 hover:-translate-y-0.5 mt-2"
              >
                Enviar a WhatsApp
              </button>

              {submitted && (
                <p className="text-xs text-muted-foreground">Se abrio WhatsApp con tu informacion.</p>
              )}
            </form>

            <a
              href={buildWhatsAppUrl('Hola, quiero informacion de horarios y precio.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border-2 border-foreground/20 text-foreground font-black uppercase tracking-widest text-sm px-6 py-4 hover:border-primary hover:text-primary transition-all duration-200"
            >
              Escribir por WhatsApp
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative w-full flex-1 min-h-80 lg:min-h-0 border border-border overflow-hidden bg-secondary">
              <iframe
                title={`Ubicacion ${siteContent.brandName}`}
                src={siteContent.mapEmbedUrl}
                className="w-full h-full min-h-80 lg:min-h-full grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm border border-border px-3 py-2 flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                <span className="text-xs font-black text-foreground uppercase tracking-wider">
                  {siteContent.brandShort}
                </span>
              </div>
            </div>

            <div className="border border-border p-4 flex items-start gap-3 bg-secondary/20">
              <div className="w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={14} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{siteContent.addressArea}</p>
                <p className="text-xs text-muted-foreground mt-1">{siteContent.addressStreet}</p>
                <a
                  href={siteContent.mapSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex text-xs font-semibold text-primary hover:underline"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
