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
      <div className="h-screen flex-1 overflow-y-scroll p-8">
        {/* Game Title */}
        <div className="mb-6 border-b p-6">
          <h1 className="text-2xl font-bold">{gameData.title}</h1>
          <p className="text-gray-600">{gameData.publisher}</p>
        </div>

        {/* Media Carousel */}
        {media.length > 0 && <MediaCarousel media={media} />}
      </div>

      {/* Price and Actions */}
      <div className="relative w-1/5 bg-white p-8">
        <div className="left-0 mt-32 flex w-full flex-col items-end gap-2 pr-16">
          <span className="text-4xl font-bold">{gameData.price}</span>

          <button className="w-full rounded-lg bg-red-600 px-8 py-3 text-lg font-medium text-white">
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
