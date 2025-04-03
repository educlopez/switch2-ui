"use client"

import { useState } from "react"

import { ToggleSwitch } from "@/app/components/ToggleSwitch"

export default function AccessibilitySettings() {
  const [buttonMappingQuickSettings, setButtonMappingQuickSettings] =
    useState(false)
  const [boldText, setBoldText] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [zoom, setZoom] = useState(false)
  const [textSize, setTextSize] = useState("Standard")

  return (
    <>
      <div className="mb-6">
        <h2 className="relative mt-8 border-b py-3 pl-4 text-lg font-normal">
          <div className="absolute top-3 bottom-3 left-0 w-1 bg-gray-800"></div>
          Button Mapping
        </h2>

        <div className="flex flex-col gap-2 py-4">
          <div className="flex flex-row items-center justify-between border-b pb-4">
            <span className="text-lg">Button Mapping in Quick Settings</span>
            <ToggleSwitch
              enabled={buttonMappingQuickSettings}
              onToggle={() =>
                setButtonMappingQuickSettings(!buttonMappingQuickSettings)
              }
            />
          </div>
          <p className="text-secondary-foreground text-sm">
            Adds button-mapping options to Quick Settings (hold ⊙).
          </p>
        </div>
      </div>

      {/* Text Settings */}
      <div className="mb-6">
        <div className="flex flex-row items-center justify-between border-b py-4">
          <span className="text-lg">Text Size</span>
          <span className="text-blue-500">Standard</span>
        </div>

        <div className="flex flex-row items-center justify-between border-b py-4">
          <span className="text-lg">Bold Text</span>
          <ToggleSwitch
            enabled={boldText}
            onToggle={() => setBoldText(!boldText)}
          />
        </div>

        <div className="flex flex-row items-center justify-between border-b py-4">
          <span className="text-lg">High Contrast</span>
          <ToggleSwitch
            enabled={highContrast}
            onToggle={() => setHighContrast(!highContrast)}
          />
        </div>

        <div className="flex flex-row items-center justify-between border-b py-4">
          <span className="text-lg">Zoom</span>
          <ToggleSwitch enabled={zoom} onToggle={() => setZoom(!zoom)} />
        </div>
      </div>
    </>
  )
}
