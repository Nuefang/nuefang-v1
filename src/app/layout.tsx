import './globals.css'
import type { Metadata } from 'next'
import { Metrophobic } from 'next/font/google'

const inter = Metrophobic({ weight: "400", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nuefang',
  description: 'Nuefang - Digital Agency based in West Yorkshire',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={"scroll-smooth"} lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
      </head>
      <body className={`${inter.className} overflow-x-hidden w-[100vw]`}>{children}</body>
    </html>
  )
}
