import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { MusicSection } from "@/components/music-section"
import { TourDates } from "@/components/tour-dates"
import { MerchSection } from "@/components/merch-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <MusicSection />
      <TourDates />
      <MerchSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
