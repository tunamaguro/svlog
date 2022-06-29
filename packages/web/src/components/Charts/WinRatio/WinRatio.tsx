import { Box } from '@chakra-ui/react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts'

import { theme } from '@/providers/theme'

type dataType = { name: 'win' | 'lose'; value: number }

const getColor = (name: dataType['name']): string => {
  switch (name) {
    case 'win': {
      return theme.colors.secondary.red
    }
    case 'lose': {
      return theme.colors.secondary.blue
    }
    default: {
      return ''
    }
  }
}

type WinRatioProps = { data: [dataType, dataType] }

export const WinRatio = ({ data }: WinRatioProps) => (
  <Box boxSize="2xs" pos="relative">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          // 右回転12時始まりに設定
          startAngle={90}
          endAngle={-270}
          innerRadius={16 * 4.5}
        >
          {data.map(({ name }) => (
            <Cell key={`WinRatioCell-${name}`} fill={getColor(name)} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
    <Box pos="absolute" top="45%" left="50%" transform="translate(-50%,-50%)">
      <Box as="span" textColor="text.white100" fontSize="4xl">
        72.5
      </Box>
      <Box as="span" fontSize="sm" fontWeight="">
        %
      </Box>
    </Box>
  </Box>
)
