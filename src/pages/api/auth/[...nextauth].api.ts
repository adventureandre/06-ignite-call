import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENTE_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENTE_SECRET ?? '',
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)