import React from 'react'
import PropType from 'prop-types'
import StyledButton from './styles'

const Button = ({ onClick, type, value, disabled }) => {
  return (
    <StyledButton type={type} onClick={e => onClick(e)} disabled={disabled}>
      {value}
    </StyledButton>
  )
}

Button.propTypes = {
  value: PropType.node.isRequired,
  onClick: PropType.func.isRequired,
  type: PropType.string.isRequired,
  disabled: PropType.bool.isRequired,
}

export default Button
