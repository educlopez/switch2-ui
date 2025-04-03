"use client";

import { useState, useEffect } from "react";
import { Settings } from "lucide-react";
import Link from "next/link";

export default function SystemSettings() {
  const [hdrEnabled, setHdrEnabled] = useState(true);
  const [showResolutionDropdown, setShowResolutionDropdown] = useState(false);
  const [selectedResolution, setSelectedResolution] = useState("Automatic");

  const resolutions = [
    "Automatic",
    "720p (HD)",
    "1080p (Full HD)",
    "1440p (WQHD)",
    "2160p (4K)",
  ];

  const toggleHDR = () => {
    setHdrEnabled(!hdrEnabled);
  };

  const toggleResolutionDropdown = () => {
    setShowResolutionDropdown(!showResolutionDropdown);
  };

  const selectResolution = (resolution: string) => {
    setSelectedResolution(resolution);
    setShowResolutionDropdown(false);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showResolutionDropdown) return;

      const currentIndex = resolutions.indexOf(selectedResolution);

      if (e.key === "ArrowUp" && currentIndex > 0) {
        setSelectedResolution(resolutions[currentIndex - 1]);
      } else if (
        e.key === "ArrowDown" &&
        currentIndex < resolutions.length - 1
      ) {
        setSelectedResolution(resolutions[currentIndex + 1]);
      } else if (e.key === "Escape") {
        setShowResolutionDropdown(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedResolution, resolutions, showResolutionDropdown]);

  return (
    <div className="min-h-screen bg-neutral-100 text-gray-800 font-sans">
      <div className="">
        {/* Header */}
        <div className="sticky top-0 left-0 w-full bg-gray-100 pt-6 px-6 pb-2 z-10 border-b border-gray-200 h-16">
          <div className="flex items-center">
            <Settings className="h-6 w-6 mr-3 text-gray-600" />
            <h1 className="text-2xl font-normal text-gray-600">
              System Settings
            </h1>
          </div>
        </div>

        <div className="flex">
          {/* Left sidebar */}
          <div className="w-[200px]">
            <div className="py-4 px-6 border-b border-gray-200 text-gray-500">
              Controllers & Accessories
            </div>
            <div className="py-4 px-6 border-b border-gray-200 text-gray-500">
              Audio
            </div>
            <div className="py-4 px-6 border-b border-gray-200 text-blue-500 relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
              Display
            </div>
            <div className="py-4 px-6 border-b border-gray-200 text-gray-500">
              Mii
            </div>
            <div className="py-4 px-6 border-b border-gray-200 text-gray-500">
              amiibo
            </div>
            <div className="py-4 px-6 border-b border-gray-200 text-gray-500">
              Themes
            </div>
            <div className="py-4 px-6 border-b border-gray-200 text-gray-500">
              Notifications
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 border-l border-gray-200 pl-6 pr-6">
            {/* System Screen section */}
            <div className="mb-6">
              <h2 className="text-lg py-3 font-normal relative pl-4 border-b border-gray-200">
                <div className="absolute left-0 top-3 bottom-3 w-1 bg-gray-800"></div>
                System Screen
              </h2>

              <div className="py-4 border-b border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">HDR Output</span>
                  <button
                    onClick={toggleHDR}
                    className={`w-14 h-7 rounded-full ${
                      hdrEnabled ? "bg-blue-500" : "bg-gray-300"
                    } p-1 flex items-center transition-colors duration-200`}
                  >
                    <div
                      className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-200 ${
                        hdrEnabled ? "translate-x-7" : "translate-x-0"
                      }`}
                    ></div>
                  </button>
                </div>
                <p className="text-gray-500 text-sm">
                  Turns on HDR output in supporting software
                </p>
              </div>
            </div>

            {/* TV section */}
            <div className="mb-6">
              <h2 className="text-lg py-3 font-normal relative pl-4 border-b border-gray-200">
                <div className="absolute left-0 top-3 bottom-3 w-1 bg-gray-800"></div>
                TV
              </h2>

              {/* TV Resolution */}
              <div className="py-4 border-b border-gray-200 relative">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={toggleResolutionDropdown}
                >
                  <span className="text-lg">TV Resolution</span>
                  <span className="text-gray-500">{selectedResolution}</span>
                </div>

                {/* Resolution dropdown */}
                {showResolutionDropdown && (
                  <div className="absolute right-0 top-0 mt-[-80px] bg-white rounded-xl p-3 shadow-lg w-[350px] z-10 overflow-hidden">
                    {resolutions.map((resolution) => (
                      <div
                        key={resolution}
                        className={`relative p-4 flex justify-between items-center cursor-pointer ${
                          resolution === selectedResolution
                            ? "text-blue-500"
                            : "text-gray-700"
                        }`}
                        onClick={() => selectResolution(resolution)}
                      >
                        <span className="text-lg">{resolution}</span>
                        <div
                          className={`w-6 h-6 rounded-full ${
                            resolution === selectedResolution
                              ? "bg-blue-500 flex items-center justify-center"
                              : "border-2 border-gray-300"
                          }`}
                        >
                          {resolution === selectedResolution && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>

                        {/* Animated gradient border for selected option */}
                        {resolution === selectedResolution && (
                          <div className="absolute -z-10 gradient-border border-4 w-full rounded-xl overflow-hidden"></div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Dock Output Information */}
              <div className="py-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Dock Output Information</span>
                </div>
              </div>

              {/* RGB Range */}
              <div className="py-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-lg">RGB Range</span>
                </div>
              </div>
            </div>

            {/* Adjust Screen Size */}
            <div className="py-4">
              <div className="flex justify-between items-center">
                <span className="text-lg">Adjust Screen Size</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 w-full flex justify-between p-4 mt-4">
          <div className="flex items-center">
            <div className="flex">
              <div className="w-3 h-6 bg-green-500 mr-1"></div>
              <img
                src="/placeholder.svg?height=30&width=60"
                alt="Joy-Con"
                className="h-6"
              />
            </div>
          </div>
          <div className="flex items-center">
            <Link href="/" className="mr-4 flex items-center">
              <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs mr-1">
                B
              </div>
              <span className="text-gray-600">Back</span>
            </Link>
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs mr-1">
                A
              </div>
              <span className="text-gray-600">OK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
