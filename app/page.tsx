import HeroSection from "@/components/home/hero-section"
import ServicesPreview from "@/components/home/services-preview"
import ClientLogos from "@/components/home/client-logos"
import AboutSummary from "@/components/home/about-summary"
import CTASection from "@/components/home/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <ClientLogos />
      <AboutSummary />
      <CTASection />
    </>
  )
}
