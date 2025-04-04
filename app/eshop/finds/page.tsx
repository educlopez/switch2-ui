"use client"

import Link from "next/link"

export default function EshopPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Main Content */}
      <div className="flex flex-1">
        {/* Content Area */}
        <div className="relative flex-1 bg-gradient-to-br from-blue-900 to-purple-900">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="mb-4 text-4xl font-bold">Hey there, Edu!</h2>
            <p className="mb-2 text-2xl">Looking to find some games?</p>
            <p className="mb-8 text-2xl">We've got recommendations!</p>
            <p className="mb-4 text-lg">
              Games will be recommended based on your preferences.
            </p>
            <div className="rounded bg-white/20 px-4 py-2">
              Your finds will be refreshed every Saturday.
            </div>
            <button className="mt-8 flex items-center gap-2 rounded-full bg-white px-6 py-3 text-blue-900">
              <span className="text-lg font-medium">Find Games</span>
            </button>
            <Link
              href="/eshop/how-to-use"
              className="absolute right-8 bottom-8 text-white/80 hover:text-white"
            >
              See How to Use Game Finds →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
