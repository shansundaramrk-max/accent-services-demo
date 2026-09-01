import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import NeedSelector from '@/components/home/NeedSelector'
import Outcomes from '@/components/home/Outcomes'
import WhyAscent from '@/components/home/WhyAscent'
import Ecosystem from '@/components/home/Ecosystem'
import CaseStudyPreview from '@/components/home/CaseStudyPreview'
import Testimonials from '@/components/home/Testimonials'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <NeedSelector />
      <Outcomes />
      <WhyAscent />
      <Ecosystem />
      <CaseStudyPreview />
      <Testimonials />
      <CTASection />
    </>
  )
}
