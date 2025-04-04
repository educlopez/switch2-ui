"use client"

import { GameCard } from "@/app/components/GameCard"
import { games } from "@/app/data/games"

export default function FeaturedPage() {
  return (
    <div className="grid grid-cols-2 gap-6 p-8 pt-20">
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
