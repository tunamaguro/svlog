import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { LeaderToggle } from './leaderToggle'

const meta: ComponentMeta<typeof LeaderToggle> = {
  component: LeaderToggle,
}

export default meta

type Story = ComponentStoryObj<typeof LeaderToggle>

export const Default: Story = {}
