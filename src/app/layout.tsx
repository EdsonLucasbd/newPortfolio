import { Header } from '@/components/Header'
import './globals.css'
import 'remixicon/fonts/remixicon.css'
import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { ApolloWrapper } from '@/lib/apollo-wrapper'
import { OpenFilesProvider } from '@/hooks/useOpenFile'
import { TechSelectionProvider } from '@/hooks/useTechSelection'

const fira = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
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
      <body className={`${fira.className} m-[45px] bg-black `}>
        <main className='bg-primary-200 rounded-lg ring-1 ring-primary-100'>
          <ApolloWrapper>
            <OpenFilesProvider>
              <Header />
              <TechSelectionProvider>
                {children}
              </TechSelectionProvider>
              <Footer />
            </OpenFilesProvider>
          </ApolloWrapper>
        </main>
      </body>
    </html>
  )
}
