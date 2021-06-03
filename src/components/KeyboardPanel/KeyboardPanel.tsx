import React, { useState } from 'react'
import ButtonPanel from '@components/ButtonPanel/ButtonPanel'
import { evaluate } from 'mathjs'
import Display from '@components/Display/Display'

const KeyboardPanel: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>('0')

  function handleClick(event: React.FormEvent<HTMLInputElement>): void {
    const buttonName: string = event.currentTarget.innerText
    switch (buttonName) {
      case 'AC':
        setDisplayValue('0')
        break
      case '=':
        setDisplayValue(evaluate(displayValue.replace('x', '*').replace('÷', '/')).toString())
        break
      default:
        if (displayValue === '0') setDisplayValue(buttonName)
        else setDisplayValue((value) => `${value}${buttonName}`)
        break
    }
  }

  return (
    <>
      <Display value={displayValue} />
      <ButtonPanel handler={handleClick} />
    </>
  )
}

export default KeyboardPanel
