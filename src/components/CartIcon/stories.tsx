import CartIcon from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = () => <CartIcon />

export const WithItems: Story = (args) => <CartIcon {...args} />

WithItems.args = {
  quantity: 3
}
