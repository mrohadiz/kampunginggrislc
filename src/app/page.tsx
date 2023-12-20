import CTA from '@/components/CTA'
import Teachers from '@/components/Teachers'
import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import Manfaat from '@/components/Manfaat'
import Alumni from '@/components/Alumni'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <CTA />
      <Timeline />
      <Manfaat />
      <Alumni />
      <Teachers />
    </main>
  )
}
