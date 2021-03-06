import styled from 'styled-components'
import { lighten } from 'polished'

interface StyledButtonProps {
  isDisabled: boolean
  group: string
  isOnImageMode: boolean
  value: string | number
}

export const StyledButton = styled.div<StyledButtonProps>`
  background: ${({
    isDisabled,
    group,
  }: {
    isDisabled: boolean
    group: string
  }) => {
    if (isDisabled) return lighten(0.2, 'grey')
    if (group === 'number') return '#283d3b'
    if (group === 'operator') return '#ff9000'
    if (group === 'util') return '#8C001A'
    return '#91CB3E'
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0.5rem;
  padding: ${({ isOnImageMode }) => (isOnImageMode ? '0px' : '1.5rem')};
  border-width: 0px;
  border-radius: 2rem;
  color: ${({ isDisabled }) => (isDisabled ? 'lightgrey' : '#fff')};
  font-size: 3rem;
  font-weight: 900;
  outline: 0px;
  opacity: ${({ isDisabled }) => isDisabled && '0.5'};

  :hover {
    opacity: ${({ isDisabled }) => !isDisabled && '0.6'};
  }

  :focus {
    background: lightgoldenrodyellow;
    border-width: 0px;
  }
`
