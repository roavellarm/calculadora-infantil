const sum = (num1: number, num2: number) => (num1 + num2).toString()

const mult = (num1: number, num2: number) => (num1 * num2).toString()

const min = (num1: number, num2: number) => (num1 - num2).toString()

const div = (num1: number, num2: number) => (num1 / num2).toString()

const operators = {
  plus: '+',
  minus: '-',
  mult: 'x',
  div: '/',
}

const calculate = (operator: string, firstNum: number, secondNum: number) => {
  if (operator === operators.plus) return sum(firstNum, secondNum)
  if (operator === operators.minus) return min(firstNum, secondNum)
  if (operator === operators.mult) return mult(firstNum, secondNum)
  if (operator === operators.div) return div(firstNum, secondNum)
  return ''
}

export default calculate
