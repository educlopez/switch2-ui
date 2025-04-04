"use client"

import { ReactNode } from "react"
import Link from "next/link"
import { LucideIcon } from "lucide-react"

interface MenuItem {
  label: string
  path?: string
  icon?: LucideIcon
  selected?: boolean
}

interface SidebarProps {
  items: MenuItem[]
  activePath?: string
  header?: ReactNode
  width?: string
}

export function Sidebar({
  items,
  activePath,
  header,
  width = "w-[400px]",
}: SidebarProps) {
  return (
    <div className={`${width} border-r`}>
      {header && header}
      <div className="h-[calc(100vh-70px)] overflow-y-auto">
        {items.map((item) => {
          const isActive =
            item.path && (activePath ? activePath === item.path : item.selected)
          const className = `relative flex items-center gap-2 border-b px-6 py-4 ${
            isActive
              ? "bg-blue-50 text-blue-500"
              : "text-gray-700 hover:bg-gray-50"
          }`

          return item.path ? (
            <Link key={item.label} href={item.path} className={className}>
              {item.icon && <item.icon className="h-5 w-5" />}
              {item.label}
              {isActive && (
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-blue-500"></div>
              )}
            </Link>
          ) : (
            <div key={item.label} className={className}>
              {item.icon && <item.icon className="h-5 w-5" />}
              {item.label}
            </div>
          )
        })}
      </div>
    </div>
  )
}
