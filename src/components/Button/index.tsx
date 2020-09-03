import React from 'react'
import StyledButton from './styles'

export interface ButtonProps {
  value: string | number
  group: string
  isDisabled: boolean
  onClick: Function
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { value, group, isDisabled, onClick } = props
  return (
    <StyledButton
      value={value}
      group={group}
      isDisabled={isDisabled}
      onClick={(event) => onClick(event)}
    >
      {value}
    </StyledButton>
  )
}

export default Button
