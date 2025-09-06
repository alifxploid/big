'use client'

import { useState } from 'react'
import Navbar from './components/Navbar'

import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import ServicesSection from './components/ServicesSection'
import HowItWorks from './components/HowItWorks'
import BeamSection from './components/BeamSection'
import PaymentGateway from './components/PaymentGateway'
import CTASection from './components/CTASection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar onMobileMenuToggle={handleMobileMenuToggle} />

      
      <main>
        <Hero />
        <FeatureGrid />
        <ServicesSection />
        <HowItWorks />
        <BeamSection />
        <PaymentGateway />
        <CTASection />
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  )
}