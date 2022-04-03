import CartIcon, { CartIconProps } from '.'
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

export const Default: Story<CartIconProps> = (args) => <CartIcon {...args} />

export const WithItems: Story<CartIconProps> = (args) => <CartIcon {...args} />

WithItems.args = {
  quantity: 3
}
