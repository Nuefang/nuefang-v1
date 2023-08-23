import './globals.css'
import type { Metadata } from 'next'
import { Metrophobic } from 'next/font/google'

const inter = Metrophobic({ weight: "400", subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://nuefang.com'),
  title: 'Nuefang',
  description: 'Welcome to Nuefang | Based in Leeds, our team design and develop bespoke websites from the ground up.',
  openGraph: {
    type: "website",
    url: "https://nuefang.com",
    title: "Nuefang",
    description: "Welcome to Nuefang | Based in Leeds, our team design and develop bespoke websites from the ground up.",
    siteName: "Nuefang",
    images: [{
      url: "https://nuefang.com/icons/og.jpg",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Nuefang",
    creator: "@Nuefang",
    "images": "https://nuefang.com/icons/og.jpg"
  }
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
        <meta property="og:image:alt" content="Nuefang - Based in West Yorkshire" />
        <link rel="canonical" href="https://nuefang.com/" />
      </head>
      <body className={`${inter.className} overflow-x-hidden w-[100vw]`}>{children}</body>
    </html>
  )
}
