import { HeroSection } from "@/components/sections/HeroSection"
import { PayBenefitsSection } from "@/components/sections/PayBenefitsSection"
import { FleetSection } from "@/components/sections/FleetSection"
import { WhyDriveSection } from "@/components/sections/WhyDriveSection"
import { RequirementsSection } from "@/components/sections/RequirementsSection"
import { FinalCtaSection } from "@/components/sections/FinalCtaSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <PayBenefitsSection />
      <FleetSection />
      <WhyDriveSection />
      <RequirementsSection />
      <FinalCtaSection />
    </>
  )
}
