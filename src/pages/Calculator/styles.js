import styled from 'styled-components'
import { transparentize } from 'polished'

export const Container = styled.div`
  background-color: #197278;
  color: #fff;
  display: flex;
  width: 100%;
  max-width: 500px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin: 1rem;
  border-radius: 0.8rem;
`

export const Screen = styled.div`
  background-color: ${transparentize(0.5, 'white')};
  color: #333;
  font-weight: 900;
  font-size: 4rem;
  border-radius: 0.8rem;
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
  margin: 30px;
  width: 100%;
`

export const Title = styled.h1`
  font-weight: 300;
  font-size: 3.8rem;
  letter-spacing: 0.4px;
  padding-bottom: 2rem;
`
export const Row = styled.div`
  display: flex;
  width: 100%;
`

export const Button = styled.button`
  background: ${({ disabled, value }) => {
    if (disabled) return 'grey'
    return isNaN(value) ? 'lightblue' : '#283d3b'
  }};
  width: 100%;
  margin: 0.5rem;
  padding: 1.5rem;
  border-width: 0px;
  border-radius: 2rem;
  color: #fff;
  font-size: 3rem;
  font-weight: 900;
  outline: 0px;

  :hover {
    opacity: ${({ disabled }) => disabled || '0.6'};
  }

  :focus {
    background: green;
    border-width: 0px;
  }
`
