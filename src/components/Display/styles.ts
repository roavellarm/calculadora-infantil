import styled from 'styled-components'
import { transparentize } from 'polished'

export const DisplayView = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 30px;

  background-color: ${transparentize(0.5, 'white')};
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const MessageView = styled.div`
  display: flex;
  justify-content: center;
  color: #333;
  padding-bottom: 1rem;
  font-size: 3rem;
  letter-spacing: 0px;
  font-weight: 300;
`

export const NumbersView = styled.div`
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
  letter-spacing: ${({ hasOperator }: { hasOperator: boolean }) =>
    hasOperator && '3rem'};
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

export const TextView = styled.div`
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
