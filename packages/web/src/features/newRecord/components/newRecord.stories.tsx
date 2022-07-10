import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Sidebar } from '@/components/Sidebar'

import { NewRecord } from './newRecord'

const meta: ComponentMeta<typeof NewRecord> = {
  component: NewRecord,
  decorators: [
    (Story) => (
      <Sidebar>
        <Story />
      </Sidebar>
    ),
  ],
}

export default meta

type Story = ComponentStoryObj<typeof NewRecord>

export const Default: Story = {}
