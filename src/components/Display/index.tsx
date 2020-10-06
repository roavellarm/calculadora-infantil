import React from 'react'
import { capitalize, spellOperator, spellNumber } from '../../helpers/words'
import { IoProps } from '../../Calculator'
import * as S from './styles'

interface Props {
  information: IoProps
}

const Display: React.FC<Props> = ({ information }: Props) => {
  const { steps, result, num1, num2, operator, message } = information

  const showNumbersInFigure = () => (
    <>
      {steps} {result !== '' && <S.Result>{result}</S.Result>}
    </>
  )

  const showNumbersInWords = () => (
    <>
      {capitalize(spellNumber(num1))}
      {` ${spellOperator(operator)}`}
      {!!num2 && spellNumber(` ${num2}`)}
      {!!result && ' é igual a ' + spellNumber(result)}
    </>
  )

  return (
    <S.DisplayView>
      <S.MessageView>{message}</S.MessageView>

      <S.NumbersView hasOperator={!!operator.length}>
        {showNumbersInFigure()}
      </S.NumbersView>

      <S.TextView>{showNumbersInWords()}</S.TextView>
    </S.DisplayView>
  )
}

export default Display
