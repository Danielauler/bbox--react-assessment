import { Column, Row, SButton } from '@styled/utils'
import React from 'react'

type CallBack = (...args: any[]) => void

interface Props {
  handler: CallBack
}

enum VARIANT {
  PRIMARY,
  SECONDARY,
}

const ButtonPanel: React.FC<Props> = ({ handler }) => (
  <Column size="100%" justify="center" direction="column">
    <Row>
      <SButton onClick={handler}>AC</SButton>
      <SButton onClick={handler}>+/-</SButton>
      <SButton onClick={handler}>%</SButton>
      <SButton variant={VARIANT.SECONDARY} onClick={handler}>
        ÷
      </SButton>
    </Row>
    <Row>
      <SButton onClick={handler}>7</SButton>
      <SButton onClick={handler}>8</SButton>
      <SButton onClick={handler}>9</SButton>
      <SButton variant={VARIANT.SECONDARY} onClick={handler}>
        x
      </SButton>
    </Row>
    <Row>
      <SButton onClick={handler}>4</SButton>
      <SButton onClick={handler}>5</SButton>
      <SButton onClick={handler}>6</SButton>
      <SButton variant={VARIANT.SECONDARY} onClick={handler}>
        -
      </SButton>
    </Row>
    <Row>
      <SButton onClick={handler}>1</SButton>
      <SButton onClick={handler}>2</SButton>
      <SButton onClick={handler}>3</SButton>
      <SButton variant={VARIANT.SECONDARY} onClick={handler}>
        +
      </SButton>
    </Row>
    <Row>
      <SButton size="50%" onClick={handler}>
        0
      </SButton>
      <SButton onClick={handler}>.</SButton>
      <SButton variant={VARIANT.SECONDARY} onClick={handler}>
        =
      </SButton>
    </Row>
  </Column>
)

export default ButtonPanel
