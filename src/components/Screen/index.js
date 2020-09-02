import React from 'react'
import PropType from 'prop-types'
import styled from 'styled-components'
import { transparentize } from 'polished'

const StyledScreen = styled.div`
  width: 100%;
  height: 30rem;
  padding: 2rem;
  margin: 30px;

  background-color: ${transparentize(0.5, 'white')};
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
function Screen({ children }) {
  return <StyledScreen>{children}</StyledScreen>
}

Screen.propTypes = {
  children: PropType.node.isRequired,
}

export default Screen
