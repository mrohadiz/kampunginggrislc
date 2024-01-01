import CTA from '@/components/CTA'
import Teachers from '@/components/Teachers'
import Hero from '@/components/Hero'
import Manfaat from '@/components/Manfaat'
import Metode from '@/components/Metode'
import Alumni from '@/components/Alumni'
import Fasilitas from '@/components/Fasilitas'
import Company from '@/components/Company'
import Program from '@/components/Program'
import Keseruan from '@/components/Keseruan'
import Timeline from '@/components/Timeline'
import Head from 'next/head'

export default function Home() {
  return (
    <main className="ease-in duration-300">
      <Head>
        <title>Kampung Inggris LC</title>
        <meta name="google-site-verification" content="PCJgKqf7_1krHwDsc0pe7uor_J0dEHz-Xv1HEbBw_m0" />
      </Head>

      <Hero />
      <CTA />
      <Timeline />
      <Manfaat />
      <Keseruan />
      <Alumni />
      <Fasilitas />
      <Metode />
      <Company />
      <Teachers />
      <Program />
    </main>
  )
}
