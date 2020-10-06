import calculate from './calculate'
import { spellOperation, spellNumber } from './words'
import { IoProps } from '../Calculator'

export const handleStep0 = (value: string, info: IoProps) => ({
  ...info,
  disabledButtons: ['number', 'equal'],
  num1: value,
  message: 'Agora escolha um operador.',
  steps: [...info.steps, value],
})

export const handleStep1 = (value: string, info: IoProps) => ({
  ...info,
  disabledButtons: ['equal', 'operator'],
  operator: value,
  message: 'Ótimo! Agora escolha outro número.',
  steps: [...info.steps, value],
})

export const handleStep2 = (value: string, info: IoProps) => ({
  ...info,
  disabledButtons: ['number', 'operator'],
  num2: value,
  message: 'Para ver o resultado clique no botão =',
  steps: [...info.steps, value],
})

export const handleStep3 = (value: string, info: IoProps) => {
  const { num1, num2, operator, steps } = info
  const res = calculate(operator, Number(num1), Number(num2))

  return {
    ...info,
    disabledButtons: ['equal', 'number', 'operator'],
    result: res,
    message: `Parabéns! O resultado da ${spellOperation(
      operator
    )} é ${spellNumber(res)}`,
    steps: [...steps, value],
  }
}
