export type DayCode = 'Lun' | 'Mar' | 'Mie' | 'Jue' | 'Vie' | 'Sab' | 'Dom'

export interface TimeSlot {
  start: string
  end: string
  label: string
}

export type ScheduleByDay = Record<DayCode, TimeSlot[]>

export interface SiteContent {
  brandName: string
  brandMain: string
  brandAccent: string
  coachName: string
  coachNickname: string
  whatsappDisplay: string
  whatsappInternational: string
  whatsappBaseUrl: string
  addressArea: string
  addressStreet: string
  fullAddress: string
  mapEmbedUrl: string
  mapSearchUrl: string
  heroImage: string
  coachPhotos: string[]
  weekDays: Array<{ code: DayCode; label: string }>
  weekdaySlots: TimeSlot[]
  schedule: ScheduleByDay
}

const weekdaySlots: TimeSlot[] = [
  { start: '06:00', end: '07:00', label: '6:00 AM - 7:00 AM' },
  { start: '07:00', end: '08:00', label: '7:00 AM - 8:00 AM' },
  { start: '08:00', end: '09:00', label: '8:00 AM - 9:00 AM' },
  { start: '16:00', end: '17:00', label: '4:00 PM - 5:00 PM' },
  { start: '17:00', end: '18:00', label: '5:00 PM - 6:00 PM' },
  { start: '18:00', end: '19:00', label: '6:00 PM - 7:00 PM' },
  { start: '19:00', end: '20:00', label: '7:00 PM - 8:00 PM' },
  { start: '20:00', end: '21:00', label: '8:00 PM - 9:00 PM' },
]

export const siteContent: SiteContent = {
  brandName: 'Power Boxing by "El flaco pesado"',
  brandMain: 'Power',
  brandAccent: 'Boxing',
  coachName: 'Cesar',
  coachNickname: 'El flaco pesado',
  whatsappDisplay: '47726017',
  whatsappInternational: '50247726017',
  whatsappBaseUrl: 'https://wa.me/50247726017',
  addressArea: 'Pinares del Norte, zona 18, Ciudad de Guatemala',
  addressStreet: 'Sexta calle 63-37, calle principal',
  fullAddress:
    'Pinares del Norte, zona 18, Ciudad de Guatemala, Sexta calle 63-37, calle principal',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3859.860006269015!2d-90.43357492489258!3d14.663884985830025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDM5JzUwLjAiTiA5MMKwMjUnNTEuNiJX!5e0!3m2!1ses!2sgt!4v1772479767990!5m2!1ses!2sgt',
  mapSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=14.663884985830025,-90.43357492489258',
  heroImage: '/images/cesar-2.webp',
  coachPhotos: ['/images/cesar-1.webp', '/images/cesar-2.webp'],
  weekDays: [
    { code: 'Lun', label: 'Lun' },
    { code: 'Mar', label: 'Mar' },
    { code: 'Mie', label: 'Mie' },
    { code: 'Jue', label: 'Jue' },
    { code: 'Vie', label: 'Vie' },
    { code: 'Sab', label: 'Sab' },
    { code: 'Dom', label: 'Dom' },
  ],
  weekdaySlots,
  schedule: {
    Lun: [...weekdaySlots],
    Mar: [...weekdaySlots],
    Mie: [...weekdaySlots],
    Jue: [...weekdaySlots],
    Vie: [...weekdaySlots],
    Sab: [],
    Dom: [],
  },
}

export const buildWhatsAppUrl = (message: string) => {
  const trimmed = message.trim()
  if (!trimmed) {
    return siteContent.whatsappBaseUrl
  }

  return `${siteContent.whatsappBaseUrl}?text=${encodeURIComponent(trimmed)}`
}
