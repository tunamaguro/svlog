import { Flex, Icon, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import type { IconType } from 'react-icons'

type SidebarFeatureProps = {
  name: string
  icon: IconType
  to: string
}
export const SidebarFeature = ({ icon, name, to }: SidebarFeatureProps) => (
  <NextLink href={to} passHref>
    <Flex
      as="a"
      backgroundColor="primary.gray"
      py="4"
      px="20"
      fontSize="2xl"
      _hover={{
        backgroundColor: 'primary.black',
        textColor: 'text.white100',
      }}
    >
      <Flex alignItems="center">
        <Icon as={icon} boxSize="24px" />
        <Text ml="4">{name}</Text>
      </Flex>
    </Flex>
  </NextLink>
)
