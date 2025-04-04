"use client"

import { usePathname } from "next/navigation"
import { Settings } from "lucide-react"

import { ControlButton } from "@/app/components/ControlButton"
import { PageFooter } from "@/app/components/PageFooter"
import { PageHeader } from "@/app/components/PageHeader"
import { Sidebar } from "@/app/components/Sidebar"

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const menuItems = [
    // { label: "Screen Brightness", path: "" },
    // { label: "Bluetooth® Audio", path: "" },
    // { label: "Internet", path: "" },
    // { label: "Controllers & Accessories", path: "" },
    // { label: "Parental Controls", path: "" },
    { label: "Display", path: "/settings/display" },
    // { label: "Mii", path: "" },
    // { label: "amiibo", path: "" },
    // { label: "Themes", path: "" },
    { label: "Accessibility", path: "/settings/accessibility" },
    // { label: "Software Data", path: "" },
    // { label: "Users", path: "" },
    // { label: "System", path: "" },
    // { label: "TV Settings", path: "" },
    // { label: "Sleep Mode", path: "" },
    // { label: "Language", path: "" },
    // { label: "Region", path: "" },
    // { label: "System Update", path: "" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader icon={Settings} title="System Settings" />

      <div className="flex flex-1">
        <Sidebar items={menuItems} activePath={pathname} />

        <div className="flex-1 px-8">{children}</div>
      </div>

      <PageFooter
        fixed={true}
        className="bg-background border-t"
        rightContent={
          <>
            <ControlButton button="B" label="Back" href="/" />
            <ControlButton button="A" label="OK" />
          </>
        }
      />
    </div>
  )
}
