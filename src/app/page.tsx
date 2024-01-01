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
import Script from 'next/script'

export default function Home() {
  return (
    <main className="ease-in duration-300">

      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>

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
