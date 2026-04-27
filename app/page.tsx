import NavbarDemo from "@/components/sections/navbar-demo"
import HeroSectionOne from "@/components/sections/hero-section-one"
import AnimatedScrollIndicator from "@/components/sections/animated-scroll-indicator"
import ThreeCommonTraps from "@/components/sections/three-common-traps"
import RealOutcomes from "@/components/sections/real-outcomes"
import HowItWorks from "@/components/sections/how-it-works"
import WeCompare from "@/components/sections/we-compare"
import TrustedBy from "@/components/sections/trusted-by"
import ContactForm from "@/components/sections/contact-form"
import CallToAction from "@/components/sections/call-to-action"
import Footer from "@/components/sections/footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-black p-0">
      <NavbarDemo />
      <HeroSectionOne />
      <AnimatedScrollIndicator />
      <ThreeCommonTraps />
      <RealOutcomes />
      <HowItWorks />
      <WeCompare />
      <TrustedBy />
      <ContactForm />
      <CallToAction />
      <Footer />
    </div>
  )
}
