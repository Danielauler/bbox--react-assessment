import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@styled/theme'
import KeyboardPanel from '@components/KeyboardPanel/KeyboardPanel'
import { Container } from './styled'

const App: React.FC = () => (
  <ThemeProvider theme={defaultTheme}>
    <Container>
      <KeyboardPanel />
    </Container>
  </ThemeProvider>
)

export default App
