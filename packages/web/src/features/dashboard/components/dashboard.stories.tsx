import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Suspense } from 'react'

import ChangeOfWinRatio from '@/components/Charts/ChangeOfWinRatio/ChangeOfWinRatio.stories'
import LeadersWinRatio from '@/components/Charts/LeadersWinRatio/LeadersWinRatio.stories'
import ResultDetail from '@/components/Charts/ResultDetail/ResultDetail.stories'
import WinRatio from '@/components/Charts/WinRatio/WinRatio.stories'
import { Sidebar } from '@/components/Sidebar'
import { chartsHandler } from '@/mocks/charts'

import { Dashboard } from './dashboard'

const WithSuspense = (props: JSX.IntrinsicAttributes) => (
  <Suspense fallback={<Box>Now fallback...</Box>}>
    <Dashboard {...props} />
  </Suspense>
)

const meta: ComponentMeta<typeof Dashboard> = {
  component: WithSuspense,
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

export const Default: Story = {
  args: {
    changeOfRatio: ChangeOfWinRatio.args?.data,
    detail: ResultDetail.args?.data,
    ratioByLeader: LeadersWinRatio.args?.data,
    winRatioInput: WinRatio.args?.data,
  },
  parameters: {
    msw: {
      handlers: [chartsHandler.success],
    },
  },
}
