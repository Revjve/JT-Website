import type { Metadata, Viewport } from "next"
import { Barlow_Condensed, Public_Sans } from "next/font/google"

import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site"
import "./globals.css"

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
})

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: "JT Cleaning",
  keywords: [
    "JT Cleaning",
    "pressure washing",
    "house washing",
    "driveway cleaning",
    "gutter cleaning",
    "Wisconsin exterior cleaning",
  ],
  icons: {
    icon: "/jt-cleaning-logo.png",
    apple: "/jt-cleaning-logo.png",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "JT Cleaning",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
}

export const viewport: Viewport = {
  themeColor: "#0f4ea8",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
