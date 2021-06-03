import { useContext } from 'react'
import { DefaultTheme, ThemeContext } from 'styled-components'
import { colors } from './colors'

const defaultTheme: DefaultTheme = {
  colors,
  fontSizes: {
    small: '0.5rem',
    medium: '1.5rem',
    large: '2.5rem',
  },
  palette: {
    common: {
      black: colors.black,
      white: colors.white,
    },
    primary: {
      main: colors.primary,
      contrastText: colors.textInPrimary,
    },
    secondary: {
      main: colors.secondary,
      contrastText: colors.textInSecondary,
    },
  },
}

const useTheme = (): DefaultTheme => useContext(ThemeContext)

export { defaultTheme, useTheme }
