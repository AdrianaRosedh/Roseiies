'use client'

import { useClientTranslation } from '@/components/I18nProvider'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import HeroSection from '@/components/sections/hero'
import FeaturesSection from '@/components/sections/features'
import HowItWorksSection from '@/components/sections/how-it-works'
import TestimonialsSection from '@/components/sections/testimonials'
import CTASection from '@/components/sections/cta'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

interface LandingPageProps {
  lng: string
}

export default function LandingPage({ lng }: LandingPageProps) {
  const { t } = useClientTranslation(lng, 'common')
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Header lng={lng} theme={theme || 'light'} setTheme={setTheme} mounted={mounted} />
      <main className="flex-grow">
        <HeroSection lng={lng} />
        <FeaturesSection lng={lng} />
        <HowItWorksSection lng={lng} />
        <TestimonialsSection lng={lng} />
        <CTASection lng={lng} />
      </main>
      <Footer lng={lng} />
    </div>
  )
}