import { Flex, FlexProps, Image, Text } from '@chakra-ui/react'

export const Logo = (props: FlexProps) => (
  <Flex direction="column" alignItems="center" w="140px" {...props}>
    <Image objectFit="cover" src="/logo.png" alt="logo" />
    <Text textColor="text.white100" fontWeight="bold" fontSize="2xl">
      svlog
    </Text>
  </Flex>
)
