import { renderWithTheme } from 'utils/tests/helpers'

import Dropdown from '.'

const props = {
  title: 'Click here',
  children: 'Dropdown content'
}

describe('<Dropdown />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Dropdown {...props} />)
  })
})
