import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WIN CONCEPT INDUSTRY — Management & Production Musicale',
  description: 'Win Concept Industry — Label de management et production musicale basé à Yaoundé. Artistes : Simba Draken, Diablit. Hip-Hop · Trap · Afrorap · Pop Urbaine.',
  keywords: 'Win Concept Industry, Simba Draken, Diablit, rap camerounais, management artistique, production musicale, Yaoundé, NKUMU',
  openGraph: {
    title: 'WIN CONCEPT INDUSTRY — Management & Production',
    description: 'Label de management et production musicale. Artistes : Simba Draken · Diablit.',
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
