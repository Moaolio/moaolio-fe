import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/global.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moaolio',
  description: 'Portfolio sharing service'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="kr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
