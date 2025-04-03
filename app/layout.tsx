import type React from "react"

import "./globals.css"

import type { Metadata } from "next"

import { Analytics } from "@/components/analytics"

export const metadata: Metadata = {
  title: "Nintendo Switch UI",
  description: "Recreation of Nintendo Switch 2 System UI",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground relative min-h-screen overflow-hidden font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
