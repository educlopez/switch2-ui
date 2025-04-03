import { ReactNode } from "react"

interface ControlButtonProps {
  label: string
  button: string | ReactNode
  className?: string
}

export function ControlButton({
  label,
  button,
  className = "",
}: ControlButtonProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="bg-foreground mr-1 flex h-6 w-6 items-center justify-center rounded-full text-xs text-white">
        {button}
      </div>
      <span className="text-foreground ml-1 text-sm">{label}</span>
    </div>
  )
}
