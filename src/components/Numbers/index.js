import React from 'react'
import PropType from 'prop-types'
import styled from 'styled-components'
import { transparentize } from 'polished'

const StyledNumbers = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: ${transparentize(0.5, 'white')};
  border-radius: 0.8rem;
  height: 8rem;
  color: #333;
  font-weight: 900;
  font-size: 4rem;
  letter-spacing: ${({ hasOperator }) => hasOperator && '3rem'};
`
function Numbers({ children }) {
  return <StyledNumbers>{children}</StyledNumbers>
}

Numbers.propTypes = {
  children: PropType.node,
}

Numbers.defaultProps = {
  children: '',
}

export default Numbers
