import NextNProgress from 'nextjs-progressbar'
import { ApolloProvider } from '@apollo/client'
import { CartProvider } from 'hooks/use-cart'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { useApollo } from 'utils/apollo'
import { SessionProvider } from 'next-auth/react'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <SessionProvider>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <Head>
              <title>Won Games</title>
              <link rel="shortcut icon" href="/img/icon-512.png" />
              <link rel="apple-touch-icon" href="/img/icon-192.png" />
              <link rel="manifest" href="/manifest.json" />
              <meta
                name="description"
                content="The best game store in the world"
              />
            </Head>
            <GlobalStyles />
            <NextNProgress
              color="#F231A5"
              startPosition={0.3}
              stopDelayMs={200}
              height={5}
              showOnShallow={true}
            />
            <Component {...pageProps} />
          </CartProvider>
        </ThemeProvider>
      </ApolloProvider>
    </SessionProvider>
  )
}

export default App
