import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Sidebar } from './Sidebar'

const meta: ComponentMeta<typeof Sidebar> = {
  component: Sidebar,
}

export default meta

type Story = ComponentStoryObj<typeof Sidebar>

export const Default: Story = {}
