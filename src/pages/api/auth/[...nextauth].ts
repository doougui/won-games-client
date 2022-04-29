import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  pages: {
    signIn: '/sign-in'
  },
  providers: [
    CredentialsProvider({
      name: 'Sign-in',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}auth/local`,
          {
            method: 'POST',
            body: new URLSearchParams({
              identifier: `${credentials?.email}`,
              password: `${credentials?.password}`
            })
          }
        )

        const data = await response.json()

        if (data.user) {
          return { ...data.user, jwt: data.jwt }
        }

        return null
      }
    })
  ],
  callbacks: {
    session: async ({ session, user }) => {
      if (user) {
        session.jwt = user.jwt
        session.id = user.id
      }

      return session
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = String(user.username)
        token.jwt = user.jwt
      }

      return token
    }
  },
  session: {
    // Set to jwt in order to CredentialsProvider works properly
    strategy: 'jwt'
  }
})
