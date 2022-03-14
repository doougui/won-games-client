import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'

import Gallery from '.'

describe('<Gallery />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Gallery items={[]} />)
  })
})
