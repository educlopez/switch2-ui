import Link from "next/link"

interface SettingsSidebarProps {
  activePath: string
}

export function SettingsSidebar({ activePath }: SettingsSidebarProps) {
  const menuItems = [
    { label: "Screen Brightness", path: "" },
    { label: "Bluetooth® Audio", path: "" },
    { label: "Internet", path: "" },
    { label: "Controllers & Accessories", path: "" },
    { label: "Parental Controls", path: "" },
    { label: "Display", path: "/settings/display" },
    { label: "Mii", path: "" },
    { label: "amiibo", path: "" },
    { label: "Themes", path: "" },
    { label: "Accessibility", path: "/settings/accessibility" },
    { label: "Software Data", path: "" },
    { label: "Users", path: "" },
    { label: "System", path: "" },
    { label: "TV Settings", path: "" },
    { label: "Sleep Mode", path: "" },
    { label: "Language", path: "" },
    { label: "Region", path: "" },
    { label: "System Update", path: "" },
  ]

  return (
    <div className="h-[calc(100vh-70px)] w-[400px] overflow-y-auto">
      {menuItems.map((item) => {
        const isActive = item.path && activePath === item.path
        const className = `relative block border-b px-6 py-4 ${
          isActive ? "text-blue-500" : "text-foreground hover:bg-gray-100"
        }`

        return item.path ? (
          <Link key={item.label} href={item.path} className={className}>
            {isActive && (
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-blue-500"></div>
            )}
            {item.label}
          </Link>
        ) : (
          <div key={item.label} className={className}>
            {item.label}
          </div>
        )
      })}
    </div>
  )
}
