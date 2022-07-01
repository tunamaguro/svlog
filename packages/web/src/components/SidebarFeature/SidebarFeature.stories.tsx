import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { SiGoogleanalytics } from 'react-icons/si'

import { SidebarFeature } from './SidebarFeature'

const meta: ComponentMeta<typeof SidebarFeature> = {
  component: SidebarFeature,
}

export default meta

type Story = ComponentStoryObj<typeof SidebarFeature>

export const Default: Story = {
  args: {
    to: '#',
    name: 'Dashboard',
    icon: SiGoogleanalytics,
  },
}
