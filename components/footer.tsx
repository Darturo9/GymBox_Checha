'use client'

import Link from 'next/link'
import Image from 'next/image'
import { siteContent } from '@/lib/site-content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2">
          <Image
            src="/images/logo.webp"
            alt={`Logo ${siteContent.brandShort}`}
            width={260}
            height={114}
            className="h-14 md:h-16 w-auto object-contain"
          />
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        </Link>

        {/* Links */}
        <nav className="flex flex-wrap items-center gap-6 justify-center">
          {['Servicios', 'Beneficios', 'Horarios', 'Contacto'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground/50 font-medium">
          &copy; {year} {siteContent.brandName}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
