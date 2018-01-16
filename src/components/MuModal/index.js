import React from 'react'
import styled from 'styled-components'

import { black, blackBoxShadow, grey } from 'styling/vars'
import { setAlpha } from 'styling/utils'

const Curtain = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${setAlpha(black, 0.9)};
  z-index: 10;
`

const Modal = styled.div`
  position: relative;
  background-color: white;
  height: 200px;
  width: 675px;
  max-width: 100%;
  padding: 36px;
  margin-top: 96px;
  border-radius: 10px;
  box-shadow: : ${blackBoxShadow};
`

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background: none;
  color: ${grey};
  cursor: pointer;

  :hover {
    color: ${black};
  }
`

const MuModal = ({ onClose }) => (
  <Curtain>
    <Modal>
      <CloseButton onClick={onClose}>
        X
      </CloseButton>
    </Modal>
  </Curtain>
)

export default MuModal
