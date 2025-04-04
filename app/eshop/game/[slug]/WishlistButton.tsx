"use client"

import { useState } from "react"
import { Heart } from "lucide-react"

export default function WishlistButton() {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
  }

  return (
    <button
      onClick={toggleWishlist}
      className="transition-transform hover:scale-110"
    >
      <Heart
        className={`h-6 w-6 ${
          isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"
        }`}
      />
    </button>
  )
}
