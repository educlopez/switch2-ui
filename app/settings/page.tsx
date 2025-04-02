"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function SettingsRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.push("/system-settings")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-gray-600">Loading system settings...</div>
    </div>
  )
}

