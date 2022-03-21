import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'

import Game from '.'

describe('<Game />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <Game
        cover="https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg"
        gameInfo={{
          title: 'Cyberpunk 2077',
          price: '59.00',
          description:
            'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality'
        }}
      />
    )
  })
})