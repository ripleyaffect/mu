import React from 'react'
import styled from 'styled-components'

import MuClock from 'components/MuClock'
import MuWeather from 'components/MuWeather'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: pink;

  height: 100%;
  width: 200px;
  padding-top: 12px;
  margin-left: 24px;
`

const MuSecondary = () => (
  <Container>
    <MuClock />
    <MuWeather />
  </Container>
)

export default MuSecondary
