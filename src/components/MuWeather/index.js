import React from 'react'
import styled from 'styled-components'

import { grey } from 'styling/vars'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const Temperature = styled.h4`
  font-size: 18px;
  font-weight: 500;
  margin: 0;

  color: ${grey};
`

const MuWeather = () => (
  <Container>
    <Temperature>
      22 °F
    </Temperature>
  </Container>
)

export default MuWeather
