import AiMlSection from '@/ServicesSection/AiMlSection'
import HeroSection from '@/ServicesSection/HeroSection'
import Influencer from '@/ServicesSection/Influencer'
import SpecializedDomainSection from '@/ServicesSection/SpecializedDomainSection'
import WhyChooseDrillo from '@/ServicesSection/WhyChooseDrillo'
import React from 'react'

const index = () => {
    return (
        <div>
            <SpecializedDomainSection />
            <div className="bg-white py-8" />
            <WhyChooseDrillo />

            <AiMlSection />
            <div className="bg-white py-8" />
            <HeroSection />
            <div className="bg-white py-8" />
            <Influencer />
            <div className="bg-white py-8" />
        </div>
    )
}

export default index
