import type { Metadata } from 'next'
import './globals.css'
import { Inter, DM_Serif_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-dm-serif' })

export const metadata: Metadata = {
  title: 'Sharath Reddy & Neetha Meghana Engagement',
  description: 'Join us to celebrate the engagement of Sharath Reddy & Neetha Meghana',
  openGraph: {
    title: 'Sharath Reddy & Neetha Meghana Engagement',
    description: 'Join us to celebrate the engagement of Sharath Reddy & Neetha Meghana',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sharath Reddy & Neetha Meghana Engagement',
      },
    ],
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSerif.variable}`}>{children}</body>
    </html>
  )
}


