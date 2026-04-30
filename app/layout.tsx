import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: { default: 'Bridge Talent Partners', template: '%s | Bridge Talent Partners' },
  description: 'Premium executive search and talent development — built exclusively for Africa and emerging markets.',
  metadataBase: new URL('https://bridgegtp.com'),
  openGraph: {
    siteName: 'Bridge Talent Partners',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
