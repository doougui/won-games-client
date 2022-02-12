import Checkbox, { CheckboxProps } from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<CheckboxProps> = (args) => <Checkbox {...args} />
