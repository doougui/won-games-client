import GameItem, { GameItemProps } from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  },
  parameters: {
    backgrounds: {
      default: 'won-light'
    }
  }
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />
