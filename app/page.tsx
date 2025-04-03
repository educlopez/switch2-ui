"use client";

import { useState, useRef, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  ImageIcon,
  Settings,
  Power,
  Gamepad2,
  FileText,
  Smartphone,
  BatteryMedium,
  Wifi,
  Plus,
  MessageCircleMore,
  Cable,
} from "lucide-react";
import gameCover from "@/app/assets/game-cover.jpg";
import switchOnline from "@/app/assets/switchonline.avif";
export default function HomePage() {
  const [currentTime, setCurrentTime] = useState(() => {
    const now = new Date();
    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      ampm: now.getHours() >= 12 ? "PM" : "AM",
    };
  });

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const gameGridRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: MouseEvent) => {
    if (!gameGridRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - gameGridRef.current.offsetLeft);
    setScrollLeft(gameGridRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !gameGridRef.current) return;
    e.preventDefault();
    const x = e.pageX - gameGridRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    gameGridRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Update time every minute
  useState(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime({
        hours: now.getHours() > 12 ? now.getHours() - 12 : now.getHours(),
        minutes: now.getMinutes(),
        ampm: now.getHours() >= 12 ? "PM" : "AM",
      });
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = `${currentTime.hours}:${currentTime.minutes
    .toString()
    .padStart(2, "0")}${currentTime.ampm}`;

  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-neutral-100 text-gray-800 font-sans relative overflow-hidden">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4">
        <div className="flex items-center">
          <div className="w-14 h-14 border-2 border-white rounded-full bg-red-500 flex items-center justify-center overflow-hidden">
            <Image
              src="https://avatars.githubusercontent.com/u/13372238?v=4"
              alt="Profile"
              width={32}
              height={32}
              className="object-cover h-full w-full"
            />
          </div>
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
      <div className="flex flex-col justify-center items-center gap-4 h-screen">
        <div className="px-4 mt-4 w-screen">
          <div
            ref={gameGridRef}
            className="overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="flex gap-4 pb-4"
              style={{ width: "calc(100% + 25%)" }}
            >
              <div className="flex-none w-[calc(20%-12px)] aspect-square bg-white rounded-xl overflow-hidden shadow-md border-2 border-gray-200/30">
                <Image
                  src={gameCover.src}
                  alt="Mario Kart 8 Deluxe"
                  width={388}
                  height={388}
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="flex-none w-[calc(20%-12px)] aspect-square bg-white rounded-xl shadow-md border-2 border-gray-200/30"></div>
              <div className="flex-none w-[calc(20%-12px)] aspect-square bg-white rounded-xl shadow-md border-2 border-gray-200/30"></div>
              <div className="flex-none w-[calc(20%-12px)] aspect-square bg-white rounded-xl shadow-md border-2 border-gray-200/30"></div>
              <div className="flex-none w-[calc(20%-12px)] aspect-square bg-white rounded-xl shadow-md border-2 border-gray-200/30"></div>
              <div className="flex-none w-[calc(20%-12px)] aspect-square bg-white rounded-xl shadow-md border-2 border-gray-200/30"></div>
              <div className="flex-none w-[calc(20%-12px)] aspect-square bg-white rounded-xl shadow-md border-2 border-gray-200/30"></div>
            </div>
          </div>
        </div>
        {/* Bottom Navigation */}

        <div className="flex p-4 justify-center items-center gap-4 relative bg-white/50 rounded-full">
          {/* Home Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("home")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <Link
              href="/"
              className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white z-10 relative overflow-hidden"
            >
              <Image
                src={switchOnline.src}
                alt="Logo Switch Online"
                width={40}
                height={40}
              />
            </Link>
            {hoveredIcon === "home" && (
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2  bg-opacity-80 text-blue-500 text-md rounded px-2 py-1 whitespace-nowrap">
                Home
              </div>
            )}
            {hoveredIcon === "home" && (
              <div className="absolute inset-0 z-1 rounded-full gradient-border left-1/2 border-4 w-12 h-12 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
            )}
          </div>

          {/* Album Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("album")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-orange-500 z-10 relative">
              <MessageCircleMore size={24} />
            </button>
            {hoveredIcon === "album" && (
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2  bg-opacity-80 text-blue-500 text-md rounded px-2 py-1 whitespace-nowrap">
                Chat
              </div>
            )}
            {hoveredIcon === "album" && (
              <div className="absolute inset-0 z-1 rounded-full gradient-border left-1/2 border-4 w-12 h-12 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
            )}
          </div>

          {/* News Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("news")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-green-500 z-10 relative">
              <FileText size={24} />
            </button>
            {hoveredIcon === "news" && (
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2  bg-opacity-80 text-blue-500 text-md rounded px-2 py-1 whitespace-nowrap">
                News
              </div>
            )}
            {hoveredIcon === "news" && (
              <div className="absolute inset-0 z-1 rounded-full gradient-border left-1/2 border-4 w-12 h-12 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
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
              className="w-8 h-8 rounded-full flex items-center justify-center text-red-500 z-10 relative"
            >
              <ShoppingBag size={24} />
            </Link>
            {hoveredIcon === "eshop" && (
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2  bg-opacity-80 text-blue-500 text-md rounded px-2 py-1 whitespace-nowrap">
                Nintendo eShop
              </div>
            )}
            {hoveredIcon === "eshop" && (
              <div className="absolute inset-0 z-1 rounded-full gradient-border left-1/2 border-4 w-12 h-12 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
            )}
          </div>

          {/* Screenshots Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("screenshots")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-blue-500 z-10 relative">
              <ImageIcon size={24} />
            </button>
            {hoveredIcon === "screenshots" && (
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2  bg-opacity-80 text-blue-500 text-md rounded px-2 py-1 whitespace-nowrap">
                Screenshots
              </div>
            )}
            {hoveredIcon === "screenshots" && (
              <div className="absolute inset-0 z-1 rounded-full gradient-border left-1/2 border-4 w-12 h-12 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
            )}
          </div>

          {/* Controllers Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("controllers")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-cyan-500 z-10 relative">
              <Cable size={24} />
            </button>
            {hoveredIcon === "controllers" && (
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2  bg-opacity-80 text-blue-500 text-md rounded px-2 py-1 whitespace-nowrap">
                Connections
              </div>
            )}
            {hoveredIcon === "controllers" && (
              <div className="absolute inset-0 z-1 rounded-full gradient-border left-1/2 border-4 w-12 h-12 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
            )}
          </div>

          {/* Online Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("online")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 z-10 relative">
              <Gamepad2 size={24} />
            </button>
            {hoveredIcon === "online" && (
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2  bg-opacity-80 text-blue-500 text-md rounded px-2 py-1 whitespace-nowrap">
                Controllers
              </div>
            )}
            {hoveredIcon === "online" && (
              <div className="absolute inset-0 z-1 rounded-full gradient-border left-1/2 border-4 w-12 h-12 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
            )}
          </div>

          {/* Parental Controls Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("parental")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 z-10 relative">
              <Smartphone size={24} />
            </button>
            {hoveredIcon === "parental" && (
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2  bg-opacity-80 text-blue-500 text-md rounded px-2 py-1 whitespace-nowrap">
                Cartridges
              </div>
            )}
            {hoveredIcon === "parental" && (
              <div className="absolute inset-0 z-1 rounded-full gradient-border left-1/2 border-4 w-12 h-12 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
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
              className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 z-10 relative"
            >
              <Settings size={24} />
            </Link>
            {hoveredIcon === "settings" && (
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2  bg-opacity-80 text-blue-500 text-md rounded px-2 py-1 whitespace-nowrap">
                System Settings
              </div>
            )}
            {hoveredIcon === "settings" && (
              <div className="absolute inset-0 z-1 rounded-full gradient-border left-1/2 border-4 w-12 h-12 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
            )}
          </div>

          {/* Power Button */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("power")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 z-10 relative">
              <Power size={24} />
            </button>
            {hoveredIcon === "power" && (
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2  bg-opacity-80 text-blue-500 text-md rounded px-2 py-1 whitespace-nowrap">
                Sleep Mode
              </div>
            )}
            {hoveredIcon === "power" && (
              <div className="absolute inset-0 z-1 rounded-full gradient-border left-1/2 border-4 w-12 h-12 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
            )}
          </div>
        </div>
      </div>
      {/* Controller Indicators */}
      <div className="fixed bottom-4 left-4 flex items-center">
        <div className="flex">
          <div className="w-2 h-6 bg-gray-400 mr-1"></div>
          <div className="w-6 h-6 rounded-sm bg-gray-400"></div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs mr-1">
            <Plus size={16} />
          </div>
          <span className="text-gray-600 text-sm ml-1">Options</span>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs mr-1">
            A
          </div>
          <span className="text-gray-600 text-sm ml-1">OK</span>
        </div>
      </div>
    </div>
  );
}
