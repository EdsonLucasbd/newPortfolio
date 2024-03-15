import { Header } from '@/components/Header'
import Head from 'next/head'
import './globals.css'
import 'remixicon/fonts/remixicon.css'
import type { Metadata } from 'next'
import { Fira_Code, Press_Start_2P } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { ApolloWrapper } from '@/lib/apollo-wrapper'
import { TechSelectionProvider } from '@/hooks/useTechSelection'
import Script from 'next/script'

const fira = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pressStart2P'
})

export const metadata: Metadata = {
  title: 'Edson Lucas',
  description: 'Portfólio',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}`}
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />
      <body className={`${fira.className} ${pressStart2P.variable} m-[15px] md:m-[45px] p-0 bg-black `}>
        <main className='bg-primary-200 rounded-lg ring-1 ring-primary-100'>
          <ApolloWrapper>
            <Header />
            <TechSelectionProvider>
              {children}
            </TechSelectionProvider>
            <Footer />
          </ApolloWrapper>
        </main>
      </body>
    </html>
  )
}
