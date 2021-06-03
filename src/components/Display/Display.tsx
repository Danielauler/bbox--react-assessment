import React from 'react'
import { Container, Text } from './styled'

interface Props {
  value: string
}

const Display: React.FC<Props> = ({ value }) => (
  <Container>
    <Text>{value}</Text>
  </Container>
)

export default Display
