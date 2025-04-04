"use client"

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
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl ${
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
        {price && (
          <div className="absolute top-2 right-2 rounded bg-red-600 px-2 py-1 text-sm font-bold text-white">
            {price}
          </div>
        )}
      </div>
      <div className="border-t p-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </div>
    </Link>
  )
}
