"use client"

import { GameCard } from "@/app/components/GameCard"
import { games } from "@/app/data/games"

export default function FeaturedPage() {
  return (
    <div className="mt-8 grid w-full gap-4 md:grid-cols-2 md:py-14">
      {games.map((game) => (
        <GameCard
          key={game.id}
          title={game.title}
          image={game.image}
          price={game.price}
          href={`/eshop/game/${game.slug}`}
          isWide={game.isWide}
        />
      ))}
    </div>
  )
}
