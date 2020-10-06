import porExtenso from 'por-extenso'

export const capitalize = (s: string) => {
  return typeof s !== 'string' ? '' : s.charAt(0).toUpperCase() + s.slice(1)
}

export const spellNumber = (number: string) => {
  if (number.includes('-'))
    return `${porExtenso(number.split('-')[1])} negativo`
  return porExtenso(number)
}

export const spellOperator = (operator: string) => {
  if (operator === '+') return 'mais'
  if (operator === '-') return 'menos'
  if (operator === 'x') return 'vezes'
  if (operator === '/') return 'dividido por'
  return ''
}

export const spellOperation = (operator: string) => {
  if (operator === '+') return 'soma'
  if (operator === '-') return 'subtração'
  if (operator === 'x') return 'multiplicação'
  if (operator === '/') return 'multiplicação'
  return ''
}
