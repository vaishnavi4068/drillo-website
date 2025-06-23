import Hero from '@/components/Hero'
import Header from '@/components/Header'
import React from 'react'
import HowWeWork from '@/components/HowWeWork'
import Solutions from '@/components/Solutions'
import Services from '@/components/Services'
import Footer from '@/components/Footer'
import AiMlSection from '@/ServicesSection/AiMlSection'
import HeroSection from '@/ServicesSection/HeroSection'
import WhyChooseDrillo from '@/ServicesSection/WhyChooseDrillo'
import SpecializedDomainSection from '@/ServicesSection/SpecializedDomainSection'
import Influencer from '@/ServicesSection/Influencer'



const page = () => {
  return (
    <div className='h-screen'>
      <Header />
      <Hero />
      <HowWeWork />
      <Solutions />
      <Services />
      
      <SpecializedDomainSection />
      <div className="bg-white py-8" />
      <WhyChooseDrillo />
      
      <AiMlSection />
      <div className="bg-white py-8" />
      <HeroSection />
      <div className="bg-white py-8" />
      <Influencer />
      <div className="bg-white py-8" />
      <Footer />
    </div>
  )
}

export default page