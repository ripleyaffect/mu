import React, { Component } from 'react'
import styled from 'styled-components'

import MuModal from 'components/MuModal'
import PostButton from 'components/PostButton'
import { grey } from 'styling/vars'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 100%;
`

const NewPost = styled.textarea`
  flex: 1;
  width: 100%;
  border: none;
  font-size: 18px;
  resize: none;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${grey};
  }
`

class MuPostModal extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)

    this.state = { newPost: '' }
  }

  handleChange (event) {
    this.setState({ newPost: event.target.value })
  }

  render () {
    const { onClose } = this.props

    return <MuModal onClose={onClose}>
      <Form>
        <NewPost onChange={this.handleChange} placeholder="Write new post" />
        <PostButton />
      </Form>
    </MuModal>
  }
}

export default MuPostModal
