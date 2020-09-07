import React, { useState } from 'react'
import StyledButton from './styles'

export interface ButtonProps {
  value: string | number
  group: string
  image: any
  isImageRepresentation: boolean
  isDisabled: boolean
  onClick: Function
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { value, image, group, isDisabled, onClick } = props

  const [isImageRepresentation] = useState(true)

  // const toggleImageSymbol = () => {

  // }

  return (
    <StyledButton
      isImageRepresentation={isImageRepresentation}
      value={value}
      group={group}
      isDisabled={isDisabled}
      onClick={() => onClick(`${value}`)}
    >
      {isImageRepresentation && group === 'number' ? (
        <img src={image} alt={`${value}`} width="100%" />
      ) : (
        value
      )}
    </StyledButton>
  )
}

export default Button
