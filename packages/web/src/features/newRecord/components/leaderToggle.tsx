import {
  Box,
  BoxProps,
  forwardRef,
  useRadio,
  useRadioGroup,
  Wrap,
} from '@chakra-ui/react'

import { LeaderIcon } from '@/components/LeaderIcons'
import { LeadersArray } from '@/models/leaders'

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
      <Box
        {...checkbox}
        position="relative"
        mx="5"
        rounded="full"
        w="fit-content"
        bg={state.isChecked ? 'text.white100' : 'transparent'}
      >
        <Box
          position="absolute"
          w="full"
          h="full"
          top="0"
          left="0"
          bg={state.isChecked ? 'transparent' : 'blackAlpha.600'}
          borderRadius="full"
          {...rest}
        />
        {children}
      </Box>
    </Box>
  )
})

export const LeaderToggle = () => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'leaders',
    defaultValue: 'forestcraft',
    onChange: console.log,
  })

  const group = getRootProps()

  return (
    <Wrap {...group}>
      {LeadersArray.map((leader) => {
        const radio = getRadioProps({ value: leader })

        return (
          // できれば使いたくないので、解決法を思いついたら修正
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          <LeaderRadio key={`${leader}-toggle`} {...radio}>
            <LeaderIcon leader={leader} />
          </LeaderRadio>
        )
      })}
    </Wrap>
  )
}
