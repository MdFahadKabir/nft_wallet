"use client";

export default function Loading() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="animate-spin h-32 w-32 rounded-full border-t-4 border-gray-300" />
        <p className="mt-8 text-2xl text-gray-700">Loading...</p>
      </main>
    )
  }
  
  