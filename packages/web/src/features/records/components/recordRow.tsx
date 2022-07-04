import { IconButton, Stack, Text } from '@chakra-ui/react'
import { MouseEventHandler } from 'react'
import { HiOutlinePencil } from 'react-icons/hi'

import { LeaderIcon } from '@/components/LeaderIcons'
import { Leaders } from '@/models/leaders'

type RecordRowProps = {
  userLeader: Leaders
  isWin: boolean
  opponentLeader: Leaders
  onEdit?: MouseEventHandler<HTMLButtonElement>
}

export const RecordRow = ({
  userLeader,
  isWin,
  opponentLeader,
  onEdit,
}: RecordRowProps) => (
  <Stack py="4" direction="row" alignItems="center" spacing="5">
    <Text
      textColor={`secondary.${isWin ? 'red' : 'blue'}`}
      fontSize="2xl"
      fontWeight="bold"
    >
      {isWin ? 'Win' : 'Lose'}
    </Text>
    <LeaderIcon leader={userLeader} />
    <Text textColor="text.white100">{userLeader}</Text>
    <Text>vs</Text>
    <LeaderIcon leader={opponentLeader} />
    <Text textColor="text.white100">{opponentLeader}</Text>
    <IconButton
      onClick={onEdit}
      aria-label="edit record"
      as={HiOutlinePencil}
      variant="ghost"
      cursor="pointer"
      h="8"
    />
  </Stack>
)
