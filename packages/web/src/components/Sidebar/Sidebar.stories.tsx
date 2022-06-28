import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Sidebar } from './Sidebar'

const meta: ComponentMeta<typeof Sidebar> = {
  component: Sidebar,
  decorators: [
    (Story) => (
      <Box w="sm">
        <Story />
      </Box>
    ),
  ],
}

export default meta

type Story = ComponentStoryObj<typeof Sidebar>

export const Default: Story = {}
