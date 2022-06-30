import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { LeadersWinRatio } from './LeadersWinRatio'

const meta: ComponentMeta<typeof LeadersWinRatio> = {
  component: LeadersWinRatio,
  args: {
    data: [
      { leader: 'forestcraft', value: 50 },
      { leader: 'runecraft', value: 20 },
      { leader: 'swordcraft', value: 100 },
      { leader: 'bloodcraft', value: 0 },
    ],
  },
  decorators: [
    (Story) => (
      <Box w="xl" h="2xs">
        <Story />
      </Box>
    ),
  ],
}

export default meta

type Story = ComponentStoryObj<typeof LeadersWinRatio>

export const Default: Story = {}
