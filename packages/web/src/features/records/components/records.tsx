import {
  Box,
  Button,
  Center,
  Flex,
  Spacer,
  Spinner,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react'
import { ComponentProps, MouseEventHandler, Suspense } from 'react'
import { IoAddOutline } from 'react-icons/io5'

import { useGetResultsQuery } from '@/generated/graphql'

import { Pagination } from './pagination'
import { RecordRow } from './recordRow'

const Results = () => {
  const [{ data }] = useGetResultsQuery()
  const pages = data?.battle_results_aggregate.aggregate?.count ?? 1
  return (
    <VStack my="6" px="6" py="12" bg="primary.gray" divider={<StackDivider />}>
      {data?.battle_results.map((ele) => (
        <RecordRow
          key={ele.result_id}
          isWin={ele.is_win}
          opponentLeader={ele.opponent_leader}
          userLeader={ele.user_leader}
        />
      ))}
      <Pagination count={Math.ceil(pages / 30)} />
    </VStack>
  )
}

type RecordsProps = {
  onNewRecord?: MouseEventHandler<HTMLButtonElement>
  onEdit?: ComponentProps<typeof RecordRow>['onEdit']
}

export const Records = ({ onNewRecord, onEdit }: RecordsProps) => (
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
    <Suspense
      fallback={
        <Center px="6">
          <Spinner />
        </Center>
      }
    >
      <Results />
    </Suspense>
  </Box>
)
