"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Settings } from "lucide-react"

import { Separator } from "@/components/ui/separator"

import { ControlButton } from "../components/ControlButton"
import { JoyconIndicator } from "../components/JoyconIndicator"
import { PageHeader } from "../components/PageHeader"
import { ToggleSwitch } from "../components/ToggleSwitch"

export default function SystemSettings() {
  const [hdrEnabled, setHdrEnabled] = useState(true)
  const [showResolutionDropdown, setShowResolutionDropdown] = useState(false)
  const [selectedResolution, setSelectedResolution] = useState("Automatic")

  const resolutions = [
    "Automatic",
    "720p (HD)",
    "1080p (Full HD)",
    "1440p (WQHD)",
    "2160p (4K)",
  ]

  const toggleHDR = () => {
    setHdrEnabled(!hdrEnabled)
  }

  const toggleResolutionDropdown = () => {
    setShowResolutionDropdown(!showResolutionDropdown)
  }

  const selectResolution = (resolution: string) => {
    setSelectedResolution(resolution)
    setShowResolutionDropdown(false)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showResolutionDropdown) return

      const currentIndex = resolutions.indexOf(selectedResolution)

      if (e.key === "ArrowUp" && currentIndex > 0) {
        setSelectedResolution(resolutions[currentIndex - 1])
      } else if (
        e.key === "ArrowDown" &&
        currentIndex < resolutions.length - 1
      ) {
        setSelectedResolution(resolutions[currentIndex + 1])
      } else if (e.key === "Escape") {
        setShowResolutionDropdown(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedResolution, resolutions, showResolutionDropdown])

  return (
    <>
      <div className="">
        <PageHeader icon={Settings} title="System Settings" />

        <div className="flex">
          {/* Left sidebar */}
          <div className="w-[200px]">
            <div className="text-foreground border-b px-6 py-4">
              Controllers & Accessories
            </div>
            <div className="text-foreground border-b px-6 py-4">Audio</div>
            <div className="relative border-b px-6 py-4 text-blue-500">
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-blue-500"></div>
              Display
            </div>
            <div className="text-foreground border-b px-6 py-4">Mii</div>
            <div className="text-foreground border-b px-6 py-4">amiibo</div>
            <div className="text-foreground border-b px-6 py-4">Themes</div>
            <div className="text-foreground border-b px-6 py-4">
              Notifications
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 border-l pr-6 pl-6">
            {/* System Screen section */}
            <div className="mb-6">
              <h2 className="relative mt-8 border-b py-3 pl-4 text-lg font-normal">
                <div className="absolute top-3 bottom-3 left-0 w-1 bg-gray-800"></div>
                System Screen
              </h2>

              <div className="flex flex-col gap-2 py-4">
                <div className="flex flex-row items-center justify-between border-b pb-4">
                  <span className="text-lg">HDR Output</span>
                  <ToggleSwitch enabled={hdrEnabled} onToggle={toggleHDR} />
                </div>
                <p className="text-secondary-foreground text-sm">
                  Turns on HDR output in supporting software
                </p>
              </div>
            </div>

            {/* TV section */}
            <div className="mb-6">
              <h2 className="relative border-b py-3 pl-4 text-lg font-normal">
                <div className="absolute top-3 bottom-3 left-0 w-1 bg-gray-800"></div>
                TV
              </h2>

              {/* TV Resolution */}
              <div className="relative border-b py-4">
                <div
                  className="flex cursor-pointer items-center justify-between"
                  onClick={toggleResolutionDropdown}
                >
                  <span className="text-lg">TV Resolution</span>
                  <span className="text-foreground">{selectedResolution}</span>
                </div>

                {/* Resolution dropdown */}
                {showResolutionDropdown && (
                  <div className="bg-primary absolute top-0 right-0 z-10 mt-[-80px] w-[350px] overflow-hidden rounded-xl border p-3 shadow-lg">
                    {resolutions.map((resolution) => (
                      <div
                        key={resolution}
                        className={`relative flex cursor-pointer items-center justify-between p-4 ${
                          resolution === selectedResolution
                            ? "text-blue-500"
                            : "text-gray-700"
                        }`}
                        onClick={() => selectResolution(resolution)}
                      >
                        <span className="text-lg">{resolution}</span>
                        <div
                          className={`h-6 w-6 rounded-full ${
                            resolution === selectedResolution
                              ? "flex items-center justify-center bg-blue-500"
                              : "border-2 border-gray-300"
                          }`}
                        >
                          {resolution === selectedResolution && (
                            <div className="h-2 w-2 rounded-full bg-white"></div>
                          )}
                        </div>

                        {/* Animated gradient border for selected option */}
                        {resolution === selectedResolution && (
                          <div className="gradient-border absolute -z-10 w-full overflow-hidden rounded-xl border-4"></div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Dock Output Information */}
              <div className="border-b py-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg">Dock Output Information</span>
                </div>
              </div>

              {/* RGB Range */}
              <div className="border-b py-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg">RGB Range</span>
                </div>
              </div>
            </div>

            {/* Adjust Screen Size */}
            <div className="py-4">
              <div className="flex items-center justify-between">
                <span className="text-lg">Adjust Screen Size</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 mt-4 flex w-full justify-between p-4">
          <JoyconIndicator color="bg-green-500" />
          <div className="flex items-center">
            <Link href="/" className="mr-4">
              <ControlButton button="B" label="Back" />
            </Link>
            <ControlButton button="A" label="OK" />
          </div>
        </div>
      </div>
    </>
  )
}
