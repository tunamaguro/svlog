import { ChakraProvider, extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    primary: {
      black: '#1B2430',
      gray: '#51557E',
    },
    secondary: {
      purple: '#816797',
      yellow: '#D6D5A8',
      red: '#F87474',
      blue: '#3AB0FF',
    },
    text: {
      white100: '#EFEFEF',
      white70: 'rgba(239,239,239,0.7)',
    },
    leaders: {
      forestcraft: '#53C18F',
      swordcraft: '#F7D128',
      runecraft: '#6F75AC',
      dragoncraft: '#EA9574',
      shadowcraft: '#C16FAA',
      bloodcraft: '#CF3E51',
      havencraft: '#FCF3DB',
      portalcraft: '#D2E9F5',
    },
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'primary.black',
        color: 'text.white70',
      },
    },
  },
})

export const ThemeProvider = ({ children }: { children: JSX.Element }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
)
