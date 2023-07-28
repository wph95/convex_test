import prisma from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'

// GET /api/bookmarks/list
// Get all bookmarks
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const bookmarks = await prisma.bookmark.findMany();

  res.status(200).json({ bookmarks });
}