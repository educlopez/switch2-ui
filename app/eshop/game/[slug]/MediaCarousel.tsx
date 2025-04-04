"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

type MediaItem = {
  type: "image" | "video"
  src: string
  thumbnail?: string
}

interface MediaCarouselProps {
  media: MediaItem[]
}

export default function MediaCarousel({ media }: MediaCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % media.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + media.length) % media.length)
  }

  return (
    <>
      <div className="relative aspect-video w-full">
        <div className="relative h-full w-full">
          {media[currentSlide].type === "image" ? (
            <Image
              src={media[currentSlide].src}
              alt={`Slide ${currentSlide + 1}`}
              fill
              className="object-contain"
            />
          ) : (
            <div className="relative h-full w-full bg-black">
              <Image
                src={media[currentSlide].thumbnail!}
                alt={`Video thumbnail ${currentSlide + 1}`}
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="h-16 w-16 text-white opacity-80" />
              </div>
            </div>
          )}
        </div>

        {/* Navigation Arrows */}
        {media.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Thumbnails */}
        {media.length > 1 && (
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {media.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full ${
                  currentSlide === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnails Strip */}
      {media.length > 1 && (
        <div className="flex gap-2 overflow-x-auto p-4">
          {media.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative aspect-video h-20 flex-shrink-0 overflow-hidden rounded-lg border-2 ${
                currentSlide === index
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
            >
              <Image
                src={item.type === "video" ? item.thumbnail! : item.src}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <Play className="h-6 w-6 text-white" />
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
