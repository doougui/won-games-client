import { renderWithTheme } from 'utils/tests/helpers'

import PaymentOptions from '.'

import cardsMock from './mock'

const props = {
  cards: cardsMock,
  handlePayment: jest.fn()
}

describe('<PaymentOptions />', () => {
  it('should render the heading', () => {
    renderWithTheme(<PaymentOptions {...props} />)
  })
})
