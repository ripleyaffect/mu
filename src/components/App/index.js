import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import normalize from 'styled-normalize'

import MuBody from 'components/MuBody'
import MuHeader from 'components/MuHeader'
import MuPostModal from 'components/MuPostModal'

const USER_IMAGE_URL = 'https://avatars0.githubusercontent.com/u/1026406?s=200'

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

    this.state = {
      newPostDetails: null
    }
  }

  openPostModal (task) {
    const newPostDetails = {
      imageUrl: task ? task.program.imageUrl : USER_IMAGE_URL,
      prompt: task ? task.prompt || `Log ${task.title}` : "What's on your mind?",
      taskId: task ? task.id : null,
      title: task ? task.title : null,
    }
    this.setState({ newPostDetails })
  }

  closePostModal () {
    this.setState({ newPostDetails: null })
  }

  render () {
    const { newPostDetails } = this.state

    return <Container>
      {globalStyles}
      {newPostDetails && <MuPostModal
          {...newPostDetails}
          onClose={this.closePostModal} />}
      <MuHeader
          avatarImageUrl={USER_IMAGE_URL}
          onClickPost={this.openPostModal} />
      <MuBody onLogTask={this.openPostModal} />
    </Container>
  }
}

export default App
