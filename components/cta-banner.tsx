'use client'

import Link from 'next/link'
import { buildWhatsAppUrl } from '@/lib/site-content'

export default function CtaBanner() {
  const ctaMessage = 'Hola, quiero empezar clases de boxeo esta semana.'

  return (
    <section className="relative py-24 bg-background overflow-hidden border-t border-border">
      {/* Decorative giant text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="text-[18vw] font-black uppercase tracking-tighter text-foreground/[0.03] whitespace-nowrap leading-none">
          POWER BOXING
        </span>
      </div>

      {/* Left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 flex flex-col items-center text-center gap-10">
        {/* Round badge */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary">
          <span className="text-primary font-black text-xs uppercase tracking-wider">Boxing</span>
        </div>

        {/* Headline */}
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-foreground text-balance">
            Reserva tu
            <br />
            <span className="text-primary">proximo round</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Clases de boxeo de lunes a viernes en zona 18.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#contacto"
            className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-black uppercase tracking-widest text-sm px-10 py-5 hover:bg-primary/85 transition-all duration-200 hover:-translate-y-0.5 shadow-xl shadow-primary/20"
          >
            Llenar Formulario
            <span className="w-5 h-px bg-primary-foreground group-hover:w-8 transition-all duration-300" />
          </Link>
          <a
            href={buildWhatsAppUrl(ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 border-2 border-foreground/20 text-foreground font-black uppercase tracking-widest text-sm px-10 py-5 hover:border-primary hover:text-primary transition-all duration-200 hover:-translate-y-0.5"
          >
            {/* WhatsApp icon as SVG */}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              width={18}
              height={18}
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Divider with tagline */}
        <div className="flex items-center gap-6 mt-4">
          <span className="flex-1 h-px bg-border max-w-[100px]" />
          <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground/50">
            Lunes a viernes · Zona 18
          </span>
          <span className="flex-1 h-px bg-border max-w-[100px]" />
        </div>
      </div>
    </section>
  )
}
