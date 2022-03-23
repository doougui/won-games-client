import 'match-media-mock'

import { renderWithTheme } from 'utils/tests/helpers'

import Wishlist from '.'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props = {
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock
}

describe('<Wishlist />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Wishlist {...props} />)
  })
})
