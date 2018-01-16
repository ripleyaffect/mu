import React from 'react'
import styled from 'styled-components'

import MuToday from 'components/MuToday'
import MuSecondary from 'components/MuSecondary'

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  flex: 1;
  width: 100%;
`

const InnerContainer = styled.div`
  display: flex;

  max-width: 100%;
  width: 900px;
  padding-top: 48px;
`

const MuBody = () => (
  <OuterContainer>
    <InnerContainer>
      <MuToday />
    </InnerContainer>
  </OuterContainer>
)


export default MuBody;
