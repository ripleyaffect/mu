import React from 'react'
import styled from 'styled-components'

import MuCalendar from 'components/MuCalendar'
import MuClock from 'components/MuClock'
import MuWeather from 'components/MuWeather'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 200px;
  padding-top: 12px;
  margin-left: 36px;
`

const MuSecondary = () => (
  <Container>
    <MuClock />
    <MuWeather />
    <MuCalendar />
  </Container>
)

export default MuSecondary
