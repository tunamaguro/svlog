import { Box, Flex, Spacer } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { BiLogOut } from 'react-icons/bi'
import { SiGoogleanalytics } from 'react-icons/si'
import { TbClipboardText } from 'react-icons/tb'

import { Logo } from '../Logo'
import { SidebarFeature } from '../SidebarFeature'

type SidebarProps = {
  children: ReactNode
}

export const Sidebar = ({ children }: SidebarProps) => (
  <Flex position="relative" direction="row" alignItems="stretch">
    <Flex
      position="sticky"
      top="0"
      h="100vh"
      minW="sm"
      backgroundColor="primary.gray"
      direction="column"
      justifyContent="stretch"
      alignItems="center"
    >
      <Logo my="16" />
      <Box w="full" as="nav">
        <SidebarFeature to="#" name="Dashboard" icon={SiGoogleanalytics} />
        <SidebarFeature to="#" name="Records" icon={TbClipboardText} />
      </Box>
      <Spacer />
      <Box w="full" pb="28">
        <SidebarFeature to="#" name="Log out" icon={BiLogOut} />
      </Box>
    </Flex>
    <Box p="6" flexGrow="1">
      {children}
    </Box>
  </Flex>
)
