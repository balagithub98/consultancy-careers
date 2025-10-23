import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'gigmarines - Find Your Next Gig',
  description: 'Join our team of gigmarines and help shape the future of technology consulting in India. Browse open positions and apply today.',
  keywords: 'careers, jobs, gigmarines, technology, software engineering, consulting, gigs, India, Mumbai, Delhi, Bangalore',
  authors: [{ name: 'gigmarines' }],
  openGraph: {
    title: 'gigmarines - Find Your Next Gig',
    description: 'Join our team of gigmarines and help shape the future of technology consulting in India.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'gigmarines - Find Your Next Gig',
    description: 'Join our team of gigmarines and help shape the future of technology consulting in India.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}