import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { LeaderIcon } from './LeaderIcons'

const meta: ComponentMeta<typeof LeaderIcon> = {
  component: LeaderIcon,
}

export default meta

type Story = ComponentStoryObj<typeof LeaderIcon>

export const Default: Story = {
  args: {
    leader: 'forestcraft',
  },
}
