import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { ComponentType } from 'react'
import { useForm } from 'react-hook-form'

import { LeaderToggle } from './leaderToggle'

const meta: ComponentMeta<typeof LeaderToggle> = {
  component: LeaderToggle,
}

export default meta

type Story = ComponentStoryObj<typeof LeaderToggle>

const Template = (props: ComponentType<typeof LeaderToggle>) => {
  const { control } = useForm()

  return (
    <LeaderToggle
      name="example"
      defaultValue="forestcraft"
      control={control}
      {...props}
    />
  )
}

export const Default: Story = {
  // @ts-expect-error 本当は使いたくないので使わないでいい感じに表示させられる方法募集
  render: (props) => <Template {...props} />,
}
