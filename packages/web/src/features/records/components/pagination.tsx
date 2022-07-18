import {
  Button,
  ButtonGroup,
  ButtonGroupProps,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { ReactNode, useState } from 'react'

export type PaginationProps = {
  count: number
  defaultPage?: number
  renderItem?: ({
    page,
    children,
  }: {
    page: number
    children: ReactNode
  }) => JSX.Element
} & ButtonGroupProps

export const Pagination = ({
  count = 5,
  defaultPage = 0,
  renderItem,
  ...rest
}: PaginationProps) => {
  const [cursor, setCursor] = useState<number>(defaultPage + 1)

  const PageArray = Array(count)
    .fill(0)
    .map((_, index) => index + 1)

  const onChange = (goto: number) => setCursor(() => goto)

  const Stepper = renderItem ?? Button

  return (
    <ButtonGroup variant="ghost" colorScheme="whiteAlpha" {...rest}>
      <Wrap>
        {PageArray.map((v) => (
          <WrapItem key={`Pagination-${v}`} onClick={() => onChange(v)}>
            <Stepper page={v} variant={v === cursor ? 'outline' : 'ghost'}>
              {v}
            </Stepper>
          </WrapItem>
        ))}
      </Wrap>
    </ButtonGroup>
  )
}
