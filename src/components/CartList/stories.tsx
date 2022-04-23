import CartList, { CartListProps } from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

import mockItems from './mock'

export default {
  title: 'CartList',
  component: CartList,
  argTypes: {
    cartContextValue: {
      type: 'symbol'
    },
    items: {
      type: 'symbol'
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)

Default.args = {
  total: 'R$ 330,00',
  cartContextValue: {
    items: mockItems
  }
}

export const WithButton: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} hasButton />
  </div>
)

WithButton.args = {
  total: 'R$ 330,00',
  cartContextValue: {
    items: mockItems
  }
}

export const Empty: Story<CartListProps> = () => (
  <div style={{ maxWidth: 800 }}>
    <CartList />
  </div>
)
