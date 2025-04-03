"use client"

import Image from "next/image"
import Link from "next/link"

interface JoyConOption {
  id: string
  title: string
  side: "L" | "R"
  selected?: boolean
}

export default function ButtonMappingPage() {
  const joycons: JoyConOption[] = [
    { id: "joycon-l", title: "Joy-Con 2 (L)", side: "L" },
    { id: "joycon-r", title: "Joy-Con 2 (R)", side: "R", selected: true },
  ]

  return (
    <div className="flex flex-col gap-6">
      <h1 className="mt-8 text-2xl font-normal">Change Button Mapping</h1>

      <div className="flex gap-8">
        {/* Left side - Joy-Con selection */}
        <div className="flex w-1/2 flex-col gap-4">
          {joycons.map((joycon) => (
            <div
              key={joycon.id}
              className={`relative flex items-center gap-4 rounded-lg border p-4 ${
                joycon.selected
                  ? "border-blue-500 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                  : "border-gray-200"
              }`}
            >
              {/* Controller dots */}
              <div className="absolute top-2 left-4 flex gap-1">
                <div className="h-1 w-1 rounded-full bg-green-500"></div>
                <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                <div className="h-1 w-1 rounded-full bg-gray-300"></div>
              </div>

              {/* Controller icon */}
              <div className="flex h-16 w-8 items-center justify-center">
                <div className="h-16 w-8 bg-gray-800"></div>
              </div>

              {/* Controller name */}
              <span className="text-lg">{joycon.title}</span>

              {joycon.selected && (
                <div className="gradient-border absolute inset-0 -z-10 overflow-hidden rounded-lg border-4"></div>
              )}
            </div>
          ))}
        </div>

        {/* Right side - Controller preview */}
        <div className="flex w-1/2 flex-col gap-4">
          <div className="relative flex h-[400px] items-center justify-center">
            <div className="h-64 w-32 bg-gray-100"></div>
          </div>

          {/* Options */}
          <div className="flex flex-col gap-2">
            <button className="text-left text-lg text-gray-900 hover:text-blue-500">
              Edit Controller's Mappings
            </button>
            <button className="text-left text-lg text-gray-400">
              Reset Controller's Mappings
            </button>
            <button className="text-left text-lg text-gray-400">
              Save as a Preset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
