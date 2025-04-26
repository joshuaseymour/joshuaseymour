import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "./analytics"
import { Suspense } from "react" // Add this import
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Joshua Seymour",
  url: "https://joshuaseymour.com",
  sameAs: [
    "https://www.youtube.com/@joshuaseymour",
    "https://tiktok.com/@joshuajseymour",
    "https://substack.com/@joshuaseymour",
    "https://x.com/joshuaseymour",
    "https://t.me/joshuaseymour",
  ],
}

export const metadata = {
  title: "Joshua Seymour",
  description:
    "Hi, I'm Joshua Seymour, I offer access to solutions, systems, services, software, and support for Ascenders, Neothinkers, Immortals, and Superachievers.",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon%20joshuas%20seymour-yFQO80KdhQkDwMSVN3D59TMLoNcCUk.svg",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
      </head>
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={<div className="min-h-screen bg-stone-100 dark:bg-stone-900"></div>}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
