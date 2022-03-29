import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'

import Cart from '.'

import itemsMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props = {
  items: itemsMock,
  total: 'R$ 430,00',
  cards: cardsMock,
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock
}

describe('<Cart />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Cart {...props} />)
  })
})
