import { DateTime } from 'luxon'

import {
  RatioByDateInput,
  RatioByLeaderInput,
  WinRatioInput,
} from '@/components/Charts'
import { useAggregateResultQuery } from '@/generated/graphql'
import { Leaders } from '@/models/leaders'

const round = (value: number, digit = 0) => parseFloat(value.toFixed(digit))

const parseAggregate = (win = 0, lose = 0) => {
  const total = win + lose
  const ratio = total === 0 ? 0 : round(win / total, 2) * 100
  return {
    win,
    lose,
    total,
    ratio,
  }
}
export const useDashboard = () => {
  const [{ data }] = useAggregateResultQuery()

  if (!data) throw new Error('Unexpected Error')

  const resultsAgg = parseAggregate(
    data.win_aggregate.aggregate?.count,
    data.lose_aggregate.aggregate?.count,
  )

  const winRatioInput: [WinRatioInput, WinRatioInput] = [
    { name: 'win', value: resultsAgg.win },
    { name: 'lose', value: resultsAgg.lose },
  ]

  const leadersAgg = data.leaders
    .map((ele) => {
      const tmp = parseAggregate(
        ele.win.aggregate?.count,
        ele.lose.aggregate?.count,
      )

      return {
        leader: ele.leader_en as Leaders,
        ...tmp,
      }
    })
    .filter((ele) => ele.win > 0 || ele.lose > 0)

  const leaderWinRatioInput: RatioByLeaderInput[] = leadersAgg.map((ele) => ({
    leader: ele.leader as Leaders,
    value: ele.ratio,
  }))

  const ratioByDateInput: RatioByDateInput[] =
    data.result_aggregation_by_day.map((ele) => {
      const dt = DateTime.fromISO(ele.created_at ?? '')
      const unix = dt.toUnixInteger()
      const tmp = parseAggregate(ele.win ?? 0, ele.lose ?? 0)
      return {
        date: unix,
        swordcraft: tmp.ratio,
      }
    })

  return {
    winRatioInput,
    leaderWinRatioInput,
    leadersDetail: leadersAgg,
    ratioByDateInput,
  }
}
