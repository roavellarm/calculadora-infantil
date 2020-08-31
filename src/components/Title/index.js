import React from 'react'
import PropType from 'prop-types'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-weight: 300;
  font-size: 3.8rem;
  letter-spacing: 0.4px;
  padding-bottom: 2rem;
`

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>

Title.propTypes = {
  children: PropType.node.isRequired,
}

export default Title
