import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        background: "#F9FAFA",
        texts: '#455447',
        stroke: '#D9D9D9',
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