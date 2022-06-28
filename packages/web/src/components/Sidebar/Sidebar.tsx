import { Box, Flex, Spacer } from '@chakra-ui/react'
import { BiLogOut } from 'react-icons/bi'
import { SiGoogleanalytics } from 'react-icons/si'
import { TbClipboardText } from 'react-icons/tb'
import { VscGraphLine } from 'react-icons/vsc'

import { Logo } from '../Logo'
import { SidebarFeature } from '../SidebarFeature'

export const Sidebar = () => (
  <Flex
    minH="100vh"
    backgroundColor="primary.gray"
    direction="column"
    justifyContent="stretch"
    alignItems="center"
  >
    <Logo my="16" />
    <Box w="full" as="nav">
      <SidebarFeature to="#" name="Dashboard" icon={SiGoogleanalytics} />
      <SidebarFeature to="#" name="Records" icon={TbClipboardText} />
      <SidebarFeature to="#" name="Weekly Analytics" icon={VscGraphLine} />
    </Box>
    <Spacer />
    <Box w="full" pb="28">
      <SidebarFeature to="#" name="Log out" icon={BiLogOut} />
    </Box>
  </Flex>
)
