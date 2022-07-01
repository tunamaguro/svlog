import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { ChangeOfWinRatio } from './ChangeOfWinRatio'

const meta: ComponentMeta<typeof ChangeOfWinRatio> = {
  component: ChangeOfWinRatio,
  decorators: [
    (Story) => (
      <Box w="3xl" h="2xs">
        <Story />
      </Box>
    ),
  ],
  args: {
    data: [
      {
        date: new Date('2022-01-01').getTime(),
        forestcraft: 50,
        bloodcraft: 23.5,
      },
      {
        date: new Date('2022-01-02').getTime(),
        forestcraft: 75,
        bloodcraft: 60,
      },
      {
        date: new Date('2022-01-06').getTime(),
        forestcraft: 32,
        bloodcraft: 58,
      },
      {
        date: new Date('2022-01-07').getTime(),
        forestcraft: 48,
        bloodcraft: 70,
      },
    ],
  },
}

export default meta

type Story = ComponentStoryObj<typeof ChangeOfWinRatio>

export const Default: Story = {}
