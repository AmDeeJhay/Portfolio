import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DivineJustice Samuel - Frontend Developer',
  description: 'Frontend Developer specializing in React, TypeScript, and modern web technologies. Crafting seamless web experiences through innovative solutions.',
  keywords: 'frontend developer, react developer, typescript, web development, javascript, portfolio',
  authors: [{ name: 'DivineJustice Samuel' }],
  openGraph: {
    type: 'website',
    url: 'https://divinejustice.dev/',
    title: 'DivineJustice Samuel - Frontend Developer',
    description: 'Frontend Developer specializing in React, TypeScript, and modern web technologies. Crafting seamless web experiences through innovative solutions.',
    images: [
      {
        url: 'https://divinejustice.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DivineJustice Samuel - Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DivineJustice Samuel - Frontend Developer',
    description: 'Frontend Developer specializing in React, TypeScript, and modern web technologies. Crafting seamless web experiences through innovative solutions.',
    images: ['https://divinejustice.dev/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}