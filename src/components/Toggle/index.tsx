import React from 'react'
import Switch from 'react-switch'
import styled from 'styled-components'

const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;

  padding: 1rem;
  width: 300px;
`

const Toggle = ({
  setIsOnImageMode,
  isOnImageMode,
}: {
  setIsOnImageMode(isOnImageMode: boolean): void
  isOnImageMode: boolean
}) => {
  const handleChange = () => {
    return setIsOnImageMode(!isOnImageMode)
  }

  return (
    <SwitchContainer>
      em números
      <Switch
        onChange={handleChange}
        checked={isOnImageMode}
        checkedIcon={false}
        uncheckedIcon={false}
        width={70}
        onColor="#79bbfc"
        offColor="#fcba03"
      />
      em feijões
    </SwitchContainer>
  )
}

export default Toggle
