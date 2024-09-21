'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import { createTranslation } from '@/lib/i18n'
import type { i18n } from 'i18next'

const I18nContext = createContext<{ i18n: i18n } | null>(null)

export function useClientTranslation(lng: string, ns: string) {
  const context = useContext(I18nContext)
  if (context == null) {
    throw new Error('useClientTranslation must be used within an I18nProvider')
  }
  return {
    t: context.i18n.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns),
    i18n: context.i18n
  }
}

export function I18nProvider({
  children,
  lng,
  namespaces
}: {
  children: React.ReactNode
  lng: string
  namespaces: string[]
}) {
  const [i18n, setI18n] = useState<i18n | null>(null)

  useEffect(() => {
    createTranslation(lng, namespaces[0]).then(({ i18n }) => setI18n(i18n))
  }, [lng, namespaces])

  if (i18n === null) {
    return null // or a loading spinner
  }

  return (
    <I18nContext.Provider value={{ i18n }}>
      <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
    </I18nContext.Provider>
  )
}