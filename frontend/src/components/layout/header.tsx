'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useClientTranslation } from '@/components/I18nProvider'

interface HeaderProps {
  lng: string
  theme: string
  setTheme: (theme: string) => void
  mounted: boolean
}

export default function Header({ lng, theme, setTheme, mounted }: HeaderProps) {
  const { t } = useClientTranslation(lng, 'common')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white dark:bg-gray-800 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          Roseiies
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                {t('nav.features')}
              </Link>
            </li>
            <li>
              <Link href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                {t('nav.howItWorks')}
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                {t('nav.testimonials')}
              </Link>
            </li>
            <li>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-gray-600 dark:text-gray-300"
              >
                {mounted && (theme === 'dark' ? <Sun /> : <Moon />)}
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}