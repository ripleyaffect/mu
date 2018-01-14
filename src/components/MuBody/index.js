import React from 'react'
import styled from 'styled-components'

import MuPrimary from 'components/MuPrimary'
import MuSecondary from 'components/MuSecondary'

const Container = styled.div`
  display: flex;
  flex: 1;
  overflow-y: scroll;

  max-width: 100%;
  width: 900px;
`

const MuBody = () => (
  <Container>
    <MuPrimary />
    <MuSecondary />
  </Container>
)


export default MuBody;
