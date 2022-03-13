import { renderWithTheme } from 'utils/tests/helpers'

import TextContent from '.'
import textMock from './mock'

describe('<TextContent />', () => {
  it('should render the heading', () => {
    renderWithTheme(<TextContent {...textMock} />)
  })
})
