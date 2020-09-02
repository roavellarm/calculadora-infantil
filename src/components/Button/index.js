import React from 'react'
import PropType from 'prop-types'
import StyledButton from './styles'

const Button = ({ name, type, ...props }) => {
  return (
    <StyledButton type={type} name={name} {...props}>
      {name}
    </StyledButton>
  )
}

Button.propTypes = {
  type: PropType.string.isRequired,
  name: PropType.string.isRequired,
}

export default Button
