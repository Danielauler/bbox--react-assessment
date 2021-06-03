import React, { useState } from 'react'
import ButtonPanel from '@components/ButtonPanel/ButtonPanel'
import { evaluate } from 'mathjs'
import Display from '@components/Display/Display'

const KeyboardPanel: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>('0')

  const verifyPercentage = (value: string): string => {
    let input = value
    const pcntReg = /[0-9]*\.?[0-9]%/g
    const numReg = /[0-9]*\.?[0-9]/g

    while (input.match(pcntReg)) {
      let leftVal = '1'
      const right = input.match(pcntReg) ?? ''
      const left = input.split(right[0])
      if (left?.length > 0) {
        const leftTrim = left[0].trim()
        leftVal = leftTrim.slice(0, -1)
        leftVal = evaluate(leftVal).toString()
      }

      const pcntVal = right[0]?.match(numReg) ?? '1'

      const newval = evaluate(`${leftVal}*${pcntVal[0]}/100`).toString()
      input = input.replace(left[0] + right[0], evaluate(left[0] + newval).toString())
    }

    return evaluate(input).toString()
  }

  const handleClick = (event: React.FormEvent<HTMLInputElement>): void => {
    try {
      const buttonName: string = event.currentTarget.innerText
      switch (buttonName) {
        case 'AC':
          setDisplayValue('0')
          break
        case '=':
          setDisplayValue(verifyPercentage(displayValue.replace('x', '*').replace('÷', '/')))
          break
        case '+/-':
          setDisplayValue(
            (parseInt(verifyPercentage(displayValue.replace('x', '*').replace('÷', '/')), 10) * -1).toString()
          )
          break
        default:
          if (displayValue === '0') setDisplayValue(buttonName)
          else setDisplayValue((value) => `${value}${buttonName}`)
          break
      }
    } catch {
      setDisplayValue(displayValue ?? '0')
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
