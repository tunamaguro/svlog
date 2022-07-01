import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import ChangeOfWinRatio from '@/components/Charts/ChangeOfWinRatio/ChangeOfWinRatio.stories'
import LeadersWinRatio from '@/components/Charts/LeadersWinRatio/LeadersWinRatio.stories'
import ResultDetail from '@/components/Charts/ResultDetail/ResultDetail.stories'
import WinRatio from '@/components/Charts/WinRatio/WinRatio.stories'
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
  args: {
    changeOfRatio: ChangeOfWinRatio.args?.data,
    detail: ResultDetail.args?.data,
    ratioByLeader: LeadersWinRatio.args?.data,
    winRatioInput: WinRatio.args?.data,
  },
}

export default meta

type Story = ComponentStoryObj<typeof Dashboard>

export const Default: Story = {}
