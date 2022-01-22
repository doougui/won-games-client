import Menu from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: Story = () => <Menu />
