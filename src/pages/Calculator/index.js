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

  const [calculation, setCalculation] = useState([])
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
    setCalculation([])
  }

  const disableType = type => setDisable(dis => [...dis, type])
  const enableType = type => {
    return setDisable(dis => dis.filter(item => item !== type))
  }

  const addToScreen = value => setCalculation([...calculation, value])

  const handleKeyboard = e => {
    const { value } = e.target
    if (value === 'Limpa') return backToInitialState()

    // Step 1 - Write first number
    if (!num1) {
      disableType('number')
      enableType('operator')
      enableType('util')
      setNum1(value)
      setMessage('Agora escolha um operador.')
      return addToScreen(value)
    }

    // // Step 2 - Write operator
    // if (calculation.length === 1) {
    //   disableType('operator')
    //   enableType('number')
    //   setOperator(value)
    //   setMessage('Ótimo! Agora escolha outro número.')
    //   return addToScreen(value)
    // }

    // // Step 3 - Write second number
    // if (calculation.length === 2) {
    //   disableType('number')
    //   enableType('equal')
    //   setNum2(value)
    //   setMessage('Para ver o resultado clique no botão =')
    //   return addToScreen(value)
    // }

    // // Step 4 - Execute operation and show result
    // if (calculation.length === 3) {
    //   disableType('equal')
    //   const resultNumber = getResultingNumber(operator, num1, num2)
    //   setResult(resultNumber)

    //   setMessage(
    //     `Parabéns! O resultado da ${spellOperator(operator).name} é ${
    //       resultNumber.includes('-')
    //         ? `${porExtenso(resultNumber.split('-')[1])} negativo`
    //         : porExtenso(resultNumber)
    //     }`
    //   )
    //   return addToScreen(value + result)
    // }
    return null
  }

  return (
    <Container>
      <Title>Calculadora</Title>

      <Screen>
        <Message>{message}</Message>

        <Numbers hasOperator={operator.length}>
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
                  value={button.value}
                  type={button.type}
                  onClick={handleKeyboard}
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
