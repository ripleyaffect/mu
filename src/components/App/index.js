import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import normalize from 'styled-normalize'

import MuBody from 'components/MuBody'
import MuHeader from 'components/MuHeader'
import MuModal from 'components/MuModal'

// Define global styles
const globalStyles = injectGlobal`
  ${normalize}

  body, button, input {
    font-family: 'Work Sans', sans-serif;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

class App extends Component {
  constructor (props) {
    super(props)

    this.openPostModal = this.openPostModal.bind(this)
    this.closePostModal = this.closePostModal.bind(this)

    this.state = { addingPost: false }
  }

  openPostModal () {
    this.setState({ addingPost: true })
  }

  closePostModal () {
    this.setState({ addingPost: false })
  }

  render () {
    const { addingPost } = this.state

    return <Container>
      {globalStyles}
      {addingPost && <MuModal onClose={this.closePostModal} />}
      <MuHeader onClickPost={this.openPostModal} />
      <MuBody />
    </Container>
  }
}

export default App
