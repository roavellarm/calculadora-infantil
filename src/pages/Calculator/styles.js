import styled from 'styled-components'
import { transparentize } from 'polished'

export const Container = styled.div`
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

export const Screen = styled.div`
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

export const Message = styled.div`
  display: flex;
  justify-content: center;
  color: #333;
  height: 7rem;
  font-size: 3rem;
  letter-spacing: 0px;
  font-weight: 300;
`

export const Numbers = styled.div`
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

export const Result = styled.div`
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

export const Letters = styled.div`
  display: flex;
  justify-content: center;
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
  background: ${({ disabled, type }) => {
    if (disabled) return 'grey'
    if (type === 'number') return '#283d3b'
    if (type === 'operator') return 'lightblue'
    if (type === 'util') return 'red'
    return 'green'
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
