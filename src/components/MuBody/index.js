import React from 'react'
import styled from 'styled-components'

import MuDay from 'components/MuDay'
import MuSecondary from 'components/MuSecondary'

const Container = styled.div`
  display: flex;
  flex: 1;

  max-width: 100%;
  width: 900px;
  padding-top: 48px;
  overflow-y: scroll;
`

const MuBody = () => (
  <Container>
    <MuDay />
    <MuSecondary />
  </Container>
)


export default MuBody;
