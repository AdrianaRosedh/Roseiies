import { Suspense } from 'react'
import LandingPage from '@/components/LandingPage'
import { I18nProvider } from '@/components/I18nProvider'

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <I18nProvider lng="en" namespaces={['common']}>
        <LandingPage lng="en" />
      </I18nProvider>
    </Suspense>
  )
}