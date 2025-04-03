"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Settings } from "lucide-react"

import { ControlButton } from "../components/ControlButton"
import { JoyconIndicator } from "../components/JoyconIndicator"
import { PageHeader } from "../components/PageHeader"
import { SettingsSidebar } from "../components/SettingsSidebar"

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <PageHeader icon={Settings} title="System Settings" />

      <div className="flex">
        {/* Sidebar */}
        <SettingsSidebar activePath={pathname} />

        {/* Main Content */}
        <div className="flex-1 border-l pr-6 pl-6">{children}</div>
      </div>

      {/* Footer */}
      <div className="bg-background text-foreground fixed bottom-0 left-0 mt-4 flex w-full justify-between border-t p-4">
        <JoyconIndicator color="bg-green-500" />
        <div className="flex items-center">
          <Link href="/" className="mr-4">
            <ControlButton button="B" label="Back" />
          </Link>
          <ControlButton button="A" label="OK" />
        </div>
      </div>
    </div>
  )
}
