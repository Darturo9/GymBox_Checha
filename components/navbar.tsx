'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { buildWhatsAppUrl, siteContent } from '@/lib/site-content'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Horarios', href: '#horarios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navbarMessage = `Hola ${siteContent.coachName}, quiero informacion sobre las clases de boxeo.`

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 group">
          <Image
            src="/images/logo.webp"
            alt={`Logo ${siteContent.brandShort}`}
            width={120}
            height={53}
            className="h-7 w-auto object-contain"
            priority
          />
          <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={buildWhatsAppUrl(navbarMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-black uppercase tracking-widest px-5 py-2.5 hover:bg-primary/80 transition-colors"
        >
          WhatsApp
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-t border-border px-5 pb-6 pt-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 bg-primary text-primary-foreground text-sm font-black uppercase tracking-widest px-5 py-3 text-center hover:bg-primary/80 transition-colors"
          >
            Formulario
          </Link>
          <a
            href={buildWhatsAppUrl(navbarMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="bg-secondary text-foreground text-sm font-black uppercase tracking-widest px-5 py-3 text-center border border-border hover:border-primary transition-colors"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
