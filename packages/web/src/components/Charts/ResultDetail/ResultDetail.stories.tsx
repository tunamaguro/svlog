import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { LeadersArray } from '@/models/leaders'

import { ResultDetail } from './ResultDetail'

const meta: ComponentMeta<typeof ResultDetail> = {
  component: ResultDetail,
  decorators: [
    (Story) => (
      <Box bg="primary.gray">
        <Story />
      </Box>
    ),
  ],
  args: {
    data: LeadersArray.map((leader) => {
      const total = Math.random() * 1000
      const win = total * Math.random()
      const ratio = (win / total) * 100
      return { leader, total, win, ratio }
    }),
  },
}

export default meta

type Story = ComponentStoryObj<typeof ResultDetail>

export const Default: Story = {}
