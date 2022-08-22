import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

const theme = extendTheme({
    config,
    semanticTokens: {
      colors: {
        primary: {
          default: 'hsla(199, 91%, 54%, 1)',
          _dark: 'hsla(199, 91%, 54%, 1)'
        },
        danger: 'hsla(358, 85%, 52%, 1)',

        full: 'hsla(149, 100%, 33%, 0.8)',
        almost_full: 'hsla(69, 67%, 51%, 1)',
        middle: 'hsla(57, 100%, 39%, 1)',
        low: 'hsla(42, 98%, 53%, 1)',
        empty: 'danger',
        
        background: {
          default: "#F9FAFA",
          _dark: '#0D0D0D'
        },
        card: {
          default: '#FFFFFF',
          _dark: '#1A1A1A'
        },
        cardBorderColor: {
          default: 'hsla(0, 0%, 85%, 1)',
          _dark: 'hsla(0, 0%, 15%, 1)'
        },
        text: {
          default: 'hsla(128, 10%, 30%, 1)',
          _dark: 'hsla(128, 10%, 90%, 0.6)'
        },
        title: {
          default: 'hsla(130, 10%, 30%, 1)',
          _dark: 'hsla(128, 10%, 90%, 1)'
        },
        registerStatusOpen: {
          default: 'hsla(130, 54%, 40%, 0.12)',
          _dark: 'hsla(130, 54%, 40%, 0.12)'
        },
        registerStatusClosed: {
          default: 'hsla(358, 85%, 52%, 0.12)',
          _dark: 'hsla(358, 85%, 52%, 0.12)'
        },
        waterLevelTextSelected: {
          default: '#FFFFFF',
          _dark: 'hsla(0, 0%, 5%, 1)'
        }

      }
    },
    fonts: {
      heading: `'Poppins', sans-serif`,
      body: `'Open-Sans', sans-serif`,      
    },
    styles: {
      global: {
        body: {
          bg: 'background',
          color: 'text'
        }
      }
    }
    // config,
    // colors: {
    //     background: ["#F9FAFA", "#000"],
    //     texts: '#455447',
    //     stroke: '#D9D9D9',
    //     brand: {
    //       blue: '#1FB3F5'
    //     },
    //     red: '#E05257',
    //     redAlpha: 'RGBA(237, 28, 36, 0.05)',
    //     redAlpha200: 'RGBA(237, 28, 36, 0.20)',
    // },
    // fonts: {
    //   heading: `'Poppins', sans-serif`,
    //   body: `'Open-Sans', sans-serif`,      
    // },
    // styles: {
    //   global: {
    //     // styles for the `body`
    //     body: {
    //       bg: 'background',
    //       color: 'texts',
    //     },
    //   },
    // },
  })

export default theme