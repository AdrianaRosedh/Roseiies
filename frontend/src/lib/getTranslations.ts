import fs from 'fs/promises'
import path from 'path'

export async function getTranslations(lng: string, ns: string) {
  const filePath = path.join(process.cwd(), 'public', 'locales', lng, `${ns}.json`)
  try {
    const fileContent = await fs.readFile(filePath, 'utf8')
    return JSON.parse(fileContent)
  } catch (error) {
    console.error(`Error loading translations for ${lng}/${ns}:`, error)
    return {}
  }
}