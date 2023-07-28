// pages/addBookmark.tsx
import React, { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import useSWRMutation from "swr/mutation"

const addBookmark = async (url: string, { arg }: { arg: { repository: string } }) => {
  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({repository: arg.repository}),
  })
}

export default function AddBookmark() {
  const router = useRouter()
  const {trigger} = useSWRMutation('/api/bookmarks/create', addBookmark, {
    onSuccess: ()=>{
      router.push('/bookmarks')
    }
  })
  
  const [repository, setRepository] = useState('')

  const handleAddBookmark = useCallback(async () => {
    trigger({ repository })
  }, [repository])

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Add New Bookmark</h1>
      <div className="w-full max-w-md">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="repository"
          type="text"
          placeholder="Repository URL"
          value={repository}
          onChange={(e) => setRepository(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          type="button"
          onClick={handleAddBookmark}
        >
          Add Bookmark
        </button>
      </div>
    </div>
  )
}