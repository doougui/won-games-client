import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'

async function protectedRoutes(context: GetServerSidePropsContext) {
  const session = await getSession(context)
  console.log(session)

  if (!session) {
    context.res.setHeader(
      'Location',
      `/sign-in?callbackUrl=${context.resolvedUrl}`
    )
    context.res.statusCode = 302
    context.res.end()
  }

  return session
}

export default protectedRoutes
