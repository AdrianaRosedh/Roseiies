export const getOptions = (lng = 'en', ns = 'common') => {
    return {
      supportedLngs: ['en', 'fr', 'es', 'de', 'kr'],
      fallbackLng: 'en',
      lng,
      fallbackNS: 'common',
      defaultNS: 'common',
      ns,
    }
  }