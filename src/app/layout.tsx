import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Consultancy Careers - Find Your Next Opportunity',
  description: 'Join our team of experts and help shape the future of technology consulting. Browse open positions and apply today.',
  keywords: 'careers, jobs, consultancy, technology, software engineering, consulting',
  authors: [{ name: 'Consultancy Firm' }],
  openGraph: {
    title: 'Consultancy Careers - Find Your Next Opportunity',
    description: 'Join our team of experts and help shape the future of technology consulting.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consultancy Careers - Find Your Next Opportunity',
    description: 'Join our team of experts and help shape the future of technology consulting.',
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