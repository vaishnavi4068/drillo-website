import Hero from '@/components/Hero'
import Header from '@/components/Header'
import React from 'react'
import HowWeWork from '@/components/HowWeWork'
import Solutions from '@/components/Solutions'
import Services from '@/components/Services'

const page = () => {
  return (
    <div className='h-screen'>
      <Header />
      <Hero />
      <HowWeWork />
      <Solutions />
      <Services />
    </div>
  )
}

export default page
