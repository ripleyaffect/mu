import React from 'react'
import styled from 'styled-components'

const Time = styled.h3`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 0;
  margin-bottom: 12px;

  font-size: 36px;
  font-weight: 500;
`

const MuClock = () => (
  <Time>
    1:00 PM
  </Time>
)

export default MuClock
