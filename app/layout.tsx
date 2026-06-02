import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { StickyMobileCTA } from '@/components/layout/sticky-mobile-cta'
import { companyInfo } from '@/lib/data/company-info'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${companyInfo.name} | Appliance Repair London ON`,
    template: `%s | ${companyInfo.name}`,
  },
  description: companyInfo.description,
  keywords: [
    'appliance repair',
    'London Ontario',
    'refrigerator repair',
    'washer repair',
    'dryer repair',
    'dishwasher repair',
    'oven repair',
    'same day service',
  ],
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.name,
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: companyInfo.name,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NPL43N1W5Y"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NPL43N1W5Y');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen pb-20 lg:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
