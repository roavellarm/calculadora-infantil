export const sum = (num1, num2) => (Number(num1) + Number(num2)).toString()

export const mult = (num1, num2) => (Number(num1) * Number(num2)).toString()

export const min = (num1, num2) => (Number(num1) - Number(num2)).toString()

export const div = (num1, num2) => (Number(num1) / Number(num2)).toString()

export const capitalize = s => {
  return typeof s !== 'string' ? '' : s.charAt(0).toUpperCase() + s.slice(1)
}
