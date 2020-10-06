import React, { useState } from 'react'
import StyledButton from './styles'

export interface ButtonProps {
  value: string | number
  group: string
  image: any
  isOnImageMode: boolean
  isDisabled: boolean
  onClick: Function
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { value, isOnImageMode, image, group, isDisabled, onClick } = props

  return (
    <StyledButton
      isOnImageMode={isOnImageMode}
      value={value}
      group={group}
      isDisabled={isDisabled}
      onClick={() => onClick(`${value}`)}
    >
      {isOnImageMode && group === 'number' ? (
        <img src={image} alt={`${value}`} width="100%" />
      ) : (
        value
      )}
    </StyledButton>
  )
}

export default Button
