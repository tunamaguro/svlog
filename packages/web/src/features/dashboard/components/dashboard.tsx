import { Box, Grid, Heading, HeadingProps } from '@chakra-ui/react'

import {
  ChangeOfWinRatio,
  LeadersWinRatio,
  ResultDetail,
  WinRatio,
} from '@/components/Charts'

import { useDashboard } from '../hooks/useAggregateResult'
import { ItemCell } from './ItemCell'

const SectionTitle = (props: HeadingProps) => (
  <Heading
    as="h2"
    textColor="text.white100"
    fontWeight="medium"
    fontSize="xl"
    {...props}
  />
)

// TODO:これはまだ使っちゃいけない
// 日付を渡してそこから集計するようにする
export const Dashboard = () => {
  const {
    leaderWinRatioInput,
    leadersDetail,
    ratioByDateInput,
    winRatioInput,
  } = useDashboard()
  return (
    <Grid templateColumns="repeat(6,1fr)" gap={6}>
      <ItemCell colSpan={2}>
        <SectionTitle>勝率</SectionTitle>
        <Box h="2xs">
          <WinRatio data={winRatioInput} />
        </Box>
      </ItemCell>
      <ItemCell colSpan={4}>
        <SectionTitle>リーダ別勝率</SectionTitle>
        <Box h="2xs">
          <LeadersWinRatio data={leaderWinRatioInput} />
        </Box>
      </ItemCell>
      <ItemCell colSpan={6}>
        <SectionTitle>勝率の推移</SectionTitle>
        <Box h="xs">
          <ChangeOfWinRatio data={ratioByDateInput} />
        </Box>
      </ItemCell>
      <ItemCell colSpan={6}>
        <SectionTitle>戦績詳細</SectionTitle>
        <ResultDetail data={leadersDetail} />
      </ItemCell>
    </Grid>
  )
}
