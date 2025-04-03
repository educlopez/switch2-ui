"use client"

import { useState } from "react"
import Link from "next/link"

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
        <div className="mt-8 flex flex-col gap-2 py-4">
          <Link
            href="/settings/accessibility/button-mapping"
            className="flex flex-row items-center justify-between border-b pb-4 hover:text-blue-500"
          >
            <span className="text-lg">Button Mapping</span>
          </Link>
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
