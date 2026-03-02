import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { siteContent } from '@/lib/site-content'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${siteContent.brandName} | Clases de Boxeo en Zona 18`,
  description:
    'Clases de boxeo con Cesar "El flaco pesado". Horarios de lunes a viernes de 6:00 AM a 9:00 PM en Pinares del Norte, zona 18. Reserva por WhatsApp.',
  keywords: [
    'boxeo',
    'gimnasio de boxeo',
    'clases de boxeo zona 18',
    'Cesar el flaco pesado',
    'Power Boxing',
    'WhatsApp',
  ],
  openGraph: {
    title: `${siteContent.brandName} | Clases de Boxeo`,
    description:
      'Entrena boxeo con Cesar "El flaco pesado" en Pinares del Norte, zona 18. Horarios de lunes a viernes.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#BE123C',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
