import { LucideIcon } from "lucide-react"

interface PageHeaderProps {
  icon: LucideIcon
  title: string
  className?: string
}

export function PageHeader({
  icon: Icon,
  title,
  className = "",
}: PageHeaderProps) {
  return (
    <div
      className={`sticky top-0 left-0 z-10 h-16 w-full border-b bg-neutral-200/80 px-6 pt-6 pb-3 ${className}`}
    >
      <div className="flex items-center">
        <Icon className="text-foreground mr-3 h-6 w-6" />
        <h1 className="text-foreground text-2xl font-normal">{title}</h1>
      </div>
    </div>
  )
}
