import { Box } from '@chakra-ui/react'
import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { RecordRow } from './recordRow'

const meta: ComponentMeta<typeof RecordRow> = {
  component: RecordRow,
  decorators: [
    (Story) => (
      <Box maxW="2xl">
        <Story />
      </Box>
    ),
  ],
}

export default meta

type Story = ComponentStoryObj<typeof RecordRow>

export const Default: Story = {
  args: {
    isWin: true,
    userLeader: 'swordcraft',
    opponentLeader: 'shadowcraft',
    onEdit: action('onEdit'),
  },
}
