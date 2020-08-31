import styled from 'styled-components'

export default styled.button`
  background: ${({ disabled, type }) => {
    if (disabled) return 'grey'
    if (type === 'number') return '#283d3b'
    if (type === 'operator') return '#ff9000'
    if (type === 'util') return '#8C001A'
    return '#91CB3E'
  }};
  width: 100%;
  margin: 0.5rem;
  padding: 1.5rem;
  border-width: 0px;
  border-radius: 2rem;
  color: ${({ disabled }) => (disabled ? 'lightgrey' : '#fff')};
  font-size: 3rem;
  font-weight: 900;
  outline: 0px;
  opacity: ${({ disabled }) => disabled && '0.5'};

  :hover {
    opacity: ${({ disabled }) => disabled || '0.6'};
  }

  :focus {
    background: green;
    border-width: 0px;
  }
`
