import React, { useState } from 'react'
import Button from 'components/Button'
import buttonsList from 'helpers/buttonsList'
import {
  handleStep0,
  handleStep1,
  handleStep2,
  handleStep4,
} from 'helpers/steps'
import * as S from './styles'
import Display from 'components/Display'

export interface IoProps {
  message: string
  disabledButtons: string[]
  steps: string[]
  num1: string
  num2: string
  operator: string
  result: string
}

const initialState = {
  message: 'Digite um número',
  disabledButtons: ['operator', 'equal', 'util'],
  steps: [],
  num1: '',
  num2: '',
  operator: '',
  result: '',
}

function Calculator() {
  const [io, setIo] = useState<IoProps>(initialState)

  const handleKeyboardEvents = (event: { target: { value: string } }) => {
    const { value } = event.target
    const { steps } = io

    if (value === 'Limpa') return setIo(initialState)
    if (!steps.length) return setIo(handleStep0(value, io))
    if (steps.length === 1) return setIo(handleStep1(value, io))
    if (steps.length === 2) return setIo(handleStep2(value, io))
    if (steps.length === 3) return setIo(handleStep4(value, io))
    return null
  }

  return (
    <S.Container>
      <S.Title>Calculadora</S.Title>

      <Display information={io} />

      {buttonsList.map((row) => (
        <S.ButtonsRow key={row[0].value}>
          {row.map((button) => (
            <Button
              key={button.value}
              value={button.value}
              group={button.group}
              isDisabled={io.disabledButtons.includes(button.group)}
              onClick={handleKeyboardEvents}
            />
          ))}
        </S.ButtonsRow>
      ))}
    </S.Container>
  )
}

export default Calculator
