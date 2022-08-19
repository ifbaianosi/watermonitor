import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

const theme = extendTheme({
    config,
    colors: {
        background: ["#F9FAFA", "#000"],
        texts: '#455447',
        stroke: '#D9D9D9',
        brand: {
          blue: '#1FB3F5'
        },
        red: '#E05257',
        redAlpha: 'RGBA(237, 28, 36, 0.05)',
        redAlpha200: 'RGBA(237, 28, 36, 0.20)',
    },
    fonts: {
      heading: `'Poppins', sans-serif`,
      body: `'Open-Sans', sans-serif`,      
    },
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: 'background',
          color: 'texts',
        },
      },
    },
  })

export default theme