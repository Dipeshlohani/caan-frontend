
import GeneralFooter from '@/components/GeneralFooter'
import Header from '@/components/header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CAAN App',
  description: 'CAAN User App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        {children}
        <GeneralFooter />
      </body>
    </html>
  )
}
