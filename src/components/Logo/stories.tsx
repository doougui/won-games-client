import Logo, { LogoProps } from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />
