"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, ImageIcon, Settings, Power, Gamepad2, FileText, Folder, LinkIcon, Smartphone, BatteryMedium, Wifi } from "lucide-react"

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState(() => {
    const now = new Date()
    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      ampm: now.getHours() >= 12 ? "PM" : "AM",
    }
  })

  // Update time every minute
  useState(() => {
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

  const formattedTime = `${currentTime.hours}:${currentTime.minutes.toString().padStart(2, "0")}${currentTime.ampm}`

  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans relative overflow-hidden">
      {/* Status Bar */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center overflow-hidden">
            <Image
              src="https://avatars.githubusercontent.com/u/13372238?v=4"
              alt="Profile"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{formattedTime}</span>
          <div className="flex items-center gap-1">
            <Wifi size={20} />
            <BatteryMedium className="fill-green-500" size={20} />
          </div>
        </div>
      </div>

      {/* Game Grid */}
      <div className="grid grid-cols-5 gap-4 px-4 mt-4">
        <div className="aspect-square bg-white rounded-xl overflow-hidden shadow-md">
          <Image
            src="/placeholder.svg?height=150&width=150&text=Mario+Kart"
            alt="Mario Kart 8 Deluxe"
            width={150}
            height={150}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-square bg-white rounded-xl shadow-md"></div>
        <div className="aspect-square bg-white rounded-xl shadow-md"></div>
        <div className="aspect-square bg-white rounded-xl shadow-md"></div>
        <div className="aspect-square bg-white rounded-xl shadow-md"></div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center pb-4">
        <div className="flex justify-center items-center gap-4 mb-2 relative  bg-white rounded-full">
          {/* Home Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("home")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <Link
              href="/"
              className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white z-10 relative"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6L12 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M6 12L18 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </Link>
            {hoveredIcon === "home" && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                Home
              </div>
            )}
            {hoveredIcon === "home" && <div className="absolute inset-0 -z-10 rounded-full gradient-border"></div>}
          </div>

          {/* Album Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("album")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <button className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-orange-500 z-10 relative">
              <Folder size={20} />
            </button>
            {hoveredIcon === "album" && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                Album
              </div>
            )}
            {hoveredIcon === "album" && <div className="absolute inset-0 -z-10 rounded-md gradient-border"></div>}
          </div>

          {/* News Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("news")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <button className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-green-500 z-10 relative">
              <FileText size={20} />
            </button>
            {hoveredIcon === "news" && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                News
              </div>
            )}
            {hoveredIcon === "news" && <div className="absolute inset-0 -z-10 rounded-md gradient-border"></div>}
          </div>

          {/* eShop Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("eshop")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <Link
              href="/settings"
              className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-red-500 z-10 relative"
            >
              <ShoppingBag size={20} />
            </Link>
            {hoveredIcon === "eshop" && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                Nintendo eShop
              </div>
            )}
            {hoveredIcon === "eshop" && <div className="absolute inset-0 -z-10 rounded-md gradient-border"></div>}
          </div>

          {/* Screenshots Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("screenshots")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <button className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-blue-500 z-10 relative">
              <ImageIcon size={20} />
            </button>
            {hoveredIcon === "screenshots" && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                Screenshots
              </div>
            )}
            {hoveredIcon === "screenshots" && <div className="absolute inset-0 -z-10 rounded-md gradient-border"></div>}
          </div>

          {/* Controllers Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("controllers")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <button className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-cyan-500 z-10 relative">
              <Gamepad2 size={20} />
            </button>
            {hoveredIcon === "controllers" && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                Controllers
              </div>
            )}
            {hoveredIcon === "controllers" && <div className="absolute inset-0 -z-10 rounded-md gradient-border"></div>}
          </div>

          {/* Online Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("online")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <button className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-gray-500 z-10 relative">
              <LinkIcon size={20} />
            </button>
            {hoveredIcon === "online" && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                Nintendo Switch Online
              </div>
            )}
            {hoveredIcon === "online" && <div className="absolute inset-0 -z-10 rounded-md gradient-border"></div>}
          </div>

          {/* Parental Controls Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("parental")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <button className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-gray-500 z-10 relative">
              <Smartphone size={20} />
            </button>
            {hoveredIcon === "parental" && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                Parental Controls
              </div>
            )}
            {hoveredIcon === "parental" && <div className="absolute inset-0 -z-10 rounded-md gradient-border"></div>}
          </div>

          {/* Settings Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("settings")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <Link
              href="/settings"
              className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-gray-500 z-10 relative"
            >
              <Settings size={20} />
            </Link>
            {hoveredIcon === "settings" && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                System Settings
              </div>
            )}
            {hoveredIcon === "settings" && <div className="absolute inset-0 -z-10 rounded-md gradient-border"></div>}
          </div>

          {/* Power Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("power")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <button className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-gray-500 z-10 relative">
              <Power size={20} />
            </button>
            {hoveredIcon === "power" && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                Sleep Mode
              </div>
            )}
            {hoveredIcon === "power" && <div className="absolute inset-0 -z-10 rounded-md gradient-border"></div>}
          </div>
        </div>
        {/* Remove the permanent Nintendo eShop text */}
      </div>

      {/* Controller Indicators */}
      <div className="absolute bottom-4 left-4 flex items-center">
        <div className="flex">
          <div className="w-2 h-6 bg-gray-400 mr-1"></div>
          <div className="w-6 h-6 rounded-sm bg-gray-400"></div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs">⊕</div>
          <span className="text-gray-600 text-sm ml-1">Options</span>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs">○</div>
          <span className="text-gray-600 text-sm ml-1">OK</span>
        </div>
      </div>
    </div>
  )
}

