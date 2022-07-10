import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { ComponentType } from 'react'
import { useForm } from 'react-hook-form'

import { TurnToggle } from './toggleTurn'

const meta: ComponentMeta<typeof TurnToggle> = {
  component: TurnToggle,
  decorators: [
    (Story) => (
      <Box bg="primary.gray">
        <Story />
      </Box>
    ),
  ],
}
export default meta

type Story = ComponentStoryObj<typeof TurnToggle>

const Template = (props: ComponentType<typeof TurnToggle>) => {
  const { control } = useForm()

  return <TurnToggle name="example" control={control} {...props} />
}

export const Default: Story = {
  // @ts-expect-error 本当は使いたくないので使わないでいい感じに表示させられる方法募集
  render: (props) => <Template {...props} />,
}
