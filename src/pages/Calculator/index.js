import React, { useState } from 'react'
import porExtenso from 'por-extenso'
import buttons from './buttonsInformation'
import {
  Container,
  Title,
  Screen,
  Message,
  Numbers,
  Row,
  Button,
  Result,
  Letters,
} from './styles'
import { sum, min, mult, div, capitalize } from '../../utils'

export default function Calculator() {
  const disableInitialState = ['operator', 'equal', 'util']
  const messageInitialState = 'Digite um número'

  const [count, setCount] = useState('')
  const [message, setMessage] = useState(messageInitialState)
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState('')
  const [disable, setDisable] = useState(disableInitialState)

  const backToInitialState = () => {
    setDisable(disableInitialState)
    setMessage(messageInitialState)
    setNum1('')
    setNum2('')
    setOperator('')
    setResult('')
    setCount([])
  }

  const disableType = type => setDisable(dis => [...dis, type])
  const enableType = type => {
    return setDisable(dis => dis.filter(item => item !== type))
  }

  const addToScreen = value => setCount([...count, value])

  const spellOperator = () => {
    if (operator === '+') return { name: 'soma', symbol: 'mais' }
    if (operator === '-') return { name: 'subtração', symbol: 'menos' }
    if (operator === 'x') return { name: 'multiplicação', symbol: 'vezes' }
    if (operator === '/')
      return { name: 'multiplicação', symbol: 'dividido por' }
    return { name: '', symbol: '' }
  }

  const handleKeyboard = e => {
    const { value } = e.target
    if (value === 'Limpa') return backToInitialState()

    // Step 1 - Write first number
    if (!num1) {
      disableType('number')
      enableType('operator')
      enableType('util')
      setNum1(value)
      setMessage('Agora digite escolha um operador.')
      return addToScreen(value)
    }

    // Step 2 - Write operator
    if (count.length === 1) {
      disableType('operator')
      enableType('number')
      setOperator(value)
      setMessage('Ótimo! Agora escolha outro número.')
      return addToScreen(value)
    }

    // Step 3 - Write second number
    if (count.length === 2) {
      disableType('number')
      enableType('equal')
      setNum2(value)
      setMessage('Para ver o resultado clique no =')
      return addToScreen(value)
    }

    // Step 4 - Execute operation and show result
    if (count.length === 3) {
      disableType('equal')
      let resultingNumber = ''
      if (operator === '+') resultingNumber = sum(num1, num2)
      if (operator === '-') resultingNumber = min(num1, num2)
      if (operator === 'x') resultingNumber = mult(num1, num2)
      if (operator === '/') resultingNumber = div(num1, num2)

      setResult(resultingNumber)

      setMessage(
        `Parabéns! O resultado da ${spellOperator(operator).name} é ${
          resultingNumber.includes('-')
            ? `${porExtenso(resultingNumber.split('-')[1])} negativo`
            : porExtenso(resultingNumber)
        }`
      )
      return addToScreen(value + result)
    }
    return null
  }

  return (
    <Container>
      <Title>Calculadora</Title>

      <Screen>
        <Message>{message}</Message>
        <Numbers hasOperator={operator.length}>
          {count}
          {result !== '' ? <Result>{result}</Result> : null}
        </Numbers>

        <Letters>
          {`${num1 ? capitalize(porExtenso(num1)) : ''} ${
            spellOperator(operator).symbol
          } ${num2 ? porExtenso(num2) : ''} ${
            result ? 'é igual a' : ''
          } ${result}`}
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
                  onClick={e => handleKeyboard(e)}
                  disabled={disable.includes(button.type)}
                >
                  {button.value}
                </Button>
              )
            })}
          </Row>
        )
      })}
    </Container>
  )
}
