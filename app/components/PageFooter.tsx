"use client"

import { ReactNode } from "react"

import SwitchIcon from "./SwitchIcon"

interface PageFooterProps {
  leftContent?: ReactNode
  rightContent: ReactNode
  className?: string
  fixed?: boolean
}

export function PageFooter({
  leftContent = <SwitchIcon />,
  rightContent,
  className = "",
  fixed = true,
}: PageFooterProps) {
  const baseStyles = "flex w-full flex-row items-center justify-between p-4"
  const positionStyles = fixed ? "fixed bottom-0 left-0" : ""
  const combinedStyles = `${baseStyles} ${positionStyles} ${className}`

  return (
    <div className={combinedStyles}>
      <div className="flex items-center">{leftContent}</div>
      <div className="flex items-center gap-2">{rightContent}</div>
    </div>
  )
}
