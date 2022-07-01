import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'

import type { Leaders } from '@/models/leaders'

export type dataType = {
  leader: Leaders
  total: number
  win: number
  ratio: number
}

type ResultDetailProps = { data: dataType[] }
export const ResultDetail = ({ data }: ResultDetailProps) => (
  <TableContainer>
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th textColor="text.white100">リーダー</Th>
          <Th textColor="text.white100" isNumeric>
            対戦数
          </Th>
          <Th textColor="text.white100" isNumeric>
            勝利数
          </Th>
          <Th textColor="text.white100" isNumeric>
            勝率
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((result) => (
          <Tr key={`result-table-${result.leader}`}>
            <Td>{result.leader}</Td>
            <Td isNumeric>{result.total.toFixed(0)}</Td>
            <Td isNumeric>{result.win.toFixed(0)}</Td>
            <Td isNumeric>{result.ratio.toFixed(1)}%</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </TableContainer>
)
