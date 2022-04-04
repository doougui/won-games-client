import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

export default function Index(props: HomeTemplateProps) {
  const client = new ApolloClient({
    uri: 'https://wongamesapi.herokuapp.com/graphql',
    cache: new InMemoryCache()
  })

  client.query({
    query: gql`
      query getGames {
        games {
          name
        }
      }
    `
  })

  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock
    }
  }
}
