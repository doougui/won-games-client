import ExploreSidebar from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = () => <ExploreSidebar />
