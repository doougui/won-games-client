import Highlight, { HighlightProps } from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Red Dead is back',
    subtitle: 'An epic tale of honor and loyalty at the dawn of the modern age',
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />
