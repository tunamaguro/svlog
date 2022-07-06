import {
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  ButtonGroupProps,
  forwardRef,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

export const TurnRadioButton = forwardRef<BoxProps, 'div'>((props, ref) => {
  const { state, getInputProps, getCheckboxProps } = useRadio(props)
  const input = getInputProps({ ref })
  const checkbox = getCheckboxProps()

  const { children, ..._rest } = props

  return (
    <Box as="label" cursor="pointer">
      <input {...input} hidden />
      <Button
        as="div"
        {...checkbox}
        colorScheme={state.isChecked ? 'teal' : 'blackAlpha'}
      >
        {children}
      </Button>
    </Box>
  )
})

type RthTurnToggle = ButtonGroupProps & UseControllerProps<FieldValues>

const firstOrSecond = [
  { en: 'first', ja: '先攻' },
  { en: 'second', ja: '後攻' },
]

export const TurnToggle = forwardRef<RthTurnToggle, 'div'>(
  ({ control, name, defaultValue, ...props }, ref) => {
    const { field } = useController({
      name,
      control,
      defaultValue,
    })

    const { getRootProps, getRadioProps } = useRadioGroup({
      ...field,
    })

    const group = getRootProps()

    return (
      <ButtonGroup {...group} spacing="4" {...props}>
        {firstOrSecond.map((ele) => {
          const radio = getRadioProps({ value: ele.en })
          return (
            // @ts-expect-error できれば使いたくないので、解決法を思いついたら修正
            <TurnRadioButton key={`toggle-${ele}`} {...radio}>
              {ele.ja}
            </TurnRadioButton>
          )
        })}
      </ButtonGroup>
    )
  },
)
