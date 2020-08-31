import React from 'react'
import PropType from 'prop-types'
import styled from 'styled-components'

const StyledLetters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  height: 8rem;
  background: lightyellow;
  border-radius: 0.8rem;
  margin-top: 2rem;
  width: 100%;
  padding: 1rem;
  font-size: 3rem;
  letter-spacing: 0px;
  font-weight: 600;
  padding-bottom: 2rem;
`

function Letters({ children }) {
  return <StyledLetters>{children}</StyledLetters>
}

Letters.propTypes = {
  children: PropType.node.isRequired,
}

export default Letters
