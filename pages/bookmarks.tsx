// pages/bookmarks.tsx
import React from 'react'
import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'
import { useRouter } from 'next/router'

type Bookmark = {
  id: number,
  repository: string,
  date: Date
}

export default function Bookmarks() {
  const router = useRouter()
  const { data, error } = useSWR('/api/bookmarks/list', fetcher)
  const bookmarks: Bookmark[] = data?.bookmarks || []

  if (error) return <div>Failed to load bookmarks</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Bookmarks</h1>
      <div className="grid grid-cols-1 gap-4">
        {bookmarks.map((bookmark) => (
          <div key={bookmark.id} className="border p-4 rounded-lg">
            <h2 className="text-lg font-bold">{bookmark.repository}</h2>
            <p className="text-sm text-gray-500">{bookmark.date.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}