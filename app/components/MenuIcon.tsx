import Link from "next/link"
import { LucideIcon } from "lucide-react"

interface MenuIconProps {
  icon: LucideIcon
  label: string
  href?: string
  color?: string
  onClick?: () => void
  hoveredIcon: string | null
  setHoveredIcon: (icon: string | null) => void
  iconId: string
}

export function MenuIcon({
  icon: Icon,
  label,
  href,
  color = "text-primary-foreground",
  onClick,
  hoveredIcon,
  setHoveredIcon,
  iconId,
}: MenuIconProps) {
  const content = <Icon className="h-9 w-9" />

  return (
    <div
      className="relative"
      onMouseEnter={() => setHoveredIcon(iconId)}
      onMouseLeave={() => setHoveredIcon(null)}
    >
      {href ? (
        <Link
          href={href}
          className={`relative z-10 flex items-center justify-center rounded-full ${color}`}
        >
          {content}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`relative z-10 flex items-center justify-center rounded-full ${color}`}
        >
          {content}
        </button>
      )}
      {hoveredIcon === iconId && (
        <>
          <div className="text-md bg-opacity-80 absolute -bottom-18 left-1/2 -translate-x-1/2 transform rounded px-2 py-1 whitespace-nowrap text-blue-500">
            {label}
          </div>
          <div className="gradient-border absolute inset-0 top-1/2 left-1/2 z-1 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-4"></div>
        </>
      )}
    </div>
  )
}
