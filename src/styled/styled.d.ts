import 'styled-components'
import { Colors } from './colors'

interface IPalette {
  main: string
  contrastText: string
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors
    fontSizes: {
      small: string
      medium: string
      large: string
    }
    palette: {
      common: {
        black: string
        white: string
      }
      primary: IPalette
      secondary: IPalette
    }
  }
}
