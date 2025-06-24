import Hero from '@/components/Hero'
import React from 'react'
import HowWeWork from '@/components/HowWeWork'
import Solutions from '@/components/Solutions'
import Services from '@/components/Services'
import ConnectWithUs from '@/components/ConnectWithUs'
import CoreValues from '@/components/CoreValues'

const page = () => {
  return (
    <div className=''>
      <Hero />
      <HowWeWork />
      <Solutions />
      <Services />
      <CoreValues />
      <ConnectWithUs />
    </div>
  )
}

export default page