"use client"

import { usePathname } from "next/navigation"
import { Heart, Lightbulb, Pin, Search, Settings } from "lucide-react"

import { ControlButton } from "@/app/components/ControlButton"
import { PageFooter } from "@/app/components/PageFooter"
import { Sidebar } from "@/app/components/Sidebar"

import { UserAvatar } from "../components/UserAvatar"

export default function EshopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const menuItems = [
    { label: "Featured Titles", icon: Pin, path: "/eshop/featured" },
    { label: "Product Search", icon: Search, path: "/eshop/search" },
    {
      label: "Game Finds for You",
      icon: Lightbulb,
      path: "/eshop/finds",
      selected: true,
    },
    { label: "Wish List", icon: Heart, path: "/eshop/wishlist" },
    { label: "Great Deals", path: "/eshop/deals" },
    { label: "Bestselling Software", path: "/eshop/bestsellers" },
    { label: "Recent Releases", path: "/eshop/recent" },
    { label: "Coming Soon", path: "/eshop/coming-soon" },
    { label: "Nintendo Switch Online", path: "/eshop/online" },
    { label: "Enter Code", path: "/eshop/code" },
  ]

  return (
    <div className="group/sidebar-wrapper flex min-h-svh w-full">
      <div className="fixed top-4 right-4 z-20 flex items-center gap-4">
        <UserAvatar />
      </div>

      <Sidebar
        items={menuItems}
        activePath={pathname}
        width="w-72"
        header={
          <div className="flex h-16 items-center justify-between bg-red-600 px-4">
            <div className="text-2xl font-bold text-white">Nintendo eShop</div>
          </div>
        }
      />
      <main className="bg-background relative flex w-full flex-1 flex-col">
        <div className="relative flex h-screen">
          <div className="bg-primary h-full w-full flex-col items-center overflow-x-hidden overflow-y-auto">
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </main>
      <PageFooter
        fixed={true}
        className="bg-background z-30 border-t"
        rightContent={
          <>
            <ControlButton button="B" label="Back" href="/" />
            <ControlButton button="A" label="OK" />
          </>
        }
      />
    </div>
  )
}
