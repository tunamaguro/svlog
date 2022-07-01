import { GridItem, GridItemProps } from '@chakra-ui/react'

export const ItemCell = (props: GridItemProps) => (
  <GridItem
    backgroundColor="primary.gray"
    borderRadius="lg"
    px="6"
    py="4"
    {...props}
  />
)
