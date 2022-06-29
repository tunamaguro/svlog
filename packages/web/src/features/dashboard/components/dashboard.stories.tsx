import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

// eslint-disable-next-line import/no-unresolved
import { Sidebar } from '@/components/Sidebar'

import { Dashboard } from './dashboard'

const meta: ComponentMeta<typeof Dashboard> = {
  component: Dashboard,
  decorators: [
    // 左にサイドバーがある想定
    (Story) => (
      <Sidebar>
        <Story />
      </Sidebar>
    ),
  ],
}

export default meta

type Story = ComponentStoryObj<typeof Dashboard>

export const Default: Story = {}
