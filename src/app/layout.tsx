import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pixel & Data — Your Robot Friends!',
  description: 'Meet Pixel and Data — two curious robots exploring data science, solving mysteries, and showing kids that learning is the greatest adventure. Stories, songs, lessons, merch and more by D³ cube Lab.',
  keywords: 'data science for kids, AI education, robot characters, kids learning, D3 lab, Pixel Data',
  openGraph: {
    title: 'Pixel & Data',
    description: 'Meet Pixel and Data — your robot friends!',
    url: 'https://pixelanddata.com',
    siteName: 'Pixel & Data',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
