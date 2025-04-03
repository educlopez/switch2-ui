"use client"

import { useState } from "react"
import Image from "next/image"
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
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
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import switchOnline from "@/app/assets/switchonline.avif"

import { Clock } from "./components/Clock"
import { ControlButton } from "./components/ControlButton"
import { GameGrid } from "./components/GameGrid"
import { JoyconIndicator } from "./components/JoyconIndicator"
import { MenuIcon } from "./components/MenuIcon"

export default function HomePage() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  const menuItems = [
    {
      id: "home",
      label: "Home",
      component: (
        <div className="relative z-10 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-red-500 text-white">
          <Image
            src={switchOnline.src}
            alt="Logo Switch Online"
            width={65}
            height={65}
            draggable="false"
          />
        </div>
      ),
    },
    {
      id: "chat",
      icon: MessageCircleMore,
      label: "Chat",
      color: "text-orange-500",
    },
    {
      id: "news",
      icon: FileText,
      label: "News",
      color: "text-green-500",
    },
    {
      id: "eshop",
      icon: ShoppingBag,
      label: "Nintendo eShop",
      color: "text-red-500",
      href: "/settings",
    },
    {
      id: "screenshots",
      icon: ImageIcon,
      label: "Screenshots",
      color: "text-blue-500",
    },
    {
      id: "connections",
      icon: Cable,
      label: "Connections",
      color: "text-cyan-500",
    },
    {
      id: "controllers",
      icon: Gamepad2,
      label: "Controllers",
    },
    {
      id: "cartridges",
      icon: Smartphone,
      label: "Cartridges",
    },
    {
      id: "settings",
      icon: Settings,
      label: "System Settings",
      href: "/settings/display",
    },
    {
      id: "power",
      icon: Power,
      label: "Sleep Mode",
    },
  ]

  return (
    <>
      {/* Status Bar */}
      <div className="absolute top-0 left-0 flex w-full items-center justify-between p-4">
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-14 w-14 cursor-pointer border-2 border-white">
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/13372238?v=4"
                  alt="@educalvolpz"
                />
                <AvatarFallback>EC</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary w-56">
              <DropdownMenuLabel>Links</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-border" />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <a
                    href="https://github.com/educlopez/switch2-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-background cursor-pointer"
                  >
                    Github
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://x.com/educalvolpz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-background cursor-pointer"
                  >
                    X.com
                  </a>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-4">
          <Clock />
          <Wifi className="stroke-foreground h-7 w-auto" />
          <BatteryMedium className="stroke-foreground h-8 w-auto fill-green-500" />
        </div>
      </div>

      {/* Game Grid */}
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <GameGrid />

        {/* Bottom Navigation */}
        <div className="bg-primary relative flex w-full items-center justify-center gap-10 overflow-x-scroll rounded-full py-4 pr-8 pl-4 lg:w-fit">
          {menuItems.map((item) =>
            item.component ? (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setHoveredIcon(item.id)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                {item.component}
                {hoveredIcon === item.id && (
                  <>
                    <div className="text-md bg-opacity-80 absolute -bottom-14 left-1/2 -translate-x-1/2 transform rounded px-2 py-1 whitespace-nowrap text-blue-500">
                      {item.label}
                    </div>
                    <div className="gradient-border absolute inset-0 top-1/2 left-1/2 z-1 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-4"></div>
                  </>
                )}
              </div>
            ) : (
              <MenuIcon
                key={item.id}
                icon={item.icon!}
                label={item.label}
                href={item.href}
                color={item.color}
                hoveredIcon={hoveredIcon}
                setHoveredIcon={setHoveredIcon}
                iconId={item.id}
              />
            )
          )}
        </div>
      </div>

      {/* Controller Indicators */}
      <div className="fixed bottom-4 left-4">
        <JoyconIndicator />
      </div>
      <div className="absolute right-4 bottom-4 flex items-center gap-2">
        <ControlButton button={<Plus size={16} />} label="Options" />
        <ControlButton button="A" label="OK" />
      </div>
    </>
  )
}
