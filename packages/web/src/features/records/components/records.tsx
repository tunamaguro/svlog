import {
  Box,
  Button,
  Flex,
  Spacer,
  Spinner,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react'
import { ComponentProps, MouseEventHandler } from 'react'
import { IoAddOutline } from 'react-icons/io5'

import { useGetResultsQuery } from '@/generated/graphql'

import { RecordRow } from './recordRow'

type RecordsProps = {
  data: Omit<ComponentProps<typeof RecordRow>, 'onEdit'>[]
  onNewRecord?: MouseEventHandler<HTMLButtonElement>
  onEdit?: ComponentProps<typeof RecordRow>['onEdit']
}

export const Records = ({ data, onNewRecord, onEdit }: RecordsProps) => {
  const [{ fetching, data: gqldata }] = useGetResultsQuery()

  return (
    <Box maxW="2xl" p="6">
      <Flex>
        <Text as="h2" fontSize="large" textColor="text.white100" my="auto">
          戦績一覧
        </Text>
        <Spacer />
        <Button
          colorScheme="whatsapp"
          leftIcon={<IoAddOutline />}
          onClick={onNewRecord}
        >
          New Record
        </Button>
      </Flex>
      <VStack
        my="6"
        px="6"
        py="12"
        bg="primary.gray"
        divider={<StackDivider />}
      >
        {fetching && <Spinner />}
        {gqldata &&
          gqldata.battle_results.map((ele) => (
            <RecordRow
              key={ele.result_id}
              isWin={ele.is_win}
              opponentLeader={ele.opponent_leader}
              userLeader={ele.user_leader}
            />
          ))}
      </VStack>
    </Box>
  )
}
