import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { prisma } from '../../../lib/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, {
    // Configure one or more authentication providers
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      // ...add more providers here
    ],
    secret: process.env.AUTH_SECRET,
    jwt: {
      secret: process.env.JWT_SECRET,
    },
    adapter: PrismaAdapter(prisma),
  })
