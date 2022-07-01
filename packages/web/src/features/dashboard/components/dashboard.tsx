import { Box, Grid, Heading, HeadingProps } from '@chakra-ui/react'

import {
  ChangeOfWinRatio,
  RatioByDateInput,
} from '@/components/Charts/ChangeOfWinRatio'
import {
  LeadersWinRatio,
  RatioByLeaderInput,
} from '@/components/Charts/LeadersWinRatio'
import {
  ResultDetail,
  ResultDetailInput,
} from '@/components/Charts/ResultDetail'
import { WinRatio } from '@/components/Charts/WinRatio'
import { WinRatioInput } from '@/components/Charts/WinRatio/types'

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

type DashboardProps = {
  winRatioInput: [WinRatioInput, WinRatioInput]
  ratioByLeader: RatioByLeaderInput[]
  changeOfRatio: RatioByDateInput[]
  detail: ResultDetailInput[]
}

export const Dashboard = ({
  winRatioInput,
  ratioByLeader,
  changeOfRatio,
  detail,
}: DashboardProps) => (
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
        <LeadersWinRatio data={ratioByLeader} />
      </Box>
    </ItemCell>
    <ItemCell colSpan={6}>
      <SectionTitle>勝率の推移</SectionTitle>
      <Box h="xs">
        <ChangeOfWinRatio data={changeOfRatio} />
      </Box>
    </ItemCell>
    <ItemCell colSpan={6}>
      <SectionTitle>対戦相手別勝率</SectionTitle>
      <ResultDetail data={detail} />
    </ItemCell>
  </Grid>
)
