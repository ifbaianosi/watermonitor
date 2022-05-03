import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        background: "#F9FAFA",
        texts: '#455447',
        stroke: '#D9D9D9',
        brand: {
          blue: '#1FB3F5'
        },
        red: '#E05257',
        redAlpha: 'RGBA(237, 28, 36, 0.05)',
        redAlpha200: 'RGBA(237, 28, 36, 0.20)'
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