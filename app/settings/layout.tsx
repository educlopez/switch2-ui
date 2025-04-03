"use client"

import Link from "next/link"
import { Settings } from "lucide-react"

import { ControlButton } from "../components/ControlButton"
import { JoyconIndicator } from "../components/JoyconIndicator"
import { PageHeader } from "../components/PageHeader"
import { SettingsSidebar } from "../components/SettingsSidebar"

interface SettingsLayoutProps {
  children: React.ReactNode
  params: { path?: string[] }
}

export default function SettingsLayout({
  children,
  params,
}: SettingsLayoutProps) {
  // Construct the current path for active sidebar item
  const path = params.path ? `/settings/${params.path.join("/")}` : "/settings"

  return (
    <div className="min-h-screen">
      {/* Header */}
      <PageHeader icon={Settings} title="System Settings" />

      <div className="flex">
        {/* Sidebar */}
        <SettingsSidebar activePath={path} />

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
