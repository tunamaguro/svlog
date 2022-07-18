import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Pagination } from './pagination'

const meta: ComponentMeta<typeof Pagination> = {
  component: Pagination,
}

export default meta

type Story = ComponentStoryObj<typeof Pagination>

export const Default: Story = {}
