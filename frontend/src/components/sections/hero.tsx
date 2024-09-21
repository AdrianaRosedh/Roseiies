'use client'

import { useClientTranslation } from '@/components/I18nProvider'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight } from "lucide-react"
import Image from 'next/image'

interface HeroSectionProps {
  lng: string
}

export default function HeroSection({ lng }: HeroSectionProps) {
  const { t } = useClientTranslation(lng, 'common')

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center justify-between mb-24 min-h-screen"
    >
      <motion.div
        className="md:w-1/2 mb-12 md:mb-0"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          {t('hero.title', 'Welcome to Roseiies')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl mb-8"
        >
          {t('hero.subtitle', 'AI-Powered Personalized Skincare')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Input className="bg-white/20 text-white placeholder-white/75 border-none" placeholder={t('hero.emailPlaceholder', 'Enter your email')} type="email" />
          <Button className="bg-[#0FB9B1] text-white hover:bg-[#0FB9B1]/90 transition-colors duration-300">
            {t('hero.cta', 'Get Started')} <ChevronRight className="ml-2" />
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2"
      >
        <Image 
          src="/placeholder.svg" 
          alt={t('hero.imageAlt', 'Roseiies AI Skincare')} 
          width={400} 
          height={400} 
          className="rounded-lg shadow-2xl" 
        />
      </motion.div>
    </motion.section>
  )
}