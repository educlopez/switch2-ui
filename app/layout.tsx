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
      <body className="relative min-h-screen overflow-hidden bg-neutral-200/80 font-sans text-gray-800">
        {children}
      </body>
    </html>
  )
}
