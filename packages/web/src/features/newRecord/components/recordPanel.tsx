import {
  Button,
  FormControl,
  FormErrorMessage,
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

import { formType, useNewRecordForm } from '../hooks/useNewRecordForm'
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

type Result = formType & { isWin: boolean }

type RecordPanelProps = {
  onWin?: (values: Result) => void
  onLose?: (values: Result) => void
}

export const RecordPanel = ({ onLose, onWin }: RecordPanelProps) => {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useNewRecordForm()

  return (
    <SimpleGrid columns={6} spacing={6} maxW="3xl" p="6">
      <GridItem colSpan={6}>
        <FormControl isInvalid={!!errors.userLeader}>
          <FormLabel>自分のリーダーを選択</FormLabel>
          <LeaderToggle control={control} name="userLeader" />
          <FormErrorMessage>{errors.userLeader?.message}</FormErrorMessage>
        </FormControl>
      </GridItem>
      <GridItem colSpan={6}>
        <FormControl isInvalid={!!errors.opponentLeader}>
          <FormLabel>相手のリーダーを選択</FormLabel>
          <LeaderToggle control={control} name="opponentLeader" />
          <FormErrorMessage>{errors.opponentLeader?.message}</FormErrorMessage>
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <FormControl textAlign="center" isInvalid={!!errors.isFirst}>
          <FormLabel>先攻・後攻</FormLabel>
          <TurnToggle name="isFirst" control={control} />
          <FormErrorMessage>{errors.isFirst?.message}</FormErrorMessage>
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <FormControl isInvalid={!!errors.format}>
          <FormLabel>フォーマット</FormLabel>
          <FormatSelect {...register('format')} />
          <FormErrorMessage>{errors.format?.message}</FormErrorMessage>
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <FormControl isInvalid={!!errors.endTurn}>
          <FormLabel>経過ターン</FormLabel>
          <NumberInput min={0} max={30}>
            <NumberInputField
              {...register('endTurn', { valueAsNumber: true })}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormErrorMessage>{errors.endTurn?.message}</FormErrorMessage>
        </FormControl>
      </GridItem>
      <GridItem colSpan={6}>
        <HStack justifyContent="center" spacing={10}>
          <Button
            colorScheme="blue"
            size="lg"
            onClick={handleSubmit((values) =>
              onLose?.({ ...values, isWin: false }),
            )}
          >
            敗北
          </Button>
          <Button
            colorScheme="red"
            size="lg"
            onClick={handleSubmit((values) =>
              onWin?.({ ...values, isWin: true }),
            )}
          >
            勝利
          </Button>
        </HStack>
      </GridItem>
    </SimpleGrid>
  )
}
