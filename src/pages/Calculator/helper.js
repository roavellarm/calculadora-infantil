import porExtenso from 'por-extenso'
import { sum, min, mult, div } from 'utils'

const operators = {
  plus: '+',
  minus: '-',
  mult: 'x',
  div: '/',
}

export const getResultingNumber = (operator, firstNum, secondNum) => {
  if (operator === operators.plus) return sum(firstNum, secondNum)
  if (operator === operators.minus) return min(firstNum, secondNum)
  if (operator === operators.mult) return mult(firstNum, secondNum)
  if (operator === operators.div) return div(firstNum, secondNum)
  return null
}

export const spellNumber = number => {
  if (number.includes('-'))
    return `${porExtenso(number.split('-')[1])} negativo`
  return porExtenso(number)
}

export const spellNegativeNumber = number => {
  return porExtenso(number)
}

export const spellOperator = operator => {
  if (operator === '+') return 'mais'
  if (operator === '-') return 'menos'
  if (operator === 'x') return 'vezes'
  if (operator === '/') return 'dividido por'
  return ''
}

export const spellOperation = operator => {
  if (operator === '+') return 'soma'
  if (operator === '-') return 'subtração'
  if (operator === 'x') return 'multiplicação'
  if (operator === '/') return 'multiplicação'
  return ''
}
