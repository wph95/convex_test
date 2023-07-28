// pages/index.tsx
import React from 'react'
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-semibold mb-4">Home Page</h1>
        <div className="flex space-x-4">
          <button 
            onClick={() => router.push('/bookmarks')} 
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-200 transition"
          >
            Go to Bookmarks
          </button>
          <button 
            onClick={() => router.push('/addBookmark')} 
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-200 transition"
          >
            Add a Bookmark
          </button>
        </div>
      </div>
    </div>
  )
}
