import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import BenefitsSection from '@/components/benefits-section'
import ScheduleSection from '@/components/schedule-section'
import ContactSection from '@/components/contact-section'
import CtaBanner from '@/components/cta-banner'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <ScheduleSection />
      <ContactSection />
      <CtaBanner />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
