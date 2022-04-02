import { renderWithTheme } from 'utils/tests/helpers'

import Games from '.'

describe('<Games />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Games />)
  })
})
