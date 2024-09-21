'use client'

import { motion } from 'framer-motion'
import { useClientTranslation } from '@/components/I18nProvider'
import { Cpu, Users, TrendingUp, ShoppingBag } from 'lucide-react'

interface FeaturesSectionProps {
  lng: string
}

const features = [
  {
    name: 'features.ai.title',
    description: 'features.ai.description',
    icon: Cpu,
  },
  {
    name: 'features.experts.title',
    description: 'features.experts.description',
    icon: Users,
  },
  {
    name: 'features.trends.title',
    description: 'features.trends.description',
    icon: TrendingUp,
  },
  {
    name: 'features.shop.title',
    description: 'features.shop.description',
    icon: ShoppingBag,
  },
]

export default function FeaturesSection({ lng }: FeaturesSectionProps) {
  const { t } = useClientTranslation(lng, 'common')

  return (
    <section className="bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-600 dark:text-purple-400 font-semibold tracking-wide uppercase">{t('features.title')}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t('features.subtitle')}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            {t('features.description')}
          </p>
        </div>

        <motion.div 
          className="mt-10 sm:mt-12 md:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{t(feature.name)}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">{t(feature.description)}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}