import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  YAxis,
} from 'recharts'

import { theme } from '@/providers/theme'

const textColor: string = theme.colors.text.white70

export type RatioByLeaderInput = { leader: string; value: number }

const getColor = (name: string): string => theme.colors.leaders[name] ?? ''

const labelFormatter = (value: unknown) => `${value}%`

type LeadersWinRatioProps = { data: RatioByLeaderInput[] }
export const LeadersWinRatio = ({ data }: LeadersWinRatioProps) => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data} margin={{ top: 20 }}>
      <CartesianGrid vertical={false} />
      <YAxis tickFormatter={labelFormatter} tick={{ fill: textColor }} />
      <Bar
        dataKey="value"
        label={{ fill: textColor, formatter: labelFormatter }}
      >
        <LabelList dataKey="leader" position="top" />
        {data.map((ele) => (
          <Cell key={`ratio-bar-${ele.leader}`} fill={getColor(ele.leader)} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
)
