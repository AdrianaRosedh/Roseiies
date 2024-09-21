'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useClientTranslation } from '@/components/I18nProvider'

interface CTASectionProps {
  lng: string
}

export default function CTASection({ lng }: CTASectionProps) {
  const { t } = useClientTranslation(lng, 'common')

  return (
    <section className="bg-purple-700 dark:bg-purple-900">
      <motion.div 
        className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">{t('cta.title')}</span>
          <span className="block text-purple-300">{t('cta.subtitle')}</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link href="/get-started" passHref>
              <Button variant="default" size="lg">
                {t('cta.primary')}
              </Button>
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link href="/learn-more" passHref>
              <Button variant="outline" size="lg">
                {t('cta.secondary')}
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}