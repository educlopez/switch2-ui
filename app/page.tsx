"use client"

import { useState } from "react"
import Image from "next/image"
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

import switchOnline from "@/app/assets/switchonline.avif"

import { Clock } from "./components/Clock"
import { ControlButton } from "./components/ControlButton"
import { GameGrid } from "./components/GameGrid"
import { JoyconIndicator } from "./components/JoyconIndicator"
import { MenuIcon } from "./components/MenuIcon"
import { PageFooter } from "./components/PageFooter"
import { UserAvatar } from "./components/UserAvatar"

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
      href: "/eshop/featured",
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
    <div className="">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 flex w-full items-center justify-between p-4">
        <div className="flex items-center">
          <UserAvatar />
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

      <PageFooter
        rightContent={
          <>
            <ControlButton button={<Plus size={16} />} label="Options" />
            <ControlButton button="A" label="OK" />
          </>
        }
      />
    </div>
  )
}
