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

const page = () => {
  return (
    <div className=''>
      <Hero />
      {/* <HowWeWork /> */}
      <Solutions />
      <Founders />
      <Partners />
      <Enterprise />
      <PortfolioSection />
      <BlogSection />
      <CoreValues />
      <ConnectWithUs />
    </div>
  )
}

export default page