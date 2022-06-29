import { Grid, Heading, HeadingProps,Skeleton } from '@chakra-ui/react'

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

export const Dashboard = () => (
  <Grid templateColumns="repeat(6,1fr)" gap={6}>
    <ItemCell colSpan={2}>
      <SectionTitle>勝率</SectionTitle>
      <Skeleton w="3xs" h="3xs" mx="auto" />
    </ItemCell>
    <ItemCell colSpan={4}>
      <SectionTitle>リーダ別勝率</SectionTitle>
    </ItemCell>
    <ItemCell colSpan={6}>
      <SectionTitle>勝率の推移</SectionTitle>
      <Skeleton w="3xs" h="3xs" mx="auto" />
    </ItemCell>
    <ItemCell colSpan={6}>
      <SectionTitle>対戦相手別勝率</SectionTitle>
      <Skeleton w="3xs" h="3xs" mx="auto" />
    </ItemCell>
  </Grid>
)
