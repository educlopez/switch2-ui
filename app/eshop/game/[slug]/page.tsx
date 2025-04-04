import Image from "next/image"
import { notFound } from "next/navigation"

import { getGameBySlug } from "@/app/data/games"

import MediaCarousel from "./MediaCarousel"
import WishlistButton from "./WishlistButton"

export default async function GamePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ query: string }>
}) {
  const { slug } = await params

  const gameData = await getGameBySlug(slug)

  if (!gameData) {
    notFound()
  }

  const media = gameData.media || []

  return (
    <div className="flex min-h-screen flex-row">
      <div className="flex-1 p-8">
        {/* Game Title */}
        <div className="border-b p-6">
          <h1 className="text-2xl font-bold">{gameData.title}</h1>
          <p className="text-gray-600">{gameData.publisher}</p>
        </div>

        {/* Media Carousel */}
        {media.length > 0 && <MediaCarousel media={media} />}
      </div>

      {/* Price and Actions */}
      <div className="w-84 bg-white p-8">
        <div className="fixed top-32 flex flex-col items-end gap-2">
          <span className="text-4xl font-bold">{gameData.price}</span>

          <button className="rounded-lg bg-red-600 px-8 py-3 text-lg font-medium text-white">
            Continue
          </button>
          {gameData.hasInGamePurchases && (
            <span className="text-sm text-gray-500">
              Offers In-Game Purchases
            </span>
          )}
          <WishlistButton />
        </div>
      </div>
    </div>
  )
}
