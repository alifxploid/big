'use client'

import { useState } from 'react'
import Navbar from './components/Navbar'
import SidebarMobile from './components/SidebarMobile'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import HowItWorks from './components/HowItWorks'
import BeamSection from './components/BeamSection'
import CTASection from './components/CTASection'
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
    <div className="min-h-screen bg-white">
      <Navbar onMobileMenuToggle={handleMobileMenuToggle} />
      <SidebarMobile isOpen={mobileMenuOpen} onClose={handleMobileMenuClose} />
      
      <main>
        <Hero />
        <FeatureGrid />
        <HowItWorks />
        <BeamSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  )
}