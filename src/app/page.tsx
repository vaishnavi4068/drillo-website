import Hero from '@/components/Hero'
import React from 'react'
import HowWeWork from '@/components/HowWeWork'
import Solutions from '@/components/Solutions'
import ConnectWithUs from '@/components/ConnectWithUs'
import CoreValues from '@/components/CoreValues'
import Founders from '@/components/Founders'
import Partners from '@/components/Partners'
import Enterprise from '@/components/Enterprise'
import PortfolioSection from '@/components/PortfolioSection'
import BlogSection from '@/components/BlogSection'
import SupportForm from '@/components/SupportForm'
import VentureStudio from '@/components/VentureStudio'
import ScaleupsSection from '@/components/ScaleupsSection'

const page = () => {
  return (
    <div className=''>
      <Hero />
      {/* <HowWeWork /> */}
      <VentureStudio />
      <ScaleupsSection />
      <Founders />
      <Enterprise />
      <PortfolioSection />
      <BlogSection />
      <CoreValues />
      <SupportForm />
      <Solutions />
      <Partners />
      <ConnectWithUs />
    </div>
  )
}

export default page