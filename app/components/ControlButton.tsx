import { ReactNode } from "react"
import Link from "next/link"

export interface ControlButtonProps {
  button: ReactNode
  label: string
  href?: string
  onClick?: () => void
}

export function ControlButton({
  button,
  label,
  href,
  onClick,
}: ControlButtonProps) {
  const content = (
    <>
      <div className="bg-foreground text-primary flex h-8 w-8 items-center justify-center rounded-full">
        {button}
      </div>
      <span className="text-sm">{label}</span>
    </>
  )

  if (href) {
    return (
      <Link href={href} className="flex items-center gap-2">
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className="flex items-center gap-2">
      {content}
    </button>
  )
}
