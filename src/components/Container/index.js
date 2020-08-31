import React from 'react'
import PropType from 'prop-types'
import styled from 'styled-components'

const StyledContainer = styled.div`
  background-color: #197278;
  color: #fff;
  display: flex;
  width: 100%;
  max-width: 600px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin: 1rem;
  border-radius: 0.8rem;
`
function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>
}

Container.propTypes = {
  children: PropType.node.isRequired,
}

export default Container
