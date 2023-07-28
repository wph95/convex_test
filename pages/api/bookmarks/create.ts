import prisma from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'

// POST /api/bookmarks/create
// Add a new bookmark
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { repository } = req.body;

    const bookmark = await prisma.bookmark.create({
      data: {
        repository: repository,
        date: new Date()
      }
    });

    res.status(200).json({ bookmark });
}