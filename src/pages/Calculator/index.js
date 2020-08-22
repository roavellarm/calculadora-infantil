import React, { useState, useEffect } from 'react'
// import porExtenso from 'por-extenso'
import { Container, Title, Screen, Row, Button } from './styles'

const buttons = [
  [{ value: 7 }, { value: 8 }, { value: 9 }, { value: '/' }],
  [{ value: 4 }, { value: 5 }, { value: 6 }, { value: 'X' }],
  [{ value: 1 }, { value: 2 }, { value: 3 }, { value: '-' }],
  [{ value: 0 }, { value: '=' }, { value: 'Limpa' }, { value: '+' }],
]

export default function Calculator() {
  const disableButtonInitialState = ['=', 'Limpa', '+', '-', 'X', '/']

  const [screen, setScreen] = useState([])
  const [firstNum, setFirstNum] = useState('')
  const [operator, setOperator] = useState('')
  const [secondNum, setSecondNum] = useState('')
  const [disableButton, setDisableButton] = useState(disableButtonInitialState)

  function handleNumbers(num) {
    if (operator.length) {
      setSecondNum([...secondNum, num])
    }
    setFirstNum([...firstNum, num])
    return setScreen([...screen, num])
  }

  function cleanScreen() {
    setDisableButton(disableButtonInitialState)
    setFirstNum('')
    setSecondNum('')
    setOperator('')
  }

  function handleLetters(letter) {
    if (letter === 'Limpa') {
      return cleanScreen()
    }

    if (letter === '=') {
      if (secondNum.length) {
        return alert('executar a operação')
      } else {
        if (operator.length) {
          return alert('Coloque o segundo número')
        } else {
          return alert('Selecione algum operador: + - / X')
        }
      }
    }

    return setOperator(letter)
  }

  function handleDigitation(e) {
    const { value } = e.target
    return isNaN(value) ? handleLetters(value) : handleNumbers(value)
  }

  useEffect(() => {
    if (firstNum.length && disableButton.includes('Limpa')) {
      const newDisableArray = disableButton.filter((value) => {
        return value === '='
      })
      return setDisableButton(newDisableArray)
    }
  }, [firstNum, disableButton, operator])

  useEffect(() => {
    setScreen([firstNum, operator, secondNum])
  }, [firstNum, operator, secondNum])

  return (
    <Container>
      <Title>Calculadora</Title>

      <Screen>
        {screen.map((char) => {
          return <>{char}</>
        })}
      </Screen>

      {buttons.map((row) => {
        return (
          <Row key={row[0].value}>
            {row.map((button) => {
              return (
                <Button
                  key={button.value}
                  value={button.value}
                  onClick={(e) => handleDigitation(e)}
                  disableButtond={disableButton.includes(button.value)}
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
