import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { Leaders, LeadersArray } from '@/models/leaders'
import { theme } from '@/providers/theme'

type dataType = { [P in Leaders]?: number } & { date: number }

const getColor = (leader: Leaders): string => theme.colors.leaders[leader] ?? ''

const textColor = theme.colors.text.white70

type ChangeOfWinRatioProps = { data: dataType[] }
export const ChangeOfWinRatio = ({ data }: ChangeOfWinRatioProps) => (
  <ResponsiveContainer height="100%" width="100%">
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="date"
        scale="time"
        domain={['dataMin', 'dataMax']}
        type="number"
        tick={{ fill: textColor }}
        tickFormatter={(unixTime) => new Date(unixTime).toLocaleDateString()}
      />
      <YAxis
        tick={{ fill: textColor }}
        tickFormatter={(percent) => `${percent}%`}
      />
      <Tooltip
        labelStyle={{ color: theme.colors.primary.black }}
        labelFormatter={(unixTime) => new Date(unixTime).toLocaleDateString()}
      />
      {LeadersArray.map((leader) => (
        <Line
          key={`win-ratio-line-${leader}`}
          type="monotone"
          dataKey={leader}
          stroke={getColor(leader)}
        />
      ))}
    </LineChart>
  </ResponsiveContainer>
)
