import { screen } from '@testing-library/react'

import mockItems from 'components/CartList/mock'

import CartDropdown from '.'
import { render } from 'utils/test-utils'
import { CartContextDefaultValues } from 'hooks/use-cart'

describe('<CartDropdown />', () => {
  beforeEach(() => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items: mockItems,
      quantity: mockItems.length,
      total: 'R$ 330,00'
    }

    render(<CartDropdown />, { cartProviderProps })
  })

  it('should render the CartIcon and its badge', () => {
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${mockItems.length}`)).toBeInTheDocument()
  })

  it('should render the dropdown content with cart items and total', () => {
    expect(screen.getByText('R$ 330,00')).toBeInTheDocument()
    expect(screen.getByText(`${mockItems[0].title}`)).toBeInTheDocument()
  })
})
