import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Default as RowStory } from './recordRow.stories'
import { Records } from './records'

const meta: ComponentMeta<typeof Records> = {
  component: Records,
}

export default meta

type Story = ComponentStoryObj<typeof Records>

export const Default: Story = {
  args: {
    data: [
      { isWin: true, userLeader: 'forestcraft', opponentLeader: 'swordcraft' },
      { isWin: false, userLeader: 'havencraft', opponentLeader: 'portalcraft' },
      { isWin: true, userLeader: 'shadowcraft', opponentLeader: 'bloodcraft' },
    ],
    onEdit: RowStory.args?.onEdit,
    onNewRecord: action('onNewRecord'),
  },
}
