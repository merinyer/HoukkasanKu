import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cinzel, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['600', '700', '900'],
  variable: '--font-cinzel',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: 'Restaurant Villaprebo Houkkasan Ku | Menú Digital',
  description:
    'Menú digital del Restaurant Villaprebo Houkkasan Ku. Gastronomía oriental: entradas, combos, sopas, arroces, tallarines, mariscos y más.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
 colorScheme: 'light dark',
  themeColor: '#0c0b0b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" style={{ colorScheme: 'light' }} className={`${cinzel.variable} ${jakarta.variable}...`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
