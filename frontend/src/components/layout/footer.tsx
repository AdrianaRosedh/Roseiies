'use client'

import { motion } from 'framer-motion'
import { useClientTranslation } from '@/components/I18nProvider'

interface FooterProps {
  lng: string
}

export default function Footer({ lng }: FooterProps) {
  const { t } = useClientTranslation(lng, 'common')

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">{t('footer.about')}</h3>
            <p>{t('footer.aboutText')}</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">{t('footer.contact')}</h3>
            <p>{t('footer.email')}: info@roseiies.com</p>
            <p>{t('footer.phone')}: +1 (555) 123-4567</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">{t('footer.follow')}</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">Facebook</a>
              <a href="#" className="hover:text-gray-400">Twitter</a>
              <a href="#" className="hover:text-gray-400">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Roseiies. {t('footer.rights')}</p>
        </div>
      </div>
    </motion.footer>
  )
}