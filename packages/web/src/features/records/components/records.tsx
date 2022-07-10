import {
  Box,
  Button,
  Flex,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react'
import { ComponentProps, MouseEventHandler } from 'react'
import { IoAddOutline } from 'react-icons/io5'

import { RecordRow } from './recordRow'

type RecordsProps = {
  data: Omit<ComponentProps<typeof RecordRow>, 'onEdit'>[]
  onNewRecord?: MouseEventHandler<HTMLButtonElement>
  onEdit?: ComponentProps<typeof RecordRow>['onEdit']
}

export const Records = ({ data, onNewRecord, onEdit }: RecordsProps) => (
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
    <VStack my="6" px="6" py="12" bg="primary.gray" divider={<StackDivider />}>
      {data.map((ele) => (
        <RecordRow
          key={`${JSON.stringify(ele)}`}
          isWin={ele.isWin}
          userLeader={ele.userLeader}
          opponentLeader={ele.opponentLeader}
          onEdit={onEdit}
        />
      ))}
    </VStack>
  </Box>
)
