'use client'

import { motion } from 'framer-motion'
import { useClientTranslation } from '@/components/I18nProvider'
import Image from 'next/image'

interface TestimonialsSectionProps {
  lng: string
}

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Beauty Influencer',
    image: '/placeholder.svg?height=96&width=96',
    quote: 'testimonials.sarah',
  },
  {
    name: 'Michael Chen',
    role: 'Dermatologist',
    image: '/placeholder.svg?height=96&width=96',
    quote: 'testimonials.michael',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Skincare Enthusiast',
    image: '/placeholder.svg?height=96&width=96',
    quote: 'testimonials.emma',
  },
]

export default function TestimonialsSection({ lng }: TestimonialsSectionProps) {
  const { t } = useClientTranslation(lng, 'common')

  return (
    <section className="bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t('testimonials.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
            {t('testimonials.subtitle')}
          </p>
        </div>
        <motion.div 
          className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <Image
                className="w-24 h-24 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
                width={96}
                height={96}
              />
              <div className="mt-4">
                <p className="text-lg font-medium text-gray-900 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
              <blockquote className="mt-4">
                <p className="text-base text-gray-500 dark:text-gray-300">
                  {t(testimonial.quote)}
                </p>
              </blockquote>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}