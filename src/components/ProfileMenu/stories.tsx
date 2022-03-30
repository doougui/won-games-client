import ProfileMenu from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = () => <ProfileMenu />
