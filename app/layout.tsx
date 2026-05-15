import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SIMBA DRAKEN — Rise & Shine',
  description: 'Site officiel de Simba Draken. Trap · Afrorap · Douala. Magnetic, Briller, BSV et plus. Membre Winconcept.',
  keywords: 'Simba Draken, rap camerounais, trap, Douala, Magnetic, Briller, Winconcept, NKUMU',
  openGraph: {
    title: 'SIMBA DRAKEN — Rise & Shine',
    description: 'Trap · Afrorap · Douala. La nouvelle vague camerounaise.',
    images: ['/photos/simba-cover.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
