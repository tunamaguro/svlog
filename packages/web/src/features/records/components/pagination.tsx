import {
  Button,
  ButtonGroup,
  ButtonGroupProps,
  IconButton,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { useState } from 'react'
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md'

export type PaginationProps = {
  count: number
  defaultPage?: number
} & ButtonGroupProps

export const Pagination = ({
  count = 5,
  defaultPage = 0,
  ...rest
}: PaginationProps) => {
  const [cursor, setCursor] = useState<number>(defaultPage + 1)

  const PageArray = Array(count)
    .fill(0)
    .map((_, index) => index + 1)

  const onNext = () => setCursor((prev) => prev + 1)
  const onBefore = () => setCursor((prev) => prev - 1)
  const onChange = (goto: number) => setCursor(() => goto)

  return (
    <ButtonGroup variant="ghost" colorScheme="whiteAlpha" {...rest}>
      <Wrap>
        <WrapItem>
          <IconButton
            aria-label="Go to previous page"
            isDisabled={cursor === 1}
            onClick={onBefore}
            icon={<MdOutlineNavigateBefore />}
          />
        </WrapItem>
        {PageArray.map((v) => (
          <WrapItem key={`Pagination-${v}`} onClick={() => onChange(v)}>
            <Button variant={cursor === v ? 'outline' : 'ghost'}>{v}</Button>
          </WrapItem>
        ))}
        <WrapItem>
          <IconButton
            aria-label="Go to next page"
            isDisabled={cursor === count}
            onClick={onNext}
            icon={<MdOutlineNavigateNext />}
          />
        </WrapItem>
      </Wrap>
    </ButtonGroup>
  )
}
