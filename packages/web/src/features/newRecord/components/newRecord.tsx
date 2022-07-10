import { Box, Button, Flex, Spacer, Text, VStack } from '@chakra-ui/react'
import { TbArrowBack } from 'react-icons/tb'

import { RecordPanel } from './recordPanel'

export const NewRecord = () => (
  <VStack alignItems="stretch" maxW="fit-content" mx="auto" mt="24" spacing="6">
    <Flex>
      <Text as="h2" fontSize="large" textColor="text.white100">
        戦績登録
      </Text>
      <Spacer />
      <Button as="a" variant="link" cursor="pointer">
        <TbArrowBack />
        戻る
      </Button>
    </Flex>
    <Box bg="primary.gray" borderRadius="lg" w="fit-content">
      <RecordPanel />
    </Box>
  </VStack>
)
