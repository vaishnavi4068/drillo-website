import Hero from '@/components/Hero'
import Header from '@/components/Header'
import React from 'react'
import HowWeWork from '@/components/HowWeWork'
import Solutions from '@/components/Solutions'
import Services from '@/components/Services'
import CoreValues from '@/components/CoreValues'
import ConnectWithUs from '@/components/ConnectWithUs'

const page = () => {
  return (
    <div className='h-screen'>
      <Header />
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
