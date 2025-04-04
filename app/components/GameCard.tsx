"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface GameCardProps {
  title: string
  image: string
  price?: string
  href: string
  isWide?: boolean
}

export function GameCard({
  title,
  image,
  price,
  href,
  isWide = false,
}: GameCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={href}
        className={`relative z-10 block overflow-hidden rounded-md bg-white shadow-md ${
          isWide ? "col-span-2" : ""
        }`}
      >
        <div className="relative aspect-[16/9]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* {price && (
            <div className="absolute top-2 right-2 rounded bg-red-600 px-2 py-1 text-sm font-bold text-white">
              {price}
            </div>
          )} */}
        </div>
        <div className="border-t p-4">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        </div>
      </Link>

      {isHovered && (
        <div className="gradient-border absolute inset-0 z-0 rounded-lg"></div>
      )}
    </div>
  )
}
