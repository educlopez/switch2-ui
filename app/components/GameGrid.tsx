import { MouseEvent, useRef, useState } from "react"
import Image from "next/image"

import gameCover from "@/app/assets/game-cover.jpg"
import gameCover2 from "@/app/assets/game-cover2.jpg"

export function GameGrid() {
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const gameGridRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: MouseEvent) => {
    if (!gameGridRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - gameGridRef.current.offsetLeft)
    setScrollLeft(gameGridRef.current.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !gameGridRef.current) return
    e.preventDefault()
    const x = e.pageX - gameGridRef.current.offsetLeft
    const walk = (x - startX) * 2
    gameGridRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  return (
    <div className="mt-4 w-screen px-4">
      <div
        ref={gameGridRef}
        className="hide-scrollbar cursor-grab overflow-x-auto active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex w-[calc(100%+25%)] gap-4 pb-4">
          <GameCard image={gameCover} alt="Mario game" />
          <GameCard image={gameCover2} alt="Donkey Kong game" />
          {[...Array(5)].map((_, i) => (
            <EmptyGameCard key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

interface GameCardProps {
  image: any
  alt: string
}

function GameCard({ image, alt }: GameCardProps) {
  return (
    <div className="group shadow-m relative aspect-square w-[calc(30%-24px)] flex-none rounded-xl lg:w-[calc(20%-12px)]">
      <Image
        src={image.src}
        alt={alt}
        width={388}
        height={388}
        className="absolute z-2 h-full w-full rounded-xl object-cover p-0.5 transition-all select-none hover:p-1"
        draggable="false"
      />
      <div className="group-hover:gradient-bg absolute inset-0 top-1/2 left-1/2 z-1 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white"></div>
    </div>
  )
}

function EmptyGameCard() {
  return (
    <div className="bg-primary aspect-square w-[calc(30%-24px)] flex-none rounded-xl border-2 border-white shadow-md lg:w-[calc(20%-12px)]"></div>
  )
}
