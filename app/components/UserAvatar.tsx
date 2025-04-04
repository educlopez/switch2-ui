"use client"

import { useState } from "react"
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

export function UserAvatar() {
  const [hoveredIcon, setHoveredIcon] = useState<boolean>(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative rounded-full">
        <Avatar
          className="h-14 w-14 cursor-pointer border-2 border-white"
          onMouseEnter={() => setHoveredIcon(true)}
          onMouseLeave={() => setHoveredIcon(false)}
        >
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/13372238?v=4"
            alt="@educalvolpz"
            className="z-10"
          />
          <AvatarFallback>EC</AvatarFallback>
        </Avatar>
        {hoveredIcon && (
          <div className="gradient-border absolute inset-0 top-1/2 left-1/2 z-1 h-15 w-15 -translate-x-1/2 -translate-y-1/2 rounded-full border-3"></div>
        )}
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
  )
}
