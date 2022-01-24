import Footer from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Footer',
  component: Footer
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer />
  </div>
)
