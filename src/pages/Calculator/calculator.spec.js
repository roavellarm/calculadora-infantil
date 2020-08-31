import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Message from 'components/Message'
import getResultingNumber, { operators } from './helper'
import { Button } from './index'

describe('getResultingNumber', () => {
  it('should whatever..', () => {
    expect(getResultingNumber('+', 1, 1)).toBe('2')
  })

  it('should not asd', () => {
    expect(getResultingNumber('+', 1, 1)).not.toBe(2)
  })
})

describe('Message', () => {
  // Teste de componente com texto que renderiza na DOM
  // it('should whatever..', () => {
  //   const { queryByText } = render(<Message>Teste 123</Message>)
  //   const element = queryByText('Teste 123')
  //   expect(element).toBeInTheDocument()
  // })

  // Teste de componente com propriedade data-testid
  // it('should whatever..', () => {
  //   const { queryByTestId } = render(<Message data-testid="nomizinhopranois" />)
  //   const element = queryByTestId('kjhkj')
  //   expect(element).toBeInTheDocument()
  // })

  // Teste de componente com propriedade data-testid
  it('should whatever..', () => {
    const onClick = jest.fn()

    const { queryByText } = render(<Button onClick={onClick}>Texto</Button>)
    const element = queryByText('Texto')
    fireEvent.click(element)
    expect(onClick).toHaveBeenCalled()
  })

  it('asdsad', () => {
    expect(operators).toMatchInlineSnapshot(`
      Object {
        "div": "/",
        "minus": "-",
        "mult": "mnmnx",
        "plus": "+",
      }
    `)
  })
})
