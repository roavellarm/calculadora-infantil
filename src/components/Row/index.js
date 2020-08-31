import React from 'react'
import PropType from 'prop-types'
import styled from 'styled-components'

const StyledRow = styled.div`
  display: flex;
  width: 100%;
`

function Row({ children }) {
  return <StyledRow>{children}</StyledRow>
}

Row.propTypes = {
  children: PropType.node.isRequired,
}

export default Row
