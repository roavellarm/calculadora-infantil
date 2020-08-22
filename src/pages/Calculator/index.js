import React, { useState } from 'react'
// import porExtenso from 'por-extenso'
import buttons from './buttonsInformation'
import { Container, Title, Screen, Row, Button } from './styles'

export default function Calculator() {
  const disableInitialState = ['operator', 'equal', 'util']
  const [screen, setScreen] = useState('')
  const [disable, setDisable] = useState(disableInitialState)

  const backToInitialState = () => {
    setDisable(disableInitialState)
    setScreen([])
  }
  const disableType = type => setDisable(dis => [...dis, type])
  const enableType = type => {
    return setDisable(dis => dis.filter(item => item !== type))
  }

  const addToScreen = value => setScreen([...screen, value])

  const handleKeyboard = e => {
    const { value } = e.target
    if (value === 'Limpa') return backToInitialState()

    if (!screen.length) {
      disableType('number')
      enableType('operator')
      enableType('util')
      return addToScreen(value)
    }

    if (screen.length === 1) {
      disableType('operator')
      enableType('number')
      return addToScreen(value)
    }
    if (screen.length === 2) {
      disableType('number')
      enableType('equal')
      return addToScreen(value)
    }
    if (screen.length === 3) {
      return addToScreen(value)
    }
    return null
  }

  return (
    <Container>
      <Title>Calculadora</Title>

      <Screen>{screen}</Screen>

      {buttons.map(row => {
        return (
          <Row key={row[0].value}>
            {row.map(button => {
              return (
                <Button
                  key={button.value}
                  value={button.value}
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
