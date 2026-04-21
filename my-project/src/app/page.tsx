import { HeroSection } from "@/components/sections/HeroSection"
import { StatsBar } from "@/components/sections/StatsBar"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { TrustCompliance } from "@/components/sections/TrustCompliance"
import { Testimonials } from "@/components/sections/Testimonials"
import { FaqSection } from "@/components/sections/FaqSection"
import { FinalCta } from "@/components/sections/FinalCta"

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesGrid />
      <TrustCompliance />
      <Testimonials />
      <FaqSection />
      <FinalCta />
    </>
  )
}
