import React from 'react'
import PropType from 'prop-types'
import styled from 'styled-components'

const StyledResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  background: yellow;
  padding: 1rem;
  border-radius: 100px;
  font-weight: 900;
  font-size: 4rem;
  height: 6rem;
  width: 6rem;
  letter-spacing: 0px;
`

function Result({ children }) {
  return <StyledResult>{children}</StyledResult>
}

Result.propTypes = {
  children: PropType.node.isRequired,
}

export default Result
