"use client"

import { MouseEvent, useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  BatteryMedium,
  Cable,
  FileText,
  Gamepad2,
  ImageIcon,
  MessageCircleMore,
  Plus,
  Power,
  Settings,
  ShoppingBag,
  Smartphone,
  Wifi,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import gameCover from "@/app/assets/game-cover.jpg"
import switchOnline from "@/app/assets/switchonline.avif"

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState(() => {
    const now = new Date()
    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      ampm: now.getHours() >= 12 ? "PM" : "AM",
    }
  })

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

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setCurrentTime({
        hours: now.getHours() > 12 ? now.getHours() - 12 : now.getHours(),
        minutes: now.getMinutes(),
        ampm: now.getHours() >= 12 ? "PM" : "AM",
      })
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  const formattedTime = `${currentTime.hours}:${currentTime.minutes
    .toString()
    .padStart(2, "0")}${currentTime.ampm}`

  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  return (
    <>
      {/* Status Bar */}
      <div className="absolute left-0 top-0 flex w-full items-center justify-between p-4">
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-14 w-14 border-2 border-white">
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/13372238?v=4"
                  alt="@educalvolpz"
                />
                <AvatarFallback>EC</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <a
                    href="https://github.com/educlopez/switch2-ui"
                    target="_blank"
                    rel="noopener"
                  >
                    Github
                  </a>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{formattedTime}</span>
          <div className="flex items-center gap-1">
            <Wifi size={24} />
            <BatteryMedium className="fill-green-500" size={24} />
          </div>
        </div>
      </div>

      {/* Game Grid */}
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <div className="mt-4 w-screen px-4">
          <div
            ref={gameGridRef}
            className="hide-scrollbar cursor-grab overflow-x-auto active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="flex gap-4 pb-4"
              style={{ width: "calc(100% + 25%)" }}
            >
              <div className="aspect-square w-[calc(20%-12px)] flex-none overflow-hidden rounded-xl border-2 border-gray-200/30 bg-white shadow-md">
                <Image
                  src={gameCover.src}
                  alt="Mario Kart 8 Deluxe"
                  width={388}
                  height={388}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square w-[calc(20%-12px)] flex-none rounded-xl border-2 border-gray-200/30 bg-white shadow-md"></div>
              <div className="aspect-square w-[calc(20%-12px)] flex-none rounded-xl border-2 border-gray-200/30 bg-white shadow-md"></div>
              <div className="aspect-square w-[calc(20%-12px)] flex-none rounded-xl border-2 border-gray-200/30 bg-white shadow-md"></div>
              <div className="aspect-square w-[calc(20%-12px)] flex-none rounded-xl border-2 border-gray-200/30 bg-white shadow-md"></div>
              <div className="aspect-square w-[calc(20%-12px)] flex-none rounded-xl border-2 border-gray-200/30 bg-white shadow-md"></div>
              <div className="aspect-square w-[calc(20%-12px)] flex-none rounded-xl border-2 border-gray-200/30 bg-white shadow-md"></div>
            </div>
          </div>
        </div>
        {/* Bottom Navigation */}

        <div className="relative flex items-center justify-center gap-4 rounded-full bg-white/50 p-4">
          {/* Home Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("home")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <Link
              href="/"
              className="relative z-10 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-red-500 text-white"
            >
              <Image
                src={switchOnline.src}
                alt="Logo Switch Online"
                width={40}
                height={40}
              />
            </Link>
            {hoveredIcon === "home" && (
              <div className="text-md absolute -bottom-12 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded bg-opacity-80 px-2 py-1 text-blue-500">
                Home
              </div>
            )}
            {hoveredIcon === "home" && (
              <div className="z-1 gradient-border absolute inset-0 left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-4"></div>
            )}
          </div>

          {/* Album Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("album")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <button className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-orange-500">
              <MessageCircleMore size={24} />
            </button>
            {hoveredIcon === "album" && (
              <div className="text-md absolute -bottom-12 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded bg-opacity-80 px-2 py-1 text-blue-500">
                Chat
              </div>
            )}
            {hoveredIcon === "album" && (
              <div className="z-1 gradient-border absolute inset-0 left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-4"></div>
            )}
          </div>

          {/* News Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("news")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <button className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-green-500">
              <FileText size={24} />
            </button>
            {hoveredIcon === "news" && (
              <div className="text-md absolute -bottom-12 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded bg-opacity-80 px-2 py-1 text-blue-500">
                News
              </div>
            )}
            {hoveredIcon === "news" && (
              <div className="z-1 gradient-border absolute inset-0 left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-4"></div>
            )}
          </div>

          {/* eShop Button */}
          <div
            className="relative flex"
            onMouseEnter={() => setHoveredIcon("eshop")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <Link
              href="/settings"
              className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-red-500"
            >
              <ShoppingBag size={24} />
            </Link>
            {hoveredIcon === "eshop" && (
              <div className="text-md absolute -bottom-12 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded bg-opacity-80 px-2 py-1 text-blue-500">
                Nintendo eShop
              </div>
            )}
            {hoveredIcon === "eshop" && (
              <div className="z-1 gradient-border absolute inset-0 left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-4"></div>
            )}
          </div>

          {/* Screenshots Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("screenshots")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <button className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-blue-500">
              <ImageIcon size={24} />
            </button>
            {hoveredIcon === "screenshots" && (
              <div className="text-md absolute -bottom-12 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded bg-opacity-80 px-2 py-1 text-blue-500">
                Screenshots
              </div>
            )}
            {hoveredIcon === "screenshots" && (
              <div className="z-1 gradient-border absolute inset-0 left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-4"></div>
            )}
          </div>

          {/* Controllers Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("controllers")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <button className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-cyan-500">
              <Cable size={24} />
            </button>
            {hoveredIcon === "controllers" && (
              <div className="text-md absolute -bottom-12 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded bg-opacity-80 px-2 py-1 text-blue-500">
                Connections
              </div>
            )}
            {hoveredIcon === "controllers" && (
              <div className="z-1 gradient-border absolute inset-0 left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-4"></div>
            )}
          </div>

          {/* Online Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("online")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <button className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-gray-500">
              <Gamepad2 size={24} />
            </button>
            {hoveredIcon === "online" && (
              <div className="text-md absolute -bottom-12 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded bg-opacity-80 px-2 py-1 text-blue-500">
                Controllers
              </div>
            )}
            {hoveredIcon === "online" && (
              <div className="z-1 gradient-border absolute inset-0 left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-4"></div>
            )}
          </div>

          {/* Parental Controls Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("parental")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <button className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-gray-500">
              <Smartphone size={24} />
            </button>
            {hoveredIcon === "parental" && (
              <div className="text-md absolute -bottom-12 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded bg-opacity-80 px-2 py-1 text-blue-500">
                Cartridges
              </div>
            )}
            {hoveredIcon === "parental" && (
              <div className="z-1 gradient-border absolute inset-0 left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-4"></div>
            )}
          </div>

          {/* Settings Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("settings")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <Link
              href="/settings"
              className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-gray-500"
            >
              <Settings size={24} />
            </Link>
            {hoveredIcon === "settings" && (
              <div className="text-md absolute -bottom-12 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded bg-opacity-80 px-2 py-1 text-blue-500">
                System Settings
              </div>
            )}
            {hoveredIcon === "settings" && (
              <div className="z-1 gradient-border absolute inset-0 left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-4"></div>
            )}
          </div>

          {/* Power Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("power")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <button className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-gray-500">
              <Power size={24} />
            </button>
            {hoveredIcon === "power" && (
              <div className="text-md absolute -bottom-12 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded bg-opacity-80 px-2 py-1 text-blue-500">
                Sleep Mode
              </div>
            )}
            {hoveredIcon === "power" && (
              <div className="z-1 gradient-border absolute inset-0 left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-4"></div>
            )}
          </div>
        </div>
      </div>
      {/* Controller Indicators */}
      <div className="fixed bottom-4 left-4 flex items-center">
        <div className="flex">
          <div className="mr-1 h-6 w-2 bg-gray-400"></div>
          <div className="h-6 w-6 rounded-sm bg-gray-400"></div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        <div className="flex items-center">
          <div className="mr-1 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 text-xs text-white">
            <Plus size={16} />
          </div>
          <span className="ml-1 text-sm text-gray-600">Options</span>
        </div>
        <div className="flex items-center">
          <div className="mr-1 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 text-xs text-white">
            A
          </div>
          <span className="ml-1 text-sm text-gray-600">OK</span>
        </div>
      </div>
    </>
  )
}
