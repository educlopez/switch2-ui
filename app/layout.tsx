import type React from "react"

import "./globals.css"

import type { Metadata } from "next"

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
      <body>{children}</body>
    </html>
  )
}
