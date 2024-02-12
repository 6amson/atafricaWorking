import type { Metadata } from 'next'
import Header from './style/components/header/Header'
import "./style/global.scss"

export const metadata: Metadata = {
  title: 'ATAfrica',
  description: 'Next gen ideas and creativity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Header />
        {children}
      </body>
    </html>
  )
}
