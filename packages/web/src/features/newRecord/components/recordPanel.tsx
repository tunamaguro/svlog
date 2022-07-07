import {
  Button,
  FormControl,
  FormLabel as ChakraFormLabel,
  FormLabelProps,
  forwardRef,
  GridItem,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  SelectProps,
  SimpleGrid,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { LeaderToggle } from './leaderToggle'
import { TurnToggle } from './toggleTurn'

const FormatSelect = forwardRef<SelectProps, 'input'>((props, ref) => (
  <Select placeholder="フォーマットを選択してください" {...props} ref={ref}>
    <option value="Rotation">ローテーション</option>
    <option value="Unlimited">アンリミテッド</option>
  </Select>
))

const FormLabel = (props: FormLabelProps) => (
  <ChakraFormLabel fontSize="xl" textColor="text.white100" {...props} />
)

export const RecordPanel = () => {
  const { control } = useForm()

  return (
    <SimpleGrid columns={6} spacing={6} maxW="3xl" p="6">
      <GridItem colSpan={6}>
        <FormControl>
          <FormLabel>自分のリーダーを選択</FormLabel>
          <LeaderToggle control={control} name="userLeader" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={6}>
        <FormControl>
          <FormLabel>相手のリーダーを選択</FormLabel>
          <LeaderToggle control={control} name="opponentLeader" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <FormControl textAlign="center">
          <FormLabel>先攻・後攻</FormLabel>
          <TurnToggle name="firstOrSecond" control={control} />
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <FormControl>
          <FormLabel>フォーマット</FormLabel>
          <FormatSelect />
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <FormLabel>
          <FormLabel>経過ターン</FormLabel>
          <NumberInput min={0} max={30}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormLabel>
      </GridItem>
      <GridItem colSpan={6}>
        <HStack justifyContent="center" spacing={10}>
          <Button colorScheme="blue" size="lg">
            敗北
          </Button>
          <Button colorScheme="red" size="lg">
            勝利
          </Button>
        </HStack>
      </GridItem>
    </SimpleGrid>
  )
}
