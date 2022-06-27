import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { comment, postId, userID, commentDate } = req.body
  try {
    await prisma.comment.create({
      data: {
        comment,
        postId,
        userID,
        commentDate,
      },
    })
  } catch (e) {
    console.log(e)
  }
  res.status(200).end()
}
