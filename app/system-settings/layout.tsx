"use client"

import type React from "react"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function SystemSettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      <Link href="/" className="absolute top-4 left-4 z-10 bg-white rounded-full p-2 shadow-md">
        <ArrowLeft size={20} />
      </Link>
      {children}
    </div>
  )
}

