import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await prisma.post.findMany({
    select: {
      project_name: true,
      image: true,
    },
    orderBy: {
      id: 'desc',
    },
  })
  res.status(200).json(data)
}
