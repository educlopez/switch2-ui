"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import LogoSwitch2 from "./LogoSwitch2"

interface GameCardProps {
  title: string
  image: string
  price?: string
  href: string
  isWide?: boolean
  className?: string
}

export function GameCard({
  title,
  image,
  price,
  className,
  href,
  isWide = false,
}: GameCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <Link
        href={href}
        className={cn(
          "group relative w-full cursor-pointer rounded-lg p-3 ease-in-out",
          className
        )}
      >
        <div className="flex items-center justify-center rounded-t-md bg-red-600 p-4">
          <LogoSwitch2 className="h-4" />
        </div>
        <div className="relative aspect-video overflow-hidden select-none">
          <Image
            src={image}
            alt={title}
            width={511}
            height={284}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <h3 className="rounded-b-md bg-white p-4 text-lg font-medium text-gray-900">
          {title}
        </h3>
      </Link>
      <div className="group-hover:gradient-bg absolute -inset-1 top-1/2 left-1/2 -z-1 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white"></div>
    </>
  )
}
