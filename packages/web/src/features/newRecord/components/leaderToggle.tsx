import {
  Box,
  BoxProps,
  forwardRef,
  useRadio,
  useRadioGroup,
  Wrap,
} from '@chakra-ui/react'
import { useController, UseControllerProps } from 'react-hook-form'

import { LeaderIcon } from '@/components/LeaderIcons'
import { LeadersArray } from '@/models/leaders'

import { formType } from '../hooks/useNewRecordForm'

/**
 * useRadioを使って非活性時に黒いフィルターをかける
 */
const LeaderRadio = forwardRef<BoxProps, 'div'>((props, ref) => {
  const { state, getInputProps, getCheckboxProps } = useRadio(props)
  const input = getInputProps({ ref })
  const checkbox = getCheckboxProps()

  const { children, ...rest } = props

  return (
    <Box as="label" cursor="pointer">
      <input {...input} hidden />
      <Box {...checkbox} position="relative" {...rest}>
        <Box
          position="absolute"
          w="full"
          h="full"
          top="0"
          left="0"
          bg={state.isChecked ? 'transparent' : 'blackAlpha.600'}
          borderRadius="full"
        />
        {children}
      </Box>
    </Box>
  )
})

type RthLeaderToggle = BoxProps & UseControllerProps<formType>

export const LeaderToggle = forwardRef<RthLeaderToggle, 'div'>(
  ({ control, name, defaultValue, ...props }) => {
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
      <Wrap {...group} justify="center" spacing="10">
        {LeadersArray.map((leader) => {
          const radio = getRadioProps({ value: leader })

          return (
            // @ts-expect-error できれば使いたくないので、解決法を思いついたら修正
            <LeaderRadio key={`${name}-${leader}-toggle`} {...radio}>
              <LeaderIcon leader={leader} />
            </LeaderRadio>
          )
        })}
      </Wrap>
    )
  },
)
