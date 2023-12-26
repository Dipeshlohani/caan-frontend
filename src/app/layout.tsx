
import GeneralFooter from '@/components/GeneralFooter'
import Header from '@/components/header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CAAN App',
  description: 'CAAN User App',
}

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header /> */}
        {children}
        <GeneralFooter />
      </body>
    </html>
  )
}
