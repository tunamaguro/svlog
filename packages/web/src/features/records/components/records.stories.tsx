import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { resultHandler } from '@/mocks/results'

import { Default as RowStory } from './recordRow.stories'
import { Records } from './records'

const meta: ComponentMeta<typeof Records> = {
  component: Records,
}

export default meta

type Story = ComponentStoryObj<typeof Records>

export const Default: Story = {
  args: {
    onEdit: RowStory.args?.onEdit,
    onNewRecord: action('onNewRecord'),
  },
  parameters: {
    msw: {
      handlers: [resultHandler.success],
    },
  },
}
