import React, { useState } from 'react'
import { capitalize } from 'utils'

import Container from 'components/Container'
import Title from 'components/Title'
import Screen from 'components/Screen'
import Message from 'components/Message'
import Row from 'components/Row'
import Letters from 'components/Letters'
import Numbers from 'components/Numbers'
import Result from 'components/Result'
import Button from 'components/Button'

import buttons from './buttonsInformation'
import { getResultingNumber, spellOperator, spellNumber } from './helper'

function Calculator() {
  const disabledInitialState = ['operator', 'equal', 'util']
  const messageInitialState = 'Digite um número'

  const [calculationStep, setCalculationStep] = useState([])
  const [message, setMessage] = useState(messageInitialState)
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState('')
  const [disable, setDisable] = useState(disabledInitialState)

  const backToInitialState = () => {
    setDisable(disabledInitialState)
    setMessage(messageInitialState)
    setNum1(0)
    setNum2(0)
    setOperator('')
    setResult('')
    setCalculationStep([])
  }

  const disableButtons = type => setDisable(dis => [...dis, type])
  const enableButtons = type => {
    return setDisable(dis => dis.filter(item => item !== type))
  }

  const addToScreen = value => setCalculationStep([...calculationStep, value])

  const handleFirstNumberClicked = value => {
    disableButtons('number')
    enableButtons('operator')
    enableButtons('util')
    setNum1(value)
    setMessage('Agora escolha um operador.')
    return addToScreen(value)
  }

  const handleOperatorClicked = value => {
    disableButtons('operator')
    enableButtons('number')
    setOperator(value)
    setMessage('Ótimo! Agora escolha outro número.')
    return addToScreen(value)
  }

  const handleSecondNumberClicked = value => {
    disableButtons('number')
    enableButtons('equal')
    setNum2(value)
    setMessage('Para ver o resultado clique no botão =')
    return addToScreen(value)
  }

  const handleCalculationResult = value => {
    disableButtons('equal')
    const resultingNumber = getResultingNumber(operator, num1, num2)
    setResult(resultingNumber)

    setMessage(
      `Parabéns! O resultado da ${spellOperator(operator).name} é ${spellNumber(
        resultingNumber
      )}`
    )
    return addToScreen(value + result)
  }

  const handleKeyboardEvents = event => {
    const { value } = event.target

    if (value === 'Limpa') return backToInitialState()

    if (!num1) return handleFirstNumberClicked(value)

    if (calculationStep.length === 1) return handleOperatorClicked(value)

    if (calculationStep.length === 2) return handleSecondNumberClicked(value)

    if (calculationStep.length === 3) return handleCalculationResult(value)
    return null
  }

  return (
    <Container>
      <Title>Calculadora</Title>

      <Screen>
        <Message>{message}</Message>

        <Numbers hasOperator={!!operator.length}>
          {calculationStep}
          {result !== '' ? <Result>{result}</Result> : null}
        </Numbers>

        <Letters>
          {`${num1 ? capitalize(spellNumber(num1)) : ''} ${spellOperator(
            operator
          )} ${num2 ? spellNumber(num2) : ''} ${
            result ? 'é igual a' : ''
          } ${spellNumber(result)}`}
        </Letters>
      </Screen>

      {buttons.map(row => {
        return (
          <Row key={row[0].value}>
            {row.map(button => {
              return (
                <Button
                  key={button.value}
                  name={`${button.value}`}
                  value={button.value}
                  type={button.type}
                  onClick={handleKeyboardEvents}
                  disabled={disable.includes(button.type)}
                />
              )
            })}
          </Row>
        )
      })}
    </Container>
  )
}

export default Calculator
