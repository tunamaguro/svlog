import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { WinRatio } from './WinRatio'

const meta: ComponentMeta<typeof WinRatio> = {
  component: WinRatio,
  decorators: [
    (Story) => (
      <Box boxSize="3xs">
        <Story />
      </Box>
    ),
  ],
  args: {
    data: [
      { name: 'win', value: 400 },
      { name: 'lose', value: 300 },
    ],
  },
}

export default meta

type Story = ComponentStoryObj<typeof WinRatio>

export const Default: Story = {}
