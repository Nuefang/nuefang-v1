import './globals.css'
import type { Metadata } from 'next'
import { Metrophobic } from 'next/font/google'
import { Roboto } from 'next/font/google'

const inter = Metrophobic({ weight: "400", subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Nuefang',
  description: 'Nuefang - Digital Agency based in Leeds',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden w-[100vw]`}>{children}</body>
    </html>
  )
}
