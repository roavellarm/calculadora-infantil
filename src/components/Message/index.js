import React from 'react'
import PropType from 'prop-types'
import styled from 'styled-components'

const StyledMessage = styled.div`
  display: flex;
  justify-content: center;
  color: #333;
  height: 7rem;
  font-size: 3rem;
  letter-spacing: 0px;
  font-weight: 300;
`

function Message({ children, ...rest }) {
  return <StyledMessage {...rest}>{children}</StyledMessage>
}

Message.propTypes = {
  children: PropType.node.isRequired,
}

export default Message
