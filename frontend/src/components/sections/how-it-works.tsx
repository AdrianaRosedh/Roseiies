'use client'

import { motion } from 'framer-motion'
import { useClientTranslation } from '@/components/I18nProvider'
import { Camera, Brain, Sparkles, Repeat } from 'lucide-react'

interface HowItWorksSectionProps {
  lng: string
}

const steps = [
  { name: 'howItWorks.analyze.title', description: 'howItWorks.analyze.description', icon: Camera },
  { name: 'howItWorks.recommend.title', description: 'howItWorks.recommend.description', icon: Brain },
  { name: 'howItWorks.apply.title', description: 'howItWorks.apply.description', icon: Sparkles },
  { name: 'howItWorks.adapt.title', description: 'howItWorks.adapt.description', icon: Repeat },
]

export default function HowItWorksSection({ lng }: HowItWorksSectionProps) {
  const { t } = useClientTranslation(lng, 'common')

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-600 dark:text-purple-400 font-semibold tracking-wide uppercase">{t('howItWorks.title')}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t('howItWorks.subtitle')}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            {t('howItWorks.description')}
          </p>
        </div>

        <motion.div 
          className="mt-10 sm:mt-12 md:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-10">
            {steps.map((step) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <step.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{t(step.name)}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">{t(step.description)}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}