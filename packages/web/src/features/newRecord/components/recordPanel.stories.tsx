import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { RecordPanel } from './recordPanel'

const meta: ComponentMeta<typeof RecordPanel> = {
  component: RecordPanel,
}

export default meta

type Story = ComponentStoryObj<typeof RecordPanel>

export const Default: Story = {
  args: {
    onLose: action('onLose'),
    onWin: action('onWin'),
  },
}
